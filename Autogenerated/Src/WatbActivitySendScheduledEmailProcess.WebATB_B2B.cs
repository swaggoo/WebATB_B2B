namespace Terrasoft.Core.Process
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Drawing;
	using System.Globalization;
	using System.Text;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;
	using Terrasoft.Core.DB;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Factories;
	using Terrasoft.Core.Process;
	using Terrasoft.Core.Process.Configuration;
	using Terrasoft.Mail.Sender;
	using Watb.B2B.BulkEmail.EventListeners;

	#region Class: WatbActivitySendScheduledEmailProcessMethodsWrapper

	/// <exclude/>
	public class WatbActivitySendScheduledEmailProcessMethodsWrapper : ProcessModel
	{

		public WatbActivitySendScheduledEmailProcessMethodsWrapper(Process process)
			: base(process) {
			AddScriptTaskMethod("ScriptTask1Execute", ScriptTask1Execute);
			AddScriptTaskMethod("ScriptTask2Execute", ScriptTask2Execute);
		}

		#region Methods: Private

		private bool ScriptTask1Execute(ProcessExecutingContext context) {
			var activityId = Get<Guid>("Activity");
			
			var emailClientFactory = ClassFactory.Get<EmailClientFactory>(
				new ConstructorArgument("userConnection", context.UserConnection));
			
			var activityEmailSender = new ActivityEmailSender(emailClientFactory, context.UserConnection);
			
			activityEmailSender.Send(activityId);
			
			return true;
		}

		private bool ScriptTask2Execute(ProcessExecutingContext context) {
			WatbActivityScheduleEmailEventListener.RescheduleSendEmail(
				context.UserConnection,
				Get<Guid>("ActivityId"),
				Get<DateTime>("WatbScheduleSendDate"));
			
			return true;
		}

		#endregion

	}

	#endregion

}

