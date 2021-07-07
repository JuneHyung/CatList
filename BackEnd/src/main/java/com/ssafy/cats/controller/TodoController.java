package com.ssafy.cats.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.cats.model.Todo;
import com.ssafy.cats.model.service.TodoService;

@CrossOrigin(origins = { "*" }, maxAge = 6000)
@RestController
@RequestMapping("/todo")
public class TodoController {
	private static final String SUCCESS = "success";
	private static final String FAIL = "fail";
	
	@Autowired
	private TodoService todoService;
	
	@GetMapping("/all")
	public ResponseEntity<List<Todo>> listTodo() throws Exception{
		return new ResponseEntity<List<Todo>>(todoService.listTodo(), HttpStatus.OK);
	}

}
