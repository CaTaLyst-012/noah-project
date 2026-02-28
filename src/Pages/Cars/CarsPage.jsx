import React from 'react'
import './carsPage.css';
import Cars from '../../Componenets/CarsComp/Cars.jsx';
import PageHero from '../../Componenets/PageHero/PageHero.jsx';

function CarsPage() {
  return (
    <div className="cars-pageContainer">
      <PageHero
        title="CAR LISTING GRID" />
      <Cars/>
    </div>
  );
}

export default CarsPage;