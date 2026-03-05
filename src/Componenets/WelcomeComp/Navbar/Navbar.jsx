import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import carIcon from "../../../assets/Images/carIcon2.png";
import contactIcon from "../../../assets/Images/contactIcon.png";
import "./navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleToggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  const closeMenu = () => setIsOpen(false);

  const getLinkClass = ({ isActive }) =>
    isActive ? "nav-link nav-link-active" : "nav-link";

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show when at top
      if (currentScrollY <= 0) {
        setShowNav(true);
        setLastScrollY(0);
        return;
      }

      // Detect scroll direction
      if (currentScrollY > lastScrollY + 5) {
        // scrolling down
        setShowNav(false);
      } else if (currentScrollY < lastScrollY - 5) {
        // scrolling up
        setShowNav(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    // run once on mount
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`navbar-wrapper ${showNav ? "" : "navbar-hidden"}`}
      id="navbar"
    >
      <nav className="navbar">
        <div className="navbar-left">
          <img src={carIcon} alt="Automan logo" className="navbar-logo" />
          <span className="navbar-brand">AUTOMAN</span>
        </div>

        <button
          className="navbar-toggle"
          onClick={handleToggleMenu}
          aria-label="Toggle menu"
        >
          <span className="navbar-toggle-line" />
          <span className="navbar-toggle-line" />
          <span className="navbar-toggle-line" />
        </button>

        <div className={`navbar-right ${isOpen ? "navbar-right-open" : ""}`}>
          <NavLink to="/" className={getLinkClass} onClick={closeMenu} end>
            HOME
          </NavLink>
          <NavLink
            to="/add-cars"
            className={getLinkClass}
            onClick={closeMenu}
          >
            ADD CAR
          </NavLink>
          <NavLink to="/cars" className={getLinkClass} onClick={closeMenu}>
            CARS
          </NavLink>
          <NavLink to="/compare" className={getLinkClass} onClick={closeMenu}>
            COMPARE
          </NavLink>
          <NavLink to="/blog" className={getLinkClass} onClick={closeMenu}>
            BLOG
          </NavLink>
          <NavLink to="/about-us" className={getLinkClass} onClick={closeMenu}>
            ABOUT US
          </NavLink>
          <NavLink
            to="/contact-us"
            className={getLinkClass}
            onClick={closeMenu}
          >
            CONTACT US
          </NavLink>

          <button className="navbar-contact-icon" type="button">
            <img src={contactIcon} alt="Contact" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
