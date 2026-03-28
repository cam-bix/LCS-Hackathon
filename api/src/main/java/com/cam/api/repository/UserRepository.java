package com.cam.api.repository;

import com.cam.api.entity.User;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Repository used to load and persist user account records.
 */
public interface UserRepository extends JpaRepository<User, Long> {

    /**
     * Looks up a user account by email address.
     *
     * @param email the email to search for
     * @return the matching user if one exists
     */
    Optional<User> findByEmail(String email);

    /**
     * Checks whether an account already exists for the given email.
     *
     * @param email the email to check
     * @return true when the email is already registered
     */
    boolean existsByEmail(String email);
}
