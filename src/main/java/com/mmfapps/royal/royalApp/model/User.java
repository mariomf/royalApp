package com.mmfapps.royal.royalApp.model;


import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;

public class User {
	
	@Id
	public ObjectId _id;
	  
	public String user_name;
	public String user_lastName;
	public String user_email;
	public String entry_date;
	
	  
	// Constructors
	public User() {}
	  
	public User(ObjectId _id, String user_name, String user_lastName, String user_email, String entry_date) {
		
	  this._id = _id;
	  this.user_name = user_name;
	  this.user_lastName = user_lastName;
	  this.user_email = user_email;
	  this.entry_date = entry_date;
	}
	
	// ObjectId needs to be converted to string
	public String get_id() { return _id.toHexString(); }
	public void set_id(ObjectId _id) { this._id = _id; }
	
	public String getUser_name() {return user_name;}
	public void setUser_name(String user_name) {this.user_name = user_name;}

	public String getUser_lastName() {return user_lastName;}
	public void setUser_lastName(String user_lastName) {this.user_lastName = user_lastName;}
	
	public String getUser_email() {return user_email;}
	public void setUser_email(String user_email) {this.user_email = user_email;}
	
	public String getEntry_date() {return entry_date; }
	public void setEntry_date(String entry_date) {this.entry_date = entry_date;	}


}
