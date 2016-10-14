package br.unicamp.bookstore;

public class StatusEntrega {

	private boolean loggedUser;
	private String trackingCode;
	private String result; 
	
	public boolean getloggedUser(){
		return this.loggedUser;
	}

	public void setTrackingCode(String trackingCode) {
		this.trackingCode = trackingCode;
	}
	 
	public String getTrackingCode() {
		return this.trackingCode;
	}
	
	public void setResult(String result) {
		this.result = result;
	}
	 
	public String getResult() {
		return this.result;
	}	
	
	
}
