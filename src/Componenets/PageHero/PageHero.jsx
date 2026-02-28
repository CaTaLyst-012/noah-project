import "./pageHero.css";
import heroBg from "../../assets/Images/car3.jpeg";

const PageHero = ({ title}) => {
  return (
    <section
      className="page-hero"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="page-hero-overlay">
        <div className="page-hero-inner">
          <h1 className="page-hero-title">{title}</h1>
        </div>
      </div>
    </section>
  );
};

export default PageHero;
