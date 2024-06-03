import React from 'react';
import './ManageProjects.css';
import closeIcon from './Icon/closeIcon.svg';


const ManageProjects = () => {
  return (
    <div className="manage-projects">
               <img src={closeIcon} alt="close Icon"  id='close-icon'/>

        
      <div className="modal-header">
        <h2>Who can manage projects</h2>
        <p>Don't panic — You can also customize this permissions in settings</p>
      </div>
      <div className="modal-body">
        <div className="permission-option">
          <div className="option-icon"> 
            <i className="fas fa-users"></i>
          </div>
          <div className="option-info">
            <h3>Everyone</h3>
            <p>All users can now to see it, but guests cannot access the projects.</p>
          </div>
        </div>
        <div className="permission-option active">
          <div className="option-icon">
            <i className="fas fa-user-shield"></i>
          </div>
          <div className="option-info">
            <h3>Only Admin's</h3>
            <p>Only admins can manage everything.</p>
          </div>
        </div>
        <div className="permission-option">
          <div className="option-icon">
            <i className="fas fa-user-friends"></i>
          </div>
          <div className="option-info">
            <h3>Only to Specific people</h3>
            <p>Only some specific people can able to see it</p>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <button className="back-button"  onClick={() => window.history.back()}>Back</button>
        <button className="next-button" >Next</button>
      </div>
    </div>
  );
};

export default ManageProjects;