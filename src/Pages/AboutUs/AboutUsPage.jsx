import React from 'react'
import './aboutUsPage.css'
import AboutUs from '../../Componenets/AboutUsComp/AboutUs.jsx';
import PageHero from '../../Componenets/PageHero/PageHero.jsx';

function AboutUsPage() {
  return (
    <div className="cars-pageContainer">
      <PageHero
        title="ABOUT US PAGE"/>
      <AboutUs/>
    </div>
  );
}

export default AboutUsPage;