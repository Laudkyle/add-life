import React from 'react';
import Hero from '../components/Hero';
import Mission from '../components/Mission';
import Newsletter from '../components/Newsletter';
import Info from '../components/Info';
import Education from '../components/Education';
import Faq from '../components/Faq';
import Hope from '../components/Hope';
import Testimonies from '../components/Testimonies';
import Chart from '../components/Chart';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Hero />
      <Mission />
      <Newsletter />
      <Info />
      <Education />
      <Faq />
      <Hope />
      <Testimonies />
      <Footer />
    </div>
  )
}

export default Home
