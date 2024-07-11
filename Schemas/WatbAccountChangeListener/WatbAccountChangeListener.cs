using System;
using FX.Services;
using Terrasoft.Core.Entities;
using Terrasoft.Core.Entities.Events;
using Terrasoft.Core.Factories;
using Terrasoft.Mail.Sender;

namespace WebATB_B2B
{
    [EntityEventListener(SchemaName = "Account")]
    public class AccountChangeListener : BaseEntityEventListener
    {
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
    }
}