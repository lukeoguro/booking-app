define({
  "api": [
    {
      "type": "get",
      "url": "/bookings",
      "title": "Returns all dates with booked schedules",
      "group": "Schedule",
      "success": {
        "examples": [
          {
            "title": "Success-Response:",
            "content": "HTTP/1.1 200 OK\n['07-03-18', '08-02-18']",
            "type": "json"
          }
        ]
      },
      "version": "0.0.0",
      "filename": "routes/api.js",
      "groupTitle": "Schedule",
      "name": "GetBookings"
    },
    {
      "type": "get",
      "url": "/bookings/:date",
      "title": "Returns all bookings with details for a given date",
      "group": "Schedule",
      "parameter": {
        "fields": {
          "Parameter": [
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "date",
              "description": "<p>(required) This is the date to get the booking details for</p>"
            }
          ]
        }
      },
      "success": {
        "examples": [
          {
            "title": "Success-Response:",
            "content": "HTTP/1.1 200 OK\n[[\"Vincent Ortiz\",\"garth@king.org\",\"06:00\"],[\"Laurine Feil\",\"garth@king.org\",\"06:00\"]]",
            "type": "json"
          }
        ]
      },
      "version": "0.0.0",
      "filename": "routes/api.js",
      "groupTitle": "Schedule",
      "name": "GetBookingsDate"
    },
    {
      "type": "get",
      "url": "/schedules",
      "title": "Retrieves all available schedules",
      "group": "Schedule",
      "success": {
        "fields": {
          "Success 200": [
            {
              "group": "Success 200",
              "type": "Object[]",
              "optional": false,
              "field": "schedules",
              "description": "<p>List of staff schedules.</p>"
            },
            {
              "group": "Success 200",
              "type": "Number",
              "optional": false,
              "field": "schedules.id",
              "description": "<p>ID of schedule.</p>"
            },
            {
              "group": "Success 200",
              "type": "Number",
              "optional": false,
              "field": "schedules.staff_id",
              "description": "<p>ID of the staff for the schedule.</p>"
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "schedules.date",
              "description": "<p>Date of the schedule.</p>"
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "schedules.time",
              "description": "<p>Time of the scheudle.</p>"
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "schedules.student_email",
              "description": "<p>Email of the student who booked schedule.</p>"
            }
          ]
        },
        "examples": [
          {
            "title": "Success-Response:",
            "content": "HTTP/1.1 200 OK\n[ { id: 1,\n    staff_id: 1,\n    student_email: null,\n    date: '07-01-18',\n    time: '06:10' },\n  { id: 2,\n    staff_id: 1,\n    student_email: null,\n    date: '07-02-18',\n    time: '06:20' },\n  { id: 3,\n    staff_id: 1,\n    student_email: 'marquise@jacobi.info',\n    date: '07-03-18',\n    time: '06:30' }\n]",
            "type": "json"
          }
        ]
      },
      "version": "0.0.0",
      "filename": "routes/api.js",
      "groupTitle": "Schedule",
      "name": "GetSchedules"
    },
    {
      "type": "get",
      "url": "/schedules/:staff_id",
      "title": "Retrieves all available schedules for a given staff_id",
      "group": "Schedule",
      "parameter": {
        "fields": {
          "Parameter": [
            {
              "group": "Parameter",
              "type": "Number",
              "optional": false,
              "field": "id",
              "description": "<p>Staff members unique ID.</p>"
            }
          ]
        }
      },
      "success": {
        "fields": {
          "Success 200": [
            {
              "group": "Success 200",
              "type": "Object[]",
              "optional": false,
              "field": "schedules",
              "description": "<p>List of staff schedules.</p>"
            },
            {
              "group": "Success 200",
              "type": "Number",
              "optional": false,
              "field": "schedules.id",
              "description": "<p>ID of schedule.</p>"
            },
            {
              "group": "Success 200",
              "type": "Number",
              "optional": false,
              "field": "schedules.staff_id",
              "description": "<p>ID of the staff for the schedule.</p>"
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "schedules.date",
              "description": "<p>Date of the schedule.</p>"
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "schedules.time",
              "description": "<p>Time of the scheudle.</p>"
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "schedules.student_email",
              "description": "<p>Email of the student who booked schedule.</p>"
            }
          ]
        },
        "examples": [
          {
            "title": "Success-Response:",
            "content": "HTTP/1.1 200 OK\n[ { id: 1,\n    staff_id: 1,\n    student_email: null,\n    date: '07-01-18',\n    time: '06:10' }\n]",
            "type": "json"
          }
        ]
      },
      "version": "0.0.0",
      "filename": "routes/api.js",
      "groupTitle": "Schedule",
      "name": "GetSchedulesStaff_id"
    },
    {
      "type": "delete",
      "url": "/schedules/:schedule_id",
      "title": "Staff cancels schedule",
      "group": "Staff",
      "parameter": {
        "fields": {
          "Parameter": [
            {
              "group": "Parameter",
              "type": "Number",
              "optional": false,
              "field": "schedule_id",
              "description": "<p>(required) This id the of schedule that the staff wants to cancel</p>"
            }
          ]
        }
      },
      "success": {
        "examples": [
          {
            "title": "Success-Response:",
            "content": "HTTP/1.1 204 No Content",
            "type": "String"
          }
        ]
      },
      "error": {
        "fields": {
          "Error 4xx": [
            {
              "group": "Error 4xx",
              "optional": false,
              "field": "WithBooking",
              "description": "<p>When there is a booking on the schedule to cancel</p>"
            },
            {
              "group": "Error 4xx",
              "optional": false,
              "field": "NoSchedule",
              "description": "<p>When there is no schedule on the ID provided</p>"
            }
          ]
        },
        "examples": [
          {
            "title": "WithBooking Error-Response:",
            "content": "HTTP/1.1 403 Forbidden\n'Can not delete the schedule. There is a booking.'",
            "type": "String"
          },
          {
            "title": "NoSchedule Error-Response:",
            "content": "HTTP/1.1 404 Not Found\n'Schedule does not exist.'",
            "type": "String"
          }
        ]
      },
      "version": "0.0.0",
      "filename": "routes/api.js",
      "groupTitle": "Staff",
      "name": "DeleteSchedulesSchedule_id"
    },
    {
      "type": "get",
      "url": "/staff_members",
      "title": "Retrieves all available staff members",
      "group": "Staff",
      "success": {
        "fields": {
          "Success 200": [
            {
              "group": "Success 200",
              "type": "Object[]",
              "optional": false,
              "field": "staff_members",
              "description": "<p>List of staff.</p>"
            },
            {
              "group": "Success 200",
              "type": "Number",
              "optional": false,
              "field": "staff_members.id",
              "description": "<p>ID of staff.</p>"
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "staff_members.name",
              "description": "<p>Name of staff.</p>"
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "staff_members.email",
              "description": "<p>Email of staff.</p>"
            }
          ]
        },
        "examples": [
          {
            "title": "Success-Response:",
            "content": "HTTP/1.1 200 OK\n[ { id: 1,\n    name: 'Fae Kassulke V',\n    email: 'ewald@mills.com' },\n  { id: 2,\n    name: 'Aaron Nitzsche',\n    email: 'kali@rosenbaumtremblay.biz' }\n]",
            "type": "json"
          }
        ]
      },
      "version": "0.0.0",
      "filename": "routes/api.js",
      "groupTitle": "Staff",
      "name": "GetStaff_members"
    },
    {
      "type": "post",
      "url": "/schedules",
      "title": "Adds one or more staff schedules",
      "group": "Staff",
      "parameter": {
        "fields": {
          "Parameter": [
            {
              "group": "Parameter",
              "type": "Number",
              "optional": false,
              "field": "staff_id",
              "description": "<p>(required) ID of Staff</p>"
            },
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "date",
              "description": "<p>(required) Date of Schedule</p>"
            },
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "time",
              "description": "<p>(required) Time of Schedule</p>"
            }
          ]
        },
        "examples": [
          {
            "title": "Request-Example:",
            "content": "{\n  \"schedules\": [{\"staff_id\": 1, \"date\": \"10-10-10\", \"time\": \"12:12\"}]\n}",
            "type": "json"
          }
        ]
      },
      "success": {
        "examples": [
          {
            "title": "Success-Response:",
            "content": "HTTP/1.1 201 CREATED\n'Schedules added'",
            "type": "String"
          }
        ]
      },
      "error": {
        "fields": {
          "Error 4xx": [
            {
              "group": "Error 4xx",
              "optional": false,
              "field": "InvalidInput",
              "description": "<p>When the schedules can not be saved due to invalid inputs. If more than one schedule is to be added, all schedules must have a valid input. Otherwise, none of the schedules (even those with valid inputs) get saved.</p>"
            }
          ]
        },
        "examples": [
          {
            "title": "InvalidInput Error-Response:",
            "content": "HTTP/1.1 400 Bad Request\n'Please check your inputs.'",
            "type": "String"
          }
        ]
      },
      "version": "0.0.0",
      "filename": "routes/api.js",
      "groupTitle": "Staff",
      "name": "PostSchedules"
    },
    {
      "type": "post",
      "url": "/staff_members",
      "title": "Adds a new staff member",
      "group": "Staff",
      "parameter": {
        "fields": {
          "Parameter": [
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "name",
              "description": "<p>(required) Name of staff.</p>"
            },
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "email",
              "description": "<p>(required) Email of staff.</p>"
            }
          ]
        }
      },
      "success": {
        "fields": {
          "Success 201": [
            {
              "group": "Success 201",
              "type": "Number",
              "optional": false,
              "field": "id",
              "description": "<p>ID of staff.</p>"
            }
          ]
        },
        "examples": [
          {
            "title": "Success-Response:",
            "content": "HTTP/1.1 201 CREATED\n{\n  id: 1,\n}",
            "type": "json"
          }
        ]
      },
      "error": {
        "fields": {
          "Error 4xx": [
            {
              "group": "Error 4xx",
              "optional": false,
              "field": "InvalidInput",
              "description": "<p>When the staff can not be saved due to invalid inputs.</p>"
            }
          ]
        },
        "examples": [
          {
            "title": "InvalidInput Error-Response:",
            "content": "HTTP/1.1 400 Bad Request\n'Staff can not be created. Check your inputs.'",
            "type": "String"
          }
        ]
      },
      "version": "0.0.0",
      "filename": "routes/api.js",
      "groupTitle": "Staff",
      "name": "PostStaff_members"
    },
    {
      "type": "get",
      "url": "/students",
      "title": "Retrieves all registered students",
      "group": "Student",
      "success": {
        "fields": {
          "Success 200": [
            {
              "group": "Success 200",
              "type": "Object[]",
              "optional": false,
              "field": "students",
              "description": "<p>List of registered students.</p>"
            },
            {
              "group": "Success 200",
              "type": "Number",
              "optional": false,
              "field": "students.id",
              "description": "<p>ID of student.</p>"
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "students.name",
              "description": "<p>Name of student.</p>"
            },
            {
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "students.email",
              "description": "<p>Email of student.</p>"
            }
          ]
        },
        "examples": [
          {
            "title": "Success-Response:",
            "content": "HTTP/1.1 200 OK\n[ { id: 1,\n    name: 'Fae Kassulke V',\n    email: 'ewald@mills.com' },\n  { id: 2,\n    name: 'Aaron Nitzsche',\n    email: 'kali@rosenbaumtremblay.biz' }\n]",
            "type": "json"
          }
        ]
      },
      "version": "0.0.0",
      "filename": "routes/api.js",
      "groupTitle": "Student",
      "name": "GetStudents"
    },
    {
      "type": "post",
      "url": "/bookings",
      "title": "Books a staff member schedule",
      "group": "Student",
      "parameter": {
        "fields": {
          "Parameter": [
            {
              "group": "Parameter",
              "type": "Number",
              "optional": false,
              "field": "id",
              "description": "<p>(required) ID of the Schedule</p>"
            },
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "student_email",
              "description": "<p>(required) Email of the student</p>"
            }
          ]
        }
      },
      "success": {
        "examples": [
          {
            "title": "Success-Response:",
            "content": "HTTP/1.1 204 No Content",
            "type": "String"
          }
        ]
      },
      "error": {
        "fields": {
          "Error 4xx": [
            {
              "group": "Error 4xx",
              "optional": false,
              "field": "ScheduleNotFound",
              "description": "<p>When the schedule id provided does not match to an existing schedule or the scehdule is already booked.</p>"
            },
            {
              "group": "Error 4xx",
              "optional": false,
              "field": "StudentNotFound",
              "description": "<p>When the student email provided does not belong to a registered student</p>"
            }
          ]
        },
        "examples": [
          {
            "title": "ScheduleNotFound Error-Response:",
            "content": "HTTP/1.1 404 Not Found\n'Schedule is either booked or does not exist.'",
            "type": "String"
          },
          {
            "title": "StudentNotFound Error-Response:",
            "content": "HTTP/1.1 404 Not Found\n'Student does not exist; booking_sequence: {sequence}'",
            "type": "String"
          }
        ]
      },
      "version": "0.0.0",
      "filename": "routes/api.js",
      "groupTitle": "Student",
      "name": "PostBookings"
    },
    {
      "type": "post",
      "url": "/students",
      "title": "Adds a student to the database",
      "group": "Student",
      "parameter": {
        "fields": {
          "Parameter": [
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "email",
              "description": "<p>(required) Email of the student</p>"
            },
            {
              "group": "Parameter",
              "type": "String",
              "optional": false,
              "field": "name",
              "description": "<p>(required) Name of the student</p>"
            },
            {
              "group": "Parameter",
              "type": "Number",
              "optional": false,
              "field": "booking_sequence",
              "description": "<p>(required) This is proof that student tried to book a schedule first. Only students with a booking sequence can be added to the database.</p>"
            }
          ]
        }
      },
      "success": {
        "examples": [
          {
            "title": "Success-Response:",
            "content": "HTTP/1.1 201 CREATED\n'Successfully added student to the database.''",
            "type": "String"
          }
        ]
      },
      "error": {
        "fields": {
          "Error 4xx": [
            {
              "group": "Error 4xx",
              "optional": false,
              "field": "InvalidBookingSequence",
              "description": "<p>When the student doesn't have a valid booking sequence.</p>"
            },
            {
              "group": "Error 4xx",
              "optional": false,
              "field": "InvalidInputs",
              "description": "<p>When the student email or name is not provided</p>"
            }
          ]
        },
        "examples": [
          {
            "title": "InvalidBookingSequence Error-Response:",
            "content": "HTTP/1.1 403 Forbidden\n'Must have booking sequence.'",
            "type": "String"
          },
          {
            "title": "InvalidInputs Error-Response:",
            "content": "HTTP/1.1 400 Bad Request\n'Please check your inputs.'",
            "type": "String"
          }
        ]
      },
      "version": "0.0.0",
      "filename": "routes/api.js",
      "groupTitle": "Student",
      "name": "PostStudents"
    },
    {
      "type": "put",
      "url": "/bookings/:booking_id",
      "title": "Student cancels a booking",
      "group": "Student",
      "parameter": {
        "fields": {
          "Parameter": [
            {
              "group": "Parameter",
              "type": "Number",
              "optional": false,
              "field": "booking_id",
              "description": "<p>(required) This id the of schedule that the student wants to cancel their booking for.</p>"
            }
          ]
        }
      },
      "success": {
        "examples": [
          {
            "title": "Success-Response:",
            "content": "HTTP/1.1 204 No Content",
            "type": "String"
          }
        ]
      },
      "error": {
        "fields": {
          "Error 4xx": [
            {
              "group": "Error 4xx",
              "optional": false,
              "field": "NoBooking",
              "description": "<p>When there is no booking on the booking ID provided</p>"
            }
          ]
        },
        "examples": [
          {
            "title": "NoBooking Error-Response:",
            "content": "HTTP/1.1 404 Not Found\n'There is no booking on the schedule'",
            "type": "String"
          }
        ]
      },
      "version": "0.0.0",
      "filename": "routes/api.js",
      "groupTitle": "Student",
      "name": "PutBookingsBooking_id"
    }
  ]
});
