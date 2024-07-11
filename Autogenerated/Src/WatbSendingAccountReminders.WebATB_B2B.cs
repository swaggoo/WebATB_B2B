namespace Terrasoft.Core.Process
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Drawing;
	using System.Globalization;
	using System.Text;
	using Terrasoft.Common;
	using Terrasoft.Configuration;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;
	using Terrasoft.Core.DB;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Factories;
	using Terrasoft.Core.Process;
	using Terrasoft.Core.Process.Configuration;
	using WebATB.B2B;

	#region Class: WatbSendingAccountRemindersMethodsWrapper

	/// <exclude/>
	public class WatbSendingAccountRemindersMethodsWrapper : ProcessModel
	{

		public WatbSendingAccountRemindersMethodsWrapper(Process process)
			: base(process) {
			AddScriptTaskMethod("ScriptTask1Execute", ScriptTask1Execute);
		}

		#region Methods: Private

		private bool ScriptTask1Execute(ProcessExecutingContext context) {
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
			    var remindingConfig = new RemindingConfig(_accountSchemaId)
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
			private readonly Guid _accountSchemaId = new Guid("25d7c1ab-1de0-4501-b402-02e0e5a72d6e");
			
			private List<AccountDto> GetAccountsToNotify(UserConnection connection)
			{
			    var accountsToNotify = new List<AccountDto>();
			    
			    var select = new Select(connection)
			        .Column("Account", "Id")
			        .Column("Account", "WatbActiveStatusSettingDate")
			        .Column("Account", "OwnerId")
			        .Column("Account", "WatbStatusId")
			        .Column("Account", "Name")
			        .From("Account")
			        .LeftOuterJoin("Reminding").On("Reminding", "SubjectId").IsEqual("Account", "Id")
				        .And("Reminding", "CreatedOn").IsGreater(Column.Parameter(DateTime.UtcNow.AddHours(-24)))
				        .And("Reminding", "NotificationTypeId").IsEqual(Column.Parameter(RemindingConsts.NotificationTypeRemindingId))
			        .Where("Account", "WatbStatusId").IsEqual(Column.Parameter(_activeStatusId))
			        .And(Column.SourceColumn("Reminding", "Id")).IsNull()
			        .And("Account", "WatbActiveStatusSettingDate").IsLess(Column.Parameter(DateTime.UtcNow.AddHours(-24))) as Select;
			
			    using (var dbExecutor = connection.EnsureDBConnection())
			    using (var dr = select.ExecuteReader(dbExecutor))
			    {
			        while (dr.Read())
			        {
			            var activeStatusSettingDate = dr.GetColumnValue<DateTime>("WatbActiveStatusSettingDate");
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
			    
			    return accountsToNotify;
			}
			
			private struct AccountDto
			{
				public Guid Id;
				public DateTime ActiveStatusSettingDate;
				public Guid OwnerId;
				public string Name;
			}

		#endregion

	}

	#endregion

}

