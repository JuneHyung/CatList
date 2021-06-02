package com.ssafy.cats.model.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.cats.model.Visits;
import com.ssafy.cats.model.dao.VisitsDAO;


@Service
public class VisitsServiceImpl implements VisitsService{

	@Autowired
	private VisitsDAO visitsDao;
	
	@Override
	public List<Visits> listVisits() {
		// TODO Auto-generated method stub
		return visitsDao.listVisits();
	}

	

	
}
