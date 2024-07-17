define("AccountAddressPageV2", [], function() {
	return {
		entitySchemaName: "AccountAddress",
		attributes: {
			"Address": {
				dataValueType: this.Terrasoft.DataValueType.TEXT,
				dependencies: [
					{
						columns: ["Address"]
					}
				]
			},
			"Country": {
				dataValueType: this.Terrasoft.DataValueType.LOOKUP,
				dependencies: [
					{
						columns: ["Country"]
					}
				]
			},
			"City": {
				dataValueType: this.Terrasoft.DataValueType.LOOKUP,
				dependencies: [
					{
						columns: ["City"]
					}
				]
			},
			"Zip": {
				dataValueType: this.Terrasoft.DataValueType.TEXT,
				dependencies: [
					{
						columns: ["Zip"]
					}
				]
			}
		},
		messages: {},
		methods: {
			updateMap: Terrasoft.emptyFn
		},
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
		rules: {},
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "remove",
				"name": "AddressMapContainer"
			},
			{
				"operation": "remove",
				"name": "Map"
			},
			{
				"operation": "merge",
				"name": "WatbRegion3fa16ccc-62db-4a8a-ad27-4e6f17f0f815",
				"values": {
					"caption": {bindTo: "Resources.Strings.WatbRegionCaption"},
				}
			},
		]/**SCHEMA_DIFF*/
	};
});

