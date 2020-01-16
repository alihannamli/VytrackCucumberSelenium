$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Login.feature");
formatter.feature({
  "name": "Login",
  "description": "  As user, I want to be able to login into vytrack\n  under different roles with username and password",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Login as \u003crole\u003e and verify \u003ctitle\u003e page title is correct",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login_with_roles_ddt_2"
    }
  ]
});
formatter.step({
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.step({
  "name": "user logs in as \"\u003crole\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user navigates to \"\u003cmodule\u003e\" then to \"\u003csub module\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "the page title should be \"\u003ctitle\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "drivers",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "role",
        "module",
        "sub module",
        "title"
      ]
    },
    {
      "cells": [
        "driver",
        "Fleet",
        "Vehicles",
        "Car - Entities - System - Car - Entities - System"
      ]
    },
    {
      "cells": [
        "driver",
        "Fleet",
        "Vehicles Model",
        "Vehicles Model - Entities - System - Car - Entities - System"
      ]
    },
    {
      "cells": [
        "driver",
        "Customers",
        "Accounts",
        "Accounts - Customers"
      ]
    },
    {
      "cells": [
        "driver",
        "Customers",
        "Contacts",
        "Contacts - Customers"
      ]
    },
    {
      "cells": [
        "driver",
        "Activities",
        "Calendar Events",
        "Calendar Events - Activities"
      ]
    },
    {
      "cells": [
        "driver",
        "System",
        "Jobs",
        "Jobs - System"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Login as driver and verify Car - Entities - System - Car - Entities - System page title is correct",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login_with_roles_ddt_2"
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
  "name": "user logs in as \"driver\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinitions.user_logs_in_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"Fleet\" then to \"Vehicles\"",
  "keyword": "When "
});
formatter.match({
  "location": "TopMenuStepDefinitions.user_navigates_to_then_to(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the page title should be \"Car - Entities - System - Car - Entities - System\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitions.thePageTitleShouldBe(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Login as driver and verify Vehicles Model - Entities - System - Car - Entities - System page title is correct",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login_with_roles_ddt_2"
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
  "name": "user logs in as \"driver\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinitions.user_logs_in_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"Fleet\" then to \"Vehicles Model\"",
  "keyword": "When "
});
formatter.match({
  "location": "TopMenuStepDefinitions.user_navigates_to_then_to(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the page title should be \"Vehicles Model - Entities - System - Car - Entities - System\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitions.thePageTitleShouldBe(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Login as driver and verify Accounts - Customers page title is correct",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login_with_roles_ddt_2"
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
  "name": "user logs in as \"driver\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinitions.user_logs_in_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"Customers\" then to \"Accounts\"",
  "keyword": "When "
});
formatter.match({
  "location": "TopMenuStepDefinitions.user_navigates_to_then_to(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the page title should be \"Accounts - Customers\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitions.thePageTitleShouldBe(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Login as driver and verify Contacts - Customers page title is correct",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login_with_roles_ddt_2"
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
  "name": "user logs in as \"driver\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinitions.user_logs_in_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"Customers\" then to \"Contacts\"",
  "keyword": "When "
});
formatter.match({
  "location": "TopMenuStepDefinitions.user_navigates_to_then_to(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the page title should be \"Contacts - Customers\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitions.thePageTitleShouldBe(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Login as driver and verify Calendar Events - Activities page title is correct",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login_with_roles_ddt_2"
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
  "name": "user logs in as \"driver\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinitions.user_logs_in_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"Activities\" then to \"Calendar Events\"",
  "keyword": "When "
});
formatter.match({
  "location": "TopMenuStepDefinitions.user_navigates_to_then_to(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the page title should be \"Calendar Events - Activities\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitions.thePageTitleShouldBe(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Login as driver and verify Jobs - System page title is correct",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login_with_roles_ddt_2"
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
  "name": "user logs in as \"driver\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinitions.user_logs_in_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"System\" then to \"Jobs\"",
  "keyword": "When "
});
formatter.match({
  "location": "TopMenuStepDefinitions.user_navigates_to_then_to(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the page title should be \"Jobs - System\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitions.thePageTitleShouldBe(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});