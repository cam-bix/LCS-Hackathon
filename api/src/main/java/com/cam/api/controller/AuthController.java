package com.cam.api.controller;

import com.cam.api.dto.AuthResponse;
import com.cam.api.dto.LoginRequest;
import com.cam.api.dto.RegisterRequest;
import com.cam.api.service.AuthService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Controller for authentication-related account endpoints.
 * This controller is limited to signup and login structure for the mobile app backend.
 */
@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthService authService;

    /**
     * Creates the controller with the authentication service dependency.
     *
     * @param authService service responsible for auth-related operations
     */
    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    /**
     * Accepts a registration request and delegates account creation work.
     *
     * @param request the incoming registration payload
     * @return a placeholder authentication response
     */
    @PostMapping("/register")
    public AuthResponse register(@Valid @RequestBody RegisterRequest request) {
        return authService.register(request);
    }

    /**
     * Accepts a login request and delegates account authentication work.
     *
     * @param request the incoming login payload
     * @return a placeholder authentication response
     */
    @PostMapping("/login")
    public AuthResponse login(@Valid @RequestBody LoginRequest request) {
        return authService.login(request);
    }
}
