package com.cam.api.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

/**
 * Entity representing an application user account.
 * This is the only domain model kept for authentication and account management work.
 */
@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String password;

    /**
     * Default constructor required by JPA.
     */
    public User() {
    }

    /**
     * Creates a user account with the core authentication fields.
     *
     * @param name the account display name
     * @param email the unique account email
     * @param password the encoded account password
     */
    public User(String name, String email, String password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }

    /**
     * Returns the user id.
     *
     * @return the user id
     */
    public Long getId() {
        return id;
    }

    /**
     * Sets the user id.
     *
     * @param id the user id
     */
    public void setId(Long id) {
        this.id = id;
    }

    /**
     * Returns the account display name.
     *
     * @return the account name
     */
    public String getName() {
        return name;
    }

    /**
     * Sets the account display name.
     *
     * @param name the account name
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * Returns the account email.
     *
     * @return the account email
     */
    public String getEmail() {
        return email;
    }

    /**
     * Sets the account email.
     *
     * @param email the account email
     */
    public void setEmail(String email) {
        this.email = email;
    }

    /**
     * Returns the encoded account password.
     *
     * @return the encoded password
     */
    public String getPassword() {
        return password;
    }

    /**
     * Sets the encoded account password.
     *
     * @param password the encoded password
     */
    public void setPassword(String password) {
        this.password = password;
    }
}
