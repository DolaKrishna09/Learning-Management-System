import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function EditModule() {
  const [courseId, setCourseId] = useState('');
  const [moduleName, setModuleName] = useState('');
  const [prerequisites, setPrerequisites] = useState('');
  const [outcome, setOutcome] = useState('');
  const [moduleNotes, setModuleNotes] = useState('');

  const navigate = useNavigate();
  const { moduleId } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8080/module/getModuleByModuleId/${moduleId}`).then((res) => {
      setCourseId(res.data.courseId);
      setModuleName(res.data.moduleName);
      setPrerequisites(res.data.prerequisites);
      setOutcome(res.data.outcome);
      setModuleNotes(res.data.moduleNotes);
    });
  }, [moduleId]);

  const data = {
    courseId: courseId,
    moduleName: moduleName,
    prerequisites: prerequisites,
    outcome: outcome,
    moduleNotes: moduleNotes,
  };

  function handleUpdate(e) {
    e.preventDefault();
    axios.put(`http://localhost:8080/module/updateModule/${moduleId}`, data).then(() => {
      navigate('/F2 ');
    });
  }

  return (
    <div className='container mt-4'>
      <form className='bg-light p-4 rounded shadow edit-module-form'>
        <div className='mb-3'>
          <label htmlFor='courseId' className='form-label'>Course ID:</label>
          <input
            value={courseId}
            onChange={(e) => setCourseId(e.target.value)}
            type='text'
            className='form-control'
            placeholder='Enter Course ID'
          />
        </div>

        <div className='mb-3'>
          <label htmlFor='moduleName' className='form-label'>Module Name:</label>
          <input
            value={moduleName}
            onChange={(e) => setModuleName(e.target.value)}
            type='text'
            className='form-control'
            placeholder='Enter Module Name'
          />
        </div>

        <div className='mb-3'>
          <label htmlFor='prerequisites' className='form-label'>Prerequisites:</label>
          <input
            value={prerequisites}
            onChange={(e) => setPrerequisites(e.target.value)}
            type='text'
            className='form-control'
            placeholder='Enter Prerequisites'
          />
        </div>

        <div className='mb-3'>
          <label htmlFor='outcome' className='form-label'>Outcome:</label>
          <input
            value={outcome}
            onChange={(e) => setOutcome(e.target.value)}
            type='text'
            className='form-control'
            placeholder='Enter Outcome'
          />
        </div>

        <div className='mb-3'>
          <label htmlFor='moduleNotes' className='form-label'>Module Notes:</label>
          <textarea
            value={moduleNotes}
            onChange={(e) => setModuleNotes(e.target.value)}
            className='form-control'
            placeholder='Enter Notes'
          />
        </div>

        <div className='mb-3'>
          <button onClick={handleUpdate} className='btn btn-primary'>Update Module</button>
        </div>
      </form>
    </div>
  );
}

export default EditModule;
