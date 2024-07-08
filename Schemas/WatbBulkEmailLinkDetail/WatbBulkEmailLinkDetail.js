define("WatbBulkEmailLinkDetail", [], function() {
	return {
		entitySchemaName: "WatbBulkEmailLink",
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
		diff: /**SCHEMA_DIFF*/[]/**SCHEMA_DIFF*/,
		methods: {
			getCopyRecordMenuItem: Terrasoft.emptyFn,
			getEditRecordMenuItem: Terrasoft.emptyFn,
			getDeleteRecordMenuItem: Terrasoft.emptyFn,
			
			getAddRecordButtonVisible: function() {
				return false;
			},
			
			getAddTypedRecordButtonVisible: function() {
				return false;
			},
		}
	};
});
