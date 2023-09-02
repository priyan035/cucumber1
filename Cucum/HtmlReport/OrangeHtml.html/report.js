$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Orange.feature");
formatter.feature({
  "line": 1,
  "name": "Adding new Employee Details",
  "description": "",
  "id": "adding-new-employee-details",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "Login Functionality",
  "description": "",
  "id": "adding-new-employee-details;login-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "user Launch the url",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user enter the \"\u003cUserName\u003e\" in UserName Field",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user enter the \"\u003cpassword\u003e\" in password Field",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "user click the Login Button And It Navigate To Home Page",
  "keyword": "Then "
});
formatter.examples({
  "line": 7,
  "name": "",
  "description": "",
  "id": "adding-new-employee-details;login-functionality;",
  "rows": [
    {
      "cells": [
        "UserName",
        "password"
      ],
      "line": 9,
      "id": "adding-new-employee-details;login-functionality;;1"
    },
    {
      "cells": [
        "adinm@12",
        "admin123"
      ],
      "line": 10,
      "id": "adding-new-employee-details;login-functionality;;2"
    },
    {
      "cells": [
        "denim@34",
        "denim123"
      ],
      "line": 11,
      "id": "adding-new-employee-details;login-functionality;;3"
    },
    {
      "cells": [
        "opadi",
        "opr123"
      ],
      "line": 12,
      "id": "adding-new-employee-details;login-functionality;;4"
    },
    {
      "cells": [
        "Admin",
        "admin123"
      ],
      "line": 13,
      "id": "adding-new-employee-details;login-functionality;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 10,
  "name": "Login Functionality",
  "description": "",
  "id": "adding-new-employee-details;login-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "user Launch the url",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user enter the \"adinm@12\" in UserName Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user enter the \"admin123\" in password Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "user click the Login Button And It Navigate To Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition_Report.user_Launch_the_url()"
});
formatter.result({
  "duration": 18896336300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "adinm@12",
      "offset": 16
    }
  ],
  "location": "Stepdefinition_Report.user_enter_the_in_UserName_Field(String)"
});
formatter.result({
  "duration": 138603300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 16
    }
  ],
  "location": "Stepdefinition_Report.user_enter_the_in_password_Field(String)"
});
formatter.result({
  "duration": 107885500,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition_Report.user_click_the_Login_Button_And_It_Navigate_To_Home_Page()"
});
formatter.result({
  "duration": 52824700,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Login Functionality",
  "description": "",
  "id": "adding-new-employee-details;login-functionality;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "user Launch the url",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user enter the \"denim@34\" in UserName Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user enter the \"denim123\" in password Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "user click the Login Button And It Navigate To Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition_Report.user_Launch_the_url()"
});
formatter.result({
  "duration": 4200826100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "denim@34",
      "offset": 16
    }
  ],
  "location": "Stepdefinition_Report.user_enter_the_in_UserName_Field(String)"
});
formatter.result({
  "duration": 83593500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "denim123",
      "offset": 16
    }
  ],
  "location": "Stepdefinition_Report.user_enter_the_in_password_Field(String)"
});
formatter.result({
  "duration": 89083000,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition_Report.user_click_the_Login_Button_And_It_Navigate_To_Home_Page()"
});
formatter.result({
  "duration": 57511000,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Login Functionality",
  "description": "",
  "id": "adding-new-employee-details;login-functionality;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "user Launch the url",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user enter the \"opadi\" in UserName Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user enter the \"opr123\" in password Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "user click the Login Button And It Navigate To Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition_Report.user_Launch_the_url()"
});
formatter.result({
  "duration": 4256720400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "opadi",
      "offset": 16
    }
  ],
  "location": "Stepdefinition_Report.user_enter_the_in_UserName_Field(String)"
});
formatter.result({
  "duration": 86980600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "opr123",
      "offset": 16
    }
  ],
  "location": "Stepdefinition_Report.user_enter_the_in_password_Field(String)"
});
formatter.result({
  "duration": 74877700,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition_Report.user_click_the_Login_Button_And_It_Navigate_To_Home_Page()"
});
formatter.result({
  "duration": 52016900,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Login Functionality",
  "description": "",
  "id": "adding-new-employee-details;login-functionality;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "user Launch the url",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user enter the \"Admin\" in UserName Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user enter the \"admin123\" in password Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "user click the Login Button And It Navigate To Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition_Report.user_Launch_the_url()"
});
formatter.result({
  "duration": 4425564900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 16
    }
  ],
  "location": "Stepdefinition_Report.user_enter_the_in_UserName_Field(String)"
});
formatter.result({
  "duration": 78250000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 16
    }
  ],
  "location": "Stepdefinition_Report.user_enter_the_in_password_Field(String)"
});
formatter.result({
  "duration": 80820600,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition_Report.user_click_the_Login_Button_And_It_Navigate_To_Home_Page()"
});
formatter.result({
  "duration": 57810200,
  "status": "passed"
});
});