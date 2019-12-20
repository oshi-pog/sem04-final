import React from 'react';
import './ApplicationSection.scss';
import ApplicationButton from '../ApplicationButton/ApplicationButton'



function ApplicationSection() {
    return (
      <div className="application-grid">
        <div className="application-text-box">
          <h1 className="what-h1">Learn More About Our Program</h1> 
        </div>
        <ApplicationButton/>
    </div>
    );
  }
  
  export default ApplicationSection;