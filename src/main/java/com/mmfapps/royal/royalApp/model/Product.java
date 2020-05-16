package com.mmfapps.royal.royalApp.model;

import org.springframework.data.annotation.Id;

public class Product {
	
	@Id
	public String _id;
	  
	public String product_name;
	public String type;
	public String price;
	public String time;
	public String description;
	public String last_update;
	
	  
	// Constructors
	public Product() {}
	  
	public Product(String _id, String product_name, String type, String price, String time, String description, String last_updat, String last_update) {
		
	  this._id = _id;
	  this.product_name = product_name;
	  this.type = type;
	  this.price = price;
	  this.time = time;
	  this.description = description;
	  this.last_update = last_update;
	}
	
	public String get_id() {
		return _id;
	}

	public void set_id(String _id) {
		this._id = _id;
	}

	public String getProduct_name() {
		return product_name;
	}

	public void setProduct_name(String product_name) {
		this.product_name = product_name;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getPrice() {
		return price;
	}

	public void setPrice(String price) {
		this.price = price;
	}

	public String getTime() {
		return time;
	}

	public void setTime(String time) {
		this.time = time;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getLast_update() {
		return last_update;
	}

	public void setLast_update(String last_update) {
		this.last_update = last_update;
	}
	
}
