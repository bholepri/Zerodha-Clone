import React from 'react';
import Hero from './Hero';
import Trust from './Trust';
import Pricing from './Pricing';
import Education from './Education';
import Navbar from '../Navbar';
import Footer from '../Footer';
import OpenAccount from '../OpenAccount';
import './pricing.css'
function HomePage() {
    return ( 
        <div>
          
          <hr />
          <Hero/>
          <Trust/>
          <Pricing/>
          <Education/>
          <OpenAccount/>
          <hr />
          
        </div>
     );
}

export default HomePage;