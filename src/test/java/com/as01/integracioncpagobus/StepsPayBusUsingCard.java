package com.as01.integracioncpagobus;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;
import com.as01.integracioncpagobus.BusCard;

public class StepsPayBusUsingCard {

	BusCard pasajero1, pasajero2, pasajero3;
	
	@Given("^I have chosen to pay bus$")
	public void I_have_chosen_to_pay_bus() throws Throwable {
	    // Express the Regexp above with the code you wish you had
	    throw new PendingException();
	}

	@Given("^I use a bus card that was reported as missing/stolen$")
	public void I_use_a_bus_card_that_was_reported_as_missing_stolen() throws Throwable {
	    // Express the Regexp above with the code you wish you had
		pasajero1 = new BusCard("Paolo",5.50);
	}

	@Then("^I should be told that the card is reported as missing/stolen so it’s blocked$")
	public void I_should_be_told_that_the_card_is_reported_as_missing_stolen_so_it_s_blocked() throws Throwable {
	    // Express the Regexp above with the code you wish you had
		pasajero1.CheckReported(true);		
	}

	
	@When("^I pay bus with card of user X there is equal or more balance than bus passage price$")
	public void I_pay_bus_with_card_of_user_X_there_is_equal_or_more_balance_than_bus_passage_price() throws Throwable {
	    // Express the Regexp above with the code you wish you had
		pasajero2 = new BusCard("Tomas",7.50);
		
	}

	@Then("^I should receive a confirmation of payment made$")
	public void I_should_receive_a_confirmation_of_payment_made() throws Throwable {
	    // Express the Regexp above with the code you wish you had
		pasajero3.CheckReported(false);
		pasajero3.Balance();
	}

	@Then("^I should see my current balance printed on screen$")
	public void I_should_see_my_current_balance_printed_on_screen() throws Throwable {
	    // Express the Regexp above with the code you wish you had
	    throw new PendingException();
	}

	@Given("^I use a card with not enough balance to pay for bus passage price$")
	public void I_use_a_card_with_not_enough_balance_to_pay_for_bus_passage_price() throws Throwable {

		pasajero3 = new BusCard("Juan",1.00);
		
 	}

	@Then("^I should be indicated the card is valid but does not have enough balance to pay$")
	public void I_should_be_indicated_the_card_is_valid_but_does_not_have_enough_balance_to_pay() throws Throwable {
	    // Express the Regexp above with the code you wish you had
		pasajero3.CheckReported(false);
		pasajero3.Balance();
       
	}
	
}
