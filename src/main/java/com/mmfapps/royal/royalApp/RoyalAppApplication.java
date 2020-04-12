package com.mmfapps.royal.royalApp;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;

import com.mmfapps.royal.royalApp.configuration.StorageProperties;
import com.mmfapps.royal.royalApp.service.StorageService;

@SpringBootApplication
@EnableConfigurationProperties(StorageProperties.class)
public class RoyalAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(RoyalAppApplication.class, args);
	}
	
	@Bean
    CommandLineRunner init(StorageService storageService) {
        return (args) -> {
            storageService.deleteAll();
            storageService.init();
        };
    }

}
