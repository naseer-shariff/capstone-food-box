package com.foodbox.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.foodbox.entity.MenuItem;
import com.foodbox.exception.InvalidMenuItemException;
import com.foodbox.exception.MenuItemAlreadyExistsException;
import com.foodbox.exception.MenuItemNotFoundException;
import com.foodbox.repository.MenuItemRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class MenuItemApiController {

	@Autowired
	private MenuItemRepository menuItemRepo;
	// CRUD operations for menuItem

	// get one menuItem
	@RequestMapping(value = "/api/menuitems/{id}", method = RequestMethod.GET)
	public MenuItem getOnemenuItem(@PathVariable("id") long id) {
		return this.menuItemRepo.findById(id).orElseThrow(() -> {
			throw new MenuItemNotFoundException();
		});
	}

	// get all menuItems
	@RequestMapping(value = "/api/menuitems", method = RequestMethod.GET)
	public List<MenuItem> getAllmenuItems() {
		return this.menuItemRepo.findAll();
	}

	// create menuItem
	@RequestMapping(value = "/api/menuitems", method = RequestMethod.POST)
	public MenuItem addmenuItem(@RequestBody(required = false) MenuItem menuItemObj) {
		if (menuItemObj == null) {
			throw new InvalidMenuItemException();
		}
		return this.menuItemRepo.save(menuItemObj);
	}

	// update menuItem
	@RequestMapping(value = "/api/menuitems/{id}", method = RequestMethod.PUT)
	public MenuItem updateOnemenuItem(@PathVariable("id") long id,
			@RequestBody(required = false) MenuItem menuItemObj) {
		// find record
		this.menuItemRepo.findById(id).orElseThrow(() -> {
			throw new MenuItemNotFoundException();
		});
		menuItemObj.setId(id);
		return this.menuItemRepo.save(menuItemObj);
	}

	// delete menuItem
	@RequestMapping(value = "/api/menuitems/{id}", method = RequestMethod.DELETE)
	public void deleteOnemenuItem(@PathVariable("id") long id) {

		// verify menuItem exists
		MenuItem fetchedmenuItem = this.menuItemRepo.findById(id).orElseThrow(() -> {
			throw new MenuItemNotFoundException();
		});

		this.menuItemRepo.delete(fetchedmenuItem);

	}
}
