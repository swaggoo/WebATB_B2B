define("AccountMiniPage", [], function() {
	return {
		entitySchemaName: "Account",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/,
		methods: {},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "merge",
				"name": "HeaderContainer",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0
					}
				}
			},
			{
				"operation": "insert",
				"name": "Namec6ca6937-7f40-49d4-99f4-5fd302fca29f",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "MiniPage"
					},
					"isMiniPageModelItem": true,
					"visible": {
						"bindTo": "isAddMode"
					},
					"bindTo": "Name"
				},
				"parentName": "MiniPage",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "WatbDepartmentType5b6a0be1-7553-4ff3-8977-3ffc944b2c3c",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "MiniPage"
					},
					"isMiniPageModelItem": true,
					"visible": {
						"bindTo": "isAddMode"
					},
					"bindTo": "WatbDepartmentType"
				},
				"parentName": "MiniPage",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "merge",
				"name": "WebContainer",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 1
					}
				}
			},
			{
				"operation": "merge",
				"name": "FullAddress",
				"values": {
					"layout": {
						"colSpan": 21,
						"rowSpan": 1,
						"column": 0,
						"row": 2
					}
				}
			},
			{
				"operation": "merge",
				"name": "OwnerButtonContainer",
				"values": {
					"layout": {
						"colSpan": 6,
						"rowSpan": 1,
						"column": 18,
						"row": 3
					}
				}
			},
			{
				"operation": "move",
				"name": "OwnerButtonContainer",
				"parentName": "MiniPage",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "merge",
				"name": "Owner",
				"values": {
					"layout": {
						"colSpan": 18,
						"rowSpan": 1,
						"column": 0,
						"row": 3
					}
				}
			},
			{
				"operation": "merge",
				"name": "PrimaryContactButtonContainer",
				"values": {
					"layout": {
						"colSpan": 6,
						"rowSpan": 1,
						"column": 18,
						"row": 4
					}
				}
			},
			{
				"operation": "move",
				"name": "PrimaryContactButtonContainer",
				"parentName": "MiniPage",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "merge",
				"name": "PrimaryContact",
				"values": {
					"layout": {
						"colSpan": 18,
						"rowSpan": 1,
						"column": 0,
						"row": 4
					}
				}
			},
			{
				"operation": "remove",
				"name": "MiniPageEditModeContainer"
			},
			{
				"operation": "remove",
				"name": "NameInAddMode"
			},
			{
				"operation": "remove",
				"name": "PrimaryContactEdit"
			},
			{
				"operation": "remove",
				"name": "Phone"
			},
			{
				"operation": "remove",
				"name": "WebInEditMode"
			},
			{
				"operation": "remove",
				"name": "OwnerEdit"
			},
			{
				"operation": "remove",
				"name": "ShowMapButton"
			}
		]/**SCHEMA_DIFF*/
	};
});
