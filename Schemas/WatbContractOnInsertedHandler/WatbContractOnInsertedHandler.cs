using System;
using Terrasoft.Core;
using Terrasoft.Core.Entities;
using Terrasoft.Core.Entities.Events;
using Terrasoft.Core.DB;
using Terrasoft.Common;

namespace FX.EntityEventListeners
{
    [EntityEventListener(SchemaName = "Contract")]
    public class ContractOnInsertedListener : BaseEntityEventListener
    {
        public override void OnInserted(object sender, EntityAfterEventArgs e)
        {
            base.OnInserted(sender, e);
            var contract = (Entity)sender;
            var userConnection = contract.UserConnection;

            // Fetch the AccountId from the contract entity
            var accountId = contract.GetTypedColumnValue<Guid>("AccountId");

            // Create an EntitySchemaQuery to get the account
            var accountESQ = new EntitySchemaQuery(userConnection.EntitySchemaManager, "Account");
            accountESQ.AddColumn("Name");
            accountESQ.AddColumn("WatbSignerFullName");
            accountESQ.AddColumn("Phone");
            accountESQ.AddColumn("WatbEmail");
            accountESQ.AddColumn("WatbEDRPOU");
            accountESQ.AddColumn("WatbIsNoNeedUploadContract");

            var accountEntity = accountESQ.GetEntity(userConnection, accountId);

            if (accountEntity != null)
            {
                var name = accountEntity.GetTypedColumnValue<string>("Name");
                var signerFullname = accountEntity.GetTypedColumnValue<string>("WatbSignerFullName");
                var phone = accountEntity.GetTypedColumnValue<string>("Phone");
                var email = accountEntity.GetTypedColumnValue<string>("WatbEmail");
                var edrpou = accountEntity.GetTypedColumnValue<string>("WatbEDRPOU");
                var isNoNeedUploadContract = accountEntity.GetTypedColumnValue<bool>("WatbIsNoNeedUploadContract");

                bool isRequiredFieldsFilled = !string.IsNullOrEmpty(name) &&
                                              !string.IsNullOrEmpty(signerFullname) &&
                                              !string.IsNullOrEmpty(phone) &&
                                              !string.IsNullOrEmpty(email) &&
                                              !string.IsNullOrEmpty(edrpou);

                if (!isRequiredFieldsFilled)
                {
                    UpdateWatbStatus(userConnection, accountId, "7e1b25b0-c5f8-4a62-87c7-1acabca4aa24");
                    return;
                }

                var documentAddressTypeId = Guid.Parse("9958c503-9788-438f-998c-e68dfe5887c7");

                var hasAddressForDocuments = CheckAddressForDocuments(userConnection, accountId, documentAddressTypeId);
                var hasContractUploaded = CheckContractUploaded(userConnection, accountId) || isNoNeedUploadContract;

                if (hasAddressForDocuments)
                {
                    if (hasContractUploaded)
                    {
                        UpdateWatbStatus(userConnection, accountId, "d11b8021-1a7b-4109-8d7b-1f7fdeafb5de");
                    }
                    else
                    {
                        UpdateWatbStatus(userConnection, accountId, "1fba3241-b34c-40c5-a630-70184f1ee06a");
                    }
                }
            }
        }

        private bool CheckAddressForDocuments(UserConnection userConnection, Guid accountId, Guid documentAddressTypeId)
        {
            var addressESQ = new EntitySchemaQuery(userConnection.EntitySchemaManager, "AccountAddress");
            addressESQ.AddColumn("Id");
            addressESQ.Filters.Add(addressESQ.CreateFilterWithParameters(FilterComparisonType.Equal, "Account", accountId));
            addressESQ.Filters.Add(addressESQ.CreateFilterWithParameters(FilterComparisonType.Equal, "AddressType", documentAddressTypeId));

            var addressCollection = addressESQ.GetEntityCollection(userConnection);
            return addressCollection.Count > 0;
        }

        private bool CheckContractUploaded(UserConnection userConnection, Guid accountId)
        {
            var contractESQ = new EntitySchemaQuery(userConnection.EntitySchemaManager, "Contract");
            contractESQ.AddColumn("Id");
            contractESQ.Filters.Add(contractESQ.CreateFilterWithParameters(FilterComparisonType.Equal, "Account", accountId));

            var contractCollection = contractESQ.GetEntityCollection(userConnection);
            return contractCollection.Count > 0;
        }

        private void UpdateWatbStatus(UserConnection userConnection, Guid accountId, string statusId)
        {
            var update = new Update(userConnection, "Account")
                .Set("WatbStatusId", Column.Parameter(statusId))
                .Where("Id").IsEqual(Column.Parameter(accountId));
            update.Execute();
        }
    }
}
