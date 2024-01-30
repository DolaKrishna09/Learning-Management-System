import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function AddCourse() {
  const [courseId, setCourseId] = useState('');
  const [courseName, setCourseName] = useState('');
  const [duration, setDuration] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [availability, setAvailability] = useState('');
  const [details, setDetails] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  function Submit(e) {
    e.preventDefault();

    // Check if all required fields are filled
    if (!courseName || !duration || !startDate || !endDate || !availability || !details) {
      setError('Please fill in all fields');
      return;
    }

    const data = {
      courseName: courseName,
      courseDuration: duration,
      startDate: startDate,
      endDate: endDate,
      availability: availability,
      details: details,
    };

    // If all fields are filled, make the axios request
    axios.post(`http://localhost:8080/Admin/addCourse/${courseId}`, data).then(() => {
      navigate('/AdminEditCourses');
    });
  }

  return (
    <div className='container mt-4'>
      <header className='text-center'>
        <h1>Add Course</h1>
      </header>

      <form className='bg-light p-4 rounded shadow professional-form' onSubmit={Submit}>
        {error && <div className='error-message mb-3'>{error}</div>}

        <div className='mb-3'>
          <label htmlFor='courseId' className='form-label'>Course ID</label>
          <input
            id='courseId'
            value={courseId}
            onChange={(e) => setCourseId(e.target.value)}
            type='text'
            className='form-control'
            placeholder='Enter Course Id'
          />
        </div>

        <div className='mb-3'>
          <label htmlFor='courseName' className='form-label'>Course Name</label>
          <input
            id='courseName'
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            type='text'
            className='form-control'
            placeholder='Enter Course Name'
          />
        </div>

        <div className='mb-3'>
          <label htmlFor='duration' className='form-label'>Course Duration</label>
          <input
            id='duration'
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            type='text'
            className='form-control'
            placeholder='Enter Course Duration'
          />
        </div>

        <div className='mb-3'>
          <label htmlFor='startDate' className='form-label'>Course Start Date</label>
          <input
            id='startDate'
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            type='date'
            className='form-control'
            placeholder='Enter Course Name'
          />
        </div>

        <div className='mb-3'>
          <label htmlFor='endDate' className='form-label'>Course End Date</label>
          <input
            id='endDate'
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            type='date'
            className='form-control'
            placeholder='Enter Course End Date'
          />
        </div>

        <div className='mb-3'>
          <label htmlFor='availability' className='form-label'>Course Availability</label>
          <input
            id='availability'
            value={availability}
            onChange={(e) => setAvailability(e.target.value)}
            type='text'
            className='form-control'
            placeholder='Enter Course Availability'
          />
        </div>

        <div className='mb-3'>
          <label htmlFor='details' className='form-label'>Course Details</label>
          <textarea
            id='details'
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            className='form-control'
            placeholder='Enter Course Details'
            rows='4' 
          />
        </div>

        <div className='mb-3'>
          <button type='submit' className='btn btn-primary'>Add Course</button>
        </div>
      </form>

      <footer className='text-center mt-3'>
        <Link to='/AdminEditCourses' className='btn btn-secondary'>Back to Courses</Link>
      </footer>
    </div>
  );
}

export default AddCourse;
