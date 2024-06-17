using System;
using Terrasoft.Core;
using Terrasoft.Core.Entities;
using Terrasoft.Core.DB;

namespace FX.Services
{
    public class AccountStatusUpdater
    {
        private static readonly Guid newAccountStatusId = Guid.Parse("7e1b25b0-c5f8-4a62-87c7-1acabca4aa24");
        private static readonly Guid activeAccountStatusId = Guid.Parse("1fba3241-b34c-40c5-a630-70184f1ee06a");
        private static readonly Guid ongoingAccountStatusId = Guid.Parse("d11b8021-1a7b-4109-8d7b-1f7fdeafb5de");
        private static readonly Guid documentAddressTypeId = Guid.Parse("9958c503-9788-438f-998c-e68dfe5887c7");

        public void TryToUpdateAccountStatus(UserConnection userConnection, Guid accountId)
        {
            var accountEntity = GetAccountById(userConnection, accountId);

            if (accountEntity != null)
            {
                var areAccountFieldsFilled = AreAccountFieldsFilled(accountEntity);
                var hasAddressForDocumentsDelivery = HasAddressForDocumentsDelivery(userConnection, accountId);
                
                var hasDocument = HasDocument(userConnection, accountId) || accountEntity.GetTypedColumnValue<bool>("WatbIsNoNeedUploadDocuments");
                var hasContract = HasContract(userConnection, accountId) || accountEntity.GetTypedColumnValue<bool>("WatbIsNoNeedUploadContract");

                if (areAccountFieldsFilled && hasAddressForDocumentsDelivery)
                {
                    if (hasDocument && hasContract)
                    {
                        SetAccountStatus(userConnection, accountId, ongoingAccountStatusId);
                    }
                    else
                    {
                        SetAccountStatus(userConnection, accountId, activeAccountStatusId);
                    }
                }
                else
                {
                    SetAccountStatus(userConnection, accountId, newAccountStatusId);
                }
            }
        }

        private bool AreAccountFieldsFilled(Entity accountEntity)
        {
            var name = accountEntity.GetTypedColumnValue<string>("Name");
            var signerId = accountEntity.GetTypedColumnValue<Guid>("WatbSignerId");
            var phone = accountEntity.GetTypedColumnValue<string>("Phone");
            var email = accountEntity.GetTypedColumnValue<string>("WatbEmail");
            var edrpou = accountEntity.GetTypedColumnValue<string>("WatbEDRPOU");

            var areAccountFieldsFilled = !string.IsNullOrEmpty(name) &&
                                             signerId != Guid.Empty &&
                                             !string.IsNullOrEmpty(phone) &&
                                             !string.IsNullOrEmpty(email) &&
                                             !string.IsNullOrEmpty(edrpou);

            return areAccountFieldsFilled;
        }

        private Entity GetAccountById(UserConnection userConnection, Guid accountId)
        {
            var accountESQ = new EntitySchemaQuery(userConnection.EntitySchemaManager, "Account");
            accountESQ.AddColumn("Name");
            accountESQ.AddColumn("WatbSigner");
            accountESQ.AddColumn("Phone");
            accountESQ.AddColumn("WatbEmail");
            accountESQ.AddColumn("WatbEDRPOU");
            accountESQ.AddColumn("WatbIsNoNeedUploadDocuments");
			accountESQ.AddColumn("WatbIsNoNeedUploadContract");
			
            return accountESQ.GetEntity(userConnection, accountId);
        }

        private bool HasAddressForDocumentsDelivery(UserConnection userConnection, Guid accountId)
        {
            var addressESQ = new EntitySchemaQuery(userConnection.EntitySchemaManager, "AccountAddress");
            addressESQ.AddColumn("Id");
            addressESQ.Filters.Add(addressESQ.CreateFilterWithParameters(FilterComparisonType.Equal, "Account", accountId));
            addressESQ.Filters.Add(addressESQ.CreateFilterWithParameters(FilterComparisonType.Equal, "AddressType", documentAddressTypeId));

            var addressCollection = addressESQ.GetEntityCollection(userConnection);
            return addressCollection.Count > 0;
        }

        private bool HasContract(UserConnection userConnection, Guid accountId)
        {
            var contractESQ = new EntitySchemaQuery(userConnection.EntitySchemaManager, "Contract");
            contractESQ.AddColumn("Id");
            contractESQ.Filters.Add(contractESQ.CreateFilterWithParameters(FilterComparisonType.Equal, "Account", accountId));

            var contractCollection = contractESQ.GetEntityCollection(userConnection);
            return contractCollection.Count > 0;
        }

        private bool HasDocument(UserConnection userConnection, Guid accountId)
        {
            var contractESQ = new EntitySchemaQuery(userConnection.EntitySchemaManager, "WatbAccountFile");
            contractESQ.AddColumn("Id");
            contractESQ.Filters.Add(contractESQ.CreateFilterWithParameters(FilterComparisonType.Equal, "Account", accountId));

            var contractCollection = contractESQ.GetEntityCollection(userConnection);
            return contractCollection.Count > 0;
        }

        private void SetAccountStatus(UserConnection userConnection, Guid accountId, Guid statusId)
        {
            var update = new Update(userConnection, "Account")
                .Set("WatbStatusId", Column.Parameter(statusId))
                .Where("Id")
                .IsEqual(Column.Parameter(accountId));

            update.Execute();
        }
    }
}
