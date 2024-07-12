using System;
using System.Collections.Generic;
using FX.Services;
using Terrasoft.Core;
using Terrasoft.Core.DB;
using Terrasoft.Core.Entities;
using Terrasoft.Core.Entities.Events;
using Terrasoft.Core.Factories;

namespace WebATB_B2B
{
    [EntityEventListener(SchemaName = "Account")]
    public class AccountChangeListener : BaseEntityEventListener
    {
        private readonly Guid _contractTypeId = new Guid("42B49A15-1D6C-4FA3-B24A-45711BA90CB3");

        public override void OnInserted(object sender, EntityAfterEventArgs e)
        {
            base.OnInserted(sender, e);
            var account = (Entity)sender;
            var userConnection = account.UserConnection;
            var contractNumber = account.GetTypedColumnValue<string>("WatbContractNumber");

            if (string.IsNullOrEmpty(contractNumber))
            {
                return;
            }

            var contractId = GetContractByNumber(userConnection, contractNumber);
            var accountContractDto = new AccountContractDto()
            {
                AccountId = account.GetTypedColumnValue<Guid>("Id"),
                ContractId = contractId,
                ContractTerms = account.GetTypedColumnValue<string>("WatbContractTerms"),
                ContractDate = account.GetTypedColumnValue<DateTime>("WatbContractDate"),
                ContractExternalNumber = account.GetTypedColumnValue<string>("WatbContractExternalNumber"),
                ContractCodeErp = account.GetTypedColumnValue<string>("WatbContractCodeERP"),
                ContractType = account.GetTypedColumnValue<string>("WatbContractType"),
                ContractNumber = account.GetTypedColumnValue<string>("WatbContractNumber")
            };

            if (contractId != Guid.Empty)
            {
                UpdateContract(userConnection, accountContractDto);
            }
            else
            {
                InsertContract(userConnection, accountContractDto);
            }
        }

        public override void OnSaving(object sender, EntityBeforeEventArgs e)
        {
            base.OnSaving(sender, e);
            var account = (Entity)sender;
            var userConnection = account.UserConnection;

            var accountId = account.GetTypedColumnValue<Guid>("Id");
            var newAccountStatus = account.GetTypedColumnValue<Guid>("WatbStatusId");
            var accountStatusUpdater = ClassFactory.Get<AccountStatusUpdater>();

            if (accountStatusUpdater.IsAccountStatusChangedManually(userConnection, accountId, newAccountStatus))
            {
                accountStatusUpdater.SetActiveStatusSettingDate(userConnection, accountId, newAccountStatus);
            }
            else
            {
                accountStatusUpdater.TryToUpdateAccountStatus(userConnection, accountId, account);
            }
        }

        public override void OnDeleted(object sender, EntityAfterEventArgs e)
        {
            base.OnDeleted(sender, e);
            var accountAddress = (Entity)sender;
            var userConnection = accountAddress.UserConnection;

            var accountId = accountAddress.GetTypedColumnValue<Guid>("Id");
            var accountStatusUpdater = ClassFactory.Get<AccountStatusUpdater>();
            accountStatusUpdater.TryToUpdateAccountStatus(userConnection, accountId);
        }

        private Guid GetContractByNumber(UserConnection userConnection, string number)
        {
            var select = new Select(userConnection)
                    .Column("Id")
                    .From("Contract")
                    .Where("Number").IsEqual(Column.Parameter(number))
                as Select;

            var result = select.ExecuteScalar<Guid>();
            return result;
        }

        private void UpdateContract(UserConnection userConnection, AccountContractDto dto)
        {
            var update = new Update(userConnection, "Contract")
                .Set("Number", Column.Parameter(dto.ContractNumber))
                .Set("WatbContractExternalNumber", Column.Parameter(dto.ContractExternalNumber))
                .Set("StartDate", Column.Parameter(dto.ContractDate))
                .Set("WatbContractTerms", Column.Parameter(dto.ContractTerms))
                .Set("OwnerId", Column.Parameter(userConnection.CurrentUser.ContactId))
                .Set("CreatedById", Column.Parameter(userConnection.CurrentUser.ContactId))
                .Set("AccountId", Column.Parameter(dto.AccountId))
                .Set("WatbContractCodeERP", Column.Parameter(dto.ContractCodeErp))
                .Set("TypeId", Column.Parameter(_contractTypeId));

            if (_contractTypes.TryGetValue(dto.ContractType, out var contractTypeId))
            {
                update.Set("WatbContractTypeId", Column.Parameter(contractTypeId));
            }

            update.Where("Id").IsEqual(Column.Parameter(dto.ContractId))
                .Execute();
        }

        private void InsertContract(UserConnection userConnection, AccountContractDto dto)
        {
            var insert = new Insert(userConnection)
                .Into("Contract")
                .Set("Number", Column.Parameter(dto.ContractNumber))
                .Set("WatbContractExternalNumber", Column.Parameter(dto.ContractExternalNumber))
                .Set("StartDate", Column.Parameter(dto.ContractDate))
                .Set("WatbContractTerms", Column.Parameter(dto.ContractTerms))
                .Set("OwnerId", Column.Parameter(userConnection.CurrentUser.ContactId))
                .Set("CreatedById", Column.Parameter(userConnection.CurrentUser.ContactId))
                .Set("AccountId", Column.Parameter(dto.AccountId))
                .Set("WatbContractCodeERP", Column.Parameter(dto.ContractCodeErp))
                .Set("TypeId", Column.Parameter(_contractTypeId));

            if (_contractTypes.TryGetValue(dto.ContractType, out var contractTypeId))
            {
                insert.Set("WatbContractTypeId", Column.Parameter(contractTypeId));
            }

            insert.Execute();
        }

        private readonly Dictionary<string, Guid> _contractTypes = new Dictionary<string, Guid>()
        {
            { "Товари", new Guid("3212336e-e7cb-44e2-9f32-251ba02615e9") },
            { "Сертифікати", new Guid("ca801dbd-6d54-478c-ba3e-12320604b5d0") }
        };
    }

    public class AccountContractDto
    {
        public string ContractExternalNumber { get; set; }
        public DateTime? ContractDate { get; set; }
        public string ContractTerms { get; set; }
        public Guid AccountId { get; set; }
        public Guid? ContractId { get; set; }
        public string ContractCodeErp { get; set; }
        public string ContractType { get; set; }
        public string ContractNumber { get; set; }
    }
}