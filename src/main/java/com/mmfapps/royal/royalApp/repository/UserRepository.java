package com.mmfapps.royal.royalApp.repository;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.mmfapps.royal.royalApp.model.User;

public interface UserRepository extends MongoRepository<User, String>{
	
	User findBy_id(String _id);

}
