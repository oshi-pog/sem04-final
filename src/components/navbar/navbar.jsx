import React from 'react';
import logo from '../../../src/svgs/logo-ptd.svg';
import './navbar.scss';
import NavApplicationFormPopup from './components/NavApplicationButton';

function Navbar() {
    return (
      <div className="navbar">
          <img src={logo} className="logo"></img>
          <div className="nav-links">
              <p>Projects</p>
              <p>About Us</p>
              <p>Our Team</p>
              <NavApplicationFormPopup/>
          </div>
      </div>
    );
  }
  
  export default Navbar;