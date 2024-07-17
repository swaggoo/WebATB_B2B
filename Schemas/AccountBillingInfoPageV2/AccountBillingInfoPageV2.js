define("AccountBillingInfoPageV2", ["BusinessRuleModule"],
	function(BusinessRuleModule) {
		return {
			entitySchemaName: "AccountBillingInfo",
			attributes: {},
			details: /**SCHEMA_DETAILS*/{
			}/**SCHEMA_DETAILS*/,
			methods: {},
			diff: /**SCHEMA_DIFF*/[
				{
					"operation": "insert",
					"parentName": "Header",
					"propertyName": "items",
					"values": {
						"name": "Account",
						"bindTo": "Account",
						"layout": {
							"column": 0,
							"row": 0,
							"colSpan": 12
						},
						"enabled": true
					}
				}
			]/**SCHEMA_DIFF*/,
			rules: {},
			userCode: {}
		};
	}
);
