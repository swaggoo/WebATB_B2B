define("ReminderNotificationsSchema", ["ReminderNotificationsSchemaResources"], function() {
    return {
        entitySchemaName: "Reminding",
        methods: {
            getIsAccountNotification: function() {
				const entityName = "Account";
				const entityUid = Terrasoft.configuration.ModuleStructure[entityName].entitySchemaUId;
				console.log(entityUid);
				const schemaName = this.get("SchemaName");
                return schemaName === "Account";
            },
            getNotificationSubjectCaption: function() {
                var caption = this.get("Description");
                return caption;
            }
        },
        diff: [
            {
                "operation": "insert",
                "name": "NotificationleadItemContainer",
                "parentName": "Notification",
                "propertyName": "items",
                "values": {
                    "itemType": Terrasoft.ViewItemType.CONTAINER,
                    "wrapClass": [
                        "reminder-notification-item-container"
                    ],
                    "visible": {"bindTo": "getIsAccountNotification"},
                    "items": []
                }
            },
            {
                "operation": "insert",
                "name": "NotificationItemleadTopContainer",
                "parentName": "NotificationleadItemContainer",
                "propertyName": "items",
                "values": {
                    "itemType": Terrasoft.ViewItemType.CONTAINER,
                    "wrapClass": ["reminder-notification-item-top-container"],
                    "items": []
                }
            },
            {
                "operation": "insert",
                "name": "NotificationleadImage",
                "parentName": "NotificationItemleadTopContainer",
                "propertyName": "items",
                "values": {
                    "itemType": Terrasoft.ViewItemType.BUTTON,
                    "className": "Terrasoft.ImageView",
                    "imageSrc": {"bindTo": "getNotificationImage"},
                    "classes": {"wrapClass": ["reminder-notification-icon-class"]}
                }
            },
            {
                "operation": "insert",
                "name": "NotificationDate",
                "parentName": "NotificationItemleadTopContainer",
                "propertyName": "items",
                "values": {
                    "itemType": Terrasoft.ViewItemType.LABEL,
                    "caption": {"bindTo": "getNotificationDate"},
                    "classes": {"labelClass": ["subject-text-labelClass"]}
                }
            },
            {
                "operation": "insert",
                "name": "NotificationleadSubject",
                "parentName": "NotificationItemleadTopContainer",
                "propertyName": "items",
                "values": {
                    "itemType": Terrasoft.ViewItemType.LABEL,
                    "caption": {"bindTo": "getNotificationSubjectCaption"},
                    "click": {"bindTo": "onNotificationSubjectClick"},
                    "classes": {"labelClass": ["subject-text-labelClass", "label-link", "label-url"]}
                }
            }
        ]
    };
});