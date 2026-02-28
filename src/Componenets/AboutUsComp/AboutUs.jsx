import React from "react";
import "./aboutUs.css";

// import your car image for section 1
import AboutCarImage from "../../assets/Images/car16.jpeg";

// import your enquiries section from homepage
import EnquiriesSection from "../WelcomeComp/Enquiries/Enquiries.jsx";

// team images
import Team1 from "../../assets/Images/profileImg.jpeg";
import Team2 from "../../assets/Images/profileImg.jpeg";
import Team3 from "../../assets/Images/profileImg.jpeg";
import Team4 from "../../assets/Images/profileImg.jpeg";

const teamMembers = [
  {
    id: 1,
    name: "Noah Catalyst",
    role: "Founder & CEO",
    photo: Team1,
  },
  {
    id: 2,
    name: "Lasisi Praise",
    role: "Head of Operations",
    photo: Team2,
  },
  {
    id: 3,
    name: "Lasisi Noah",
    role: "Lead Product Designer",
    photo: Team3,
  },
  {
    id: 4,
    name: "Praise Catalyst",
    role: "Customer Experience Lead",
    photo: Team4,
  },
];

const About = () => {
  const scrollTrack = (direction) => {
    const track = document.querySelector(".team-track");
    if (!track) return;
    const amount = direction === "left" ? -260 : 260;
    track.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <main className="about-page">
      {/* SECTION 1: WHAT ARE WE */}
      <section className="about-hero">
        <div className="about-hero-inner">
          <div className="about-hero-image">
            <img src={AboutCarImage} alt="AUT0MAN car" />
          </div>

          <div className="about-hero-text">
            <h2 className="about-section-label">WHAT ARE WE</h2>
            <p>
              AUTOMAN is a Lagos-based car marketplace built to make buying, selling,
              and swapping cars simple, transparent, and stress free. Whether you are
              upgrading to your dream performance car or just looking for a reliable
              daily driver, we give you a clear view of what’s really on the market.
            </p>
            <p>
              We connect serious buyers with verified sellers, combine local market
              knowledge with digital tools, and remove the usual guesswork from car
              deals. From curated listings and honest descriptions to smooth enquiries
              and support, AUT0MAN is built to help you move with confidence.
            </p>

          </div>
        </div>
      </section>

      {/* SECTION 2: TEAM CAROUSEL */}
      <section className="about-team">
        <div className="about-team-inner">
          <div className="team-carousel">
            <button
              className="team-arrow left"
              type="button"
              onClick={() => scrollTrack("left")}
            >
              {"<"}
            </button>

            <div className="team-track">
              {teamMembers.map((member) => (
                <div key={member.id} className="team-card">
                  <div className="team-image-wrapper">
                    <img src={member.photo} alt={member.name} />
                    <div className="team-overlay">
                      <h3>{member.name}</h3>
                      <p>{member.role}</p>
                      <div className="team-socials">
                        <span className="social-icon">G</span>
                        <span className="social-icon">t</span>
                        <span className="social-icon">f</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              className="team-arrow right"
              type="button"
              onClick={() => scrollTrack("right")}
            >
              {">"}
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 3: ENQUIRIES (reuse from homepage) */}
      <section className="about-enquiries">
        <EnquiriesSection />
      </section>
    </main>
  );
};

export default About;
