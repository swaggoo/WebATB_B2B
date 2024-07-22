define("InvoicePageV2", ["WatbCurrentUserRolesMixin"], function () {
    return {
        entitySchemaName: "Invoice",
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
        modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
        methods: {
            init: function () {
                this.callParent(arguments);
                this.setCurrentUserRoles();
            }
        },
        dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
        diff: /**SCHEMA_DIFF*/[]/**SCHEMA_DIFF*/
    };
});
