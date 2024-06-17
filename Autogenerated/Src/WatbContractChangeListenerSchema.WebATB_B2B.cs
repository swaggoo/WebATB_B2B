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
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,237,145,223,74,195,48,20,198,239,251,20,135,94,181,48,250,0,78,133,90,231,24,136,94,180,19,65,188,200,146,179,45,210,38,37,127,42,69,246,238,102,237,186,181,179,176,27,189,51,23,129,228,124,223,47,231,203,177,154,139,13,164,181,54,88,76,61,219,156,50,84,138,104,185,54,81,34,21,142,223,70,51,97,184,225,168,47,148,163,89,133,194,28,85,15,175,81,138,170,226,116,111,244,4,41,80,151,132,226,254,190,113,212,141,252,145,187,118,4,42,237,125,121,224,214,219,72,45,72,233,22,11,242,228,16,112,3,126,34,133,81,132,26,63,124,111,44,165,93,229,156,2,205,137,214,208,21,147,45,17,27,236,8,112,5,119,68,227,8,187,33,180,79,247,88,178,114,17,57,67,168,36,103,240,44,22,66,163,50,200,2,185,250,64,106,64,163,96,168,38,208,2,227,181,65,213,80,99,181,209,128,225,17,119,2,239,215,202,181,16,245,96,29,5,195,233,64,87,17,5,244,144,195,5,14,218,87,194,86,254,83,106,29,206,197,22,174,49,46,133,51,116,222,104,57,168,184,41,156,91,9,165,210,10,179,96,125,215,28,77,86,151,200,18,153,219,66,188,144,220,226,245,220,114,118,27,248,113,167,247,71,90,62,192,82,67,140,213,203,146,17,247,43,142,43,240,19,226,145,82,112,134,24,179,71,153,170,51,217,30,6,140,96,24,122,114,74,210,163,238,188,75,115,189,199,28,127,107,172,29,235,127,170,127,61,213,118,223,121,223,137,83,215,49,209,4,0,0 };
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

