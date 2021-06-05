package com.ssafy.cats.model.service;

import java.util.List;

import com.ssafy.cats.model.Visits;

public interface VisitsService {
	public List<Visits> listVisits();
	public boolean createVisits(Visits visits);
	public boolean updateVisits(Visits visits);
}
