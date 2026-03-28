package com.cam.api.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

/**
 * Request payload used when a new user registers an account.
 */
public class RegisterRequest {

    @NotBlank
    private String name;

    @Email
    @NotBlank
    private String email;

    @NotBlank
    private String password;

    /**
     * Returns the display name supplied during registration.
     *
     * @return the user's name
     */
    public String getName() {
        return name;
    }

    /**
     * Sets the display name supplied during registration.
     *
     * @param name the user's name
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * Returns the email supplied during registration.
     *
     * @return the user's email
     */
    public String getEmail() {
        return email;
    }

    /**
     * Sets the email supplied during registration.
     *
     * @param email the user's email
     */
    public void setEmail(String email) {
        this.email = email;
    }

    /**
     * Returns the password supplied during registration.
     *
     * @return the raw password
     */
    public String getPassword() {
        return password;
    }

    /**
     * Sets the password supplied during registration.
     *
     * @param password the raw password
     */
    public void setPassword(String password) {
        this.password = password;
    }
}
