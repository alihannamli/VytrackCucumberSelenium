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
  "status": "skipped"
});
formatter.step({
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.user_is_on_the_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user logs in as store manager",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinitions.user_logs_in_as_store_manager()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user navigates to \"Activities\" then to \"Calendar Events\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "status": "skipped"
});
});