using System;
using Terrasoft.Core;
using Terrasoft.Core.Entities;
using Terrasoft.Core.Entities.Events;
using FX.Services;

namespace FX.EntityEventListeners
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
            var accountStatusUpdater = new AccountStatusUpdater();
            accountStatusUpdater.TryToUpdateAccountStatus(userConnection, accountId);
        }

        public override void OnDeleted(object sender, EntityAfterEventArgs e)
        {
            base.OnDeleted(sender, e);
            var accountAddress = (Entity)sender;
            var userConnection = accountAddress.UserConnection;

            var accountId = accountAddress.GetTypedColumnValue<Guid>("AccountId");
            var accountStatusUpdater = new AccountStatusUpdater();
            accountStatusUpdater.TryToUpdateAccountStatus(userConnection, accountId);
        }
    }
}
