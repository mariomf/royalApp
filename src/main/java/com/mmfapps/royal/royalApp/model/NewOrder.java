package com.mmfapps.royal.royalApp.model;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;

public class NewOrder {
	
	@Id
	public ObjectId _id;
	
	private String FirstName;
	private String ServiceType;
	private String Email;
	private String DateHours;
	private String Total;
	private boolean AgreeTerms;
	
	public NewOrder(ObjectId _id, String FirstName, String ServiceType, String Email, 
			String DateHours, String Total, boolean AgreeTerms) {
		
		this._id = _id;
		this.FirstName = FirstName;
		this.ServiceType = ServiceType;
		this.Email = Email;
		this.DateHours = DateHours;
		this.Total = Total;
		this.AgreeTerms = AgreeTerms;
	}
	
	public NewOrder() {
		
	}
	
	// ObjectId needs to be converted to string
	public String get_id() { return _id.toHexString(); }
	//public void set_id(ObjectId _id) { this._id = _id; }
	public static void set_id(ObjectId _id) {}

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
