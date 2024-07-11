define("ReminderNotificationsSchema", ["ReminderNotificationsSchemaResources"], function () {
    return {
        /* The name of the object schema. */
        entitySchemaName: "Reminding",
        /* The methods of the view model. */
        methods: {
            /* Determine whether the reminder is connected to the lead. */
            getIsLeadNotification: function () {
                const entityName = "Account";
                const entityUid = Terrasoft.configuration.ModuleStructure[entityName].entitySchemaUId;
                console.log(entityUid);
                return this.get("SchemaName") === "Account";
            },
            /* Return the reminder caption. */
            getNotificationSubjectCaption: function () {
                var caption = this.get("Description");
                return caption;
            }
        },
        /* Display the reminder. */
        diff: [
            /* The properties to add the container. */
            {
                /* Add the element to the page. */
                "operation": "insert",
                /* The meta name of the container to add. */
                "name": "NotificationleadItemContainer",
                /* The meta name of the parent container to add the current container. */
                "parentName": "Notification",
                /* Add the container to the parent element's collection of elements. */
                "propertyName": "items",
                /* The properties to pass to the element's constructor. */
                "values": {
                    "itemType": Terrasoft.ViewItemType.CONTAINER,
                    "wrapClass": [
                        "reminder-notification-item-container"
                    ],
                    /* Display only for leads. */
                    "visible": { "bindTo": "getIsLeadNotification" },
                    "items": []
                }
            },
            /* The properties to add the caption container. */
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
            /* The properties to add the image. */
            {
                "operation": "insert",
                "name": "NotificationleadImage",
                "parentName": "NotificationItemleadTopContainer",
                "propertyName": "items",
                "values": {
                    "itemType": Terrasoft.ViewItemType.BUTTON,
                    "className": "Terrasoft.ImageView",
                    "imageSrc": { "bindTo": "getNotificationImage" },
                    "classes": { "wrapClass": ["reminder-notification-icon-class"] }
                }
            },
            /* The properties for the date. */
            {
                "operation": "insert",
                "name": "NotificationDate",
                "parentName": "NotificationItemleadTopContainer",
                "propertyName": "items",
                "values": {
                    "itemType": Terrasoft.ViewItemType.LABEL,
                    "caption": { "bindTo": "getNotificationDate" },
                    "classes": { "labelClass": ["subject-text-labelClass"] }
                }
            },
            /* The properties for the reminder text. */
            {
                "operation": "insert",
                "name": "NotificationleadSubject",
                "parentName": "NotificationItemleadTopContainer",
                "propertyName": "items",
                "values": {
                    "itemType": Terrasoft.ViewItemType.LABEL,
                    "caption": { "bindTo": "getNotificationSubjectCaption" },
                    "click": { "bindTo": "onNotificationSubjectClick" },
                    "classes": { "labelClass": ["subject-text-labelClass", "label-link", "label-url"] }
                }
            }
        ]
    };
});