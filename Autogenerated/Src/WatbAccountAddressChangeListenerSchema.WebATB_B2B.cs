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
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,237,146,77,107,194,48,24,199,207,246,83,4,79,45,72,15,59,78,39,180,157,138,48,182,67,235,54,24,99,196,228,81,51,218,164,228,165,80,134,223,125,105,75,167,65,197,203,96,151,229,16,72,242,252,127,207,203,63,70,49,190,69,105,173,52,20,99,207,180,167,249,107,152,130,172,24,1,213,95,101,32,37,86,98,163,195,68,72,8,103,92,51,205,174,62,135,179,10,184,190,20,53,199,68,11,217,82,60,142,11,80,37,38,128,94,96,29,101,241,71,124,19,123,95,30,178,235,173,165,213,45,234,129,217,58,57,72,63,37,59,40,240,163,85,161,59,52,140,8,17,134,235,136,82,9,74,13,131,247,86,88,154,117,206,8,34,57,86,10,185,33,201,14,243,45,244,52,116,139,98,172,224,76,158,150,211,149,113,68,20,149,109,132,81,64,149,96,20,61,241,37,87,32,53,80,95,172,63,129,104,164,128,83,144,35,212,1,163,141,6,217,82,35,185,85,8,130,31,220,1,220,172,181,45,33,60,130,245,20,8,198,78,92,133,37,194,78,55,118,4,126,151,43,232,68,167,2,99,161,137,224,220,150,199,4,183,2,151,16,174,156,247,177,55,24,12,46,37,93,210,83,249,2,116,86,151,64,19,145,155,130,63,227,220,192,100,97,24,157,250,189,55,75,58,188,220,71,170,177,54,106,85,82,108,71,101,233,73,99,89,247,61,234,134,61,137,206,196,77,125,11,116,136,231,104,97,38,235,76,116,7,135,226,187,35,25,29,218,59,170,115,239,93,243,254,30,114,248,45,235,123,214,159,58,255,111,123,99,123,183,239,189,111,151,241,250,174,31,5,0,0 };
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

