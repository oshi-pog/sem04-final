import React from 'react';
import logo from '../../../src/svgs/logo-ptd.svg';
import './Navbar.scss';
import NavApplicationFormPopup from './components/NavApplicationButton';

function Navbar() {
    return (
      <div className="navbar">
          <img src={logo} className="logo"></img>
          <div className="nav-links">
              <p>About Us</p>
              <NavApplicationFormPopup/>
          </div>
      </div>
    );
  }
  
  export default Navbar;