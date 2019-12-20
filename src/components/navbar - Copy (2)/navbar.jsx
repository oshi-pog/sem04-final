import React from './node_modules/react';
import logo from '../../../src/svgs/logo-ptd.svg';
import './navbar.scss';
import NavApplicationFormPopup from './components/NavApplicationButton';

function navbar() {
    return (
      <div className="navbar">
          <img src={logo} className="logo"></img>
          <div className="nav-links">
              <NavApplicationFormPopup/>
          </div>
      </div>
    );
  }
  
  export default navbar;