// shop = home
import React from 'react';
import Hero from '../components/Heroo/Hero';
import Popular from '../components/Popular/Popular';
import Offer from '../components/Offers/Offer';
import New from '../components/New/New';
import News from '../components/NewsLetter/News';

const Home = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offer/>
      <New/>
      <News/>
    </div>
  )
}

export default Home
