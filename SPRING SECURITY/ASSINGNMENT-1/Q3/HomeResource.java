package com.springRESTSecurityAuthenticationJDBC;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeResource {
	
	@GetMapping("/")
	public String SayHi() {
		return "WELCOME";// Accessible by everybody
	}
    
	@GetMapping("/user")
	public String user() {
		return "WELCOME user ";
	}
    
	@GetMapping("/admin")
	public String admin() {
		return "WELCOME admin";
	}


}
