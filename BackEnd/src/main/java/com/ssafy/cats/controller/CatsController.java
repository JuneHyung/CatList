package com.ssafy.cats.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.cats.model.Cats;
import com.ssafy.cats.model.service.CatsService;

@CrossOrigin(origins = { "*" }, maxAge = 6000)
@RestController
@RequestMapping("/cats")
public class CatsController {

	private static final String SUCCESS = "success";
	private static final String FAIL = "fail";
	
	@Autowired
	private CatsService service;
	
	@GetMapping("{start}")
	public ResponseEntity<List<Cats>> listCats(@PathVariable int start)throws Exception{
		return new ResponseEntity<List<Cats>>(service.listCats(start), HttpStatus.OK);
	}
	
	@GetMapping("/detail/{cat_num}")
	public ResponseEntity<Cats> detailCats(@PathVariable int cat_num){
		return new ResponseEntity<Cats>(service.detailCats(cat_num), HttpStatus.OK);
	}
	
	
}
