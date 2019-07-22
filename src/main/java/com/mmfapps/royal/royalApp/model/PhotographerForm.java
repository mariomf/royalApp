package com.mmfapps.royal.royalApp.model;

public class PhotographerForm {
	
	private String FirstName;
	private String LastName;
	private String Email;
	private String Link;
	private String Equipment;
	private boolean AgreeTerms;
	
	public PhotographerForm(String FirstName, String LastName, String Email, 
			String Link, String Equipment, boolean AgreeTerms) {
		
		this.FirstName = FirstName;
		this.LastName = LastName;
		this.Email = Email;
		this.Link = Link;
		this.Equipment = Equipment;
		this.AgreeTerms = AgreeTerms;
	}
	
	public PhotographerForm() {
		
	}
	
	public String getFirstName() {
		return FirstName;
	}

	public void setFirstName(String firstName) {
		FirstName = firstName;
	}

	public String getLastName() {
		return LastName;
	}

	public void setLastName(String lastName) {
		LastName = lastName;
	}

	public String getEmail() {
		return Email;
	}

	public void setEmail(String email) {
		Email = email;
	}

	public String getLink() {
		return Link;
	}

	public void setLink(String link) {
		Link = link;
	}

	public String getEquipment() {
		return Equipment;
	}

	public void setEquipment(String equipment) {
		Equipment = equipment;
	}

	public boolean isAgreeTerms() {
		return AgreeTerms;
	}

	public void setAgreeTerms(boolean agreeTerms) {
		AgreeTerms = agreeTerms;
	}

}
