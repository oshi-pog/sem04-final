import React from 'react';
import './landing-grid.scss';
import tech from '../../../src/svgs/tech.svg';
import crowdfunding from '../../../src/svgs/crowdfunding.svg';
import performance from '../../../src/svgs/performance.svg';




function LandingGrid() {
    return (
      <div className="landing-grid">
          <div className="landing-grid-block">
              <img src={tech}></img>
              <h3>Cutting Edge Crowdfunding Ad Tech</h3>
              <h4>We are constantly adding new ad tech to our crowdfunding toolkit.</h4>
          </div>
          <div className="landing-grid-block">
            <img src={crowdfunding}></img>
            <h3>Data-driven Campaigns</h3>
            <h4>For maximum results, empowered by real data.</h4>
          </div>
          <div className="landing-grid-block">
            <img src={performance}></img>
            <h3>Performance Advertising</h3>
            <h4>Our goal is always to deliver the best returns for each project or campaign.</h4>
          </div>
    </div>
    );
  }
  
  export default LandingGrid;