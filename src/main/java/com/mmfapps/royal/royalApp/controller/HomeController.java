package com.mmfapps.royal.royalApp.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {
	
	@GetMapping("/")
	public String index() {
		return "index.html";
	}
	@GetMapping("/ScheduleEvent")
	public String ScheduleEvent() {
		return "ScheduleEvent.html";
	}
	@GetMapping("/photographer")
	public String photographer() {
		return "photographer.html";
	}
	

}
