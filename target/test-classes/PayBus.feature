Feature: Pay Bus
	The bus stops, I enter and slide the bus card in my pocket to pay ticket. Simple.

Scenario: Stolen Bus Card
	Given I have chosen to pay bus
	But I use a bus card that was reported as missing/stolen
	Then I should be told that the card is reported as missing/stolen so it’s blocked 	
	
Scenario: Successful card usage
	Given I have chosen to pay bus
	When I pay bus with card of user X there is equal or more balance than bus passage price
	Then I should receive a confirmation of payment made
	And I should see my current balance printed on screen

Scenario: Unsuccessful card usage 
	Given I have chosen to pay bus
	But I use a card with not enough balance to pay for bus passage price
	Then I should be indicated the card is valid but does not have enough balance to pay 

