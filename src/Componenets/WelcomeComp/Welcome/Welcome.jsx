import "./welcome.css";
import welcomeCar from "../../../assets/Images/car24.png";

const Welcome = () => {
  return (
    <section className="welcome-section">
      <div className="welcome-inner">
        <div className="welcome-text">
          <h2 className="welcome-title">
            Welcome to Automan{" "}
            <span className="welcome-title-middle">Car Dealership</span>
          </h2>
          <p className="welcome-description">
            Automan is your trusted automobile marketplace for Nigeria, making it
            easy to discover, compare, and secure the right car for your lifestyle
            and budget. From premium sedans to rugged SUVs, we connect you with
            verified dealers and sellers so you can shop with confidence and peace
            of mind.
          </p>
        </div>

        <div className="welcome-image-wrapper">
          <img
            src={welcomeCar}
            alt="Automan car showcase"
            className="welcome-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Welcome;
