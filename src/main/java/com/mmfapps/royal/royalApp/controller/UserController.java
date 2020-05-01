package com.mmfapps.royal.royalApp.controller;

import java.io.IOException;

import javax.validation.Valid;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.mmfapps.royal.royalApp.model.User;
import com.mmfapps.royal.royalApp.repository.UserRepository;
import com.mongodb.WriteConcernException;

@RestController
@RequestMapping("/user")
public class UserController {
	
	@Autowired
	private UserRepository repository;
	
	@RequestMapping(value = "//user", method = RequestMethod.POST)
	public User createProduct(@Valid @RequestBody User user) throws IOException, WriteConcernException {
		
		ObjectId user_id = ObjectId.get();
		user.set_id(user_id);
		
	  repository.save(user);
	  return user;
	}

}
