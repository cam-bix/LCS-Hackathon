package com.cam.api.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

/**
 * Request payload used when an existing user attempts to log in.
 */
public class LoginRequest {

    @Email
    @NotBlank
    private String email;

    @NotBlank
    private String password;

    /**
     * Returns the email supplied for login.
     *
     * @return the user's email
     */
    public String getEmail() {
        return email;
    }

    /**
     * Sets the email supplied for login.
     *
     * @param email the user's email
     */
    public void setEmail(String email) {
        this.email = email;
    }

    /**
     * Returns the password supplied for login.
     *
     * @return the raw password
     */
    public String getPassword() {
        return password;
    }

    /**
     * Sets the password supplied for login.
     *
     * @param password the raw password
     */
    public void setPassword(String password) {
        this.password = password;
    }
}
