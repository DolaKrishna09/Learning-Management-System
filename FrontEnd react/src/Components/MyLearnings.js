import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function MyLearnings() {
    const storedStudentId = sessionStorage.getItem('studentId');
    const defaultStudentId = storedStudentId ? parseInt(storedStudentId) : 1;

    const [studentId] = useState(defaultStudentId);
    const [studentData, setStudentData] = useState([]);
    const [modules, setModules] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8080/student/courses/${studentId}`)
            .then((res) => {
                setStudentData(res.data);
            })
            .catch((error) => {
                console.error('Error fetching student details:', error);
            });
    }, [studentId]);

    useEffect(() => {
        // Fetch module details
        const moduleRequests = studentData.map((course) => {
            return axios.get(`http://localhost:8080/module/getModulesByCourseId/${course.courseId}`);
        });

        Promise.all(moduleRequests)
            .then((responses) => {
                const modulesData = responses.flatMap((res) => res.data);
                setModules(modulesData);
            })
            .catch((error) => {
                console.error('Error fetching module details:', error);
            });
    }, [studentData]);

    

    return (
        <div>

<nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className="container">
        <img className="navbar-brand" src='https://miro.medium.com/v2/resize:fit:800/0*FxXjNMKLbpkw8Zs-.png' style={{width:'200px', height:'200px'}}/>
      
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            {studentData.map((course, index) => (
              <li className="nav-item" key={index}>
                <a className="nav-link" >
                  <h6>Student Name: {course.studentName}</h6>
                  <h6>CourseId: {course.courseId}</h6>
                 <center><h1>{course.courseName}</h1></center> 
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
    <div>


        <div style={{marginTop:'20px'}}>
          <center> <h1 style={{color:'black'}}>Modules</h1> </center> 
          </div>

          <div className="row"   >
    {modules.map((module, index) => (
        <div className="col-md-4 mb-4" key={`module_${index}`}  >
            <div className="card my-card"  >
                <div className="card-header">
                <h5 className="card-title">{module.moduleName}</h5>
                </div>

                <div className="card-body">
                    
                    <p className="card-text"><strong>Module ID:</strong> {module.moduleId}</p>
                    <p className="card-text"><strong>Prerequisites:</strong> {module.prerequisites}</p>
                    <p className="card-text"><strong>Outcome: </strong>{module.outcome}</p>
                    
                    <center>
                        <Link to={`/FetchModuleDetails/${module.moduleId}`} className="btn btn-primary">
                            Explore
                        </Link>
                    </center>
                </div>
            </div>
        </div>
    ))}
</div>

        </div>

        

        <div style={{marginLeft:'80%', marginBottom:'20px'}}>
            <button className="btn btn-success mr-2">Attempt Exam</button>
              &nbsp;   &nbsp;   &nbsp;
            <button className="btn btn-success mr-2">Feedback</button>
            
        </div>

        </div>
    );
}

export default MyLearnings;
