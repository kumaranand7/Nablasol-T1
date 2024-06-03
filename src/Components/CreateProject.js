import React from 'react';
import './CreateProject.css';
import { useNavigate } from 'react-router-dom';
import closeIcon from './Icon/closeIcon.svg';

const CreateProject = () => {
  const navigate = useNavigate();

  const handleNextClick = () => {
    navigate('/project-type');
  };

  return (
    <div className="create-project-modal">
       <img src={closeIcon} alt="close Icon"  id='close-icon'/>
      <div className="modal-header">
        <h2>Create a project</h2>
      </div>
      <div className="modal-body">
        <div className="form-group">
          <label htmlFor="projectName">Project name</label>
          <input
            type="text"
            id="projectName"
            placeholder="Enter project name here"
          />
        </div>
        <div className="form-group">
          <label htmlFor="client">Client</label>
          <div className="client-dropdown">
            <select id="client">
              <option value="">Select a client</option>
            </select>
            <span>or</span>
            <button>+ New Client</button>
          </div>
        </div>
        <div className="form-group">
          <label>Dates</label>
          <div className="date-inputs">
            <input type="date" value="2019-10-25" />
            <input type="date" value="2019-11-28" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="notes">Notes</label>
          <textarea id="notes" placeholder="Optional"></textarea>
        </div>
      </div>
      <div className="modal-footer">
        <button className="back-button">Back</button>
        <button className="next-button" onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
};

export default CreateProject;