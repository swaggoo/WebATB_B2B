using System;
using Terrasoft.Core;
using Terrasoft.Core.Entities;
using Terrasoft.Core.Entities.Events;
using FX.Services;
using Terrasoft.Core.Factories;

namespace FX.EntityEventListeners
{
    [EntityEventListener(SchemaName = "Contract")]
    public class ContractChangeListener : BaseEntityEventListener
    {
        public override void OnInserted(object sender, EntityAfterEventArgs e)
        {
            base.OnInserted(sender, e);
            var contract = (Entity)sender;
            var userConnection = contract.UserConnection;

            var accountId = contract.GetTypedColumnValue<Guid>("AccountId");
            var accountStatusUpdater = ClassFactory.Get<AccountStatusUpdater>();

            accountStatusUpdater.TryToUpdateAccountStatus(userConnection, accountId);
        }

        public override void OnDeleted(object sender, EntityAfterEventArgs e)
        {
            base.OnDeleted(sender, e);
            var contract = (Entity)sender;
            var userConnection = contract.UserConnection;

            var accountId = contract.GetTypedColumnValue<Guid>("AccountId");
            var accountStatusUpdater = ClassFactory.Get<AccountStatusUpdater>();

            accountStatusUpdater.TryToUpdateAccountStatus(userConnection, accountId);
        }
    }
}
