﻿namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: WatbAccountStatusUpdaterSchema

	/// <exclude/>
	public class WatbAccountStatusUpdaterSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public WatbAccountStatusUpdaterSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public WatbAccountStatusUpdaterSchema(WatbAccountStatusUpdaterSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("b7e36c53-5e21-4729-a22d-0cd68157c24d");
			Name = "WatbAccountStatusUpdater";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("7a77d891-77bf-4563-bb36-319b80ce9f18");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,237,88,75,115,219,54,16,62,91,191,130,214,33,35,205,152,28,81,15,139,26,215,153,113,100,57,213,33,142,83,217,117,175,32,185,180,56,67,17,42,64,170,213,52,254,239,89,240,253,0,105,41,81,58,61,148,7,143,9,46,190,93,236,247,237,2,80,200,93,255,69,89,237,121,0,155,171,78,24,189,61,2,99,132,83,39,208,230,148,129,124,84,91,248,129,27,184,192,27,62,223,126,184,234,116,124,178,1,190,37,22,40,119,127,104,43,96,59,215,2,222,249,167,163,224,179,13,77,207,181,20,203,35,156,43,55,150,69,67,63,88,5,36,8,249,211,214,38,1,176,200,42,182,141,236,153,187,195,97,133,163,13,206,99,64,108,234,123,123,229,99,232,218,138,15,127,149,32,150,182,114,29,125,209,30,8,227,208,235,78,65,55,135,19,115,160,90,19,199,80,199,228,114,168,26,83,107,170,234,196,34,166,69,198,132,12,199,221,254,213,97,222,136,21,184,59,104,119,168,59,38,25,13,199,186,106,142,198,150,58,30,88,19,149,92,142,6,234,116,160,27,99,71,7,24,92,146,131,29,82,255,133,98,142,219,61,218,186,110,26,131,161,142,107,154,154,234,88,31,204,84,195,198,255,116,103,234,216,64,28,115,98,195,193,30,109,106,133,27,240,131,27,219,102,192,249,227,126,11,53,135,179,217,196,176,38,131,145,58,155,26,152,211,145,225,168,179,153,97,169,112,105,216,14,76,12,145,96,225,48,247,24,83,190,163,232,224,145,237,31,105,204,116,105,89,189,39,14,108,78,125,31,48,201,212,87,194,210,235,69,74,64,52,99,105,247,51,236,92,40,226,217,17,150,26,69,58,221,139,208,33,72,60,125,216,47,237,94,21,56,199,44,68,44,30,215,81,122,101,172,243,107,197,15,61,175,95,50,43,7,144,5,193,210,229,221,185,224,217,252,206,245,60,16,137,188,145,126,40,59,42,144,85,196,92,19,158,208,114,71,217,109,66,20,191,5,15,69,201,196,74,127,109,53,104,93,121,213,95,83,0,41,106,236,45,125,107,129,86,190,126,45,51,162,33,31,66,86,246,156,122,225,198,255,157,120,33,252,98,82,234,189,239,117,159,73,96,46,249,61,189,7,176,159,182,30,37,118,182,138,110,115,82,208,113,192,176,54,227,152,210,183,159,23,83,234,161,91,85,76,166,26,57,249,239,222,189,65,97,191,134,86,23,87,234,163,200,69,12,156,134,85,71,105,70,18,207,42,171,143,164,18,27,19,119,209,208,144,36,212,136,231,85,58,10,30,135,159,24,161,180,71,31,28,96,125,68,26,174,60,212,99,194,172,111,92,146,24,203,209,228,111,175,157,90,51,23,98,109,234,45,73,247,42,183,152,150,6,42,118,111,172,165,183,43,132,7,12,197,128,53,114,143,51,170,5,42,144,184,251,226,3,139,54,144,183,209,68,135,79,234,109,149,204,147,97,110,215,212,63,50,188,7,49,69,134,5,27,226,122,199,97,137,240,22,98,154,20,207,102,91,26,126,7,224,237,111,15,159,159,106,253,164,117,35,57,143,17,52,236,77,184,39,125,102,139,205,54,216,247,4,119,125,108,8,141,181,36,125,50,158,206,147,157,62,2,59,26,70,30,82,68,216,241,49,201,193,34,198,78,6,22,209,85,205,58,131,32,100,126,67,226,175,218,138,48,41,180,202,129,227,228,7,155,213,23,164,31,27,72,226,111,101,173,49,43,95,194,250,22,175,21,13,62,17,159,188,0,187,80,186,73,112,85,1,231,240,26,238,81,177,86,229,165,45,183,204,11,247,48,123,105,85,54,67,75,139,174,197,60,43,169,195,236,91,142,29,103,103,103,135,206,43,30,13,112,154,84,87,57,20,10,37,102,232,160,163,89,83,215,127,227,212,119,58,249,197,78,78,37,191,36,230,26,67,153,151,98,166,235,91,65,193,14,43,19,175,141,92,216,247,10,195,115,188,217,4,16,127,124,118,131,53,222,94,80,203,194,178,23,15,206,233,102,75,152,203,169,47,186,179,182,248,51,36,94,161,60,138,44,252,123,206,243,123,23,6,32,189,141,245,165,219,68,108,129,249,242,18,162,175,139,81,102,74,203,13,42,100,85,86,152,138,181,10,139,151,124,204,136,242,94,25,28,36,204,236,48,126,50,21,90,9,226,15,203,176,88,170,69,39,5,7,237,10,44,26,22,85,80,28,63,177,6,27,179,81,226,189,24,192,247,18,95,7,62,146,249,236,106,248,223,99,94,180,237,108,107,247,106,91,208,255,2,248,33,1,68,191,242,212,174,66,71,169,32,121,231,233,205,168,69,20,97,244,75,82,162,135,248,103,165,218,102,154,31,120,106,135,70,13,3,77,78,46,137,51,204,120,204,184,150,81,213,203,2,145,0,60,175,129,65,172,142,250,199,37,143,248,236,213,16,155,73,141,23,164,45,254,6,43,196,181,148,246,255,248,239,107,231,27,114,60,96,56,188,21,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("b7e36c53-5e21-4729-a22d-0cd68157c24d"));
		}

		#endregion

	}

	#endregion

}
