import React from 'react'
import './addcarsPage.css'
import AddCar from '../../Componenets/AddCarComp/AddCar.jsx';
import PageHero from '../../Componenets/PageHero/PageHero.jsx';

function AddCarsPage() {
  return (
    <div className="cars-pageContainer">
      <PageHero
        title="SUBMIT YOUR CAR"/>
      <AddCar />
    </div>
  );
}

export default AddCarsPage;