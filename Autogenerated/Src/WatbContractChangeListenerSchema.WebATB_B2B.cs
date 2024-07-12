namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: WatbContractChangeListenerSchema

	/// <exclude/>
	public class WatbContractChangeListenerSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public WatbContractChangeListenerSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public WatbContractChangeListenerSchema(WatbContractChangeListenerSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("a55795c8-9d0d-4722-a0f9-0b996555938e");
			Name = "WatbContractChangeListener";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("7a77d891-77bf-4563-bb36-319b80ce9f18");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,237,146,223,106,131,48,20,198,239,125,138,224,149,66,241,1,214,174,224,92,91,10,99,187,208,142,193,216,69,154,156,182,25,154,72,254,8,50,250,238,139,177,118,218,57,122,51,118,181,92,8,201,249,190,95,190,147,163,81,140,239,81,90,43,13,197,212,51,110,151,129,148,88,137,157,142,18,33,97,252,52,90,112,205,52,3,117,165,28,45,42,224,250,172,90,190,68,41,200,138,145,31,141,75,76,180,144,14,236,113,92,128,42,49,129,198,231,136,181,195,61,48,27,151,131,84,222,135,135,236,122,29,169,5,41,57,64,129,31,45,2,221,34,63,17,92,75,139,246,195,55,103,41,205,54,103,4,145,28,43,133,186,98,114,192,124,15,29,1,221,160,59,172,96,132,237,8,237,213,61,150,168,108,39,140,2,170,4,163,232,137,175,185,2,169,129,6,98,251,14,68,35,5,156,130,156,160,22,24,239,52,72,71,141,229,94,33,8,207,184,47,112,179,182,54,66,212,131,117,20,8,167,3,93,133,37,34,167,62,108,195,65,123,75,216,202,191,75,141,197,217,182,185,13,198,4,183,134,206,27,109,6,21,59,133,75,43,38,68,24,174,215,180,239,90,129,206,234,18,104,34,114,83,240,103,156,27,152,173,12,163,243,192,143,59,189,63,18,249,4,75,53,214,70,109,74,138,237,171,88,110,210,204,165,253,21,234,134,61,139,71,116,243,32,188,136,55,70,139,50,89,103,162,221,12,40,193,240,13,38,95,141,245,114,30,189,107,99,190,135,28,126,107,202,29,235,127,200,127,60,228,246,123,244,62,1,73,242,89,201,15,5,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("a55795c8-9d0d-4722-a0f9-0b996555938e"));
		}

		#endregion

	}

	#endregion

}

