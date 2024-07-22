define("ContractPageV2", ["WatbCurrentUserRolesMixin"], function () {
	return {
		entitySchemaName: "Contract",
		mixins: {
			WatbCurrentUserRolesMixin: "Terrasoft.WatbCurrentUserRolesMixin"
		},
		attributes: {
			"Account": {
				"dataValueType": Terrasoft.DataValueType.LOOKUP,
				"lookupListConfig": {
					"filters": [
						function() {
							return this.filterAccountsLookupByUserRole();
						}
					]
				}
			}
		},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{
			"WatbInvoiceDetail": {
				"schemaName": "InvoiceDetailV2",
				"entitySchemaName": "Invoice",
				"filter": {
					"detailColumn": "Contract",
					"masterColumn": "Id"
				}
			}
		}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/,
		methods: {
			init: function () {
				this.callParent(arguments);
				this.on("change:WatbSigner", this.onSignerChange, this);
				this.setCurrentUserRoles();
			},

			onSignerChange: function () {
				var signer = this.get("WatbSigner");
				if (signer) {
					this.setSignerPosition(signer);
				} else {
					this.set("WatbSignerPosition", null);
				}
			},

			setSignerPosition: function (signer) {
				var signerId = signer.value;
				var esq = this.Ext.create("Terrasoft.EntitySchemaQuery", {
					rootSchemaName: "Contact"
				});
				esq.addColumn("JobTitle");
				esq.getEntity(signerId, function (response) {
					if (response.success) {
						var position = response.entity.get("JobTitle");
						this.set("WatbSignerPosition", position);
					}
				}, this);
			},

			asyncValidate: function (callback, scope) {
				this.callParent([function () {
					var beginDate = this.get('StartDate');
					var endDate = this.get('EndDate');

					var start = new Date(beginDate);
					var end = new Date(endDate);

					var yearsDifference = end.getFullYear() - start.getFullYear();
					var monthsDifference = end.getMonth() - start.getMonth();
					var totalMonths = yearsDifference * 12 + monthsDifference;

					var monthsText = this.getMonthsText(totalMonths);

					if (!isNaN(totalMonths) && totalMonths > 0) {
						this.set('WatbDuration', `${totalMonths} ${monthsText}`);

						if (end > new Date()) {
							this.set('WatbIsActive', true);
						} else {
							this.set('WatbIsActive', false);
						}
					}

					callback.call(scope || this, { success: true });
				}, this]);
			},
			getMonthsText: function (months) {
				if (months === 1) {
					return 'місяць';
				} else if (months >= 2 && months <= 4) {
					return 'місяці';
				} else {
					return 'місяців';
				}
			}
		},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "State2e815330-8f1b-482f-9105-71a0c7451af5",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "State",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "WatbContractExternalNumbereabfd190-b3bb-4de2-929e-ecdece1915c8",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "WatbContractExternalNumber"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "STRINGd2f14af6-88cc-4293-b23c-993e3089b8d8",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Header"
					},
					"bindTo": "WatbContractCodeERP",
					"enabled": true
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "LOOKUP6ece9464-65ed-46c1-b2e2-6f9833489d0f",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 1,
						"layoutName": "Header"
					},
					"bindTo": "WatbSigner",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "LOOKUPe288a0ff-e8d8-4501-9244-72b3eff21190",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "Header"
					},
					"bindTo": "WatbSignerPosition",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "Owner000423ed-a6db-48f5-94eb-527ba4814426",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 2,
						"layoutName": "Header"
					},
					"bindTo": "Owner"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "Type04737d87-0ea5-4734-9093-599f9e0d1e5a",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "Header"
					},
					"bindTo": "Type",
					"enabled": false,
					"contentType": 5
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "LOOKUP4f998387-37ba-41ca-8bfc-87030b20a469",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 3,
						"layoutName": "Header"
					},
					"bindTo": "WatbContractType",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "StartDate6a081fa5-1210-4264-bd3c-c883706ad03e",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 4,
						"layoutName": "Header"
					},
					"bindTo": "StartDate",
					"enabled": true
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "EndDate51c1b180-c994-42e7-b6ba-df564ea3266c",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 4,
						"layoutName": "Header"
					},
					"bindTo": "EndDate",
					"enabled": true
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 9
			},
			{
				"operation": "insert",
				"name": "STRING9756c078-35c0-43d0-b0e1-aa8501f970dc",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 5,
						"layoutName": "Header"
					},
					"bindTo": "WatbDuration",
					"enabled": false
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 10
			},
			{
				"operation": "insert",
				"name": "BOOLEAN91bd0465-2325-4eea-93bc-57bde3699e5c",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 5,
						"layoutName": "Header"
					},
					"bindTo": "WatbIsActive",
					"enabled": true
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 11
			},
			{
				"operation": "insert",
				"name": "STRINGfa4a45e3-2764-4c20-8296-1a2711a5d236",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 2,
						"column": 0,
						"row": 6,
						"layoutName": "Header"
					},
					"bindTo": "WatbContractTerms",
					"enabled": true,
					"contentType": 0
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 12
			},
			{
				"operation": "merge",
				"name": "GeneralInfoTab",
				"values": {
					"order": 0
				}
			},
			{
				"operation": "merge",
				"name": "CustomerBillingInfo",
				"values": {
					"contentType": 5
				}
			},
			{
				"operation": "merge",
				"name": "Amount",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0
					}
				}
			},
			{
				"operation": "merge",
				"name": "Parent",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0
					}
				}
			},
			{
				"operation": "move",
				"name": "Parent",
				"parentName": "ContractConnectionsBlock",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "merge",
				"name": "Order",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0
					},
					"contentType": 5
				}
			},
			{
				"operation": "merge",
				"name": "ContractPassportTab",
				"values": {
					"order": 1
				}
			},
			{
				"operation": "merge",
				"name": "HistoryTab",
				"values": {
					"order": 2
				}
			},
			{
				"operation": "insert",
				"name": "WatbInvoiceDetail",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "HistoryTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "merge",
				"name": "NotesAndFilesTab",
				"values": {
					"order": 3
				}
			},
			{
				"operation": "merge",
				"name": "ESNTab",
				"values": {
					"order": 4
				}
			},
			{
				"operation": "remove",
				"name": "Number"
			},
			{
				"operation": "remove",
				"name": "Owner"
			},
			{
				"operation": "remove",
				"name": "StartDate"
			},
			{
				"operation": "remove",
				"name": "Type"
			},
			{
				"operation": "remove",
				"name": "EndDate"
			},
			{
				"operation": "remove",
				"name": "State"
			},
			{
				"operation": "remove",
				"name": "SubordinateContracts"
			},
			{
				"operation": "remove",
				"name": "Document"
			},
			{
				"operation": "remove",
				"name": "Invoice"
			},
			{
				"operation": "remove",
				"name": "ContractVisaTab"
			},
			{
				"operation": "remove",
				"name": "ContractPageVisaTabContainer"
			},
			{
				"operation": "remove",
				"name": "ContractPageVisaBlock"
			},
			{
				"operation": "remove",
				"name": "Visa"
			},
			{
				"operation": "move",
				"name": "OurCompany",
				"parentName": "group_gridLayout",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "move",
				"name": "SupplierBillingInfo",
				"parentName": "group_gridLayout",
				"propertyName": "items",
				"index": 3
			}
		]/**SCHEMA_DIFF*/
	};
});
