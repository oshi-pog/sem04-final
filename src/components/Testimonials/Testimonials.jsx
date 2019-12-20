import React from 'react';
import './Testimonials.scss';
import NicolasImg from './img/nicolas.jpg'
import OutleryImg from './img/outlery.jpg'
import UrsusImg from './img/ursus.jpg'

import QuoteRight from '../../svgs/quote-right-solid.svg'


function Testimonials() {
    return (
      <div className="testimonials-grid">
          <img src={QuoteRight} className="testimonials-quote-svg"></img>
        <div className="testimonials-text-box">
          <div className="what-green-heading">
            <h1 className="green-heading-text">What our clients are saying</h1>
            <div className="green-heading-line"></div>
          </div>
          <h1 className="what-h1">Testimonials</h1> 
        </div>

        <div className="testimonials-block">
            <h2>What a service. It’s been a pleasure working with these guys all the way from Kickstarter to Indiegogo and finally - to our online webstore.</h2>
        </div>
        <div className="testimonials-images-grid">
            <img className="testimonials-image image-left" alt="tesimonial image" src={OutleryImg}/>
            <img className="testimonials-image image-middle" alt="tesimonial image" src={NicolasImg}/>
            <div className="testimonials-text">
                <h3 className="testimonials-name">Nicolas Aaagard</h3>
                <h3 className="testimonials-role">Founder & CEO of LastSwab</h3>
            </div>
            <img className="testimonials-image image-right" alt="tesimonial image" src={UrsusImg}/>
        </div>
      </div>
    );
  }
  
  export default Testimonials;