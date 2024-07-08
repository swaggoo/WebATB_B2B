 namespace WATB.Base.EventListeners
{
    using System;
    using Terrasoft.Core;
    using Terrasoft.Core.Configuration;
    using Terrasoft.Core.DB;
    using Terrasoft.Core.Entities;
    using Terrasoft.Core.Entities.Events;

    public abstract class WATBBaseCommunicationParentSynchronizerEventListener : BaseEntityEventListener
    {
        protected static readonly Guid WATB_EXTERANAL_EMAIL_TYPE_ID = new Guid("4a60d0d5-7d2f-4e4e-a66e-d32df38d3ca8");

        protected void UpdateCommunicationParentEntity(Entity communicationEntity, string schemaName, Guid parentEntityId, string typedColumnName)
        {
            var userConnection = communicationEntity.UserConnection;
            
            var parentEntity = GetCommunicationParentEntity(userConnection, schemaName, parentEntityId);
            if (parentEntity != null) 
            {
                var isCanEdit = GetCanEditColumn(userConnection, schemaName, typedColumnName);
                if (isCanEdit) 
                {
                    SetCommunicationParentEntityColumns(communicationEntity, parentEntity);
                }
                
                parentEntity.SetColumnValue("ModifiedOn", DateTime.UtcNow);
                parentEntity.CreateUpdate().Execute();
                
                TrackingChangedColumns(userConnection, parentEntity);
            }
            
        }
        
        private static Entity GetCommunicationParentEntity(UserConnection userConnection, string schemaName, Guid id) {
            var schema = userConnection.EntitySchemaManager.GetInstanceByName(schemaName);
            var entity = schema.CreateEntity(userConnection);
            entity.FetchFromDB(id);
            return entity;
        }

        protected static bool GetCanEditColumn(UserConnection userConnection, string schemaName, string columnName) {
            EntitySchemaColumnRightLevel rightLevel = userConnection.DBSecurityEngine
                .GetEntitySchemaColumnRightLevel(schemaName, columnName, SchemaOperationRightLevels.CanEdit);
            return (rightLevel & EntitySchemaColumnRightLevel.CanEdit) == EntitySchemaColumnRightLevel.CanEdit;
        }

        protected abstract void SetCommunicationParentEntityColumns(Entity communicationEntity, Entity parentEntity);

        private static void TrackingChangedColumns(UserConnection userConnection, Entity parentEntity) {
            var schemaName = parentEntity.Schema.Name;
            var parentSchema = userConnection.EntitySchemaManager.FindInstanceByName(schemaName);
            parentEntity.TrackChangeInDB(parentSchema);
        }
    }
}