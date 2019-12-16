import React from 'react';
import logo from '../../../src/svgs/logo-ptd.svg';
import './landing-hero.scss';



function LandingHero() {
    return (
      <div className="landing-hero">
          <h1 className="landing-hero-h1">Data-driven marketing experts.</h1>
          <h1 className="landing-hero-h1">We bring your projects to <span className="semi-bold"></span>life.</h1>
            <div className="apply-btn">Apply Now</div>
      </div>
    );
  }
  
  export default LandingHero;