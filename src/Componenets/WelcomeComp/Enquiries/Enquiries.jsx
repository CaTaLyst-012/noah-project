import "./enquiries.css";
import { FaCarSide, FaKey, FaRegRegistered } from "react-icons/fa";

export const Enquiries = () => {
  return (
    <section className="enquiries-section">
      <div className="enquiries-inner">
        <header className="enquiries-header">
          <h2 className="enquiries-title">What are you looking for?</h2>

          <div className="enquiries-subtitle-wrap">
            <h3 className="enquiries-subtitle">Best Car Deals</h3>
            <span className="enquiries-subtitle-line" />
          </div>
        </header>

        <div className="enquiries-grid">
          {/* Car Sale */}
          <div className="enquiry-card">
            <div className="enquiry-icon-wrap enquiry-icon-sale">
              <FaCarSide className="enquiry-icon-car" />
              <span className="enquiry-icon-badge enquiry-icon-badge-text">
                ₦
              </span>
            </div>
            <h4 className="enquiry-title">Car Sale</h4>
            <p className="enquiry-text">
              Explore a wide range of verified cars at competitive prices, with
              clear histories and flexible payment options tailored to your budget.
            </p>
          </div>

          {/* Car Buy */}
          <div className="enquiry-card">
            <div className="enquiry-icon-wrap enquiry-icon-buy">
              <FaCarSide className="enquiry-icon-car" />
              <span className="enquiry-icon-badge">
                <FaKey />
              </span>
            </div>
            <h4 className="enquiry-title">Car Buy</h4>
            <p className="enquiry-text">
              Tell us the kind of car you want and we help you find the right fit,
              negotiate great deals, and handle the process from start to finish.
            </p>
          </div>

          {/* Car Rent */}
          <div className="enquiry-card enquiry-card-last">
            <div className="enquiry-icon-wrap enquiry-icon-rent">
              <FaCarSide className="enquiry-icon-car" />
              <span className="enquiry-icon-badge">
                <FaRegRegistered />
              </span>
            </div>
            <h4 className="enquiry-title">Car Rent</h4>
            <p className="enquiry-text">
              Need a car for days, weeks, or months? Access reliable rental cars
              for business trips, events, and everyday movement across the city.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Enquiries;
