import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function AdminEditCourses() {
    const [courses, setCourses] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        loadCourses();
    }, []);

    const loadCourses = async () => {
        try {
            const result = await axios.get('http://localhost:8080/courses/allCoursesWithId');
            setCourses(result.data);
        } catch (error) {
            console.error('Error loading courses:', error.message);
        }
    };

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredCourses = courses.filter((course) =>
        course.courseName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const Delete = (courseId) => {
        axios
            .delete(`http://localhost:8080/Admin/deleteCourse/${courseId}`)
            .then(() => loadCourses())
            .catch((error) => console.error('Error deleting course:', error.message));
    };

    const handleGoToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="container">
            <div className="bg-primary p-3 d-flex justify-content-between align-items-center">
                <h1 style={{ backgroundColor: '#007bff', color: 'gold', padding: '8px', borderRadius: '5px' }}>Courses</h1>
                <div style={{ marginLeft: '55%' }}>
                    <input
                        type="text"
                        placeholder="Search by Course Name"
                        value={searchTerm}
                        onChange={handleSearch}
                        className="form-control"
                    />
                </div>
                <Link to="/add-course" className='btn btn-success'>Add Courses</Link>
            </div>

            <div className="py-4">
                <div className="card-deck">
                    {filteredCourses.map((course, index) => (
                        <div className="card mb-4" key={index}>
                            <div className="card-header" style={{ backgroundColor: 'rgba(8, 152, 248, 0.801)', borderTopRightRadius: '20px', borderTopLeftRadius: '20px' }}>
                                <h5 className="card-title"><center> {course.courseName} </center></h5>
                            </div>
                            <div className="card-body">
                                <p className="card-text"><h6 style={{ color: 'black' }}>Course Id: </h6> {course.courseId}</p>
                                <p className="card-text"><h6 style={{ color: 'black' }}>Course Duration:</h6> {course.courseDuration}</p>
                                <p className="card-text"><h6 style={{ color: 'black' }}>Start Date:</h6> {course.startDate}</p>
                                <p className="card-text"><h6 style={{ color: 'black' }}>End Date:</h6> {course.endDate}</p>
                                <p className="card-text"><h6 style={{ color: 'black' }}>Availability:</h6> {course.availability}</p>
                                <p className="card-text"><h6 style={{ color: 'black' }}>Details:</h6> {course.details}</p>
                            </div>
                            <div className="card-footer">
                                <center>
                                    <div className="btn-group" role="group">
                                        <Link to={`/course/${course.courseId}`} className="btn btn-primary">
                                            View
                                        </Link>&nbsp;&nbsp;
                                        <Link to={`/edit-course/${course.courseId}`} className="btn btn-warning">
                                            Edit
                                        </Link>&nbsp;&nbsp;
                                        <button onClick={() => Delete(course.courseId)} className="btn btn-danger">
                                            Delete
                                        </button>
                                    </div>
                                </center>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <button className="btn btn-primary" onClick={handleGoToTop}>
                Go to Top
            </button>
        </div>
    );
}
