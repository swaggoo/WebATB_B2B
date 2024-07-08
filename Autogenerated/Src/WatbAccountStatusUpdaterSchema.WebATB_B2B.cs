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
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,189,88,223,115,163,54,16,126,142,255,10,226,135,27,60,19,24,227,216,49,158,52,55,147,115,156,171,31,154,203,213,73,211,87,1,75,204,12,70,174,4,110,61,189,252,239,149,248,41,64,96,156,115,202,67,38,136,213,183,171,253,190,93,73,142,168,23,188,42,171,61,13,97,115,221,139,226,183,39,32,4,81,236,134,250,28,19,144,143,234,139,32,244,66,15,104,195,231,187,47,215,189,94,128,54,64,183,200,6,229,254,79,125,5,100,231,217,64,123,255,246,20,246,108,35,203,247,108,197,246,17,165,202,173,109,227,40,8,87,33,10,35,250,188,117,80,8,36,182,74,108,99,123,226,237,216,176,66,153,13,155,71,0,57,56,240,247,202,215,200,115,148,0,254,46,65,44,29,229,38,254,162,63,34,66,65,237,79,193,176,70,19,107,168,217,19,215,212,198,232,106,164,153,83,123,170,25,200,70,150,141,198,8,141,198,253,193,117,55,111,200,14,189,29,180,59,52,92,11,93,142,198,134,102,93,142,109,109,60,180,39,26,186,186,28,106,211,161,97,142,93,3,96,120,133,58,59,196,193,43,102,57,110,247,232,24,134,101,14,71,6,91,211,212,210,198,198,112,166,153,14,251,207,112,167,174,3,200,181,38,14,116,246,232,96,59,218,64,16,222,58,14,1,74,159,246,91,168,57,156,205,38,166,61,25,94,106,179,169,201,114,122,105,186,218,108,102,218,26,92,153,142,11,19,147,39,152,59,44,60,38,148,239,48,115,240,68,246,79,56,97,186,180,44,245,153,2,153,227,32,0,150,100,28,40,81,233,245,34,35,32,158,177,116,6,57,118,33,20,254,236,16,201,140,98,157,238,121,232,16,166,158,190,236,151,142,90,5,46,48,133,136,249,227,185,138,90,198,58,191,81,130,200,247,7,37,179,114,0,121,16,36,91,222,189,7,190,67,239,61,223,7,158,200,91,233,135,178,35,129,44,17,115,141,104,74,203,61,38,119,41,81,244,14,124,38,74,194,87,250,107,171,65,235,202,171,254,154,2,200,80,19,111,217,91,11,180,242,227,71,153,17,157,241,193,101,229,204,177,31,109,130,63,144,31,193,47,22,198,254,103,181,255,130,66,107,73,31,240,3,128,243,188,245,49,114,242,85,244,155,147,194,28,135,132,213,102,18,83,246,246,113,49,101,30,250,85,197,228,170,145,147,255,233,211,1,10,7,53,180,186,184,50,31,34,23,9,112,22,86,29,165,25,137,63,171,188,62,210,74,108,76,220,69,67,67,146,80,195,159,55,233,40,248,20,62,48,66,105,143,238,28,96,125,68,26,174,60,212,99,194,172,111,92,146,24,203,209,20,111,111,189,90,51,231,98,109,234,45,105,247,42,183,152,150,6,202,119,111,86,75,135,43,132,134,132,137,129,213,200,3,155,81,45,80,142,68,189,215,0,72,188,129,28,70,227,29,62,173,183,85,58,79,134,185,93,227,224,200,240,30,249,20,25,22,108,144,231,31,135,197,195,91,240,105,82,60,135,108,113,244,14,192,187,223,31,191,61,215,250,73,235,70,114,158,32,232,172,55,177,61,233,27,89,108,182,225,94,229,220,13,88,67,104,172,37,233,147,243,116,158,238,244,49,216,209,48,242,144,98,194,142,143,73,14,22,51,118,50,176,152,174,106,214,9,132,17,9,26,18,127,221,86,132,105,161,85,14,28,39,63,216,172,190,51,250,89,3,73,253,173,236,53,203,202,247,168,190,197,235,162,193,111,40,64,175,64,46,148,126,26,92,85,192,5,188,206,246,168,68,171,242,210,150,91,22,133,219,205,94,90,149,205,208,210,162,107,49,207,75,170,155,125,203,177,227,236,236,172,235,60,241,104,192,166,73,117,85,64,49,161,36,12,117,58,154,53,117,253,3,167,190,211,201,47,113,114,42,249,165,49,215,24,202,189,136,153,174,111,5,130,29,171,76,118,109,164,220,94,21,134,231,236,102,19,66,242,241,197,11,215,236,246,194,180,204,45,213,100,112,142,55,91,68,60,138,3,222,157,245,197,95,17,242,133,242,16,89,248,255,156,23,247,46,22,128,244,54,54,144,110,19,137,5,203,151,159,18,125,35,70,153,43,173,48,168,144,85,89,97,38,214,42,44,187,228,179,140,40,159,149,97,39,97,230,135,241,147,169,208,78,17,127,90,134,98,169,138,78,4,7,237,10,20,13,69,21,136,227,39,214,96,99,54,74,188,139,1,188,151,248,58,240,145,204,231,87,195,83,111,127,44,111,240,211,228,243,206,125,91,224,53,108,19,169,171,3,141,168,108,91,234,7,229,79,31,45,6,193,93,185,15,148,195,120,119,47,144,193,119,84,69,252,211,79,237,126,116,148,52,210,119,154,93,151,90,148,18,197,63,47,165,10,73,126,107,170,237,176,197,41,168,118,146,212,89,160,233,113,38,117,198,82,159,8,64,207,57,83,243,64,36,0,47,107,32,144,136,165,254,113,73,99,98,213,26,98,51,187,201,130,244,197,63,96,71,108,45,165,67,65,242,247,173,247,31,107,207,46,135,209,21,0,0 };
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

