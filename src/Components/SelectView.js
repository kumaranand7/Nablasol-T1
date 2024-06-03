import React from 'react';
import './SelectView.css';
import { useNavigate } from 'react-router-dom';
import closeIcon from './Icon/closeIcon.svg';



const SelectView = () => {
    const navigate = useNavigate();

  const handleNextClick = () => {
    navigate('/manage-projects');
  };

  return (
    <div className="select-view">
               <img src={closeIcon} alt="close Icon"  id='close-icon'/>

      <div className="modal-header">
        <h2>Select a view</h2>
        <p>You can also customize this views in settings</p>
      </div>
      <div className="modal-body">
        <div className="view-options">
          <div className="view-option">
            <div className="view-icon">
              <i className="fas fa-list"></i>
            </div>
            <span>List</span>
          </div>
          <div className="view-option active">
            <div className="view-icon">
              <i className="fas fa-grip-vertical"></i>
            </div>
            <span>Board</span>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <button className="back-button"  onClick={() => window.history.back()}>Back</button>
        <button className="next-button" onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
};

export default SelectView;