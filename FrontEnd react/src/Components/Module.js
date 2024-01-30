import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Module() {
  const [modules, setModules] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    loadModules();
  }, []);

  const loadModules = async () => {
    try {
      const result = await axios.get('http://localhost:8080/module/getAllModules');
      setModules(result.data);
    } catch (error) {
      console.error('Error loading Modules:', error.message);
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredModules = modules.filter((module) =>
    String(module.courseId).includes(searchTerm)
  );

  const Delete = (moduleId) => {
    axios
      .delete(`http://localhost:8080/module/deleteModule/${moduleId}`)
      .then(() => loadModules())
      .catch((error) => console.error('Error deleting Module:', error.message));
  };


  const handleGoToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="container" >
      <div className="bg-primary p-3 d-flex justify-content-between align-items-center">
        <h1 style={{ backgroundColor: '#007bff', color: 'gold', padding: '8px', borderRadius: '5px' }}>Modules</h1>
        <div style={{marginLeft:'55%'}}>
          <input
            type="text"
            placeholder="Search by Course ID"
            value={searchTerm}
            onChange={handleSearch}
            className="form-control"
          />
        </div>
        <Link to="/add-module" className='btn btn-success'>Add Modules</Link>
      </div>

      <div className="py-4">
        <div className="card-deck">
          {filteredModules.map((module, index) => (
            <div className="card mb-4" key={index}>
              <div className="card-header" style={{backgroundColor:'rgba(8, 152, 248, 0.801) ',borderTopRightRadius:'20px',borderTopLeftRadius:'20px'}}>
                <h5 className="card-title" ><center>Module Id: {module.moduleId}</center></h5>
              </div>
              <div className="card-body">
                <p className="card-text"><h6 style={{color:'black'}}>Course Id:</h6> {module.courseId}</p>
                <p className="card-text"><h6 style={{color:'black'}}> Module Name: </h6>{module.moduleName}</p>
                <p className="card-text"><h6 style={{color:'black'}}>Prerequisite: </h6>{module.prerequisites}</p>
                <p className="card-text"><h6 style={{color:'black'}}>Outcome: </h6>{module.outcome}</p>
                <p className="card-text"><h6 style={{color:'black'}}>Module Notes: </h6>{module.moduleNotes}</p>
              </div>
              <div className="card-footer">
                <center>
                  <div className="btn-group" role="group">
                    <Link to={`/module/${module.moduleId}`} className="btn btn-primary">
                      View
                    </Link>&nbsp;&nbsp;
                    <Link to={`/edit-module/${module.moduleId}`} className="btn btn-warning">
                      Edit
                    </Link>&nbsp;&nbsp;
                    <button onClick={() => Delete(module.moduleId)} className="btn btn-danger">
                      Delete
                    </button>&nbsp;&nbsp;
                    <Link to={`/view-video/${module.moduleId}`} className="btn btn-info">
                      Video
                    </Link> 
                  </div>
                </center>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div >
        <button className="btn btn-primary" onClick={handleGoToTop}>
          Go to Top
        </button>
      </div>
    </div>
  );
}

export default Module;
