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
			"AccountAddressDetailV2777fccfe": {
				"schemaName": "AccountAddressDetailV2",
				"entitySchemaName": "AccountAddress",
				"filter": {
					"detailColumn": "Account",
					"masterColumn": "Id"
				}
			},
			"ContractDetailV23c6e7da0": {
				"schemaName": "ContractDetailV2",
				"entitySchemaName": "Contract",
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
			}
		}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/,
		methods: {
			asyncValidate: function(callback, scope) {
				this.callParent([
                    function (response) {
                        if (!this.validateResponse(response)) {
                            return;
                        }
                        this.tryUpdateAccountStatus(function (response) {
                            if (!this.validateResponse(response)) {
                                return;
                            }
                            callback.call(scope, response);
                        }, this);
                    }, this
                ]);
			},
			tryUpdateAccountStatus: function (callback, scope) {
				var me = this;

				var name = this.get('Name');
				var signerFullname = this.get('WatbSignerFullName');
				var phone = this.get('Phone');
				var email = this.get('WatbEmail');
				var edrpou = this.get('WatbEDRPOU');
				
				var isRequiredFieldsFilled = name && signerFullname && phone && email && edrpou;
				var currentAccountId = this.get('Id');
				
				if (!isRequiredFieldsFilled) {
					this.set('WatbStatus', { value: '7e1b25b0-c5f8-4a62-87c7-1acabca4aa24', displayValue: 'Новий' });
					callback.call(scope, { success: true });
					return;
				}
				
				var documentAddressTypeId = '9958c503-9788-438f-998c-e68dfe5887c7';
				
				var addressESQ = Ext.create("Terrasoft.EntitySchemaQuery", {
					rootSchemaName: "AccountAddress"
				});
				addressESQ.addColumn("Id");
				addressESQ.filters.addItem(Terrasoft.createColumnFilterWithParameter(Terrasoft.ComparisonType.EQUAL, "Account.Id", currentAccountId));
				addressESQ.filters.addItem(Terrasoft.createColumnFilterWithParameter(Terrasoft.ComparisonType.EQUAL, "AddressType.Id", documentAddressTypeId));
				
				var documentESQ = Ext.create("Terrasoft.EntitySchemaQuery", {
					rootSchemaName: "WatbAccountFile"
				});
				documentESQ.addColumn("Id");
				documentESQ.filters.addItem(Terrasoft.createColumnFilterWithParameter(Terrasoft.ComparisonType.EQUAL, "Account.Id", currentAccountId));
				
				var contractESQ = Ext.create("Terrasoft.EntitySchemaQuery", {
					rootSchemaName: "Contract"
				});
				contractESQ.addColumn("Id");
				contractESQ.filters.addItem(Terrasoft.createColumnFilterWithParameter(Terrasoft.ComparisonType.EQUAL, "Account.Id", currentAccountId));
				
				Terrasoft.chain(
					(next) => {
						addressESQ.getEntityCollection((result) => {
							if (result.success) {
								var isAccountHasAddressForDocuments = result.collection.getCount() > 0;
								next(isAccountHasAddressForDocuments);
							} else {
								console.error("Error executing address query: ", result.errorInfo);
								callback.call(scope, { success: false });
							}
						});
					},
					(next, isAccountHasAddressForDocuments) => {
						documentESQ.getEntityCollection((result) => {
							if (result.success) {
								var isDocumentUploaded = result.collection.getCount() > 0 || me.get('WatbIsNoNeedUploadDocuments');
								next(isAccountHasAddressForDocuments, isDocumentUploaded);
							} else {
								console.error("Error executing document query: ", result.errorInfo);
								callback.call(scope, { success: false });
							}
						});
					},
					(next, isAccountHasAddressForDocuments, isDocumentUploaded) => {
						contractESQ.getEntityCollection((result) => {
							if (result.success) {
								var isContractUploaded = result.collection.getCount() > 0 || me.get('WatbIsNoNeedUploadContract');
								next(isAccountHasAddressForDocuments, isDocumentUploaded, isContractUploaded);
							} else {
								console.error("Error executing contract query: ", result.errorInfo);
								callback.call(scope, { success: false });
							}
						});
					},
					(next, isAccountHasAddressForDocuments, isDocumentUploaded, isContractUploaded) => {
						if (isAccountHasAddressForDocuments) {
							if (isDocumentUploaded && isContractUploaded) {
								this.set('WatbStatus', { value: 'd11b8021-1a7b-4109-8d7b-1f7fdeafb5de', displayValue: 'Діючий' });
							} else {
								this.set('WatbStatus', { value: '1fba3241-b34c-40c5-a630-70184f1ee06a', displayValue: 'Активний' });
							}
						}
				
						callback.call(scope, { success: true });
					},
					this
				);
			}
		},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "WatbDepartmentType361895c7-3cc5-428d-adc9-3303e6db2832",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "WatbDepartmentType",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "STRING96e0e31d-e98f-4797-bf40-95a08dfda096",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "WatbNumberInExternalSystem",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Nameada87d08-78ac-4f4c-ad34-3f9f166b5dad",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "Name"
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "STRINGebb0e0c4-7cb7-46fe-9c2f-3aa3a8148b2b",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "WatbSignerFullName",
					"enabled": true
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
				"name": "LOOKUP9f47c33e-9353-425e-a1a2-227c22141fdb",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 12,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "WatbPrimaryContact",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 12
			},
			{
				"operation": "insert",
				"name": "LOOKUP8f684687-8c18-4166-b127-5a5896b93e8f",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 13,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "WatbSecondaryContact",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 13
			},
			{
				"operation": "insert",
				"name": "Type6fcc82a1-b4fb-43b4-9045-8c60b354809b",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 14,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "Type"
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 14
			},
			{
				"operation": "insert",
				"name": "LOOKUPe3a9f33a-379e-4f50-b657-e0679ece6ee6",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 15,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "WatbSignerPosition",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 15
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
					"bindTo": "AlternativeName"
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
				"name": "AccountAddressDetailV2777fccfe",
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
				"name": "ContractDetailV23c6e7da0",
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
				"operation": "merge",
				"name": "TimelineTab",
				"values": {
					"order": 2
				}
			},
			{
				"operation": "insert",
				"name": "TabHistory",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.TabHistoryTabCaption"
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
				"name": "OpportunityDetailV25cb23b02",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "TabHistory",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OpportunityHistoryActivityDetail1e15040f",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "TabHistory",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "EmailDetailV299a1161f",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "TabHistory",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "TabFilesAndNotes",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.TabFilesAndNotesTabCaption"
					},
					"items": [],
					"order": 4
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 4
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
				"operation": "remove",
				"name": "ESNTab"
			},
			{
				"operation": "remove",
				"name": "ESNFeedContainer"
			},
			{
				"operation": "remove",
				"name": "ESNFeed"
			}
		]/**SCHEMA_DIFF*/
	};
});
