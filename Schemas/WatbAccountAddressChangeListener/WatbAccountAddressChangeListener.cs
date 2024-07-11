using System;
using FX.Services;
using Terrasoft.Core.Entities;
using Terrasoft.Core.Entities.Events;
using Terrasoft.Core.Factories;

namespace WebATB_B2B
{
    [EntityEventListener(SchemaName = "AccountAddress")]
    public class AccountAddressChangeListener : BaseEntityEventListener
    {
        public override void OnInserted(object sender, EntityAfterEventArgs e)
        {
            base.OnInserted(sender, e);
            var accountAddress = (Entity)sender;
            var userConnection = accountAddress.UserConnection;
			
            var accountId = accountAddress.GetTypedColumnValue<Guid>("AccountId");
            var accountStatusUpdater = ClassFactory.Get<AccountStatusUpdater>();

            accountStatusUpdater.TryToUpdateAccountStatus(userConnection, accountId);
        }

        public override void OnDeleted(object sender, EntityAfterEventArgs e)
        {
            base.OnDeleted(sender, e);
            var accountAddress = (Entity)sender;
            var userConnection = accountAddress.UserConnection;

            var accountId = accountAddress.GetTypedColumnValue<Guid>("AccountId");
            var accountStatusUpdater = ClassFactory.Get<AccountStatusUpdater>();

            accountStatusUpdater.TryToUpdateAccountStatus(userConnection, accountId);
        }
    }
}
