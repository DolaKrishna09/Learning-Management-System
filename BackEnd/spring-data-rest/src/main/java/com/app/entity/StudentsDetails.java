package com.app.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "studentsdetails")
public class StudentsDetails {

  
    
    @Id
    @Column(name = "STUDENT_ID")
    private int studentId;

    @Column(name = "STUDENT_NAME")
    private String studentName;

    @Column(name = "COURSE_Id")
    private int courseId;

    // Default constructor is needed for JPA
    public StudentsDetails() {
    }

	public int getStudentId() {
		return studentId;
	}

	public void setStudentId(int studentId) {
		this.studentId = studentId;
	}

	public String getStudentName() {
		return studentName;
	}

	public void setStudentName(String studentName) {
		this.studentName = studentName;
	}

	public int getCourseId() {
		return courseId;
	}

	public void setCourseId(int courseId) {
		this.courseId = courseId;
	}

	@Override
	public String toString() {
		return "StudentsDetails [studentId=" + studentId + ", studentName=" + studentName + ", courseId=" + courseId
				+ "]";
	}

	
  

}
