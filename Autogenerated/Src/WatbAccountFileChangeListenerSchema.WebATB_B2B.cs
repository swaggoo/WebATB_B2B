namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: WatbAccountFileChangeListenerSchema

	/// <exclude/>
	public class WatbAccountFileChangeListenerSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public WatbAccountFileChangeListenerSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public WatbAccountFileChangeListenerSchema(WatbAccountFileChangeListenerSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("1154854c-1c94-4174-85e5-c314245316dd");
			Name = "WatbAccountFileChangeListener";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("7a77d891-77bf-4563-bb36-319b80ce9f18");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,237,145,223,74,195,48,20,198,239,251,20,161,87,45,140,60,128,83,161,214,109,12,68,47,218,169,32,94,164,201,217,22,105,147,146,63,149,34,123,119,179,150,110,237,236,216,141,120,101,46,10,201,119,190,223,57,167,31,178,154,139,13,74,106,109,160,152,122,237,45,5,165,136,150,107,131,99,169,96,252,21,207,132,225,134,131,190,32,227,89,5,194,28,170,230,175,56,1,85,113,186,55,122,130,20,160,75,66,97,255,222,56,234,166,252,129,187,113,4,40,237,125,121,200,157,183,17,45,72,232,22,10,242,232,16,232,6,249,47,196,100,17,165,210,10,51,231,57,248,225,123,227,44,109,150,115,138,104,78,180,70,61,61,222,18,177,129,142,133,174,208,29,209,48,210,165,129,180,67,244,112,178,114,203,114,6,168,146,156,161,39,177,20,26,148,1,22,200,236,3,168,65,26,4,3,53,65,45,48,90,27,80,13,53,82,27,141,32,60,224,142,224,253,201,220,8,184,7,235,40,16,78,7,117,21,81,136,28,87,113,219,7,109,163,176,117,252,172,182,142,24,75,33,220,108,92,10,103,232,217,241,106,32,186,84,206,244,90,178,19,227,2,76,90,151,192,98,153,219,66,60,147,220,194,245,194,114,118,27,248,81,103,241,207,207,158,24,98,172,94,149,140,184,223,227,208,2,62,187,132,6,82,112,130,24,179,227,84,213,169,108,47,3,70,48,92,125,114,92,166,71,221,121,151,2,190,135,28,126,43,223,142,245,31,239,159,197,219,126,119,222,55,9,194,31,191,238,4,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("1154854c-1c94-4174-85e5-c314245316dd"));
		}

		#endregion

	}

	#endregion

}

