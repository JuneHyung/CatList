package com.ssafy.cats.model.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.cats.model.Cats;
import com.ssafy.cats.model.dao.CatsDAO;

@Service
public class CatsServiceImpl implements CatsService{

	@Autowired
	private CatsDAO catsDao;
	
	@Override
	public List<Cats> listCats(int start) {
		// TODO Auto-generated method stub
		return catsDao.listCats(start);
	}

	@Override
	public Cats detailCats(int cat_num) {
		// TODO Auto-generated method stub
		return catsDao.detailCats(cat_num);
	}

}
