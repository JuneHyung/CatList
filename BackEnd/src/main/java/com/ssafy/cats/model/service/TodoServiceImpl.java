package com.ssafy.cats.model.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.cats.model.Todo;
import com.ssafy.cats.model.dao.TodoDAO;

@Service
public class TodoServiceImpl implements TodoService{
	@Autowired
	private TodoDAO todoDao;

	@Override
	public List<Todo> listTodo() {
		// TODO Auto-generated method stub
		return todoDao.listTodo();
	}

	@Override
	public boolean createTodo(Todo todo) {
		// TODO Auto-generated method stub
		return todoDao.createTodo(todo);
	}

	@Override
	public boolean updateTodo(Todo todo) {
		// TODO Auto-generated method stub
		return todoDao.updateTodo(todo);
	}

	@Override
	public boolean deleteTodo(int todoId) {
		// TODO Auto-generated method stub
		return todoDao.deleteTodo(todoId);
	}
	
	
	

}
