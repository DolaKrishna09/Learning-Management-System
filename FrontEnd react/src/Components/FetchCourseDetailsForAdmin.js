import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { Carousel } from 'react-bootstrap';
function FetchCourseDetailsForAdmin() {
  const [course, setCourse] = useState({});
  const { courseId } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8080/courses/SearchByCourseId/${courseId}`).then((res) => {
      setCourse(res.data);
    });
  }, [courseId]);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <div className="card" style={{ border: 'none' }}>
            <div className="card-body" > 
            
              <Carousel >
               
                <Carousel.Item style={{borderRadius:'20px'}}>
                 
                  <img 
                 
                    src="https://www.wingstechsolutions.com/wp-content/uploads/2022/03/full-stack-development.gif"
              
                  />
                </Carousel.Item>
              </Carousel>

            </div>
          </div>
        </div>
  
        <div className="col-md-6" >
        <div className="card" style={{ border: 'none', height: '100%' }}>
        <div className="card-body">
  <center>
    <h1 className="card-subtitle mb-2 text-left" style={{ fontSize: '24px' }}>{course.courseName}</h1>
  </center>
  <br /><br />

  <table className="table" style={{ fontSize: '18px' }}>
    <tbody>
      <tr>
        <td><strong>Availability:</strong></td>
        <td><em className="text-primary">{course.availability}</em></td>
      </tr>

      <tr>
        <td><strong>Start Date:</strong></td>
        <td><em className="text-primary">{course.startDate}</em></td>
      </tr>

      <tr>
        <td><strong>End Date:</strong></td>
        <td><em className="text-primary">{course.endDate}</em></td>
      </tr>

      <tr>
        <td><strong>Duration:</strong></td>
        <td><em className="text-primary">{course.courseDuration}</em></td>
      </tr>
    </tbody>
  </table>
<br/>
  <em className="card-text mt-4">
    This course offers valuable insights and skills. Feel free to explore the details above and enroll today for an enriching learning experience!
  </em>
</div>

</div>

</div>

      </div>
  
      <hr />
  
      
      <ul className="list-group">
        <li className="list-group-item">
          <h5>Course Details:</h5>
          <p className="card-text text-left">{course.details}</p>
        </li>
      </ul>


      <div style={{marginBottom:'20px'}}>
        <Link to='/M4'>Click here to go back</Link>
      </div>
    </div>
  );
}

export default FetchCourseDetailsForAdmin;
