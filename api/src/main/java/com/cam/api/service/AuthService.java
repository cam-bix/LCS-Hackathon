package com.cam.api.service;

import com.cam.api.dto.AuthResponse;
import com.cam.api.dto.LoginRequest;
import com.cam.api.dto.RegisterRequest;
import com.cam.api.entity.User;
import com.cam.api.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

/**
 * Service layer for signup and login-related account operations.
 * This class keeps auth work isolated from the rest of the app backend.
 */
@Service
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    /**
     * Creates the auth service with the dependencies required for account work.
     *
     * @param userRepository repository used to access user accounts
     * @param passwordEncoder encoder used for account passwords
     */
    public AuthService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    /**
     * Registers a new user account for future authentication work.
     *
     * @param request the incoming registration payload
     * @return a basic auth response for the created account
     */
    public AuthResponse register(RegisterRequest request) {
        User user = new User(
                request.getName(),
                request.getEmail(),
                passwordEncoder.encode(request.getPassword()));

        User savedUser = userRepository.save(user);
        return new AuthResponse("Registration structure ready", savedUser.getId(), savedUser.getEmail());
    }

    /**
     * Accepts a login request and returns a minimal auth response placeholder.
     *
     * @param request the incoming login payload
     * @return a basic auth response for the located account, if present
     */
    public AuthResponse login(LoginRequest request) {
        return userRepository.findByEmail(request.getEmail())
                .map(user -> new AuthResponse("Login structure ready", user.getId(), user.getEmail()))
                .orElseGet(() -> new AuthResponse("Login structure ready", null, request.getEmail()));
    }
}
