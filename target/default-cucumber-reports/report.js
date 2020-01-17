$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/fleet/CreateACar.feature");
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
  "name": "user navigates to \"Fleet\" then to \"Vehicles\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepDefinitions.user_navigates_to_then_to(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on \"Create Car\" button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
    },
    {
      "cells": [
        "SuperMan",
        "Cool Driver",
        "Texas",
        "2019",
        "Red"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "status": "skipped"
});
});