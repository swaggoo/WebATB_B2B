define("OrderPageV2", [], function () {
	return {
		entitySchemaName: "Order",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{
			"WatbOrderProduct": {
				"schemaName": "ContractProductDetailV2",
				"entitySchemaName": "OrderProduct",
				"filter": {
					"detailColumn": "Order",
					"masterColumn": "Id"
				}
			},
			"WatbSupplyPaymentDetail": {
				"schemaName": "SupplyPaymentDetailV2",
				"entitySchemaName": "SupplyPaymentElement",
				"filter": {
					"detailColumn": "Order",
					"masterColumn": "Id"
				}
			}
		}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/,
		methods: {},
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
				"name": "Amount4b490b64-a725-4680-819d-5a2da347e73c",
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
				"operation": "insert",
				"name": "CreatedOnb523661b-9dee-47fd-9828-be2606ecb108",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Header"
					},
					"bindTo": "CreatedOn",
					"enabled": true
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 2
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
					"contentType": 5
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Contact0be08dce-e3ba-45a5-89f5-82b46e77e488",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "Header"
					},
					"bindTo": "Contact"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "Accountbac66e34-eae7-4eb3-a4a2-6978c98b24b9",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 2,
						"layoutName": "Header"
					},
					"bindTo": "Account",
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
				"name": "LOOKUP8408b1ba-c944-4ed0-8675-48eb11a87206",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 3,
						"layoutName": "Header"
					},
					"bindTo": "WatbContract",
					"enabled": true,
					"contentType": 5
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
				"index": 9
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
				"index": 10
			},
			{
				"operation": "insert",
				"name": "WatbCertificatesTab",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.WatbCertificatesTabTabCaption"
					},
					"items": [],
					"order": 0
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "WatbVendingConditions",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.WatbVendingConditionsGroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "WatbCertificatesTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "WatbCertificatesTabGridLayout77bfb9b9",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "WatbVendingConditions",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "STRINGb6845b14-9796-4fae-90b6-fe51c2ba4d48",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 2,
						"column": 0,
						"row": 0,
						"layoutName": "WatbCertificatesTabGridLayout77bfb9b9"
					},
					"bindTo": "WatbVendingConditions",
					"enabled": true,
					"contentType": 0
				},
				"parentName": "WatbCertificatesTabGridLayout77bfb9b9",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "WatbLayoutInformationFieldGroup",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.WatbLayoutInformationFieldGroupGroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "WatbCertificatesTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "WatbCertificatesTabGridLayout4810ed00",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "WatbLayoutInformationFieldGroup",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "BOOLEAN9ac4f706-a780-4455-a551-df51c6c2fce2",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "WatbCertificatesTabGridLayout4810ed00"
					},
					"bindTo": "WatbIsLayoutNeeded",
					"enabled": true
				},
				"parentName": "WatbCertificatesTabGridLayout4810ed00",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LOOKUP31e27c5f-0a62-4a48-aad0-81d49ff779ef",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0,
						"layoutName": "WatbCertificatesTabGridLayout4810ed00"
					},
					"bindTo": "WatbLayoutType",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "WatbCertificatesTabGridLayout4810ed00",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "LOOKUP67b59914-25ae-4a61-a00c-b0b05d6de3bf",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "WatbCertificatesTabGridLayout4810ed00"
					},
					"bindTo": "WatbCertificateStatus",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "WatbCertificatesTabGridLayout4810ed00",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "WatbOrderProduct",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "WatbCertificatesTab",
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
				"name": "PaymentStatus8e332a36-83e9-4c1e-b638-049591aedb92",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "PaymentTabGridLayout609e8d19"
					},
					"bindTo": "PaymentStatus"
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
				"name": "PaymentAmount58733ff5-ace7-4f22-93fa-95a53713ef86",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "PaymentTabGridLayout609e8d19"
					},
					"bindTo": "PaymentAmount"
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
				"operation": "merge",
				"name": "ESNTab",
				"values": {
					"order": 6
				}
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
				"index": 3
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
				"name": "OrderDeliveryTab",
				"values": {
					"order": 2
				}
			},
			{
				"operation": "insert",
				"name": "DeliveryStatus958adf7d-013f-417d-bf01-7b495030b80c",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "OrderDeliveryInformationBlock"
					},
					"bindTo": "DeliveryStatus",
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
				"name": "Client"
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
				"name": "OrderProductTab"
			},
			{
				"operation": "remove",
				"name": "ProductInProductsTab"
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
