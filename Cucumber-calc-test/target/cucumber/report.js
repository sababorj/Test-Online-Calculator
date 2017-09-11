$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("onlineCalc.feature");
formatter.feature({
  "line": 1,
  "name": "Test functionality of Online web2 calculator",
  "description": " \t\t In order to verify that calculator work correctly, I should be able to get correct results",
  "id": "test-functionality-of-online-web2-calculator",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Calculator",
  "description": "",
  "id": "test-functionality-of-online-web2-calculator;calculator",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I open webCalc",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter arg1 as \u003cN1\u003e and arg2 as \u003cN2\u003e and operation as \u003cOperation\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should get result as \u003cResult\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "test-functionality-of-online-web2-calculator;calculator;",
  "rows": [
    {
      "cells": [
        "N1",
        "N2",
        "Operation",
        "Result"
      ],
      "line": 10,
      "id": "test-functionality-of-online-web2-calculator;calculator;;1"
    },
    {
      "cells": [
        "423",
        "525",
        "Multiplication",
        "222075"
      ],
      "line": 11,
      "id": "test-functionality-of-online-web2-calculator;calculator;;2"
    },
    {
      "cells": [
        "4000",
        "200",
        "Division",
        "20"
      ],
      "line": 12,
      "id": "test-functionality-of-online-web2-calculator;calculator;;3"
    },
    {
      "cells": [
        "-234234",
        "345345",
        "Addition",
        "111111"
      ],
      "line": 13,
      "id": "test-functionality-of-online-web2-calculator;calculator;;4"
    },
    {
      "cells": [
        "234823",
        "-23094823",
        "Subtraction",
        "23329646"
      ],
      "line": 14,
      "id": "test-functionality-of-online-web2-calculator;calculator;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5095250370,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Calculator",
  "description": "",
  "id": "test-functionality-of-online-web2-calculator;calculator;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I open webCalc",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter arg1 as 423 and arg2 as 525 and operation as Multiplication",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should get result as 222075",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "OlnCalcStepDefinition.I_open_webCalc()"
});
formatter.result({
  "duration": 2753100644,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "423",
      "offset": 16
    },
    {
      "val": "525",
      "offset": 32
    },
    {
      "val": "Multiplication",
      "offset": 53
    }
  ],
  "location": "OlnCalcStepDefinition.i_enter_arg_as_and_arg_as_and_operation_in_textbox(int,int,String)"
});
formatter.result({
  "duration": 1326196213,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "222075",
      "offset": 23
    }
  ],
  "location": "OlnCalcStepDefinition.i_should_get_result_as(String)"
});
formatter.result({
  "duration": 24545550,
  "status": "passed"
});
formatter.after({
  "duration": 1153499746,
  "status": "passed"
});
formatter.before({
  "duration": 3951816779,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Calculator",
  "description": "",
  "id": "test-functionality-of-online-web2-calculator;calculator;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I open webCalc",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter arg1 as 4000 and arg2 as 200 and operation as Division",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should get result as 20",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "OlnCalcStepDefinition.I_open_webCalc()"
});
formatter.result({
  "duration": 2630261688,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4000",
      "offset": 16
    },
    {
      "val": "200",
      "offset": 33
    },
    {
      "val": "Division",
      "offset": 54
    }
  ],
  "location": "OlnCalcStepDefinition.i_enter_arg_as_and_arg_as_and_operation_in_textbox(int,int,String)"
});
formatter.result({
  "duration": 1372616180,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 23
    }
  ],
  "location": "OlnCalcStepDefinition.i_should_get_result_as(String)"
});
formatter.result({
  "duration": 25099758,
  "status": "passed"
});
formatter.after({
  "duration": 1165155966,
  "status": "passed"
});
formatter.before({
  "duration": 4091828505,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Calculator",
  "description": "",
  "id": "test-functionality-of-online-web2-calculator;calculator;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I open webCalc",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter arg1 as -234234 and arg2 as 345345 and operation as Addition",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should get result as 111111",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "OlnCalcStepDefinition.I_open_webCalc()"
});
formatter.result({
  "duration": 2576419354,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "-234234",
      "offset": 16
    },
    {
      "val": "345345",
      "offset": 36
    },
    {
      "val": "Addition",
      "offset": 60
    }
  ],
  "location": "OlnCalcStepDefinition.i_enter_arg_as_and_arg_as_and_operation_in_textbox(int,int,String)"
});
formatter.result({
  "duration": 1326467118,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "111111",
      "offset": 23
    }
  ],
  "location": "OlnCalcStepDefinition.i_should_get_result_as(String)"
});
formatter.result({
  "duration": 22441020,
  "status": "passed"
});
formatter.after({
  "duration": 1150454159,
  "status": "passed"
});
formatter.before({
  "duration": 3593637335,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Calculator",
  "description": "",
  "id": "test-functionality-of-online-web2-calculator;calculator;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I open webCalc",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter arg1 as 234823 and arg2 as -23094823 and operation as Subtraction",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should get result as 23329646",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "OlnCalcStepDefinition.I_open_webCalc()"
});
formatter.result({
  "duration": 2512686972,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "234823",
      "offset": 16
    },
    {
      "val": "-23094823",
      "offset": 35
    },
    {
      "val": "Subtraction",
      "offset": 62
    }
  ],
  "location": "OlnCalcStepDefinition.i_enter_arg_as_and_arg_as_and_operation_in_textbox(int,int,String)"
});
formatter.result({
  "duration": 1370518213,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "23329646",
      "offset": 23
    }
  ],
  "location": "OlnCalcStepDefinition.i_should_get_result_as(String)"
});
formatter.result({
  "duration": 21013572,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c23[4823--23094823]\u003e but was:\u003c23[329646]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat com.cucumber.StepDefinitions.OlnCalcStepDefinition.i_should_get_result_as(OlnCalcStepDefinition.java:72)\r\n\tat ✽.Then I should get result as 23329646(onlineCalc.feature:7)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1149607169,
  "status": "passed"
});
});