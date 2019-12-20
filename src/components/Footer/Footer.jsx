import React from 'react';
import footerLogo from '../../../src/svgs/footer-logo.svg';
import './Footer.scss';
import NavApplicationFormPopup from './components/NavApplicationButton';

function Footer() {
    return (
      <div className="footer">
        <div className="footer-navbar">
            <img src={footerLogo} className="footer-logo" alt=""></img>
            <div className="footer-nav-links">
                <NavApplicationFormPopup/>
            </div>
        </div>

        <div className="footer-extra-links">
          <p>Say <a href="mailto:hello@ptd-cph.com" className="footer-email">hello@ptd-cph.com</a></p>
          <div className="footer-built-wrapper"><p>Built by PTD © 2019</p></div>
        </div>
      </div>
    );
  }
  
  export default Footer;