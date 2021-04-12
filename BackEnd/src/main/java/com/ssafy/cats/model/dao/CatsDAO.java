package com.ssafy.cats.model.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;


import com.ssafy.cats.model.Cats;

@Mapper
public interface CatsDAO {
	public List<Cats> listCats(int start);
	public Cats detailCats(int cat_num);
	public List<Cats> searchCats(String keyword);
}
