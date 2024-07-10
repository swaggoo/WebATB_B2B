﻿namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: WatbAccountCommunicationParentSynchronizerEventListenerSchema

	/// <exclude/>
	public class WatbAccountCommunicationParentSynchronizerEventListenerSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public WatbAccountCommunicationParentSynchronizerEventListenerSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public WatbAccountCommunicationParentSynchronizerEventListenerSchema(WatbAccountCommunicationParentSynchronizerEventListenerSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("448ebd96-dab3-4599-893e-ea55a3a020ad");
			Name = "WatbAccountCommunicationParentSynchronizerEventListener";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("7a77d891-77bf-4563-bb36-319b80ce9f18");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,197,85,93,139,155,64,20,125,207,175,24,124,88,20,130,63,160,219,45,24,99,150,64,146,134,38,219,109,41,37,140,227,77,50,69,103,100,102,12,216,146,255,222,209,209,172,26,221,205,66,161,247,73,102,238,199,57,231,222,185,34,134,19,144,41,38,128,158,189,237,196,157,96,9,110,112,2,166,22,84,42,96,32,228,232,207,8,105,203,36,101,7,180,201,245,105,114,223,56,217,130,16,88,242,189,114,125,46,116,44,83,84,81,144,55,184,152,58,218,179,116,253,81,30,231,173,218,246,134,28,33,193,43,141,17,61,32,203,35,132,103,76,249,60,73,50,70,9,86,148,51,203,249,89,134,167,89,24,83,130,36,224,24,34,68,98,44,101,201,168,47,102,141,133,46,178,201,25,57,10,206,232,111,16,173,170,232,67,25,89,72,241,158,176,18,134,209,170,1,136,159,52,121,26,1,58,113,26,161,207,108,131,79,16,217,60,252,5,68,105,180,44,2,49,70,134,186,183,87,85,74,79,28,36,2,231,146,235,37,107,97,97,209,163,58,83,157,2,28,163,120,203,243,132,5,130,50,183,150,207,120,34,44,171,114,149,238,181,209,61,178,141,175,251,8,106,155,167,16,249,60,206,18,246,21,199,25,124,124,204,104,244,201,182,90,130,20,78,243,200,114,208,195,67,169,216,46,248,182,13,190,120,43,111,177,11,150,222,124,177,219,126,95,7,187,249,212,105,21,106,147,41,236,41,141,176,234,211,218,0,181,175,2,10,51,88,199,168,247,178,30,21,107,224,254,109,162,85,130,130,222,80,141,103,172,194,32,193,52,182,42,237,107,59,143,94,190,222,154,135,41,196,160,254,209,68,212,185,186,51,81,219,123,102,163,235,154,73,16,62,103,76,131,212,237,209,33,149,132,79,173,243,87,234,253,199,249,42,240,99,211,207,160,102,220,230,99,118,82,110,214,205,18,51,124,168,222,115,215,10,236,115,38,21,102,4,38,121,177,152,46,163,98,57,253,17,190,0,61,221,213,40,183,203,118,250,115,165,217,13,186,133,156,199,90,183,181,160,9,22,249,0,134,187,187,54,127,119,6,138,28,103,130,39,211,201,13,77,105,188,133,193,252,58,220,199,44,136,168,50,9,58,76,199,205,39,217,124,57,183,225,237,3,39,149,208,63,23,13,175,145,173,152,148,87,248,92,66,86,89,18,130,232,163,115,61,61,133,181,209,108,64,53,178,106,0,203,237,100,70,153,158,9,138,227,245,145,51,208,36,77,45,55,72,82,149,247,244,185,39,171,222,231,118,143,231,121,112,183,212,95,215,31,169,224,74,11,175,255,132,237,125,83,34,31,88,179,134,146,180,171,39,66,154,126,65,181,108,171,187,180,17,54,180,147,154,62,215,138,93,90,54,238,43,116,99,243,238,59,90,156,71,231,191,42,187,142,41,208,8,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("448ebd96-dab3-4599-893e-ea55a3a020ad"));
		}

		#endregion

	}

	#endregion

}
