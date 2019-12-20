import React from 'react';
import logo from '../../../src/svgs/logo-ptd.svg';
import './NavbarFixed.scss';
import NavButton from './components/NavButton';

function navbar() {
    return (
      <div className="navbar">
          <img src={logo} className="logo"></img>
          <div className="nav-links">
              <NavButton/>
          </div>
      </div>
    );
  }
  
  export default navbar;