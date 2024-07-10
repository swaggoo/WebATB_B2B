define("AccountSectionV2", ["AccountSectionV2Resources", "EmailHelper", "ConfigurationConstants", "ConfigurationEnums", "NetworkUtilities"], function (resources, EmailHelper, ConfigurationConstants, ConfigurationEnums, NetworkUtilities) {
	const B2B_DEPARTMENT_ROLE_CAPTION = "B2B Department";
	const CC_DEPARTMENT_ROLE_CAPTION = "CC agents";
	const SYSTEM_ADMINISTRATOR_ROLE_CAPTION = "System administrators";
	const B2B_EDIT_PAGE_ID = "05c7545e-7e05-45f0-902c-712d5bb16644";
	const CC_EDIT_PAGE_ID = "94bbf9b4-8d32-4791-b178-7f3f318e3856";
	const EMAIL_COMMUNICATION_ID = "ea350dd6-66cc-df11-9b2a-001d60e938c6";
	const WATB_B2B_DEPARTMENT_TYPE_ID = "05c7545e-7e05-45f0-902c-712d5bb16644";
	const WATB_CC_DEPARTMENT_TYPE_ID = "94bbf9b4-8d32-4791-b178-7f3f318e3856";

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

										editPages.collection.items = editPages.collection.items.filter(function (item ) {
											if (currentUserRoles.includes(SYSTEM_ADMINISTRATOR_ROLE_CAPTION)) {
												return true;
											}
											if (currentUserRoles.includes(B2B_DEPARTMENT_ROLE_CAPTION)) {
												return item.values.Id === B2B_EDIT_PAGE_ID;
											}
											if (currentUserRoles.includes(CC_DEPARTMENT_ROLE_CAPTION)) {
												return item.values.Id === CC_EDIT_PAGE_ID;
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

				if (currentUserRoles.includes(B2B_DEPARTMENT_ROLE_CAPTION)) {
					filters.add("FilterDepartmentType", this.Terrasoft.createColumnFilterWithParameter(
						this.Terrasoft.ComparisonType.EQUAL, "WatbDepartmentType.Id", WATB_B2B_DEPARTMENT_TYPE_ID
					));
				}
				else if (currentUserRoles.includes(CC_DEPARTMENT_ROLE_CAPTION)) {
					filters.add("FilterDepartmentType", this.Terrasoft.createColumnFilterWithParameter(
						this.Terrasoft.ComparisonType.EQUAL, "WatbDepartmentType.Id", WATB_CC_DEPARTMENT_TYPE_ID
					));
				}

				return filters;
			},


			setCurrentUserRoles: function () {
				var esq = Ext.create("Terrasoft.EntitySchemaQuery", {
					rootSchemaName: "SysUserInRole"
				});
				esq.addColumn("SysRole");

				esq.filters.add("UserFilter", Terrasoft.createColumnFilterWithParameter(
					Terrasoft.ComparisonType.EQUAL, "SysUser", Terrasoft.SysValue.CURRENT_USER.value
				));

				esq.getEntityCollection(function (result) {
					if (result.success && result.collection.getCount() > 0) {
						var roles = result.collection.getItems().map(function (item) {
							return item.get("SysRole").displayValue;
						});
						this.set("CurrentUserRoles", roles);
					} else {
						this.set("CurrentUserRoles", []);
					}
				}, this);
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

					esq.filters.add("EmailCommunicationFilter", Terrasoft.createColumnFilterWithParameter(Terrasoft.ComparisonType.EQUAL, "[ComTypebyCommunication:CommunicationType:CommunicationType].Communication", EMAIL_COMMUNICATION_ID));

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
