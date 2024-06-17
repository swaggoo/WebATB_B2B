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
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,229,145,93,75,195,48,20,134,175,215,95,17,118,213,193,232,15,112,42,212,58,199,64,244,162,157,8,226,69,150,156,109,145,246,164,228,163,82,100,255,221,172,165,219,226,58,118,35,120,97,46,2,201,57,239,115,62,94,171,5,174,73,90,107,3,197,36,176,205,43,3,165,168,150,43,19,37,82,65,255,111,52,69,35,140,0,125,33,28,77,43,64,179,207,122,120,141,82,80,149,96,59,97,128,180,0,93,82,6,187,255,70,81,55,233,143,194,181,131,160,116,240,21,16,119,222,122,98,97,202,54,80,208,39,135,32,55,100,24,51,38,45,154,152,115,5,90,15,71,239,141,176,180,203,92,48,194,114,170,53,241,83,146,13,197,53,116,52,114,69,238,168,134,158,58,13,167,109,227,136,40,43,55,174,224,64,42,41,56,121,198,57,106,80,6,120,40,151,31,192,12,209,128,28,212,152,180,192,120,101,64,53,212,88,173,53,129,209,30,119,0,239,206,210,181,16,29,193,58,10,140,38,94,94,69,21,161,222,52,110,5,97,91,107,212,138,78,5,214,65,19,137,232,218,19,18,157,192,39,68,11,47,62,9,6,131,193,185,162,115,126,42,159,129,201,234,18,120,34,115,91,224,11,205,45,92,207,172,224,183,97,231,205,156,15,207,207,145,26,106,172,94,148,156,186,85,57,58,194,103,103,152,23,10,127,32,250,228,81,166,234,76,182,15,143,17,250,59,24,31,230,57,162,110,131,75,102,223,67,14,191,229,117,199,250,83,171,255,169,207,237,189,13,190,1,83,83,20,191,4,5,0,0 };
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

