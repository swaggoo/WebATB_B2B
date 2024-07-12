define("AccountPageV2", [], function () {
	return {
		entitySchemaName: "Account",
		attributes: {
			"WatbEmail": {
				"dependencies": [
					{
						"columns": ["WatbEmail"],
						"methodName": "syncEntityWithCommunicationDetail"
					}
				]
			},
		},
		messages: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{
			"WatbBulkEmailLinkDetail": {
				"schemaName": "WatbBulkEmailLinkDetail",
				"filter": {
					"masterColumn": "Id",
					"detailColumn": "Account"
				}
			}
		}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/,
		methods: {},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[]/**SCHEMA_DIFF*/
	};
});
