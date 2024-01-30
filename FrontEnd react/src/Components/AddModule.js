import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


function AddModule() {
  const [moduleId, setModule] = useState(0);
  const [courseId, setCourseId] = useState(0);
  const [moduleName, setModuleName] = useState('');
  const [prerequisites, setPrerequisites] = useState('');
  const [outcome, setOutcome] = useState('');
  const [moduleNotes, setModuleNotes] = useState('');
  const navigate = useNavigate();

  function Submit(e) {
    e.preventDefault();

    // Check if all required fields are filled
    if (!moduleId || !courseId || !moduleName || !prerequisites || !outcome || !moduleNotes) {
      alert('Please fill in all fields');
      return;
    }

    const data = {
      moduleId: moduleId,
      courseId: courseId,
      moduleName: moduleName,
      prerequisites: prerequisites,
      outcome: outcome,
      moduleNotes: moduleNotes,
    };

    // If all fields are filled, make the axios request
    axios.post("http://localhost:8080/module/addModule", data)
      .then(() => {
        navigate('/F2');
      })
      .catch(error => {
        console.error('Error adding module:', error);
        // You can add logic here to handle the error, such as displaying an error message to the user
      });
  }

  return (
    <div className='container mt-4'>
     

      <div className='row justify-content-center'>
        <div className='col-md-6'>
          <form className='bg-light p-4 rounded shadow'>

            <div className='mb-3'>
              <label className='form-label'>Module ID:</label>
              <input
                value={moduleId}
                onChange={(e) => setModule(e.target.value)}
                type='number'
                className='form-control'
                placeholder='Enter Module ID'
              />
            </div>

            <div className='mb-3'>
              <label className='form-label'>Course ID:</label>
              <input
                value={courseId}
                onChange={(e) => setCourseId(e.target.value)}
                type='number'
                className='form-control'
                placeholder='Enter Course ID'
              />
            </div>

            <div className='mb-3'>
              <label className='form-label'>Module Name:</label>
              <input
                value={moduleName}
                onChange={(e) => setModuleName(e.target.value)}
                type='text'
                className='form-control'
                placeholder='Enter Module Name'
              />
            </div>

            <div className='mb-3'>
              <label className='form-label'>Prerequisites:</label>
              <input
                value={prerequisites}
                onChange={(e) => setPrerequisites(e.target.value)}
                type='text'
                className='form-control'
                placeholder='Enter Prerequisites'
              />
            </div>

            <div className='mb-3'>
              <label className='form-label'>Outcome:</label>
              <input
                value={outcome}
                onChange={(e) => setOutcome(e.target.value)}
                type='text'
                className='form-control'
                placeholder='Enter Outcome'
              />
            </div>

            <div className='mb-3'>
              <label className='form-label'>Module Notes:</label>
              <textarea
                value={moduleNotes}
                onChange={(e) => setModuleNotes(e.target.value)}
                type='text'
                className='form-control'
                placeholder='Enter Module Notes'

                rows='4' 
              />
            </div>

            <button onClick={Submit} className='btn btn-primary'>Add Module</button>
          </form>

          <Link to="/F2" className='btn btn-secondary mt-3'>Back to Module</Link>
        </div>
      </div>
    </div>
  );
}

export default AddModule;
