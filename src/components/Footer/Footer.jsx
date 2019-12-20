import React from 'react';
import footerLogo from '../../../src/svgs/footer-logo.svg';
import './Footer.scss';
import NavApplicationFormPopup from './components/NavApplicationButton';

function Footer() {
    return (
      <div className="footer">
        <div className="footer-navbar">
            <img src={footerLogo} className="footer-logo"></img>
            <div className="footer-nav-links">
                <p>About Us</p>
                <NavApplicationFormPopup/>
            </div>
        </div>

        <div className="footer-extra-links">
          <p>Say hello@ptd-cph.com</p>
          <div>Built by PTD © 2019</div>
        </div>
      </div>
    );
  }
  
  export default Footer;