define("ProductPageV2", [], function() {
	return {
		entitySchemaName: "Product",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/,
		methods: {},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "merge",
				"name": "Name",
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
				"name": "Type3469e9c8-585d-40df-b0e7-d33c03464637",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Header"
					},
					"bindTo": "Type"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "WatbCertificateTypesb9c55f7f-c1c4-4a53-b963-3b2b3d3d64ee",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 1,
						"layoutName": "Header"
					},
					"bindTo": "WatbCertificateTypes",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Code764e1cb9-c409-47a5-a896-45ab6f17e6e2",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "Header"
					},
					"bindTo": "Code"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "WatbNominal12a2679e-a22f-406f-8bd9-6db1b00136ee",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 2,
						"layoutName": "Header"
					},
					"bindTo": "WatbNominal"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "Price629c8c0e-be69-4a9b-8508-8442e1fff1ed",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "Header"
					},
					"bindTo": "Price"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "ShortDescription0eb4b73f-8a19-40c5-85ab-c979584ef78d",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 3,
						"layoutName": "Header"
					},
					"bindTo": "ShortDescription"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "Owner08528caa-24b2-49f3-96e5-056c580ac74d",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 4,
						"layoutName": "Header"
					},
					"bindTo": "Owner"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "URL987ae466-dd00-472b-a831-ecfd47c3eb36",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 4,
						"layoutName": "Header"
					},
					"bindTo": "URL"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "IsArchive644c87dd-7daf-4ede-93ab-f27e78a9cc0f",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 5,
						"layoutName": "Header"
					},
					"bindTo": "IsArchive"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 9
			},
			{
				"operation": "merge",
				"name": "ESNTab",
				"values": {
					"order": 3
				}
			},
			{
				"operation": "merge",
				"name": "ProductGeneralInfoTab",
				"values": {
					"order": 0
				}
			},
			{
				"operation": "merge",
				"name": "ProductPricesTab",
				"values": {
					"order": 2
				}
			},
			{
				"operation": "merge",
				"name": "ProductFilesTab",
				"values": {
					"order": 1
				}
			},
			{
				"operation": "remove",
				"name": "PhotoContainer"
			},
			{
				"operation": "remove",
				"name": "Photo"
			},
			{
				"operation": "remove",
				"name": "CommonControlGroup"
			},
			{
				"operation": "remove",
				"name": "ProductGeneralInfoBlock"
			},
			{
				"operation": "remove",
				"name": "Code"
			},
			{
				"operation": "remove",
				"name": "Owner"
			},
			{
				"operation": "remove",
				"name": "URL"
			},
			{
				"operation": "remove",
				"name": "IsArchive"
			},
			{
				"operation": "remove",
				"name": "ProductCategoryControlGroup"
			},
			{
				"operation": "remove",
				"name": "ProductCategoryBlock"
			},
			{
				"operation": "remove",
				"name": "Category"
			},
			{
				"operation": "remove",
				"name": "TradeMark"
			},
			{
				"operation": "remove",
				"name": "Type"
			},
			{
				"operation": "remove",
				"name": "PriceControlGroup"
			},
			{
				"operation": "remove",
				"name": "ProductPriceBlock"
			},
			{
				"operation": "remove",
				"name": "Price"
			},
			{
				"operation": "remove",
				"name": "Tax"
			},
			{
				"operation": "remove",
				"name": "Unit"
			},
			{
				"operation": "remove",
				"name": "SelectionInformationTab"
			},
			{
				"operation": "remove",
				"name": "SelectionInformationControlGroup"
			},
			{
				"operation": "remove",
				"name": "SelectionInformationBlock"
			},
			{
				"operation": "remove",
				"name": "ShortDescription"
			},
			{
				"operation": "remove",
				"name": "GeneralConditions"
			},
			{
				"operation": "remove",
				"name": "Benefits"
			},
			{
				"operation": "remove",
				"name": "ProductSpecificationTab"
			},
			{
				"operation": "remove",
				"name": "ProductSpecificationDetail"
			}
		]/**SCHEMA_DIFF*/
	};
});
