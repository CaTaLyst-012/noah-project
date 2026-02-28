import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Componenets/WelcomeComp/Navbar/Navbar.jsx';
import Footer from './Componenets/WelcomeComp/Footer/Footer.jsx';
import Home from './Pages/Home/HomePage.jsx';
import AddCars from './Pages/AddCars/AddCarsPage.jsx';
import Cars from './Pages/Cars/CarsPage.jsx';
import Compare from './Pages/Compare/ComparePage';
import Blog from './Pages/Blog/BlogPage.jsx';
import AboutUs from './Pages/AboutUs/AboutUsPage.jsx';
import ContactUs from './Pages/ContactUs/ContactUsPage.jsx';


function App() {
  
  return (
    <Router>
      <div className="app-shell">
        <Navbar />

        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cars" element={<Cars />} />
            <Route path="/add-cars" element={<AddCars />} />
            <Route path="/compare" element={<Compare />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  )
}

export default App
