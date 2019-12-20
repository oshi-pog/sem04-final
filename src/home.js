import React from 'react';
import Navbar from './components/navbar/navbar'
import LandingHero from './components/LandingHero/LandingHero';
import LandingGrid from './components/LandingGrid/LandingGrid';
import WhatWeDo from '././components/WhatWeDo/WhatWeDo';
import './styles/style.scss';
import PortfolioGrid from './components/PortfolioGrid/PortfolioGrid';
import Testimonials from './components/Testimonials/Testimonials';

import CompensationGrid from './components/CompensationGrid/CompensationGrid'
import ApplicationSection from './components/ApplicationSection/ApplicationSection'
import Footer from './components/Footer/Footer'

function Home() {
  return (
    <div className="main">
      <Navbar/>
      <LandingHero/>
      <LandingGrid/>
      <WhatWeDo></WhatWeDo>
      <PortfolioGrid/>
      <Testimonials/>
      <CompensationGrid/>
      <ApplicationSection/>
      <Footer/>
    </div>
  );
}

export default Home;
