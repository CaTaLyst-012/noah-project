import React from 'react'
import './contactUsPage.css'
import Contact from '../../Componenets/ContactComp/Contact.jsx';
import PageHero from '../../Componenets/PageHero/PageHero.jsx';

function ContactUsPage() {
  return (
    <div className="cars-pageContainer">
      <PageHero
        title="CONTACT US PAGE"/>
      <Contact/>
    </div>
  );
}

export default ContactUsPage;