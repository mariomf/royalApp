package com.mmfapps.royal.royalApp.repository;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.mmfapps.royal.royalApp.model.NewOrder;

public interface NewOrderRepository extends MongoRepository<NewOrder, String>{
	
	NewOrder findBy_id(ObjectId _id);

}