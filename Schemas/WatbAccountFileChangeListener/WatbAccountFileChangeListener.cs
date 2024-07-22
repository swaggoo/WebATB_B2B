 using System;
using Terrasoft.Core;
using Terrasoft.Core.Entities;
using Terrasoft.Core.Entities.Events;
using FX.Services;
using Terrasoft.Core.Factories;

namespace EntityEventListeners
{
    [EntityEventListener(SchemaName = "WatbAccountFile")]
    public class AccountFileChangeListener : BaseEntityEventListener
    {
        public override void OnInserted(object sender, EntityAfterEventArgs e)
        {
            base.OnInserted(sender, e);
            var accountFile = (Entity)sender;
            var userConnection = accountFile.UserConnection;

            var accountId = accountFile.GetTypedColumnValue<Guid>("AccountId");
            var accountStatusUpdater = ClassFactory.Get<AccountStatusUpdater>();

            accountStatusUpdater.TryToUpdateAccountStatus(userConnection, accountId);
        }

        public override void OnDeleted(object sender, EntityAfterEventArgs e)
        {
            base.OnDeleted(sender, e);
            var accountFile = (Entity)sender;
            var userConnection = accountFile.UserConnection;

            var accountId = accountFile.GetTypedColumnValue<Guid>("AccountId");
            var accountStatusUpdater = ClassFactory.Get<AccountStatusUpdater>();

            accountStatusUpdater.TryToUpdateAccountStatus(userConnection, accountId);
        }
    }
}
