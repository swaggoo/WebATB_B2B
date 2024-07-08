define("EmailPageV2", [], function() {
	return {
		methods: {
			saveEntity: function(callback, scope) {
				this.callParent([function(response) {
					this.watbSaveEntityCallbackBulkEmailInterceptor(response, callback, scope);
				}, scope || this]);
			},
			
			getIsVisibleSendButton: function() {
				if (this.get("WatbScheduleSendDate")) {
					return false;
				}
				
				return this.callParent(arguments);
			},
			
			
			watbSaveEntityCallbackBulkEmailInterceptor: function(response, callback, scope) {
				if (!response.success || !this.get("Watb_IsBulkEmail")) {		
					return Ext.callback(callback, scope || this, [response]);
				}
				
				this.watbLinkAccountsByBulkEmail(
					response.id, 
					this.get("Watb_BulkEmailAccountIds"), 
					function(linkingResponse) {
						Ext.callback(callback, scope || this, [response]);
						
						if (!linkingResponse.success) {
							console.error("Watb Bulk Email linking failed!", linkingResponse);
						}
					},
					this);
			},
			
			watbLinkAccountsByBulkEmail: function(activityId, accountIds, callback, scope) {
				if (!accountIds || accountIds.length == 0) {
					return Ext.callback(callback, scope || this, [{ success: true }]);
				}
				
				const batchQuery = Ext.create("Terrasoft.BatchQuery");
				
				Terrasoft.each(accountIds, accountId => {
					const insertQuery = Ext.create("Terrasoft.InsertQuery", { rootSchemaName: "WatbBulkEmailLink" });
					
					insertQuery.setParameterValue("Email", activityId, Terrasoft.DataValueType.GUID);
					insertQuery.setParameterValue("Account", accountId, Terrasoft.DataValueType.GUID);
					
					batchQuery.add(insertQuery);
				});
				
				batchQuery.execute(callback, scope || this);
			},
			
			
			getIsWatbScheduleSendDateEnabled: function() {
				return this.isAddMode();
			},
			
			getIsWatbScheduleSendDateVisible: function() {
				return this.isAddMode() || !!this.get("WatbScheduleSendDate");
			},
		},
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"parentName": "Header",
				"propertyName": "items",
				"name": "WatbScheduleSendDate",
				"values": {
					"bindTo": "WatbScheduleSendDate",
					"enabled": { "bindTo": "getIsWatbScheduleSendDateEnabled" },
					"visible": { "bindTo": "getIsWatbScheduleSendDateVisible" },
					"layout": {
						"column": 16,
						"row": 3,
						"colSpan": 8,
						"rowSpan": 0
					}
				}
			}
		]/**SCHEMA_DIFF*/
	};
});
