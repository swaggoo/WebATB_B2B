using System;
using System.Collections.Generic;
using Quartz.Impl.Triggers;
using Terrasoft.Core;
using Terrasoft.Core.Entities;
using Terrasoft.Core.Entities.Events;
using Terrasoft.Core.Scheduler;

namespace Watb.B2B.BulkEmail.EventListeners
{
    [EntityEventListener(SchemaName = "Activity")]
    public sealed class WatbActivityScheduleEmailEventListener : BaseEntityEventListener
    {
        public override void OnInserted(object sender, EntityAfterEventArgs e)
        {
            var entity = (Entity)sender;
            var scheduleSendDate = entity.GetTypedColumnValue<DateTime>("WatbScheduleSendDate");

            if (scheduleSendDate != default)
            {
                RescheduleSendEmail(
                    entity.UserConnection, 
                    entity.PrimaryColumnValue, 
                    scheduleSendDate);
            }
        }

        public override void OnUpdated(object sender, EntityAfterEventArgs e)
        {
            var entity = (Entity)sender;
            var scheduleSendDateChangedColumn = e.ModifiedColumnValues.FindByName("WatbScheduleSendDate");

            if (scheduleSendDateChangedColumn != null)
            {
                RescheduleSendEmail(
                    entity.UserConnection, 
                    entity.PrimaryColumnValue, 
                    scheduleSendDateChangedColumn.Value as DateTime?);
            }
        }

        public override void OnDeleted(object sender, EntityAfterEventArgs e)
        {
            var entity = (Entity)sender;
            var scheduleSendDate = entity.GetTypedColumnValue<DateTime>("WatbScheduleSendDate");
            
            if (scheduleSendDate != default)
            {
                RescheduleSendEmail(
                    entity.UserConnection, 
                    entity.PrimaryColumnValue, 
                    null);
            }
        }
        

        public static void RescheduleSendEmail(
            UserConnection userConnection, 
            Guid activityId,
            DateTime? scheduleSendDate)
        {
            var systemUserConnection = userConnection.AppConnection.SystemUserConnection;
            
            var group = "WatbActivityScheduleEmail";
            var jobName = $"${group}_{activityId}";
            var triggerName = $"{jobName}_Trigger";
            
            AppScheduler.RemoveJob(jobName, group);
            
            if (scheduleSendDate.HasValue)
            {
                var job = AppScheduler.CreateProcessJob(
                    jobName: jobName,
                    jobGroup: group,
                    processName: "WatbActivitySendScheduledEmailProcess",
                    workspaceName: systemUserConnection.Workspace.Name,
                    userName: systemUserConnection.CurrentUser.Name,
                    parameters: new Dictionary<string, object>()
                    {
                        { "Activity", activityId }
                    },
                    isSystemUser: true,
                    jobOptions: new JobOptions()
                    {
                        RequestsRecovery = true,
                        IsDurable = false
                    });

                var trigger = new SimpleTriggerImpl(
                    name: triggerName,
                    group: group,
                    startTimeUtc: scheduleSendDate.Value)
                {
                    MisfireInstruction = (int)AppSchedulerMisfireInstruction.FireNow,
                };
                
                AppScheduler.Instance.ScheduleJob(job, trigger);
            }
        }
    }
}
