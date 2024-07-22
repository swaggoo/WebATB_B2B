using System;
using Terrasoft.Configuration;
using Terrasoft.Core;
using Terrasoft.Core.DB;
using Terrasoft.Core.Entities;
using Terrasoft.Core.Entities.Events;

namespace WebATB_B2B
{
    [EntityEventListener(SchemaName = "OrderFile")]
    public class OrderFileChangeListener : BaseEntityEventListener
    {
        private const string SenderName = "OrderFileChangeListener";
        
        public override void OnInserted(object sender, EntityAfterEventArgs e)
        {
            base.OnInserted(sender, e);
            var file = (Entity)sender;
            var userConnection = file.UserConnection;
			
            UpdateAttachedFilesCount(file, userConnection);
            MsgChannelUtilities.PostMessage(userConnection, SenderName, string.Empty);
        }

        public override void OnDeleted(object sender, EntityAfterEventArgs e)
        {
            base.OnDeleted(sender, e);
            var file = (Entity)sender;
            var userConnection = file.UserConnection;
			
            UpdateAttachedFilesCount(file, userConnection);
            MsgChannelUtilities.PostMessage(userConnection, SenderName, string.Empty);
        }

        private void UpdateAttachedFilesCount(Entity file, UserConnection userConnection)
        {
            var orderId = file.GetTypedColumnValue<Guid>("OrderId");
            
            var select = new Select(userConnection)
                .Column(Func.Count("Id"))
                .From("OrderFile")
                .Where("OrderId").IsEqual(Column.Parameter(orderId)) as Select;

            var attachedFilesCount = select.ExecuteScalar<int>();

            var update = new Update(userConnection, "Order")
                .Set("WatbAttachedFilesCount", Column.Parameter(attachedFilesCount))
                .Where("Id").IsEqual(Column.Parameter(orderId))
                .Execute();
        }
    }
}