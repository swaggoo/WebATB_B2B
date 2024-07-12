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
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,237,146,223,106,131,48,20,198,239,125,138,208,43,133,226,3,172,93,193,185,182,20,198,118,161,221,6,99,23,49,57,109,51,52,145,252,17,100,244,221,23,13,174,218,89,122,51,216,205,114,33,36,231,124,191,124,39,159,200,40,198,247,40,169,149,134,98,230,185,93,10,82,98,37,118,58,140,133,132,241,211,112,201,53,211,12,212,149,114,184,172,128,235,239,174,213,107,152,128,172,24,185,40,92,97,162,133,108,193,30,199,5,168,18,19,104,116,45,177,110,113,15,204,218,229,32,149,247,233,33,187,222,70,106,126,66,14,80,224,71,139,64,183,104,242,130,117,22,17,34,12,215,43,150,195,36,120,111,149,165,201,114,70,16,201,177,82,168,87,143,15,152,239,161,99,161,27,116,135,21,140,220,210,66,156,137,30,78,84,118,38,70,1,85,130,81,244,196,55,92,129,212,64,125,145,125,0,209,72,1,167,32,167,200,1,163,157,6,217,82,35,185,87,8,130,111,220,9,220,172,204,90,8,123,176,142,2,193,108,208,87,97,137,240,105,20,59,189,239,46,10,156,226,103,183,177,196,88,112,110,189,49,193,173,160,39,15,183,131,162,77,229,194,93,27,122,38,92,131,78,235,18,104,44,114,83,240,103,156,27,152,175,13,163,11,127,18,117,146,201,101,239,137,198,218,168,109,73,177,125,30,139,142,155,140,220,223,81,55,236,121,52,210,183,240,131,51,135,99,180,48,149,117,42,220,102,64,241,135,47,49,61,205,214,243,121,244,174,229,125,15,57,252,86,220,29,235,63,237,191,74,219,125,143,222,23,97,224,78,31,44,5,0,0 };
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

