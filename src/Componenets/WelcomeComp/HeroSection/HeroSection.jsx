// src/Componenets/WelcomeComp/HeroSection/Hero.jsx
import { useEffect, useState } from "react";
import "./heroSection.css";
import heroBg1 from "../../../assets/Images/car3.jpeg";
import heroBg2 from "../../../assets/Images/car15.jpeg";

const slides = [
  {
    id: 1,
    background: heroBg1,
    badge: "TOP CARS",
    title: "MERCEDES S CLASS",
    priceNGN: 120000000,
    description:
      "Experience unmatched comfort and performance in the latest Mercedes S-Class, available now in Nigeria.",
    buttonText: "Know more",
    buttonVariant: "light",
    showPrice: true,
  },
  {
    id: 2,
    background: heroBg2,
    badge: "NEW ARRIVALS",
    title: "FIND YOUR NEXT RIDE",
    description:
      "Browse premium sedans, SUVs, and more from trusted dealers across Nigeria.",
    buttonText: "Know more",
    buttonVariant: "primary",
    showPrice: false,
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);
  const [activeTab, setActiveTab] = useState("search"); // "search" | "sell"

  const [searchForm, setSearchForm] = useState({
    brand: "",
    model: "",
    year: "",
    price: 5000000,
  });

  const [sellForm, setSellForm] = useState({
    brand: "",
    model: "",
    year: "",
    price: "",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false);

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
        setFadeIn(true);
      }, 500);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const slide = slides[currentIndex];

  const goToNext = () => {
    setFadeIn(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
      setFadeIn(true);
    }, 200);
  };

  const goToPrev = () => {
    setFadeIn(false);
    setTimeout(() => {
      setCurrentIndex((prev) =>
        prev === 0 ? slides.length - 1 : prev - 1
      );
      setFadeIn(true);
    }, 200);
  };

  const handleSearchChange = (e) => {
    const { name, value } = e.target;
    setSearchForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSellChange = (e) => {
    const { name, value } = e.target;
    setSellForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Search cars:", searchForm);
  };

  const handleSellSubmit = (e) => {
    e.preventDefault();
    console.log("Sell car:", sellForm);
  };

  return (
    <section className="hero-section">
      {/* full-screen background */}
      <div
        className={`hero-bg ${
          fadeIn ? "hero-bg--fade-in" : "hero-bg--fade-out"
        }`}
        style={{ backgroundImage: `url(${slide.background})` }}
      />
      <div className="hero-overlay" />

      {/* main content (blue card), moved lower via CSS */}
      <div className="hero-inner hero-inner-lower">
        <div className="hero-card">
          <div className="hero-card-header">
            <span className="hero-badge">{slide.badge}</span>
            {slide.showPrice && (
              <span className="hero-price">
                ₦{slide.priceNGN.toLocaleString()}
              </span>
            )}
          </div>

          <h1 className="hero-title">{slide.title}</h1>
          <p className="hero-description">{slide.description}</p>

          <button
            type="button"
            className={`hero-button ${
              slide.buttonVariant === "primary"
                ? "hero-button-primary"
                : "hero-button-light"
            }`}
          >
            {slide.buttonText}
          </button>
        </div>
      </div>

      {/* hero navigation arrows */}
      <button
        type="button"
        className="hero-arrow hero-arrow-left"
        onClick={goToPrev}
        aria-label="Previous slide"
      >
        ‹
      </button>
      <button
        type="button"
        className="hero-arrow hero-arrow-right"
        onClick={goToNext}
        aria-label="Next slide"
      >
        ›
      </button>

      {/* bottom form bar, sitting on hero background */}
      <div className="hero-form-bar">
        <div className="hero-form-inner">
          {/* tabs */}
          <div className="hero-form-tabs">
            <button
              type="button"
              className={`hero-form-tab ${
                activeTab === "search" ? "hero-form-tab-active" : ""
              }`}
              onClick={() => setActiveTab("search")}
            >
              Search cars
            </button>
            <button
              type="button"
              className={`hero-form-tab ${
                activeTab === "sell" ? "hero-form-tab-active" : ""
              }`}
              onClick={() => setActiveTab("sell")}
            >
              Sell car
            </button>
          </div>

          {/* forms */}
          {activeTab === "search" ? (
            <form
              className="hero-form hero-form-search"
              onSubmit={handleSearchSubmit}
            >
              <div className="hero-form-field">
                <select
                  id="search-brand"
                  name="brand"
                  value={searchForm.brand}
                  onChange={handleSearchChange}
                >
                  <option value="">Select brand</option>
                  <option value="Toyota">Toyota</option>
                  <option value="Honda">Honda</option>
                  <option value="Mercedes">Mercedes</option>
                  <option value="BMW">BMW</option>
                </select>
              </div>

              <div className="hero-form-field">
                <input
                  id="search-model"
                  name="model"
                  value={searchForm.model}
                  onChange={handleSearchChange}
                  placeholder="Select model"
                />
              </div>

              <div className="hero-form-field">
                <select
                  id="search-year"
                  name="year"
                  value={searchForm.year}
                  onChange={handleSearchChange}
                >
                  <option value="">Year of model</option>
                  <option value="2024">2024</option>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                  <option value="2020">2020</option>
                </select>
              </div>

              <div className="hero-form-field hero-form-range">
                <label htmlFor="search-price">
                  Price up to: ₦{searchForm.price.toLocaleString()}
                </label>
                <input
                  id="search-price"
                  type="range"
                  min="500000"
                  max="100000000"
                  step="500000"
                  name="price"
                  value={searchForm.price}
                  onChange={handleSearchChange}
                />
              </div>

              <button type="submit" className="hero-form-submit">
                Search
              </button>
            </form>
          ) : (
            <form
              className="hero-form hero-form-sell"
              onSubmit={handleSellSubmit}
            >
              <div className="hero-form-field">
                <label htmlFor="sell-brand">Brand</label>
                <input
                  id="sell-brand"
                  name="brand"
                  value={sellForm.brand}
                  onChange={handleSellChange}
                  placeholder="Enter brand"
                />
              </div>

              <div className="hero-form-field">
                <label htmlFor="sell-model">Model</label>
                <input
                  id="sell-model"
                  name="model"
                  value={sellForm.model}
                  onChange={handleSellChange}
                  placeholder="Enter model"
                />
              </div>

              <div className="hero-form-field">
                <label htmlFor="sell-year">Year</label>
                <input
                  id="sell-year"
                  name="year"
                  value={sellForm.year}
                  onChange={handleSellChange}
                  placeholder="Year"
                />
              </div>

              <div className="hero-form-field">
                <label htmlFor="sell-price">Price (₦)</label>
                <input
                  id="sell-price"
                  name="price"
                  value={sellForm.price}
                  onChange={handleSellChange}
                  placeholder="e.g. 8500000"
                />
              </div>

              <button type="submit" className="hero-form-submit">
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
