package com.cam.api.dto;

/**
 * Response payload returned by authentication-related account operations.
 */
public class AuthResponse {

    private String message;
    private Long userId;
    private String email;

    /**
     * Creates an empty authentication response.
     */
    public AuthResponse() {
    }

    /**
     * Creates an authentication response with basic account details.
     *
     * @param message outcome message for the auth request
     * @param userId the authenticated or created user id
     * @param email the related account email
     */
    public AuthResponse(String message, Long userId, String email) {
        this.message = message;
        this.userId = userId;
        this.email = email;
    }

    /**
     * Returns the outcome message for the auth request.
     *
     * @return the response message
     */
    public String getMessage() {
        return message;
    }

    /**
     * Sets the outcome message for the auth request.
     *
     * @param message the response message
     */
    public void setMessage(String message) {
        this.message = message;
    }

    /**
     * Returns the related user id.
     *
     * @return the user id
     */
    public Long getUserId() {
        return userId;
    }

    /**
     * Sets the related user id.
     *
     * @param userId the user id
     */
    public void setUserId(Long userId) {
        this.userId = userId;
    }

    /**
     * Returns the related account email.
     *
     * @return the account email
     */
    public String getEmail() {
        return email;
    }

    /**
     * Sets the related account email.
     *
     * @param email the account email
     */
    public void setEmail(String email) {
        this.email = email;
    }
}
