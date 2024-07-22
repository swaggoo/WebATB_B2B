using System;
using Newtonsoft.Json;
using Terrasoft.Configuration;
using Terrasoft.Core;
using Terrasoft.Core.DB;
using Terrasoft.Core.Entities;
using Terrasoft.Core.Entities.Events;

namespace EntityEventListeners
{
    [EntityEventListener(SchemaName = "OrderProduct")]
    public class OrderProductChangeListener : BaseEntityEventListener
    {
        private const string SenderName = "OrderProductChangeListener";
        
        public override void OnInserted(object sender, EntityAfterEventArgs e)
        {
            base.OnInserted(sender, e);
            var product = (Entity)sender;

            PublishSavedEvent(product);
        }
        
        public override void OnDeleted(object sender, EntityAfterEventArgs e)
        {
            base.OnDeleted(sender, e);
            var product = (Entity)sender;

            PublishSavedEvent(product);
        }

        private void PublishSavedEvent(Entity product)
        {
            var userConnection = product.UserConnection;
            
            var orderId = product.GetTypedColumnValue<Guid>("OrderId");
            var orderProductsCount = GetOrderCertificatesCount(orderId, userConnection);
            
            var message = JsonConvert.SerializeObject(new {
                OrderProductCount = orderProductsCount
            });
            
            MsgChannelUtilities.PostMessage(userConnection, SenderName, message);
        }

        private int GetOrderCertificatesCount(Guid orderId, UserConnection userConnection)
        {
            var select = new Select(userConnection)
                .Column(Func.Count("Id"))
                .From("OrderProduct")
                .Where("OrderId").IsEqual(Column.Parameter(orderId)) as Select;

            var count = select.ExecuteScalar<int>();
            return count;
        }

    }
}
