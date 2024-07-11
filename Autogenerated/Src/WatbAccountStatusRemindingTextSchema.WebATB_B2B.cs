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
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,149,145,223,74,2,65,20,198,239,5,223,225,176,4,41,196,94,116,153,21,168,145,120,35,145,11,94,68,23,179,235,209,182,118,103,101,254,68,34,66,117,29,120,103,15,208,11,152,33,65,161,189,194,236,27,53,227,10,235,150,21,205,205,204,156,243,155,111,190,111,70,114,159,118,161,217,231,2,67,187,26,5,1,122,194,143,40,183,107,72,145,249,94,41,159,147,75,196,65,198,8,143,58,66,83,97,24,209,141,13,218,241,187,146,17,163,160,251,249,28,37,33,242,30,241,16,90,232,150,157,138,93,217,173,228,115,131,124,14,244,232,73,55,240,61,240,2,194,57,180,136,112,203,158,23,73,42,154,130,8,201,79,49,244,105,91,95,224,224,141,128,61,168,103,10,199,17,11,145,37,58,43,185,53,73,46,152,113,86,67,81,137,218,253,66,253,200,95,134,34,172,191,159,180,118,32,114,47,117,210,67,232,104,161,19,194,180,79,129,140,23,33,213,90,147,53,35,11,218,213,11,244,174,202,172,43,67,164,162,33,131,160,96,101,9,171,88,202,10,92,19,6,36,73,216,208,12,28,64,33,49,83,204,30,60,179,202,41,101,157,111,80,113,117,40,125,124,203,82,79,160,222,212,66,205,227,251,248,86,77,212,139,154,153,181,154,192,96,237,166,33,168,185,154,129,122,213,196,135,166,167,102,171,185,49,168,105,124,103,166,133,122,54,245,237,120,164,33,35,56,53,85,195,190,199,35,219,250,98,33,187,99,40,36,163,75,79,107,220,48,93,254,242,59,142,47,2,252,207,247,252,248,59,43,23,150,122,76,67,198,99,253,44,15,127,164,179,190,155,214,211,240,19,204,117,159,114,23,3,0,0 };
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

