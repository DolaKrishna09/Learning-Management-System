package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.app.entity.Modules;



@RepositoryRestResource
public interface ModulesRepository extends JpaRepository<Modules, Integer> {
	
	
	@Query("SELECT m.moduleId, m.moduleName, m.prerequisites, m.outcome, m.moduleNotes FROM Modules m INNER JOIN Courses c ON m.courseId = c.courseId WHERE m.courseId = :courseId")
	public List<Object[]> modulesAccordingToCourseId(@Param("courseId") int courseId);



}
