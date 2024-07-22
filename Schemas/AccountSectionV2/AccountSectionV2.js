define("AccountSectionV2", ["AccountSectionV2Resources", "EmailHelper", "ConfigurationConstants", "ConfigurationEnums", "NetworkUtilities", "WatbCurrentUserRolesMixin"], function (resources, EmailHelper, ConfigurationConstants, ConfigurationEnums, NetworkUtilities) {
	return {
		entitySchemaName: "Account",
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "merge",
				"name": "SeparateModeAddRecordButton",
				"propertyName": "items",
				"values": {
					"itemType": Terrasoft.ViewItemType.BUTTON,
					"style": Terrasoft.controls.ButtonEnums.style.GREEN,
					"caption": { "bindTo": "AddRecordButtonCaption" },
					"click": { "bindTo": "addRecord" },
					"visible": { "bindTo": "IsAddRecordButtonVisible" },
					"classes": {
						"textClass": ["actions-button-margin-right"],
						"wrapperClass": ["actions-button-margin-right"]
					},
					"controlConfig": {
						"menu": {
							"items": {
								"bindTo": "EditPages",
								"bindConfig": {
									"converter": function (editPages) {
										const currentUserRoles = this.get("CurrentUserRoles");

										editPages.collection.items = editPages.collection.items.filter((item) => {
											if (currentUserRoles.includes(this.constants.SYSTEM_ADMINISTRATOR_ROLE_CAPTION)) {
												return true;
											}
											if (currentUserRoles.includes(this.constants.B2B_DEPARTMENT_ROLE_CAPTION)) {
												return item.values.Id === this.constants.WATB_B2B_DEPARTMENT_TYPE_ID;
											}
											if (currentUserRoles.includes(this.constants.CC_DEPARTMENT_ROLE_CAPTION)) {
												return item.values.Id === this.constants.WATB_CC_DEPARTMENT_TYPE_ID;
											}
										});

										return editPages;
									}

								}
							}
						}
					}
				}
			}
		]/**SCHEMA_DIFF*/,
		mixins: {
			WatbCurrentUserRolesMixin: "Terrasoft.WatbCurrentUserRolesMixin"
		},
		methods: {
			init: function () {
				this.callParent(arguments);

				var sysSettings = ["BuildType"];
				Terrasoft.SysSettings.querySysSettings(sysSettings, function () {
					var buildType = Terrasoft.SysSettings.cachedSettings.BuildType &&
						Terrasoft.SysSettings.cachedSettings.BuildType.value;
					this.set("canUseGoogleOrSocialFeaturesByBuildType", buildType !==
						ConfigurationConstants.BuildType.Public);
				}, this);

				this.setCurrentUserRoles();
			},

			getSectionActions: function () {
				const actionMenuItems = this.callParent(arguments);

				this.watbAddBulkEmailButtonSection(actionMenuItems);

				return actionMenuItems;
			},

			getFilters: function () {
				var filters = this.callParent(arguments);
				var currentUserRoles = this.get("CurrentUserRoles");

				if (currentUserRoles.includes(this.constants.SYSTEM_ADMINISTRATOR_ROLE_CAPTION)) {
					return filters;
				}

				if (currentUserRoles.includes(this.constants.B2B_DEPARTMENT_ROLE_CAPTION)) {
					filters.add("FilterDepartmentType", this.Terrasoft.createColumnFilterWithParameter(
						this.Terrasoft.ComparisonType.EQUAL, "WatbDepartmentType.Id", this.constants.WATB_B2B_DEPARTMENT_TYPE_ID
					));
				}
				else if (currentUserRoles.includes(this.constants.CC_DEPARTMENT_ROLE_CAPTION)) {
					filters.add("FilterDepartmentType", this.Terrasoft.createColumnFilterWithParameter(
						this.Terrasoft.ComparisonType.EQUAL, "WatbDepartmentType.Id", this.constants.WATB_CC_DEPARTMENT_TYPE_ID
					));
				}

				return filters;
			},

			watbAddBulkEmailButtonSection: function (actionMenuItems) {
				actionMenuItems.addItem(this.getButtonMenuItem({
					Type: "Terrasoft.MenuSeparator"
				}));

				actionMenuItems.addItem(this.getButtonMenuItem({
					Caption: resources.localizableStrings.WatbBulkEmailMenuItemCaption,
					Click: { bindTo: "watbBulkEmailMenuItemClick" },
					// Enabled: { bindTo: "getIs...MenuItemEnabled" }
				}));
			},

			watbBulkEmailMenuItemClick: function () {
				const lookupConfig = {
					entitySchemaName: "AccountFolder",
					hideActions: true
				};

				this.openLookup(lookupConfig, this.watbBulkEmailAccountFolderSelectedCallback, this);
			},

			watbBulkEmailAccountFolderSelectedCallback: function ({ selectedRows }) {
				if (selectedRows.getCount() < 1) {
					return;
				}

				if (selectedRows.getCount() > 1) {
					throw new Error("Only one folder (group) per selection is supported!");
				}

				const folderId = selectedRows.first()?.value;

				this.watbOpenBulkEmailComposePageForAccountFolderAsync(folderId);
			},

			watbOpenBulkEmailComposePageForAccountFolderAsync: async function (accountFolderId) {
				const folderInfo = await this.watbGetAccountFolderInfoAsync(accountFolderId);
				const accountsInFolder = await this.watbGetAccountEmailCommunicationsAsync({
					accountFilter: folderInfo.get("SearchData") && Terrasoft.deserialize(folderInfo.get("SearchData")),
				});

				const distinctAccountIds = accountsInFolder
					.mapArray(ac => ac.get("AccountId"))
					.filter((value, index, array) => array.indexOf(value) === index);

				const blindCopyRecepientString = accountsInFolder
					.mapArray(ac => EmailHelper.getEmailWithName(ac.get("Email"), ac.get("AccountName")))
					.join("; ");

				this.watbOpenEmailComposePage([
					{
						name: "BlindCopyRecepient",
						value: blindCopyRecepientString
					},
					{
						name: "Watb_IsBulkEmail",
						value: true
					},
					{
						name: "Watb_BulkEmailAccountIds",
						value: distinctAccountIds
					}
				]);
			},

			watbOpenEmailComposePage: function (valuePairs) {
				const entitySchemaConfig = NetworkUtilities.getEntityConfigUrl({
					entitySchema: "Activity",
					primaryColumnValue: Terrasoft.GUID_EMPTY,
					typeColumnValue: ConfigurationConstants.Activity.Type.Email,
					operation: ConfigurationEnums.CardStateV2.ADD,
				});

				const config = {
					entitySchemaName: "Activity",
					primaryColumnValue: Terrasoft.GUID_EMPTY,
					typeId: ConfigurationConstants.Activity.Type.Email,
					operation: ConfigurationEnums.CardStateV2.ADD,
					moduleName: entitySchemaConfig.cardModule,
					moduleId: this.sandbox.id + "_" + "Activity",
					historyState: this.sandbox.publish("GetHistoryState"),
					sandbox: this.sandbox,
					valuePairs: [
						{
							name: "Type",
							value: ConfigurationConstants.Activity.Type.Email
						},
						...valuePairs
					]
				};

				NetworkUtilities.openCard(config);
			},

			watbGetAccountFolderInfoAsync: function (accountFolderId) {
				return new Promise((resolve, reject) => {
					const esq = Ext.create("Terrasoft.EntitySchemaQuery", { rootSchemaName: "AccountFolder" });

					esq.addColumn("Id", "Id");
					esq.addColumn("Name", "Name");
					esq.addColumn("SearchData", "SearchData");

					esq.getEntity(accountFolderId, function (result) {
						if (result.success) {
							resolve(result.entity);
						} else {
							reject(result);
						}
					}, this);
				});
			},

			watbGetAccountEmailCommunicationsAsync: function ({ accountFilter }) {
				return new Promise((resolve, reject) => {
					const esq = Ext.create("Terrasoft.EntitySchemaQuery", {
						rootSchemaName: "AccountCommunication",
						//isPageable: true,
						//rowCount: this.get("CashDeskUserListPagination"),
						//rowsOffset: rowsOffset || -1
					});

					esq.addColumn("Account.Id", "AccountId");
					esq.addColumn("Account.Name", "AccountName");
					esq.addColumn("Number", "Email");

					if (accountFilter) {
						const accountInFolderSubFilters = (function () {
							const f = Terrasoft.createFilterGroup();
							f.add(accountFilter);
							f.rootSchemaName = "Account";
							return f;
						})();

						const accountInFolderGroup = (function () {
							const f = Terrasoft.createCompareFilter(
								Terrasoft.ComparisonType.GREATER,
								Ext.create("Terrasoft.AggregationQueryExpression", {
									columnPath: "[Account:Id:Account].Id",
									subFilters: accountInFolderSubFilters,
									aggregationType: Terrasoft.AggregationType.COUNT,
								}),
								Ext.create("Terrasoft.ParameterExpression", {
									parameterValue: 0,
									parameterDataType: Terrasoft.DataValueType.INTEGER
								}));
							f.subFilters = accountInFolderSubFilters;
							return f;
						})();

						esq.filters.add("AccountFolderFilter", accountInFolderGroup);
					}

					esq.filters.add("EmailCommunicationFilter", Terrasoft.createColumnFilterWithParameter(Terrasoft.ComparisonType.EQUAL, "[ComTypebyCommunication:CommunicationType:CommunicationType].Communication", this.constants.EMAIL_COMMUNICATION_ID));

					esq.getEntityCollection(function (response) {
						if (response && response.success) {
							resolve(response.collection);
						} else reject(response);
					}, this);
				});
			}
		}
	};
});
