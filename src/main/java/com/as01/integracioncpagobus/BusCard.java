package com.as01.integracioncpagobus;

public class BusCard {
	
	    private String name;
	    private double moneyinCard;

	    public BusCard(String name, double moneyinCard) {
	        this.name = name;
	        this.moneyinCard = moneyinCard;
	    }

	    public String Balance(){
	    	
	    	if (this.moneyinCard > 1.50) {
	    		this.moneyinCard -= 1.50;
	    		return this.name + "'s card has $" + this.moneyinCard; 
	    	}
	    	else {
	    		return this.name + "'s card balance is not enough to pay for bus: $" + this.moneyinCard;
	    	}
	    }

	    public String CheckReported(boolean isStolen){
	        final String result;
	        if (isStolen){
	            result = this.name + "'s card is stolen!";
	        }
	        else{
	            result = this.name + "'s card is NOT stolen. Proceed to pay ticket.";
	        }

	        return result;
	    }
	    
	}

