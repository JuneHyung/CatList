package com.ssafy.cats.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.cats.model.Visits;
import com.ssafy.cats.model.service.VisitsService;

@CrossOrigin(origins = { "*" }, maxAge = 6000)
@RestController
@RequestMapping("/visits")
public class VisitController {

	private static final String SUCCESS = "success";
	private static final String FAIL = "fail";
	
	@Autowired
	private VisitsService visitService;
	
	@GetMapping("/all")
	public ResponseEntity<List<Visits>> listVisits() throws Exception{
		return new ResponseEntity<List<Visits>>(visitService.listVisits(), HttpStatus.OK);
	}
	
	@PostMapping("/create")
	public ResponseEntity<String> createVisits(@RequestBody Visits visits) {
		if (visitService.createVisits(visits)) {
			return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
		}
		return new ResponseEntity<String>(FAIL, HttpStatus.NO_CONTENT);
	}
	
	@PutMapping("/updateVisits/{view_id}")
	public ResponseEntity<String> updateVisits(@RequestBody Visits visits) {
		if (visitService.updateVisits(visits)) {
			return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
		}
		return new ResponseEntity<String>(FAIL, HttpStatus.NO_CONTENT);
	}
	
}
