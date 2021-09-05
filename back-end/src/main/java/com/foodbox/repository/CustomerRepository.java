package com.foodbox.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.foodbox.entity.Customer;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long> {

}