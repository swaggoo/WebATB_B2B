define("ContactPageV2", ["WatbCurrentUserRolesMixin"], function () {
	return {
		entitySchemaName: "Contact",
		mixins: {
			WatbCurrentUserRolesMixin: "Terrasoft.WatbCurrentUserRolesMixin"
		},
		attributes: {
			"Account": {
				"dataValueType": Terrasoft.DataValueType.LOOKUP,
				"lookupListConfig": {
					"filters": [
						function () {
							return this.filterAccountsLookupByUserRole();
						}]
				}
			}
		},
		methods: {
			init: function () {
				this.callParent(arguments);
				this.setCurrentUserRoles();
			},
			isCCElementsVisible: function () {
				const currentUserRoles = this.get("CurrentUserRoles");

				return !currentUserRoles.includes(this.constants.B2B_DEPARTMENT_ROLE_CAPTION)
			}
		},
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "merge",
				"name": "Type",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 2
					},
					"visible": {
						"bindTo": "isCCElementsVisible"
					}
				}
			},
			{
				"operation": "merge",
				"name": "Cases",
				"values": {
					"visible": {
						"bindTo": "isCCElementsVisible"
					}
				}
			},
			{
				"operation": "merge",
				"name": "CaseDetail92c8585d",
				"values": {
					"visible": {
						"bindTo": "isCCElementsVisible"
					}
				}
			},
			{
				"operation": "merge",
				"name": "Dear",
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
				"name": "JobTabContainer",
				"values": {
					"order": 2
				}
			},
			{
				"operation": "merge",
				"name": "TimelineTab",
				"values": {
					"order": 4
				}
			},
			{
				"operation": "merge",
				"name": "CommunicationChannelsTab",
				"values": {
					"order": 7
				}
			},
			{
				"operation": "merge",
				"name": "DoNotUseEmail",
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
				"name": "DoNotUseSms",
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
				"operation": "move",
				"name": "DoNotUseSms",
				"parentName": "CommunicationChannelsContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "merge",
				"name": "DoNotUseCall",
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
				"operation": "merge",
				"name": "DoNotUseMail",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 1
					}
				}
			},
			{
				"operation": "merge",
				"name": "HistoryTab",
				"values": {
					"order": 3
				}
			},
			{
				"operation": "merge",
				"name": "NotesAndFilesTab",
				"values": {
					"order": 5
				}
			},
			{
				"operation": "merge",
				"name": "ESNTab",
				"values": {
					"order": 6
				}
			},
			{
				"operation": "move",
				"name": "Language",
				"parentName": "ContactGeneralInfoBlock",
				"propertyName": "items",
				"index": 2
			},
		]/**SCHEMA_DIFF*/
	};
});