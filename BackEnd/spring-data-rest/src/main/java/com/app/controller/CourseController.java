package com.app.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.Service.CourseService;
import com.app.entity.Courses;

@RestController
@CrossOrigin(value="http://localhost:3000")
@RequestMapping("/courses")
public class CourseController {

	@Autowired
	CourseService courseservice;

	@GetMapping("/allCoursesWithId")
	public List<Courses> allCoursesWithId() {
		return courseservice.getAllCoursesWithId();

	};

	@GetMapping("/allCoursesWithoutId")
	public List<Object[]> allCoursesWithoutId() {
		return courseservice.getAllCoursesWithoutId();

	};

	@GetMapping("/SearchByCoursename/{coursename}")
	public List<Object[]> getCoursesByCourseName(@PathVariable String coursename) {
		return courseservice.getCourseByCourseName(coursename);
	}
	

	@GetMapping("/SearchByCourseId/{courseId}")
	public Optional<Courses> getCoursesByCourseName(@PathVariable int courseId) {
		return courseservice.getCourseByCourseId(courseId);
	}
	

	@GetMapping("/fetchJavaDetails")
	public List<Object[]> fetchJavaDetails() {
		return courseservice.fetchJavaDetails();

	};
	
	
	

}
