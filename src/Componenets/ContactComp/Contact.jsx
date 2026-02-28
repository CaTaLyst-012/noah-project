import React from "react";
import "./contact.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Section 1: Full-screen map */}
      <section className="contact-map-section">
        <div className="contact-map-shell">
          <iframe
            title="Automan Head Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.1005513059686!2d3.377725973520756!3d6.508955093483353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8cf60dbaa80b%3A0x7f43bbbb33ab154e!2s6%20Birrel%20Ave%2C%20Yaba%2C%20Lagos%20101245%2C%20Lagos!5e0!3m2!1sen!2sng!4v1772275676527!5m2!1sen!2sng"
            className="contact-map-iframe"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* Section 2: Full-screen form + info */}
      <section className="contact-form-section">
        <div className="contact-form-wrapper">
          {/* Left: Form */}
          <div className="contact-form-left">
            <h2 className="contact-form-title">CONTACT FORM</h2>

            <form className="contact-form">
              {/* Name + Email row */}
              <div className="contact-row">
                <div className="contact-field">
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              {/* Phone + Subject row */}
              <div className="contact-row">
                <div className="contact-field">
                  <label htmlFor="phone">Phone</label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+234..."
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="subject">Subject</label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="Enquiry subject"
                  />
                </div>
              </div>

              {/* Comment full width */}
              <div className="contact-field contact-field-full">
                <label htmlFor="comment">Comment</label>
                <textarea
                  id="comment"
                  rows={5}
                  placeholder="Write your message..."
                />
              </div>

              {/* Submit button */}
              <button type="submit" className="contact-submit-btn">
                Submit
              </button>
            </form>
          </div>

          {/* Right: Info box */}
          <div className="contact-form-right">
            <div className="contact-info-box">
              {/* Address */}
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h3 className="contact-info-heading">ADDRESS</h3>
                  <p className="contact-info-text">
                    Automan Head Office<br />
                    6 Birrel Avenue, Sabo, Yaba<br />
                    Lagos, Nigeria
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <FaPhoneAlt />
                </div>
                <div>
                  <h3 className="contact-info-heading">PHONE</h3>
                  <p className="contact-info-text">
                    +2349020610057<br />
                    +2349160292747
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <FaEnvelope />
                </div>
                <div>
                  <h3 className="contact-info-heading">EMAIL</h3>
                  <p className="contact-info-text contact-info-email">
                    infoautoman@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
