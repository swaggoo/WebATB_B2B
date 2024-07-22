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
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,237,146,223,106,131,48,20,198,239,125,138,224,149,66,241,1,214,174,224,92,91,10,99,187,208,110,131,177,139,152,156,182,25,154,72,254,8,50,250,238,75,117,182,218,41,189,25,236,102,185,16,146,115,190,95,190,147,79,100,20,227,59,20,87,74,67,62,117,154,93,2,82,98,37,182,58,136,132,132,225,211,96,193,53,211,12,212,149,114,176,40,129,235,83,215,242,53,136,65,150,140,140,10,151,152,104,33,107,176,195,113,14,170,192,4,80,141,171,106,214,3,179,94,57,72,229,124,58,200,174,183,129,154,23,147,61,228,248,209,234,209,45,114,95,176,78,67,66,132,225,122,201,50,112,253,247,90,89,152,52,99,4,145,12,43,133,58,245,104,143,249,14,90,22,186,65,119,88,193,192,45,53,164,49,209,193,137,210,14,196,40,160,82,48,138,158,248,154,43,144,26,168,39,210,15,32,26,41,224,20,228,228,123,164,112,171,65,214,212,80,238,20,2,255,132,59,131,143,43,181,22,130,14,172,165,128,63,237,245,149,88,34,124,30,197,78,239,53,23,249,141,226,103,183,177,196,72,112,110,189,49,193,173,160,35,15,54,189,162,141,100,228,174,53,189,16,174,64,39,85,1,52,18,153,201,249,51,206,12,204,86,134,209,185,231,134,173,196,29,247,30,107,172,141,218,20,20,219,231,177,232,232,152,81,243,107,84,71,246,44,28,232,155,123,254,133,195,33,90,144,200,42,17,205,166,71,241,250,47,49,57,207,214,241,121,112,174,229,125,15,25,252,86,220,45,235,63,237,191,74,187,249,30,156,47,204,223,88,196,41,5,0,0 };
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

