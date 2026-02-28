import React from 'react'
import HeroSection from '../../Componenets/WelcomeComp/HeroSection/HeroSection.jsx';
import Welcome from '../../Componenets/WelcomeComp/Welcome/Welcome.jsx';
import Enquiries from '../../Componenets/WelcomeComp/Enquiries/Enquiries.jsx';
import FeaturedCars from '../../Componenets/WelcomeComp/FeaturedCars/FeaturedCars.jsx';
import LatestBlog from '../../Componenets/WelcomeComp/LatestBlog/LatestBlog.jsx';
import './homePage.css';

function HomePage() {
  return (
     <div className="home-page">
      <HeroSection/>

      <Welcome />

      <Enquiries />

      <FeaturedCars />

      <LatestBlog />

    </div>
  )
}

export default HomePage
