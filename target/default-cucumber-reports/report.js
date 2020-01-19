$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/activities/CalendarEvents.feature");
formatter.feature({
  "name": "All calendar events",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@calendar_events"
    }
  ]
});
formatter.scenario({
  "name": "Verify column names",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@calendar_events"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logs in as store manager",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinitions.user_logs_in_as_store_manager()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"Activities\" then to \"Calendar Events\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepDefinitions.user_navigates_to_then_to(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies that column names are displayed",
  "rows": [
    {
      "cells": [
        "TITLE"
      ]
    },
    {
      "cells": [
        "CALENDAR"
      ]
    },
    {
      "cells": [
        "START"
      ]
    },
    {
      "cells": [
        "END"
      ]
    },
    {
      "cells": [
        "RECURRENT"
      ]
    },
    {
      "cells": [
        "RECURRENCE"
      ]
    },
    {
      "cells": [
        "INVITATION STATUS"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "CalendarEventsStepDefinitions.user_verifies_that_column_names_are_displayed(String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/fleet/CreateACar.feature");
formatter.feature({
  "name": "Create new car",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@create_car"
    }
  ]
});
formatter.scenario({
  "name": "Create new car",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@create_car"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logs in as store manager",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinitions.user_logs_in_as_store_manager()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"Fleet\" then to \"Vehicles\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepDefinitions.user_navigates_to_then_to(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on \"Create Car\" button",
  "keyword": "And "
});
formatter.match({
  "location": "CreateCarStepDefinitions.user_click_on_button(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user adds new car information:",
  "rows": [
    {
      "cells": [
        "License Plate",
        "Driver",
        "Location",
        "Model Year",
        "Color"
      ]
    },
    {
      "cells": [
        "TestPlates",
        "Test Driver",
        "Washington D.C.",
        "2020",
        "Black"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CreateCarStepDefinitions.user_adds_new_car_information(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});