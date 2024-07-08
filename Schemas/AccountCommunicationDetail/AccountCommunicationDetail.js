 define("AccountCommunicationDetail", [], function() {
	return {
		attributes: {},
		messages: {},
		methods: {
			_watbExteranlEmailTypeId: '4a60d0d5-7d2f-4e4e-a66e-d32df38d3ca8',
			
			initMasterDetailColumnMapping: function() {
				this.callParent(arguments);
				this.set("MasterDetailColumnMapping", [
					...this.get("MasterDetailColumnMapping"),
					{
						"CommunicationType": this._watbExteranlEmailTypeId,
						"MasterEntityColumn": "WatbEmail"
					},
				]);
			}
		},
		diff: []
	};
});