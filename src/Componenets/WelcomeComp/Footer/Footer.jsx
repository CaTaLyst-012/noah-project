import React, { useState } from "react";
import "./footer.css";

const Footer = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // simple validation (optional)
    if (!form.name || !form.email || !form.message) {
      alert("Please fill in all fields before sending.");
      return;
    }

    // later you can connect to backend / email service here
    alert("Message sent successfully!");

    // reset form
    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <footer className="footer">
      {/* Overlapping top bar with X logo */}
      <div className="footer-top-bar">
        <div className="footer-top-bar-inner">
          <span className="footer-top-bar-logo">X</span>
        </div>
      </div>

      {/* Main upper footer content */}
      <div className="footer-main">
        {/* About us */}
        <div className="footer-column">
          <h3 className="footer-heading">About Us</h3>
          <p className="footer-text">
            Automan connects buyers and trusted dealerships, making it easy to
            discover, compare and secure the best car deals across Nigeria in
            just a few clicks.
          </p>

          <div className="footer-divider" />

          <div className="footer-contact-block">
            <div className="footer-contact-item">
              <span className="footer-contact-icon">📍</span>
              <span className="footer-contact-text">
                12 Admiralty Way, Lekki Phase 1, Lagos
              </span>
            </div>
            <div className="footer-contact-item">
              <span className="footer-contact-icon">✉️</span>
              <a
                href="mailto:hello@automan.ng"
                className="footer-contact-text footer-contact-link"
              >
                hello@automan.ng
              </a>
            </div>
            <div className="footer-contact-item">
              <span className="footer-contact-icon">📞</span>
              <a
                href="tel:+2348012345678"
                className="footer-contact-text footer-contact-link"
              >
                +234 80 1234 5678
              </a>
            </div>
          </div>
        </div>

        {/* Featured deals */}
        <div className="footer-column footer-column-center">
          <h3 className="footer-heading">Featured Deals</h3>

          <div className="footer-deal-item">
            <span className="footer-deal-price">₦45,000,000</span>
            <div className="footer-deal-texts">
              <span className="footer-deal-title">Porsche 911 Carrera</span>
              <span className="footer-deal-subtext">
                2022 • Lagos • Full service history
              </span>
            </div>
          </div>

          <div className="footer-deal-item">
            <span className="footer-deal-price">₦38,500,000</span>
            <div className="footer-deal-texts">
              <span className="footer-deal-title">Mercedes-Benz GLC 300</span>
              <span className="footer-deal-subtext">
                2021 • Abuja • Low mileage
              </span>
            </div>
          </div>
        </div>

        {/* Get in touch form */}
        <div className="footer-column">
          <h3 className="footer-heading">Get In Touch</h3>

          <form className="footer-form" onSubmit={handleSubmit}>
            <div className="footer-form-field">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="footer-input"
              />
            </div>
            <div className="footer-form-field">
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your email"
                className="footer-input"
              />
            </div>
            <div className="footer-form-field">
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your message"
                className="footer-textarea"
                rows={3}
              />
            </div>

            <button type="submit" className="footer-submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p className="footer-bottom-text">
          Copyright 2026. All Rights Reserved by Automan.
        </p>
        <p className="footer-bottom-text">
          Designed by Catalyst&apos;s Technology.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
