package com.ssafy.cats.model.service;

import java.util.List;

import com.ssafy.cats.model.Cats;

public interface CatsService {
	public List<Cats> listCats(int start);
//	public Cats detailCats(int cat_num);
}
