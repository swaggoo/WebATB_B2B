define("WatbCurrentUserRolesMixin", [], function () {
	Ext.define("Terrasoft.configuration.mixins.WatbCurrentUserRolesMixin", {
		alternateClassName: "Terrasoft.WatbCurrentUserRolesMixin",

		constants: {
			B2B_DEPARTMENT_ROLE_CAPTION: "B2B Department",
			CC_DEPARTMENT_ROLE_CAPTION: "CC agents",
			SYSTEM_ADMINISTRATOR_ROLE_CAPTION: "System administrators",
			EMAIL_COMMUNICATION_ID: "ea350dd6-66cc-df11-9b2a-001d60e938c6",
			WATB_B2B_DEPARTMENT_TYPE_ID: "05c7545e-7e05-45f0-902c-712d5bb16644",
			WATB_CC_DEPARTMENT_TYPE_ID: "94bbf9b4-8d32-4791-b178-7f3f318e3856"
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

		filterAccountsLookupByUserRole: function () {
			var filters = Ext.create("Terrasoft.FilterGroup");
			const currentUserRoles = this.get("CurrentUserRoles");
			if (currentUserRoles.includes(this.constants.SYSTEM_ADMINISTRATOR_ROLE_CAPTION)) {
				return filters;
			}
			if (currentUserRoles.includes(this.constants.B2B_DEPARTMENT_ROLE_CAPTION)) {
				filters.add("AccountDepartmentFilter",
					Terrasoft.createColumnFilterWithParameter(
						Terrasoft.ComparisonType.EQUAL, "WatbDepartmentType", this.constants.WATB_B2B_DEPARTMENT_TYPE_ID
					)
				);
			}
			if (currentUserRoles.includes(this.constants.CC_DEPARTMENT_ROLE_CAPTION)) {
				filters.add("AccountDepartmentFilter",
					Terrasoft.createColumnFilterWithParameter(
						Terrasoft.ComparisonType.EQUAL, "WatbDepartmentType", this.constants.WATB_CC_DEPARTMENT_TYPE_ID
					)
				);
			}

			return filters;
		}
	});
});