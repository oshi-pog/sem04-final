import React from 'react';
import logo from '../../../src/svgs/logo-ptd.svg';
import './navbar.scss';

function Navbar() {
    return (
      <div className="navbar">
          <img src={logo} className="logo"></img>
          <div className="nav-links">
              <p>Projects</p>
              <p>About Us</p>
              <p>Our Team</p>
          </div>
      </div>
    );
  }
  
  export default Navbar;