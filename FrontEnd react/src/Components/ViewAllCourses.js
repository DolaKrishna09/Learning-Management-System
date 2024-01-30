import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

export default function ViewAllCourses() {
  const [courses, setCourses] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState('');

  useEffect(() => {
    loadCourses();
  }, []);

  const loadCourses = async () => {
    try {
      const result = await axios.get('http://localhost:8080/courses/allCoursesWithId');
      setCourses(result.data);
      console.log(result.data);
    } catch (error) {
      console.error('Error loading courses:', error.message);
    }
  };

  const handleSearch = (e) => {
    setSearchKeyword(e.target.value);
  };

  const filteredCourses = courses.filter((course) =>
    course.courseName.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  return (
    <div>

      <div className="container mt-4">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by course name"
            value={searchKeyword}
            onChange={handleSearch}
          />
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4">
      {filteredCourses.map((course, index) => (
        <div className="col" key={index}>
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">{course.courseName}</h5>

              {/* Bootstrap table inside the card */}
              <table className="table">
                <tbody>
                  <tr>
                    <th>Duration:</th>
                    <td><em>{course.courseDuration}</em></td>
                  </tr>
                  <tr>
                    <th>Start Date:</th>
                    <td><em>{course.startDate}</em></td>
                  </tr>
                  <tr>
                    <th>End Date:</th>
                    <td><em>{course.endDate}</em></td>
                  </tr>
                </tbody>
              </table>

            </div>
            <div className="card-footer">
              <Link to={`/course/${course.courseId}`} className="btn btn-primary">
                Explore
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
      </div>

      
      <div style={{marginBottom:'20px', marginLeft:'20px'}}>
        <Link to='/coursesHomePage'>Click here to go back</Link>
      </div>
    </div>
  );
}
