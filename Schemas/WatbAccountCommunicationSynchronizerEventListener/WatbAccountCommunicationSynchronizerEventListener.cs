namespace WATB.Base.EventListeners
{
    using System;
    using System.Collections.Generic;
    using Terrasoft.Configuration;
    using Terrasoft.Core.Configuration;
    using Terrasoft.Core.Entities;
    using Terrasoft.Core.Entities.Events;
    using Terrasoft.Core.Factories;

    [EntityEventListener(SchemaName = "Account")]
    public sealed class WATBAccountCommunicationSynchronizerEventListener : BaseEntityEventListener
    {
        protected static readonly Guid WATB_EXTERNAL_EMAIL_TYPE_ID = new Guid("4a60d0d5-7d2f-4e4e-a66e-d32df38d3ca8");

        private CommunicationSynchronizer _communicationSynchronizer;
        private StoringObjectState _storingStateBeforeSave;


        public override void OnSaving(object sender, EntityBeforeEventArgs e)
        {
            base.OnSaving(sender, e);
    
            var entity = sender as Entity;
            var communicationSynchronizer = GetCommunicationSynchronizer(entity);
            
            var watbCommunicationColumns = new Dictionary<string, Guid> {
                { "WatbEmail", WATB_EXTERNAL_EMAIL_TYPE_ID },
            };
            
            communicationSynchronizer.InitializeCommunicationItems(watbCommunicationColumns);

            _storingStateBeforeSave = entity.StoringState;
        }

        public override void OnSaved(object sender, EntityAfterEventArgs e)
        {
            base.OnSaved(sender, e);
    
            var entity = sender as Entity;
            var communicationSynchronizer = GetCommunicationSynchronizer(entity);

            communicationSynchronizer.SynchronizeCommunications();
            
            TryDeletePrimaryCommunicationOnSetEmptyValue(
                entity, 
                e, 
                "WatbEmail", 
                WATB_EXTERNAL_EMAIL_TYPE_ID);
        }
        

        protected CommunicationSynchronizer GetCommunicationSynchronizer(Entity entity)
        {
            if (_communicationSynchronizer == null)
            {
                _communicationSynchronizer = ClassFactory.Get<CommunicationSynchronizer>(
                    new ConstructorArgument("userConnection", entity.UserConnection.AppConnection.SystemUserConnection), 
					new ConstructorArgument("entity", entity));
            }

            return _communicationSynchronizer;
        }

        private void TryDeletePrimaryCommunicationOnSetEmptyValue(
            Entity entity, 
            EntityAfterEventArgs e, 
            string masterRecordCommunicationColumnName, 
            Guid communicationTypeId)
        {
            if (_storingStateBeforeSave == StoringObjectState.New)
            {
                return;
            }
            
            var masterRecordCommunicationColumn = e.ModifiedColumnValues.FindByName(masterRecordCommunicationColumnName);

            if (masterRecordCommunicationColumn == null
                || string.IsNullOrEmpty((string)masterRecordCommunicationColumn.OldValue)
                || !string.IsNullOrEmpty((string)masterRecordCommunicationColumn.Value))
            {
                return;
            }

            var systemUserConnection = entity.UserConnection.AppConnection.SystemUserConnection;
            
            var communicationEntity = systemUserConnection.EntitySchemaManager
                .GetInstanceByName("AccountCommunication")
                .CreateEntity(systemUserConnection);

            var communicationEntityConditions = new Dictionary<string, object>()
            {
                { "Account", entity.PrimaryColumnValue },
                { "Primary", true },
                { "CommunicationType", communicationTypeId },
                { "Number", masterRecordCommunicationColumn.OldValue },
            };

            if (communicationEntity.FetchFromDB(communicationEntityConditions, false));
            {
                communicationEntity.Delete();
            }
        }
    }
}