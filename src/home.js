import React from 'react';
import Navbar from './components/navbar/navbar';
import LandingHero from './components/landing-hero/landing-hero';
import LandingGrid from './components/landing-grid/landing-grid';
import WhatWeDo from '././components/WhatWeDo/WhatWeDo';
import './styles/style.scss';

function Home() {
  return (
    <div className="main">
      <Navbar/>
      <LandingHero/>
      <LandingGrid/>
      <WhatWeDo></WhatWeDo>
    </div>
  );
}

export default Home;
