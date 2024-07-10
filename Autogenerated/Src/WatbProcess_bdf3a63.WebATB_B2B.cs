using Terrasoft.Configuration;
using Terrasoft.Core.Factories;
using WebATB_B2B;

namespace Terrasoft.Core.Process
{
    using System;
    using System.Collections.Generic;
    using Common;
    using Core;
    using DB;

    #region Class: WatbProcess_bdf3a63MethodsWrapper

    /// <exclude/>
    public class WatbProcess_bdf3a63MethodsWrapper : ProcessModel
    {
        public WatbProcess_bdf3a63MethodsWrapper(Process process)
            : base(process)
        {
            AddScriptTaskMethod("ScriptTask1Execute", ScriptTask1Execute);
        }

        #region Methods: Private

        private bool ScriptTask1Execute(ProcessExecutingContext context)
        {
            var accountsToNotify = GetAccountsToNotify(UserConnection);

            foreach (var account in accountsToNotify)
            {
                var remindDate = DateTime.UtcNow;
                IRemindingTextFormer textFormer =
                    ClassFactory.Get<WatbAccountStatusRemindingText>();
                var subjectCaption = textFormer.GetBody(new Dictionary<string, object>
                {
                    { "AccountName", account.Name }
                });
                var popupTitle = textFormer.GetTitle(null);
                var remindingConfig = new RemindingConfig(new Guid("25d7c1ab-1de0-4501-b402-02e0e5a72d6e"))
                {
                    AuthorId = UserConnection.CurrentUser.ContactId,
                    ContactId = account.OwnerId,
                    NotificationTypeId = RemindingConsts.NotificationTypeRemindingId,
                    RemindTime = remindDate,
                    Description = subjectCaption,
                    PopupTitle = popupTitle,
                    SubjectId = account.Id
                };

                var remindingUtilities = ClassFactory.Get<RemindingUtilities>();
                remindingUtilities.CreateReminding(UserConnection, remindingConfig);
            }

            return true;
        }

        private readonly Guid _activeStatusId = new Guid("1FBA3241-B34C-40C5-A630-70184F1EE06A");
        private readonly Guid _accountSchemaId = new Guid("6404D801-E280-418A-A77C-D02B98271499");

        private List<AccountDto> GetAccountsToNotify(UserConnection connection)
        {
            var accountsToNotify = new List<AccountDto>();

            var select = new Select(connection)
                    .Column("Id")
                    .Column("WatbActiveStatusSettingDate")
                    .Column("OwnerId")
                    .Column("WatbStatusId")
                    .Column("Name")
                    .From("Account")
                as Select;

            using (var dbExecutor = connection.EnsureDBConnection())
            using (var dr = select.ExecuteReader(dbExecutor))
            {
                while (dr.Read())
                {
                    var activeStatusSettingDate = dr.GetColumnValue<DateTime>("WatbActiveStatusSettingDate");
                    var status = dr.GetColumnValue<Guid>("WatbStatusId");

                    if (status == _activeStatusId && (DateTime.UtcNow - activeStatusSettingDate).TotalHours > 24)
                    {
                        var owner = dr.GetColumnValue<Guid>("OwnerId");
                        var name = dr.GetColumnValue<string>("Name");
                        var id = dr.GetColumnValue<Guid>("Id");

                        accountsToNotify.Add(new AccountDto
                        {
                            Id = id,
                            OwnerId = owner,
                            Name = name
                        });
                    }
                }
            }

            return accountsToNotify;
        }

        public void AddNewReminders(List<AccountDto> accountsToNotify, UserConnection connection)
        {
            foreach (var account in accountsToNotify)
            {
                var description = $"У контрагента {account.Name} не заповнені усі обов'язкові поля.";

                var insert = new Insert(connection)
                    .Into("Reminding")
                    .Set("CreatedOn", Column.Parameter(DateTime.UtcNow))
                    .Set("CreatedById", Column.Parameter(connection.CurrentUser.ContactId))
                    .Set("ModifiedOn", Column.Parameter(DateTime.UtcNow))
                    .Set("ModifiedById", Column.Parameter(connection.CurrentUser.ContactId))
                    .Set("ContactId", Column.Parameter(account.OwnerId))
                    .Set("RemindTime", Column.Parameter(DateTime.UtcNow))
                    .Set("Description", Column.Parameter(description))
                    .Set("SubjectId", Column.Parameter(account.Id))
                    .Set("SysEntitySchemaId", Column.Parameter(_accountSchemaId))
                    .Set("SubjectCaption", Column.Parameter(description));

                insert.Execute();
            }
        }

        public struct AccountDto
        {
            public Guid Id;
            public Guid OwnerId;
            public string Name;
        }

        #endregion
    }

    #endregion
}