define("UsrSchemaec39cfdbDetail", ["css!UsrAccountFileSchemaDetailCSS"], function () {
	return {
		entitySchemaName: "UsrAccountFile",
		attributes: {
			"UsrDocumentType": {
				"dataValueType": this.Terrasoft.DataValueType.LOOKUP,
				"type": this.Terrasoft.ViewModelColumnType.VIRTUAL_COLUMN,
				"isLookup": true,
				"referenceSchemaName": "UsrFileType"
			}
		},
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "merge",
				"name": "AddRecordButton",
				"parentName": "Detail",
				"propertyName": "tools",
				"values": {
					"visible": false
				}
			},
			{
				"operation": "insert",
				"name": "CustomAddFileButton",
				"parentName": "Detail",
				"propertyName": "tools",
				"index": 1,
				"values": {
					"itemType": Terrasoft.ViewItemType.BUTTON,
					"markerValue": "AddRecordButton",
					"style": Terrasoft.controls.ButtonEnums.style.TRANSPARENT,
					"imageConfig": { "bindTo": "Resources.Images.AddButtonImage" },
					"click": { "bindTo": "onAddFileClick" },
					"visible": true
				}
			}
		]/**SCHEMA_DIFF*/,
		methods: {
			onAddFileClick: function () {
				var config = {
					entitySchemaName: "UsrFileType",
					multiSelect: false,
					columns: ["Name"],
					sortedColumns: [{
						name: "Name",
						orderPosition: 0,
						orderDirection: this.Terrasoft.core.enums.OrderDirection.ASC
					}]
				};

				this.openLookup(config, this.fileClickCallback, this);
			},

			initDropzoneEvents: function () {
				const dropZone = document.getElementById("DragAndDropContainer");
				if (!dropZone || !this.get("CanEditMasterRecord")) {
					return;
				}
				
				this.Terrasoft.ConfigurationFileApi.initDropzoneEvents(dropZone, this.dropzoneMouseOverHandler.bind(this), this.dropzoneFilesSelectedHandler.bind(this));
			},
			
			dropzoneMouseOverHandler: function (over) {
				const dropZone = document.getElementById("DragAndDropContainer");
				if (dropZone) {
					dropZone.classList.toggle("dropzone-hover", over);
				}
			},

			dropzoneFilesSelectedHandler: function (files) {
				var config = {
					entitySchemaName: "UsrFileType",
					multiSelect: false,
					columns: ["Name"],
					sortedColumns: [{
						name: "Name",
						orderPosition: 0,
						orderDirection: this.Terrasoft.core.enums.OrderDirection.ASC
					}]
				};

				this.openLookup(config, function (args) {
					var lookupSelectedRows = args.selectedRows.getItems();
					if (lookupSelectedRows && lookupSelectedRows.length > 0) {
						var selectedDocumentType = lookupSelectedRows[0];

						this.saveFile(selectedDocumentType, files);
					}
				}.bind(this), this);
			},
			
			fileClickCallback: function (args) {
				var lookupSelectedRows = args.selectedRows.getItems();
				if (lookupSelectedRows && lookupSelectedRows.length > 0) {
					var selectedDocumentType = lookupSelectedRows[0];
					this.showFileSelectionWindow(selectedDocumentType);
				}
			},

			showFileSelectionWindow: function (selectedDocumentType) {
				var fileUpload = document.createElement("input");
				fileUpload.type = "file";
				fileUpload.onchange = (event) => {
					var files = event.target.files;
					this.saveFile(selectedDocumentType, files);
				};
				fileUpload.click();
			},

			saveFile: function (selectedDocumentType, files) {
				if (!selectedDocumentType || !files || files.length === 0) {
					return;
				}

				this.set("UsrDocumentType", { value: selectedDocumentType.value, displayValue: selectedDocumentType.displayValue });
				this.onFileSelect(files);
			},

			onFileComplete: function (error, xhr, file, options) {
				if (!error) {
					var updateQuery = Ext.create("Terrasoft.UpdateQuery", {
						rootSchemaName: "UsrAccountFile"
					});
					var firstFilter = updateQuery.createColumnFilterWithParameter(this.Terrasoft.ComparisonType.EQUAL, "Id", options.data.fileId);
					updateQuery.filters.add("firstFilter", firstFilter);
					updateQuery.setParameterValue("UsrDocumentType", this.get("UsrDocumentType").value, this.Terrasoft.DataValueType.LOOKUP);
					updateQuery.execute(function (result) {
						if (result.success) {
							this.loadGridDataRecord(options.data.fileId);
						}
					}, this);
				} else {
					this.onFileCompleteError(error, file);
				}
			}
		}
	};
});
