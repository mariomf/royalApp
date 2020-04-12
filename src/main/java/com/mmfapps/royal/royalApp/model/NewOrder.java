package com.mmfapps.royal.royalApp.model;

public class NewOrder {
	
	private String FirstName;
	private String ServiceType;
	private String Email;
	private String DateHours;
	private String Total;
	private boolean AgreeTerms;
	
	public NewOrder(String FirstName, String ServiceType, String Email, 
			String DateHours, String Total, boolean AgreeTerms) {
		
		this.FirstName = FirstName;
		this.ServiceType = ServiceType;
		this.Email = Email;
		this.DateHours = DateHours;
		this.Total = Total;
		this.AgreeTerms = AgreeTerms;
	}
	
	public NewOrder() {
		
	}

	public String getFirstName() {
		return FirstName;
	}

	public void setFirstName(String firstName) {
		FirstName = firstName;
	}
	
	public String getServiceType() {
		return ServiceType;
	}
	
	public void setServiceType(String serviceType) {
		ServiceType = serviceType;
	}

	public String getEmail() {
		return Email;
	}

	public void setEmail(String email) {
		Email = email;
	}

	public String getDateHours() {
		return DateHours;
	}

	public void setDateHours(String dateHours) {
		DateHours = dateHours;
	}

	public String getTotal() {
		return Total;
	}

	public void setTotal(String total) {
		Total = total;
	}

	public boolean isAgreeTerms() {
		return AgreeTerms;
	}

	public void setAgreeTerms(boolean agreeTerms) {
		AgreeTerms = agreeTerms;
	}
}
