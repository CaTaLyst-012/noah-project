import React from 'react'
import './ComparePage.css'
import Compare from '../../Componenets/CompareComp/Compare.jsx';
import PageHero from '../../Componenets/PageHero/PageHero.jsx';

function ComparePage() {
  return (
    <div className="cars-pageContainer">
      <PageHero
        title="COMPARE PAGE"/>
      <Compare/>
    </div>
  );
}

export default ComparePage;