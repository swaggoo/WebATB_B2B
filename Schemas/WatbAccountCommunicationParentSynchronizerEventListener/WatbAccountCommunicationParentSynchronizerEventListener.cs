 namespace WATB.Base.EventListeners
{
    using System;
    using Terrasoft.Core.Entities;
    using Terrasoft.Core.Entities.Events;

    [EntityEventListener(SchemaName = "AccountCommunication")]
    public sealed class WATBAccountCommunicationParentSynchronizerEventListener : WATBBaseCommunicationParentSynchronizerEventListener
    {
        public override void OnSaved(object sender, EntityAfterEventArgs e)
        {
            base.OnSaved(sender, e);
    
            var entity = sender as Entity;

            if (entity.GetTypedColumnValue<Guid>("CommunicationTypeId") == WATB_EXTERANAL_EMAIL_TYPE_ID)
            {
                UpdateCommunicationParentEntity(
                    entity, 
                    "Account", 
                    entity.GetTypedColumnValue<Guid>("AccountId"), 
                    "WatbEmail");
            }
        }

        public override void OnDeleted(object sender, EntityAfterEventArgs e)
        {
            base.OnDeleted(sender, e);
            
            var entity = sender as Entity;
            var userConnection = entity.UserConnection;
            
            if (entity.GetTypedColumnValue<Guid>("CommunicationTypeId") == WATB_EXTERANAL_EMAIL_TYPE_ID)
            {
                var accountEntity = userConnection.EntitySchemaManager
                    .GetInstanceByName("Account")
                    .CreateEntity(userConnection);
                
                if (entity.GetTypedColumnValue<bool>("Primary")
                    && accountEntity.FetchFromDB(entity.GetTypedColumnValue<Guid>("AccountId"))
                    && GetCanEditColumn(userConnection, "Account", "WatbEmail")
                    && accountEntity.GetTypedColumnValue<string>("WatbEmail") == entity.GetTypedColumnValue<string>("Number"))
                {
                    accountEntity.SetColumnValue("WMTBFinancialPhone", string.Empty);
                    accountEntity.Save();
                }
            }
        }
        
        
        protected override void SetCommunicationParentEntityColumns(Entity communicationEntity, Entity parentEntity)
        {
            parentEntity.SetColumnValue("WatbEmail", communicationEntity.GetTypedColumnValue<string>("Number"));
        }
    }
}