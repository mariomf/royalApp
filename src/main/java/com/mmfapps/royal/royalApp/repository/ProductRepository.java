package com.mmfapps.royal.royalApp.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.mmfapps.royal.royalApp.model.Product;

public interface ProductRepository extends MongoRepository<Product, String>{
	
	Product findBy_id(String _id);

}
