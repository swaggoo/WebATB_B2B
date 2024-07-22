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
		methods: {
			init: function() {
				this.callParent(arguments);
				Terrasoft.ServerChannel.on(Terrasoft.EventName.ON_MESSAGE, this.onOrdeFileSaved, this);
			},

			onOrdeFileSaved: function(sender, message) {
				if (message && message.Header && message.Header.Sender === "OrderFileChangeListener") {
					this.reloadGridData();
				}
			}
		}
	};
});
