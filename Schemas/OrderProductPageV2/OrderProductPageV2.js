 define("OrderProductPageV2", [], function() {
	return {
		entitySchemaName: "OrderProduct",
		attributes: {},
		messages: {},
		methods: {
			onSaved: function() {
				this.callParent(arguments);
				console.log(1);
			}
		},
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
		rules: {},
		diff: /**SCHEMA_DIFF*/[]/**SCHEMA_DIFF*/
	};
});

