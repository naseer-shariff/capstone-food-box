package com.foodbox.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.foodbox.entity.Customer;
import com.foodbox.exception.CustomerAlreadyExistsException;
import com.foodbox.exception.InvalidCustomerException;
import com.foodbox.exception.CustomerNotFoundException;
import com.foodbox.repository.CustomerRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class CustomerApiController {

	@Autowired
	private CustomerRepository customerRepo;
	// CRUD operations for customer

	// get one customer
	@RequestMapping(value = "/api/customers/{id}", method = RequestMethod.GET)
	public Customer getOneCustomer(@PathVariable("id") long id) {
		return this.customerRepo.findById(id).orElseThrow(() -> {
			throw new CustomerNotFoundException();
		});
	}

	// get all customers
	@RequestMapping(value = "/api/customers", method = RequestMethod.GET)
	public List<Customer> getAllCustomers() {
		return this.customerRepo.findAll();
	}

	// create customer
	@RequestMapping(value = "/api/customers", method = RequestMethod.POST)
	public Customer addCustomer(@RequestBody(required = false) Customer customer) {
		if (customer == null) {
			throw new InvalidCustomerException();
		}
		return this.customerRepo.save(customer);
	}

	// update customer
	@RequestMapping(value = "/api/customers/{id}", method = RequestMethod.PUT)
	public Customer updateOneCustomer(@PathVariable("id") long id, @RequestBody(required = false) Customer customer) {
		// find record
		try
		{
		this.customerRepo.findById(id).orElseThrow(() -> {
			throw new CustomerNotFoundException();
		});
		return this.customerRepo.save(customer);
		}
		catch(Exception ex)
		{
			System.out.println(ex.toString());
			return null;
		}
	}

	// delete customer
	@RequestMapping(value = "/api/customers/{id}", method = RequestMethod.DELETE)
	public void deleteOneCustomer(@PathVariable("id") long id) {

		// verify customer exists
		Customer fetchedCustomer = this.customerRepo.findById(id).orElseThrow(() -> {
			throw new CustomerNotFoundException();
		});

		this.customerRepo.delete(fetchedCustomer);

	}

}
