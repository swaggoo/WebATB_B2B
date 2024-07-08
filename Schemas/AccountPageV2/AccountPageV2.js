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
			WatbBulkEmailLinkDetail: {
				schemaName: "WatbBulkEmailLinkDetail",
				filter: {
					masterColumn: "Id",
					detailColumn: "Account"
				}
			}
		}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/,
		methods: {},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "UsrDepartmentType32ad90b6-cca5-4997-bc24-8200eb8f82b5",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 9,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrDepartmentType"
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 9
			}
		]/**SCHEMA_DIFF*/
	};
});
