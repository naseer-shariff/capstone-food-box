package com.foodbox.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.foodbox.entity.Category;
import com.foodbox.exception.InvalidMenuItemException;
import com.foodbox.exception.MenuItemAlreadyExistsException;
import com.foodbox.exception.MenuItemNotFoundException;
import com.foodbox.repository.CategoryRepository;

@RestController
public class CategoryApiController {

	@Autowired
	private CategoryRepository categoryRepo;
	// CRUD operations for menuItem

	// get one menuItem
//	@RequestMapping(value = "/api/menuitems/{id}", method = RequestMethod.GET)
//	public MenuItem getOnemenuItem(@PathVariable("id") long id) {
//		return this.menuItemRepo.findById(id).orElseThrow(() -> {
//			throw new MenuItemNotFoundException();
//		});
//	}

	// get all Categories
	@RequestMapping(value = "/api/categories", method = RequestMethod.GET)
	public List<Category> getAllCategories() {
		return this.categoryRepo.findAll();
	}

	// create menuItem
//	@RequestMapping(value = "/api/menuitems", method = RequestMethod.POST)
//	public MenuItem addmenuItem(@RequestBody(required = false) MenuItem menuItemObj) {
//		if (menuItemObj == null) {
//			throw new InvalidMenuItemException();
//		}
//		return this.menuItemRepo.save(menuItemObj);
//	}

	// update menuItem
//	@RequestMapping(value = "/api/menuitems/{id}", method = RequestMethod.PUT)
//	public MenuItem updateOnemenuItem(@PathVariable("id") long id, @RequestBody(required = false) MenuItem menuItemObj) {
//		// find record
//		this.menuItemRepo.findById(id).orElseThrow(() -> {
//			throw new MenuItemNotFoundException();
//		});
//		menuItemObj.setId(id);
//		return this.menuItemRepo.save(menuItemObj);
//	}

	// delete menuItem
//	@RequestMapping(value = "/api/menuitems/{id}", method = RequestMethod.DELETE)
//	public void deleteOnemenuItem(@PathVariable("id") long id) {
//
//		// verify menuItem exists
//		MenuItem fetchedmenuItem = this.menuItemRepo.findById(id).orElseThrow(() -> {
//			throw new MenuItemNotFoundException();
//		});
//
//		this.menuItemRepo.delete(fetchedmenuItem);
//
//	}
	
//	@ExceptionHandler
//	@ResponseStatus(HttpStatus.BAD_REQUEST)
//	public void handle(HttpMessageNotReadableException e) {
//	    logger.warn("Returning HTTP 400 Bad Request", e);
//	}

}
