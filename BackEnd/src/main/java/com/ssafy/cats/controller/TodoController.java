package com.ssafy.cats.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
	
	@PostMapping
	public ResponseEntity<String> createTodo(@RequestBody Todo todo) {
		if (todoService.createTodo(todo)) {
			return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
		}
		return new ResponseEntity<String>(FAIL, HttpStatus.NO_CONTENT);
	}
	
	@PutMapping("{todoId}")
	public ResponseEntity<String> updateTodo(@RequestBody Todo todo) {
		if (todoService.updateTodo(todo)) {
			return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
		}
		return new ResponseEntity<String>(FAIL, HttpStatus.NO_CONTENT);
	}
	
	@DeleteMapping("{todoId}")
	public ResponseEntity<String> deleteNotice(@PathVariable int todoId) {
		if (todoService.deleteTodo(todoId)) {
			return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
		}
		return new ResponseEntity<String>(FAIL, HttpStatus.NO_CONTENT);
	}

}
