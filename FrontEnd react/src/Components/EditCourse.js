import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

function EditCourse() {
  const [courseName, setCourseName] = useState('');
  const [duration, setDuration] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [availability, setAvailability] = useState('');
  const [details, setDetails] = useState('');

  const navigate = useNavigate();
  const { courseId } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8080/courses/SearchByCourseId/${courseId}`).then((res) => {
      setCourseName(res.data.courseName);
      setDuration(res.data.courseDuration);
      setStartDate(res.data.startDate);
      setEndDate(res.data.endDate);
      setAvailability(res.data.availability);
      setDetails(res.data.details);
    });
  }, [courseId]);

  const data = {
    courseName: courseName,
    courseDuration: duration,
    startDate: startDate,
    endDate: endDate,
    availability: availability,
    details: details,
  };

  function handleUpdate(e) {
    e.preventDefault();
    axios.put(`http://localhost:8080/Admin/updateCourse/${courseId}`, data).then(() => {
      navigate('/M4');
    });
  }

  return (
    <div className='container mt-4'>
      <header className='text-center'>
        <h1>Edit Course</h1>
      </header>

      <div className='edit-course-container'>
        <form className='bg-light p-4 rounded shadow edit-course-form'>
          <div className='mb-3'>
            <label htmlFor='courseName' className='form-label'>Course Name:</label>
            <input
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
              type='text'
              className='form-control'
              placeholder='Enter Course Name'
            />
          </div>

          <div className='mb-3'>
            <label htmlFor='duration' className='form-label'>Course Duration:</label>
            <input
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              type='text'
              className='form-control'
              placeholder='Course Duration'
            />
          </div>

          <div className='mb-3'>
            <label htmlFor='startDate' className='form-label'>Start Date:</label>
            <input
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              type='date'
              className='form-control'
              placeholder='Course Start Date'
            />
          </div>

          <div className='mb-3'>
            <label htmlFor='endDate' className='form-label'>End Date:</label>
            <input
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              type='date'
              className='form-control'
              placeholder='Course End Date'
            />
          </div>

          <div className='mb-3'>
            <label htmlFor='availability' className='form-label'>Availability:</label>
            <input
              value={availability}
              onChange={(e) => setAvailability(e.target.value)}
              type='text'
              className='form-control'
              placeholder='Availability'
            />
          </div>

          <div className='mb-3'>
            <label htmlFor='details' className='form-label'>Course Details:</label>
            <textarea
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              className='form-control'
              placeholder='Course Details'
            />
          </div>

          <div className='mb-3'>
            <button onClick={handleUpdate} className='btn btn-primary'>Update Course</button>
          </div>
        </form>
      </div>
      
      <footer className='text-center mt-3'>
        <Link to='/AdminEditCourses' className='btn btn-secondary'>Back to Courses</Link>
      </footer>
    </div>
  );
}

export default EditCourse;
