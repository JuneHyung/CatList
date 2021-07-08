package com.ssafy.cats.model.service;

import java.util.List;

import com.ssafy.cats.model.Todo;

public interface TodoService {
	public List<Todo> listTodo();
	public boolean createTodo(Todo todo);
	public boolean updateTodo(Todo todo);
	public boolean deleteTodo(int todoId);
}
