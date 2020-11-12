$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("test1.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 19,
  "name": "Test mobile apps",
  "description": "",
  "id": "test-mobile-apps",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 21,
  "name": "Test radio buttons",
  "description": "",
  "id": "test-mobile-apps;test-radio-buttons",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "I launch the app",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I click on OK",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "App should start",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "I click on One radio button",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "I click on apply button1",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "That One radio button is selected",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Your choice: 0 is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I click on Two radio button",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I click on apply button2",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "That Two radio button is selected",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "Your choice: 124 is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I click on Three radio button",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "I click on apply button3",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "That Three radio button is selected",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "Your choice: 224 is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.ilaunch_the_app()"
});
formatter.result({
  "duration": 20774661623,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.i_click_on_ok()"
});
formatter.result({
  "duration": 668624342,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.app_should_start()"
});
formatter.result({
  "duration": 675063760,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.i_click_on_one_radio_button()"
});
formatter.result({
  "duration": 194641292,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.i_click_on_apply_button1()"
});
formatter.result({
  "duration": 599851128,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.that_one_radio_button_is_selected()"
});
formatter.result({
  "duration": 700250282,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.your_choice_0_is_displayed()"
});
formatter.result({
  "duration": 178937181,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.i_click_on_two_radio_button()"
});
formatter.result({
  "duration": 186546149,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.i_click_on_apply_button2()"
});
formatter.result({
  "duration": 650760802,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.that_two_radio_button_is_selected()"
});
formatter.result({
  "duration": 1145115317,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.your_choice_124_is_displayed()"
});
formatter.result({
  "duration": 162161898,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.i_click_on_three_radio_button()"
});
formatter.result({
  "duration": 194519353,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.i_click_on_apply_button3()"
});
formatter.result({
  "duration": 618184428,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.that_three_radio_button_is_selected()"
});
formatter.result({
  "duration": 762820494,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.your_choice_224_is_displayed()"
});
formatter.result({
  "duration": 139471484,
  "status": "passed"
});
});