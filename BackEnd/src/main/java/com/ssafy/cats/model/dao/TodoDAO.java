package com.ssafy.cats.model.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.ssafy.cats.model.Todo;

@Mapper
public interface TodoDAO {
	public List<Todo> listTodo();
}
