package com.mmfapps.royal.royalApp.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {
	
	@GetMapping("/index")
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
	

}
