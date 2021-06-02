package com.ssafy.cats.model.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.ssafy.cats.model.Visits;


@Mapper
public interface VisitsDAO {
	public List<Visits> listVisits();
}
