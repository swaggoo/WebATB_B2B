define("WatbAccount1Page", [], function () {
	return {
		entitySchemaName: "Account",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{
			"AccountCommunicationDetail": {
				"schemaName": "AccountCommunicationDetail",
				"entitySchemaName": "AccountCommunication",
				"filter": {
					"detailColumn": "Account",
					"masterColumn": "Id"
				}
			},
			"OpportunityDetailV25cb23b02": {
				"schemaName": "OpportunityDetailV2",
				"entitySchemaName": "Opportunity",
				"filter": {
					"detailColumn": "Account",
					"masterColumn": "Id"
				}
			},
			"OpportunityHistoryActivityDetail1e15040f": {
				"schemaName": "OpportunityHistoryActivityDetail",
				"entitySchemaName": "Activity",
				"filter": {
					"detailColumn": "Account",
					"masterColumn": "Id"
				}
			},
			"EmailDetailV299a1161f": {
				"schemaName": "EmailDetailV2",
				"entitySchemaName": "Activity",
				"filter": {
					"detailColumn": "Account",
					"masterColumn": "Id"
				}
			},
			"WatbBulkEmailLinkDetail": {
				"schemaName": "WatbBulkEmailLinkDetail",
				"filter": {
					"masterColumn": "Id",
					"detailColumn": "Account"
				}
			},
			"AccountOrganizationChartDetailV23dd69f63": {
				"schemaName": "AccountOrganizationChartDetailV2",
				"entitySchemaName": "AccountOrganizationChart",
				"filter": {
					"detailColumn": "Account",
					"masterColumn": "Id"
				}
			},
			"AccountContactsDetailV2eb5a8155": {
				"schemaName": "AccountContactsDetailV2",
				"entitySchemaName": "Contact",
				"filter": {
					"detailColumn": "Account",
					"masterColumn": "Id"
				}
			},
			"WatbAccountFileWithDocTypeDetail": {
				"schemaName": "WatbAccountFileWithDocTypeDetail",
				"entitySchemaName": "WatbAccountFile",
				"filter": {
					"detailColumn": "Account",
					"masterColumn": "Id"
				}
			},
			"WatbAccountAddressesDetail": {
				"schemaName": "AccountAddressDetailV2",
				"entitySchemaName": "AccountAddress",
				"filter": {
					"detailColumn": "Account",
					"masterColumn": "Id"
				}
			},
			"WatbEmailDetail": {
				"schemaName": "EmailDetailV2",
				"entitySchemaName": "Activity",
				"filter": {
					"detailColumn": "Account",
					"masterColumn": "Id"
				}
			},
			"WatbBulkEmailDetail": {
				"schemaName": "WatbBulkEmailLinkDetail",
				"entitySchemaName": "WatbBulkEmailLink",
				"filter": {
					"detailColumn": "Account",
					"masterColumn": "Id"
				}
			},
			"WatbContractDetail": {
				"schemaName": "ContractDetailV2",
				"entitySchemaName": "Contract",
				"filter": {
					"detailColumn": "Account",
					"masterColumn": "Id"
				}
			},
			"WatbOrderDetail": {
				"schemaName": "OrderDetailV2",
				"entitySchemaName": "Order",
				"filter": {
					"detailColumn": "Account",
					"masterColumn": "Id"
				}
			},
			"WatbInvoiceDetail": {
				"schemaName": "InvoiceDetailV2",
				"entitySchemaName": "Invoice",
				"filter": {
					"detailColumn": "Account",
					"masterColumn": "Id"
				}
			},
			"WatbActivityDetail": {
				"schemaName": "OpportunityHistoryActivityDetail",
				"entitySchemaName": "Activity",
				"filter": {
					"detailColumn": "Account",
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
				"name": "STRING96e0e31d-e98f-4797-bf40-95a08dfda096",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "WatbNumberInExternalSystem",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Nameada87d08-78ac-4f4c-ad34-3f9f166b5dad",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "Name"
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "LOOKUP85257b47-7b83-4503-b061-cf48e9c66fc1",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "WatbSigner",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "LOOKUPe3a9f33a-379e-4f50-b657-e0679ece6ee6",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "WatbSignerPosition",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Owner5b222774-7c44-494a-a95c-efb00eed2731",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 4,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "Owner"
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "Webae02b446-b4f3-492b-9be1-a1242c35380d",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 5,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "Web",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "Phone9b65f776-ea91-49ed-be49-8afaaa94ff2b",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 6,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "Phone",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "STRING4e7836a8-21f6-4afe-b278-54874edebb78",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 7,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "WatbEmail",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "BOOLEAN947c6942-d9fd-4801-9269-fc22c9531025",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 8,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "WatbIsVATPayer",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "Ownership261f2f4e-3a3a-4829-8682-746af5336ac9",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 9,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "Ownership",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 9
			},
			{
				"operation": "insert",
				"name": "Industryd53509d8-944f-438c-9ad5-92e1abac786f",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 10,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "Industry",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 10
			},
			{
				"operation": "insert",
				"name": "WatbEDRPOUb5ffe6e8-522e-4d0f-8810-12a6d34e3b29",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 11,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "WatbEDRPOU",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 11
			},
			{
				"operation": "insert",
				"name": "TabMainInformation",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.TabMainInformationTabCaption"
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
				"name": "TabMainInformationGroup",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.TabMainInformationGroupGroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "TabMainInformation",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabMainInformationGridLayout39a4f714",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "TabMainInformationGroup",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AlternativeName7bed6a4a-155b-4735-9d32-d3058dd3639a",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "TabMainInformationGridLayout39a4f714"
					},
					"bindTo": "AlternativeName",
					"enabled": true
				},
				"parentName": "TabMainInformationGridLayout39a4f714",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "STRING5cde6d0d-8c3f-40fb-8c7f-aec674f973d6",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0,
						"layoutName": "TabMainInformationGridLayout39a4f714"
					},
					"bindTo": "WatbSecondaryAlternativeName",
					"enabled": true
				},
				"parentName": "TabMainInformationGridLayout39a4f714",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Code8c88ff8d-d9d1-446d-8429-46800c88e200",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "TabMainInformationGridLayout39a4f714"
					},
					"bindTo": "Code"
				},
				"parentName": "TabMainInformationGridLayout39a4f714",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "STRINGa5147b22-df63-40e6-b346-b526813a5b81",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 1,
						"layoutName": "TabMainInformationGridLayout39a4f714"
					},
					"bindTo": "WatbAccountCodeERP",
					"enabled": true
				},
				"parentName": "TabMainInformationGridLayout39a4f714",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "BOOLEAN55f74d95-f631-4c6b-8a1f-1d5382576151",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "TabMainInformationGridLayout39a4f714"
					},
					"bindTo": "WatbIsNoNeedUploadDocuments",
					"enabled": true
				},
				"parentName": "TabMainInformationGridLayout39a4f714",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "BOOLEAN3c433d8b-2df2-474b-94fc-db9d2202d234",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 2,
						"layoutName": "TabMainInformationGridLayout39a4f714"
					},
					"bindTo": "WatbIsNoNeedUploadContract",
					"enabled": true
				},
				"parentName": "TabMainInformationGridLayout39a4f714",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "FLOATeb800743-d66c-4b14-a9c3-3bba718f5127",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "TabMainInformationGridLayout39a4f714"
					},
					"bindTo": "WatbDiscount",
					"enabled": true
				},
				"parentName": "TabMainInformationGridLayout39a4f714",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "STRING85bce1b7-57d2-4f31-a0e4-e41fba54b93c",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 3,
						"layoutName": "TabMainInformationGridLayout39a4f714"
					},
					"bindTo": "WatbPostponement",
					"enabled": true
				},
				"parentName": "TabMainInformationGridLayout39a4f714",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "LOOKUP79b73a72-8862-4238-8906-4ac60a6ce5ab",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 4,
						"layoutName": "TabMainInformationGridLayout39a4f714"
					},
					"bindTo": "WatbDirector",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "TabMainInformationGridLayout39a4f714",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "WatbPrimaryContactfd46c2a9-a844-4ac1-babe-722fdb9c1b5f",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 5,
						"layoutName": "TabMainInformationGridLayout39a4f714"
					},
					"bindTo": "WatbPrimaryContact"
				},
				"parentName": "TabMainInformationGridLayout39a4f714",
				"propertyName": "items",
				"index": 9
			},
			{
				"operation": "insert",
				"name": "WatbSecondaryContactd3ac7a45-537a-4ac6-9a1a-a90e585e9f1a",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 5,
						"layoutName": "TabMainInformationGridLayout39a4f714"
					},
					"bindTo": "WatbSecondaryContact"
				},
				"parentName": "TabMainInformationGridLayout39a4f714",
				"propertyName": "items",
				"index": 10
			},
			{
				"operation": "insert",
				"name": "AccountCommunicationDetail",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "TabMainInformation",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "WatbAccountAddressesDetail",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "TabMainInformation",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "WatbEmailDetail",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "TabMainInformation",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "WatbBulkEmailDetail",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "TabMainInformation",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "TabContactsAndStructure",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.TabContactsAndStructureTabCaption"
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
				"name": "AccountOrganizationChartDetailV23dd69f63",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "TabContactsAndStructure",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AccountContactsDetailV2eb5a8155",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "TabContactsAndStructure",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "WatbSalesTab",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.WatbSalesTabTabCaption"
					},
					"items": [],
					"order": 2
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "WatbContractDetail",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "WatbSalesTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "WatbOrderDetail",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "WatbSalesTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "WatbInvoiceDetail",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "WatbSalesTab",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "WatbActivityDetail",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "WatbSalesTab",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "TabFilesAndNotes",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.TabFilesAndNotesTabCaption"
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
				"name": "WatbAccountFileWithDocTypeDetail",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "TabFilesAndNotes",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabNotesControlGroup",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.TabNotesControlGroupGroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "TabFilesAndNotes",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "TabFilesAndNotesGridLayout0513b180",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "TabNotesControlGroup",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Notes",
				"values": {
					"contentType": 4,
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0
					},
					"labelConfig": {
						"visible": false
					},
					"controlConfig": {
						"imageLoaded": {
							"bindTo": "insertImagesToNotes"
						},
						"images": {
							"bindTo": "NotesImagesCollection"
						}
					}
				},
				"parentName": "TabFilesAndNotesGridLayout0513b180",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "merge",
				"name": "TimelineTab",
				"values": {
					"order": 4
				}
			}
		]/**SCHEMA_DIFF*/
	};
});
