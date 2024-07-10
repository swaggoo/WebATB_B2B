define("OrderSectionV2", [], function() {
	return {
		entitySchemaName: "Order",
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
		diff: /**SCHEMA_DIFF*/[
			{
                "operation": "merge",
                "name": "SeparateModeAddRecordButton",
                "values": {
                    "caption": {"bindTo": "Resources.Strings.AddRecordButtonCaption"}
                }
            }
		]/**SCHEMA_DIFF*/,
		methods: {}
	};
});
