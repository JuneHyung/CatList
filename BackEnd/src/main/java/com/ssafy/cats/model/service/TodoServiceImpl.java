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
	
	
	

}
