src/test/java/com/as01/integracion/BusPayStepDefinitions.java


package com.as01.integracion;
 
import static org.junit.Assert.assertTrue;
import cucumber.annotation.en.Given;
import cucumber.annotation.en.Then;
import cucumber.annotation.en.When;
import cucumber.runtime.PendingException;
 
public class DepositStepDefinitions {
 
    private Account account;
 
    @Given("^a User has no money in their account$")
    public void a_User_has_no_money_in_their_current_account() {
        User user = new User();
        account = new Account();
        user.setAccount(account);
 
        assertTrue("The balance is not zero.", account.getBalance() == 0L);
    }
 
    @When("^£(\\d+) is deposited in to the account$")
    public void £_is_deposited_in_to_the_account(int amount) {
        account.deposit(amount);
    }
 
    @Then("^the balance should be £(\\d+)$")
    public void the_balance_should_be_£(int arg1) {
        // Express the Regexp above with the code you wish you had
        throw new PendingException();
    }
 
    private class User {
        private Account account;
 
        public void setAccount(Account account) {
            this.account = account;
        }
    }
 
    private class Account {
        private int balance;
 
        public Account() {
            this.balance = 0;
        }
 
        public int getBalance() {
            return balance;
        }
 
        public void deposit(int amount) {
            this.balance += amount;
        }
    }
 
}