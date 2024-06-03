import React from 'react';
import './ProjectType.css';
import { useNavigate } from 'react-router-dom';



const ProjectType = () => {
    const navigate = useNavigate();

  const handleNextClick = () => {
    navigate('/select-view');
  };

  return (
    <div className="project-type">
      <div className="modal-header">

        <h2>Project type</h2>
        
        <p>Don't panic — You can also customize this types in settings</p>
      </div>
      <div className="modal-body">
        <div className="project-type-options">
          <button className="active">Time & Materials</button>
          <button>Fixed Fee</button>
          <button>Non-Billable</button>
        </div>
        <div className="hourly-rate">
          <h3>Hourly</h3>
          <p>We need hourly rates to track your project's billable amount.</p>
          <div className="input-group">
            <select>
              <option>Project Hourly Rate</option>
            </select>
            <input type="text" value="12,678.04" />
          </div>
        </div>
        <div className="budget">
          <h3>Budget</h3>
          <p>We need hourly rates to track your project's billable amount.</p>
          <div className="input-group">
            <select>
              <option>Hours per Person</option>
            </select>
          </div>
          <div className="budget-options">
            <div className="option">
              <input type="checkbox" id="budgetReset" />
              <label htmlFor="budgetReset">Budget resets every month</label>
            </div>
            <div className="option">
              <input type="checkbox" id="emailAlerts" defaultChecked />
              <label htmlFor="emailAlerts">
                Send email alerts if project exceeds{' '}
                <input type="text" value="80.00" /> % of budget
              </label>
            </div>
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

export default ProjectType;