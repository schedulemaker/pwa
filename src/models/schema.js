export const schema = {
    "models": {
        "UserSchedule": {
            "name": "UserSchedule",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "sections": {
                    "name": "sections",
                    "isArray": true,
                    "type": {
                        "nonModel": "Section"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "commute": {
                    "name": "commute",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "totalDistance": {
                    "name": "totalDistance",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "username": {
                    "name": "username",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "scheduleId": {
                    "name": "scheduleId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "UserSchedules",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "versioned",
                    "properties": {}
                }
            ]
        }
    },
    "enums": {},
    "nonModels": {
        "BannerMetadata": {
            "name": "BannerMetadata",
            "fields": {
                "code": {
                    "name": "code",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "description": {
                    "name": "description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                }
            }
        },
        "Course": {
            "name": "Course",
            "fields": {
                "courseName": {
                    "name": "courseName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "title": {
                    "name": "title",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                }
            }
        },
        "Section": {
            "name": "Section",
            "fields": {
                "isOpen": {
                    "name": "isOpen",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "campus": {
                    "name": "campus",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "meetingTimes": {
                    "name": "meetingTimes",
                    "isArray": true,
                    "type": {
                        "nonModel": "MeetingTime"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "courseName": {
                    "name": "courseName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "crn": {
                    "name": "crn",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "title": {
                    "name": "title",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "MeetingTime": {
            "name": "MeetingTime",
            "fields": {
                "startTime": {
                    "name": "startTime",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "endTime": {
                    "name": "endTime",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "building": {
                    "name": "building",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "room": {
                    "name": "room",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "instructors": {
                    "name": "instructors",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "weeks": {
                    "name": "weeks",
                    "isArray": true,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "monday": {
                    "name": "monday",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "tuesday": {
                    "name": "tuesday",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "wednesday": {
                    "name": "wednesday",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "thursday": {
                    "name": "thursday",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "friday": {
                    "name": "friday",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "saturday": {
                    "name": "saturday",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "sunday": {
                    "name": "sunday",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                }
            }
        }
    },
    "version": "97b02870f42fcd8c73248cc9ea2c53aa"
};