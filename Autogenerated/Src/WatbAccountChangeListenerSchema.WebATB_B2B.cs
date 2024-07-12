namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: WatbAccountChangeListenerSchema

	/// <exclude/>
	public class WatbAccountChangeListenerSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public WatbAccountChangeListenerSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public WatbAccountChangeListenerSchema(WatbAccountChangeListenerSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("341afe6c-6dc7-44cb-bf60-6d820a707bd9");
			Name = "WatbAccountChangeListener";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("7a77d891-77bf-4563-bb36-319b80ce9f18");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,173,148,75,111,155,64,16,199,207,182,228,239,176,242,9,36,139,67,143,205,67,2,242,144,165,166,61,64,154,72,85,85,45,236,216,217,10,239,90,251,160,66,149,191,123,7,22,18,112,112,106,183,217,139,61,204,206,111,254,51,204,96,53,23,107,146,84,218,192,230,108,54,181,141,121,243,24,36,160,74,158,131,126,126,150,130,82,84,203,149,9,98,169,32,184,22,134,27,254,119,127,112,93,130,48,7,175,221,208,220,72,53,206,185,163,188,64,29,130,129,66,239,108,42,232,6,244,150,230,64,30,32,11,211,232,71,244,33,154,77,127,207,166,4,207,183,38,97,213,100,251,196,177,26,1,202,75,242,39,216,208,207,24,71,46,200,60,204,115,105,133,153,251,223,93,200,214,102,5,207,73,94,80,173,73,235,140,159,168,88,67,7,32,31,73,68,53,140,160,29,161,205,221,131,201,18,229,115,6,164,148,156,145,47,34,161,37,22,229,201,236,39,228,134,232,166,152,5,113,192,8,86,216,130,6,27,170,181,38,224,191,224,122,228,250,100,168,34,120,166,117,24,240,207,134,215,74,170,8,117,133,96,193,158,75,227,235,174,133,251,87,173,6,21,75,33,80,26,151,2,35,218,216,224,126,224,192,200,201,100,114,48,211,146,245,34,111,193,164,213,22,88,44,11,187,17,95,105,97,225,252,214,114,118,233,205,151,108,62,166,87,192,175,182,247,137,161,198,234,227,96,15,212,100,238,254,1,44,237,51,239,183,140,26,124,157,23,36,174,95,182,27,186,170,230,159,135,35,247,46,189,125,226,208,226,43,226,141,241,131,165,30,224,220,48,177,59,42,44,45,138,202,27,246,123,241,210,192,197,171,46,248,254,48,229,222,60,212,103,84,65,2,38,68,122,9,238,49,154,6,39,230,10,125,39,101,223,43,127,55,52,161,208,240,111,242,82,85,165,210,25,131,132,111,137,107,255,190,161,105,87,127,29,58,227,192,34,94,65,1,6,216,248,38,134,43,20,119,202,34,118,180,99,54,49,100,76,129,214,255,179,144,45,226,245,94,30,181,148,93,244,233,187,249,190,75,244,78,19,209,199,182,67,128,63,187,63,76,184,179,109,201,6,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("341afe6c-6dc7-44cb-bf60-6d820a707bd9"));
		}

		#endregion

	}

	#endregion

}

