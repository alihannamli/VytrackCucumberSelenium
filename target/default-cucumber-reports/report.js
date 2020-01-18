$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/SmokeTest.feature");
formatter.feature({
  "name": "Smoke test",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoke_test"
    }
  ]
});
formatter.background({
  "name": "open login page and login as store manager",
  "description": "",
  "keyword": "Background"
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
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitions.user_logs_in_as_store_manager()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Manage Dashboards page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke_test"
    }
  ]
});
formatter.step({
  "name": "user navigates to \"Dashboards\" then to \"Manage Dashboards\"",
  "keyword": "And "
});
formatter.match({
  "location": "TopMenuStepDefinitions.user_navigates_to_then_to(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies that \"All Manage Dashboards \" page subtitle is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitions.user_verifies_that_page_subtitle_is_displayed(String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[All Manage Dashboards ]\u003e but was:\u003c[Dashboard]\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:115)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat com.vytrack.step_definitions.LoginStepDefinitions.user_verifies_that_page_subtitle_is_displayed(LoginStepDefinitions.java:41)\n\tat ✽.user verifies that \"All Manage Dashboards \" page subtitle is displayed(file:src/test/resources/features/SmokeTest.feature:13)\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "open login page and login as store manager",
  "description": "",
  "keyword": "Background"
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
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitions.user_logs_in_as_store_manager()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Accounts page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke_test"
    }
  ]
});
formatter.step({
  "name": "user navigates to \"Customers\" then to \"Accounts\"",
  "keyword": "And "
});
formatter.match({
  "location": "TopMenuStepDefinitions.user_navigates_to_then_to(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies that \"All Accounts\" page subtitle is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitions.user_verifies_that_page_subtitle_is_displayed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});