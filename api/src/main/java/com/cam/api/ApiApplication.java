package com.cam.api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * Main entry point for the Spring Boot application.
 * This class bootstraps the backend and starts the embedded server.
 */
@SpringBootApplication
public class ApiApplication {

    /**
     * Starts the Spring Boot application.
     *
     * @param args runtime arguments passed to the application
     */
    public static void main(String[] args) {
        SpringApplication.run(ApiApplication.class, args);
    }
}
