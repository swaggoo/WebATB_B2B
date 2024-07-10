namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: WatbAccountStatusRemindingTextSchema

	/// <exclude/>
	public class WatbAccountStatusRemindingTextSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public WatbAccountStatusRemindingTextSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public WatbAccountStatusRemindingTextSchema(WatbAccountStatusRemindingTextSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("3129aa60-ae6c-421c-bd38-b1345b66c744");
			Name = "WatbAccountStatusRemindingText";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("7a77d891-77bf-4563-bb36-319b80ce9f18");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,83,0,0,69,207,108,233,1,0,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("3129aa60-ae6c-421c-bd38-b1345b66c744"));
		}

		#endregion

	}

	#endregion

}

