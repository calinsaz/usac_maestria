$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("PayBus.feature");
formatter.feature({
  "line": 1,
  "name": "Pay Bus",
  "description": "The bus stops, I enter and slide the bus card in my pocket to pay ticket. Simple.",
  "id": "pay-bus",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Stolen Bus Card",
  "description": "",
  "id": "pay-bus;stolen-bus-card",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I have chosen to pay bus",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I use a bus card that was reported as missing/stolen",
  "keyword": "But "
});
formatter.step({
  "line": 7,
  "name": "I should be told that the card is reported as missing/stolen so it’s blocked",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsPayBusUsingCard.I_have_chosen_to_pay_bus()"
});
formatter.result({
  "duration": 487346577,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat com.as01.integracioncpagobus.StepsPayBusUsingCard.I_have_chosen_to_pay_bus(StepsPayBusUsingCard.java:16)\r\n\tat ✽.Given I have chosen to pay bus(PayBus.feature:5)\r\n",
  "status": "pending"
});
formatter.match({
  "location": "StepsPayBusUsingCard.I_use_a_bus_card_that_was_reported_as_missing_stolen()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepsPayBusUsingCard.I_should_be_told_that_the_card_is_reported_as_missing_stolen_so_it_s_blocked()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 9,
  "name": "Successful card usage",
  "description": "",
  "id": "pay-bus;successful-card-usage",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "I have chosen to pay bus",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I pay bus with card of user X there is equal or more balance than bus passage price",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I should receive a confirmation of payment made",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I should see my current balance printed on screen",
  "keyword": "And "
});
formatter.match({
  "location": "StepsPayBusUsingCard.I_have_chosen_to_pay_bus()"
});
formatter.result({
  "duration": 228241,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat com.as01.integracioncpagobus.StepsPayBusUsingCard.I_have_chosen_to_pay_bus(StepsPayBusUsingCard.java:16)\r\n\tat ✽.Given I have chosen to pay bus(PayBus.feature:10)\r\n",
  "status": "pending"
});
formatter.match({
  "location": "StepsPayBusUsingCard.I_pay_bus_with_card_of_user_X_there_is_equal_or_more_balance_than_bus_passage_price()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepsPayBusUsingCard.I_should_receive_a_confirmation_of_payment_made()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepsPayBusUsingCard.I_should_see_my_current_balance_printed_on_screen()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 15,
  "name": "Unsuccessful card usage",
  "description": "",
  "id": "pay-bus;unsuccessful-card-usage",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "I have chosen to pay bus",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I use a card with not enough balance to pay for bus passage price",
  "keyword": "But "
});
formatter.step({
  "line": 18,
  "name": "I should be indicated the card is valid but does not have enough balance to pay",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsPayBusUsingCard.I_have_chosen_to_pay_bus()"
});
formatter.result({
  "duration": 308419,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat com.as01.integracioncpagobus.StepsPayBusUsingCard.I_have_chosen_to_pay_bus(StepsPayBusUsingCard.java:16)\r\n\tat ✽.Given I have chosen to pay bus(PayBus.feature:16)\r\n",
  "status": "pending"
});
formatter.match({
  "location": "StepsPayBusUsingCard.I_use_a_card_with_not_enough_balance_to_pay_for_bus_passage_price()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepsPayBusUsingCard.I_should_be_indicated_the_card_is_valid_but_does_not_have_enough_balance_to_pay()"
});
formatter.result({
  "status": "skipped"
});
});