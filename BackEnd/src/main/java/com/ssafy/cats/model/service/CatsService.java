package com.ssafy.cats.model.service;

import java.util.List;

import com.ssafy.cats.model.Cats;
import com.ssafy.cats.model.Charc;

public interface CatsService {
	public List<Cats> listCats(int start);
	public Cats detailCats(int cat_num);
	public List<Cats> searchCats(String keyword);
	public Charc charcCats(int cat_num);
}
