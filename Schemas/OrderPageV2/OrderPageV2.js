define("OrderPageV2", ["WatbCurrentUserRolesMixin"], function () {
	return {
		entitySchemaName: "Order",
		attributes: {
			"WatbCertificateStatus": {
				dataValueType: Terrasoft.DataValueType.LOOKUP,
				lookupListConfig: {
					orders: [{ columnPath: "WatbPosition" }]
				}
			},
			"OrderCertificatesCount": {
				dataValueType: Terrasoft.DataValueType.INTEGER
			},
			"IsLayoutInformationTabVisible": {
				dataValueType: Terrasoft.DataValueType.BOOLEAN,
				value: false
			},
			"Account": {
				"dataValueType": Terrasoft.DataValueType.LOOKUP,
				"lookupListConfig": {
					"filters": [
						function () {
							return this.filterAccountsLookupByUserRole();
						}
					]
				}
			}
		},
		mixins: {
			WatbCurrentUserRolesMixin: "Terrasoft.WatbCurrentUserRolesMixin"
		},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{
			"WatbSupplyPaymentDetail": {
				"schemaName": "SupplyPaymentDetailV2",
				"entitySchemaName": "SupplyPaymentElement",
				"filter": {
					"detailColumn": "Order",
					"masterColumn": "Id"
				}
			},
			"Client": {
				"caption": {
					"bindTo": "Resources.Strings.Client"
				},
				"dataValueType": 10,
				"multiLookupColumns": [
					"Account",
					"Contact"
				],
				"isRequired": false
			},
			"OrderProductDetailV279c1dcf1": {
				"schemaName": "OrderProductDetailV2",
				"entitySchemaName": "OrderProduct",
				"filter": {
					"detailColumn": "Order",
					"masterColumn": "Id"
				}
			}
		}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{
			"WatbAccountBillingInfo": {
				"65b9bc96-1ccd-4b73-b2fa-b96697ca9027": {
					"uId": "65b9bc96-1ccd-4b73-b2fa-b96697ca9027",
					"enabled": true,
					"removed": false,
					"ruleType": 1,
					"baseAttributePatch": "Account",
					"comparisonType": 3,
					"autoClean": true,
					"autocomplete": true,
					"type": 1,
					"dataValueType": 10,
					"attribute": "Account"
				}
			},
			"CreatedOn": {
				"86484102-603a-47b0-b8ca-2f8328ad85d0": {
					"uId": "86484102-603a-47b0-b8ca-2f8328ad85d0",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 6,
							"dataValueType": null,
							"formula": {
								"type": 2,
								"dataType": 7,
								"code": "GETDATE",
								"arguments": []
							}
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 0,
								"dataValueType": 12,
								"value": true
							},
							"rightExpression": {
								"type": 0,
								"dataValueType": 12,
								"value": true
							}
						}
					]
				}
			},
			"WatbAccountContact": {
				"44ae80c9-669f-43ab-9001-84bff7058712": {
					"uId": "44ae80c9-669f-43ab-9001-84bff7058712",
					"enabled": true,
					"removed": false,
					"ruleType": 1,
					"baseAttributePatch": "Account",
					"comparisonType": 3,
					"autoClean": true,
					"autocomplete": true,
					"type": 1,
					"dataValueType": 10,
					"attribute": "Account"
				}
			},
			"WatbContractExternalNumber": {
				"5588f67c-a432-4b0a-b6ad-75421eba79a3": {
					"uId": "5588f67c-a432-4b0a-b6ad-75421eba79a3",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"dataValueType": null,
							"attribute": "WatbContract",
							"attributePath": "WatbContractExternalNumber"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 2,
							"leftExpression": {
								"type": 1,
								"dataValueType": 10,
								"attribute": "WatbContract"
							}
						}
					]
				}
			}
		}/**SCHEMA_BUSINESS_RULES*/,
		methods: {
			init: function () {
				this.callParent(arguments);
				this.setCurrentUserRoles();
				Terrasoft.ServerChannel.on(Terrasoft.EventName.ON_MESSAGE, this.onOrderProductSaved, this);
			},

			onEntityInitialized: function () {
				this.callParent(arguments);
				this.setLayoutInformationTabVisibility();
			},

			onOrderProductSaved: function (sender, message) {
				if (message && message.Header && message.Header.Sender === "OrderProductChangeListener") {
					var result = this.Ext.decode(message.Body);
					this.set("IsLayoutInformationTabVisible", result.OrderProductCount > 0);
				}
			},

			getTotalAmount: function () {
				return this.get("TotalAmount");
			},

			setLayoutInformationTabVisibility: function () {
				var esq = this.Ext.create("Terrasoft.EntitySchemaQuery", {
					rootSchemaName: "OrderProduct"
				});
				esq.addColumn("Id");
				esq.filters.add("OrderFilter", this.Terrasoft.createColumnFilterWithParameter(
					this.Terrasoft.ComparisonType.EQUAL, "Order.Id", this.get("Id")
				));
				esq.getEntityCollection(function (response) {
					if (response.success) {
						var collection = response.collection;
						this.set("IsLayoutInformationTabVisible", collection.getItems().length > 0);
					}
				}, this);
			},
		},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "Numbere2055296-8e6d-45a6-90c3-d0c679c6ba22",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "Number",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Amounte53f636d-21fd-4151-81d8-19444ad662d3",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "Amount"
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "STRINGc685fc82-b9c5-43a2-86d6-d426538a7785",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "WatbATBAccountNumber",
					"enabled": true
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "STRINGfe64e021-df6c-40f8-947a-929b7c581a59",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "WatbMarketNumber",
					"enabled": true
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "merge",
				"name": "Client",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1
					}
				}
			},
			{
				"operation": "remove",
				"name": "Client",
				"properties": [
					"tip"
				]
			},
			{
				"operation": "insert",
				"name": "SourceOrder0638868a-ae0f-41da-b450-6466270c4c59",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 1,
						"layoutName": "Header"
					},
					"bindTo": "SourceOrder",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "CreatedOn645b670a-ff38-4725-b718-d283339ef475",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "Header"
					},
					"bindTo": "CreatedOn",
					"enabled": false
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "LOOKUP8408b1ba-c944-4ed0-8675-48eb11a87206",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 2,
						"layoutName": "Header"
					},
					"bindTo": "WatbContract",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "Ownerf9ee04fe-393a-4d15-b5e9-f9a47f084116",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "Header"
					},
					"bindTo": "Owner",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "ActualDatefc104792-9a2e-4c49-83c4-4d24782c8ffa",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 4,
						"layoutName": "Header"
					},
					"bindTo": "ActualDate"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "DueDatebc89f0c6-0e4b-4e05-8b18-0169de9e96b6",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 4,
						"layoutName": "Header"
					},
					"bindTo": "DueDate"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "BOOLEAN096ce87a-0729-448c-a21d-0a1d3e14e542",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 5,
						"layoutName": "Header"
					},
					"bindTo": "WatbIsFirstSale",
					"enabled": true
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 9
			},
			{
				"operation": "insert",
				"name": "STRING4246b26f-0a57-4f3a-905b-0b387ecdc82b",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 3,
						"layoutName": "Header"
					},
					"bindTo": "WatbContractExternalNumber",
					"enabled": true
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 10
			},
			{
				"operation": "merge",
				"name": "OrderProductTab",
				"values": {
					"order": 0
				}
			},
			{
				"operation": "insert",
				"name": "OrderProductTabGroup0ce3d8d2",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.OrderProductTabGroup0ce3d8d2GroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "OrderProductTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OrderProductTabGridLayoutf15b7f01",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "OrderProductTabGroup0ce3d8d2",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "WatbVendingConditions6a6c07cc-6189-4f41-a2f8-d43d5849f4bc",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 2,
						"column": 0,
						"row": 0,
						"layoutName": "OrderProductTabGridLayoutf15b7f01"
					},
					"bindTo": "WatbVendingConditions",
					"enabled": true,
					"contentType": 0
				},
				"parentName": "OrderProductTabGridLayoutf15b7f01",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OrderProductTabGroupb66061e6",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.OrderProductTabGroupb66061e6GroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": [],
					"visible": { "bindTo": "IsLayoutInformationTabVisible" }
				},
				"parentName": "OrderProductTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "OrderProductTabGridLayoutcf9c846d",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "OrderProductTabGroupb66061e6",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "WatbIsLayoutNeededf7cbda9d-c8b8-4565-804d-6585dcf8f436",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "OrderProductTabGridLayoutcf9c846d"
					},
					"bindTo": "WatbIsLayoutNeeded"
				},
				"parentName": "OrderProductTabGridLayoutcf9c846d",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "WatbLayoutType606bbfe3-60eb-47c8-ba5c-41aad009e654",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0,
						"layoutName": "OrderProductTabGridLayoutcf9c846d"
					},
					"bindTo": "WatbLayoutType"
				},
				"parentName": "OrderProductTabGridLayoutcf9c846d",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "WatbCertificateStatusc70bcba4-43d0-4583-85d2-1fd50a82987b",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "OrderProductTabGridLayoutcf9c846d"
					},
					"bindTo": "WatbCertificateStatus"
				},
				"parentName": "OrderProductTabGridLayoutcf9c846d",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "PaymentTab",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.PaymentTabTabCaption"
					},
					"items": [],
					"order": 1
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "MainInformationPaymentTab",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.MainInformationPaymentTabGroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "PaymentTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "PaymentTabGridLayout609e8d19",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "MainInformationPaymentTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LOOKUP650cdbbb-8178-42ea-b224-880e308e1348",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "PaymentTabGridLayout609e8d19"
					},
					"bindTo": "WatbPaymentStatus",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "PaymentTabGridLayout609e8d19",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Currency292280e3-083e-4c0b-96df-1f1a4782b7ab",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0,
						"layoutName": "PaymentTabGridLayout609e8d19"
					},
					"bindTo": "Currency"
				},
				"parentName": "PaymentTabGridLayout609e8d19",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Amount2c1c4ae2-30ef-470c-ad9c-26c37b814fc1",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "PaymentTabGridLayout609e8d19"
					},
					"bindTo": "Amount",
					"enabled": true
				},
				"parentName": "PaymentTabGridLayout609e8d19",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "PaymentTypebb0d9642-e66e-4000-9660-ce36540965a4",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 1,
						"layoutName": "PaymentTabGridLayout609e8d19"
					},
					"bindTo": "PaymentType"
				},
				"parentName": "PaymentTabGridLayout609e8d19",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "WatbPaymentDateTime32d10b14-dca5-4da5-86b1-c32b7bb01d9f",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "PaymentTabGridLayout609e8d19"
					},
					"bindTo": "WatbPaymentDateTime"
				},
				"parentName": "PaymentTabGridLayout609e8d19",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "WatbAccountBillingInfo0718678e-af01-4d86-a750-d574151b6b07",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 2,
						"layoutName": "PaymentTabGridLayout609e8d19"
					},
					"bindTo": "WatbAccountBillingInfo",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "PaymentTabGridLayout609e8d19",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "WatbSupplyPaymentDetail",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "PaymentTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ExpenditureInvoiceTab",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.ExpenditureInvoiceTabTabCaption"
					},
					"items": [],
					"order": 3
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ExpenditureInvoiceTabGroup",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.ExpenditureInvoiceTabGroupGroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "ExpenditureInvoiceTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpenditureInvoiceTabGridLayoutbaa72ac9",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "ExpenditureInvoiceTabGroup",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "STRINGd75b62f7-df8c-44d2-80d1-f8ec54705dbb",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "ExpenditureInvoiceTabGridLayoutbaa72ac9"
					},
					"bindTo": "WatbExpenditureInvoiceNumber",
					"enabled": true
				},
				"parentName": "ExpenditureInvoiceTabGridLayoutbaa72ac9",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LOOKUPbba11fd8-fbd4-46b8-bac5-757e229e5d8d",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0,
						"layoutName": "ExpenditureInvoiceTabGridLayoutbaa72ac9"
					},
					"bindTo": "WatbExpenditureInvoiceStatus",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "ExpenditureInvoiceTabGridLayoutbaa72ac9",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "DATETIME9f55888f-bb7f-424c-903c-47089fab15f5",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "ExpenditureInvoiceTabGridLayoutbaa72ac9"
					},
					"bindTo": "WatbExpenditureDate",
					"enabled": true
				},
				"parentName": "ExpenditureInvoiceTabGridLayoutbaa72ac9",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "STRING608fe37c-8afe-4b9b-8e5e-2feaf1540b51",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "ExpenditureInvoiceTabGridLayoutbaa72ac9"
					},
					"bindTo": "WatbExpenditureSendingWaybill",
					"enabled": true
				},
				"parentName": "ExpenditureInvoiceTabGridLayoutbaa72ac9",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "STRING81ef774d-d2b0-4aa7-b794-ab298c73f40a",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 2,
						"layoutName": "ExpenditureInvoiceTabGridLayoutbaa72ac9"
					},
					"bindTo": "WatbExpenditureReceivingWaybill",
					"enabled": true
				},
				"parentName": "ExpenditureInvoiceTabGridLayoutbaa72ac9",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "merge",
				"name": "ESNTab",
				"values": {
					"order": 6
				}
			},
			{
				"operation": "merge",
				"name": "OrderDeliveryTab",
				"values": {
					"order": 2
				}
			},
			{
				"operation": "insert",
				"name": "LOOKUP8eba0c68-3a13-4ceb-96f3-dc5a66b322a3",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "OrderDeliveryInformationBlock"
					},
					"bindTo": "WatbDeliveryStatus",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "OrderDeliveryInformationBlock",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "merge",
				"name": "DeliveryType",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0
					}
				}
			},
			{
				"operation": "insert",
				"name": "STRING69469f14-572a-4c69-89aa-fe3b76065feb",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "OrderDeliveryInformationBlock"
					},
					"bindTo": "WatbWaybill",
					"enabled": true
				},
				"parentName": "OrderDeliveryInformationBlock",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "LOOKUP995a6ff1-dbd0-4bbf-8815-a751c69b0d0b",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "OrderReceiverInformationBlock"
					},
					"bindTo": "WatbAccountContact",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "OrderReceiverInformationBlock",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "merge",
				"name": "ContactNumber",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0
					}
				}
			},
			{
				"operation": "insert",
				"name": "STRING19225e2f-51eb-4232-a58b-6753699e181e",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "OrderReceiverInformationBlock"
					},
					"bindTo": "WatbEmail",
					"enabled": true
				},
				"parentName": "OrderReceiverInformationBlock",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "STRINGb11e81a3-bd1d-4d78-9801-8ccdec33ed9a",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 1,
						"layoutName": "OrderReceiverInformationBlock"
					},
					"bindTo": "WatbRecipient",
					"enabled": true
				},
				"parentName": "OrderReceiverInformationBlock",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "merge",
				"name": "Comment",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 2,
						"column": 0,
						"row": 2
					},
					"enabled": true,
					"contentType": 0
				}
			},
			{
				"operation": "merge",
				"name": "OrderHistoryTab",
				"values": {
					"order": 4
				}
			},
			{
				"operation": "merge",
				"name": "FileNotesTab",
				"values": {
					"order": 5
				}
			},
			{
				"operation": "remove",
				"name": "Amount"
			},
			{
				"operation": "remove",
				"name": "PaymentAmountInfoButton"
			},
			{
				"operation": "remove",
				"name": "PaymentAmount"
			},
			{
				"operation": "remove",
				"name": "Status"
			},
			{
				"operation": "remove",
				"name": "OrderPassportTab"
			},
			{
				"operation": "remove",
				"name": "SupplyPayment"
			},
			{
				"operation": "remove",
				"name": "PaymentType"
			},
			{
				"operation": "remove",
				"name": "ReceiverName"
			},
			{
				"operation": "remove",
				"name": "OrderResultsTab"
			},
			{
				"operation": "remove",
				"name": "ProductInResultsTab"
			},
			{
				"operation": "remove",
				"name": "SupplyPaymentResults"
			},
			{
				"operation": "remove",
				"name": "OrderResultsDeliveryAndPaymentControlBlock"
			},
			{
				"operation": "remove",
				"name": "OrderPageDeliveryAndPaymentBlock"
			},
			{
				"operation": "remove",
				"name": "DeliveryTypeResult"
			},
			{
				"operation": "remove",
				"name": "PaymentTypeResult"
			},
			{
				"operation": "remove",
				"name": "AddressSelectionDetailResultsTab"
			},
			{
				"operation": "remove",
				"name": "OrderReceiverInformationResultsControlBlock"
			},
			{
				"operation": "remove",
				"name": "OrderReceiverInformationResultsBlock"
			},
			{
				"operation": "remove",
				"name": "ContactNumberResultsBlock"
			},
			{
				"operation": "remove",
				"name": "ReceiverNameResultsBlock"
			},
			{
				"operation": "remove",
				"name": "CommentResultsBlock"
			},
			{
				"operation": "remove",
				"name": "Lead"
			},
			{
				"operation": "remove",
				"name": "Calls"
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
				"name": "OrderVisaTab"
			},
			{
				"operation": "remove",
				"name": "OrderPageVisaTabContainer"
			},
			{
				"operation": "remove",
				"name": "OrderPageVisaBlock"
			},
			{
				"operation": "remove",
				"name": "Visa"
			},
			{
				"operation": "remove",
				"name": "OrderGeneralInformationTab"
			},
			{
				"operation": "remove",
				"name": "OrderPageGeneralInformationBlock"
			},
			{
				"operation": "remove",
				"name": "Number"
			},
			{
				"operation": "remove",
				"name": "Date"
			},
			{
				"operation": "remove",
				"name": "Opportunity"
			},
			{
				"operation": "remove",
				"name": "SourceOrder"
			},
			{
				"operation": "remove",
				"name": "DueDate"
			},
			{
				"operation": "remove",
				"name": "ActualDate"
			},
			{
				"operation": "remove",
				"name": "PaymentStatus"
			},
			{
				"operation": "remove",
				"name": "DeliveryStatus"
			},
			{
				"operation": "remove",
				"name": "Owner"
			},
			{
				"operation": "move",
				"name": "Activities",
				"parentName": "OrderHistoryTab",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_DIFF*/
	};
});
