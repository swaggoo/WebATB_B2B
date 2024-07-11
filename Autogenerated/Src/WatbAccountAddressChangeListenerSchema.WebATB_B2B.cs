namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: WatbAccountAddressChangeListenerSchema

	/// <exclude/>
	public class WatbAccountAddressChangeListenerSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public WatbAccountAddressChangeListenerSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public WatbAccountAddressChangeListenerSchema(WatbAccountAddressChangeListenerSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("d5052677-0d7d-4edd-80c7-24b931b3f15f");
			Name = "WatbAccountAddressChangeListener";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("7a77d891-77bf-4563-bb36-319b80ce9f18");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,229,145,77,75,195,48,24,199,207,235,167,8,59,181,48,122,240,232,84,104,235,28,3,209,67,59,21,68,36,77,158,109,145,54,41,121,169,20,217,119,55,182,212,53,110,99,23,193,131,57,4,146,231,249,255,158,151,191,81,140,175,81,218,40,13,229,212,51,237,235,230,41,76,65,214,140,128,234,191,50,144,18,43,177,210,97,34,36,132,51,174,153,102,39,195,225,172,6,174,109,150,199,113,9,170,194,4,208,35,228,81,22,191,198,103,177,247,225,33,123,158,219,236,166,77,189,101,182,15,14,210,79,201,6,74,124,103,85,232,18,141,35,66,132,225,58,162,84,130,82,227,224,165,21,86,38,47,24,65,164,192,74,33,55,37,217,96,190,134,158,134,206,81,140,21,28,168,211,114,186,54,6,68,81,219,113,24,5,84,11,70,209,61,95,112,5,82,3,245,69,254,6,68,35,5,156,130,156,160,14,24,173,52,200,150,26,201,181,66,16,124,227,118,224,175,147,219,22,194,1,172,167,64,48,117,242,106,44,17,118,166,177,43,240,187,90,65,39,218,23,24,11,77,4,231,182,61,38,184,21,184,132,112,233,196,167,222,104,52,58,86,116,65,247,229,115,208,89,83,1,77,68,97,74,254,128,11,3,23,115,195,232,149,223,123,179,160,227,227,115,164,26,107,163,150,21,197,118,85,150,206,225,189,55,204,9,249,63,16,135,228,97,38,155,76,116,15,135,225,187,59,152,236,230,25,80,183,222,41,179,175,161,128,223,242,186,103,253,169,213,255,212,231,238,222,122,159,199,30,14,248,225,4,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("d5052677-0d7d-4edd-80c7-24b931b3f15f"));
		}

		#endregion

	}

	#endregion

}

