package com.mmfapps.royal.royalApp.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {
	
	@GetMapping("/")
	public String index() {
		return "/index.html";
	}
	@GetMapping("/ScheduleEvent")
	public String ScheduleEvent() {
		return "/pages/ScheduleEvent.html";
	}
	@GetMapping("/photographer")
	public String photographer() {
		return "/pages/photographer.html";
	}
	
	@GetMapping("/ReviewOrder")
	public String reviewOrder() {
		return "/pages/reviewOrder.html";
	}
	
	//Test
	@GetMapping("/login")
	public String login() {
		return "/pages/login.html";
	}
	@GetMapping("/login2")
	public String login2() {
		return "/pages/login2.html";
	}
	

}
