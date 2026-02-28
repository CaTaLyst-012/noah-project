// src/Componenets/CompareComp/Compare.jsx
import React, { useEffect, useRef, useState } from "react";
import "./compare.css";
import { FaCarSide, FaPlus } from "react-icons/fa";
import { featuredCars } from "../WelcomeComp/FeaturedCars/FeaturedCars.jsx";

const Compare = () => {
  // use first few featured cars to build compare pairs
  const comparePairs = [
    [featuredCars[0], featuredCars[1]],
    [featuredCars[2], featuredCars[5]],
    [featuredCars[4], featuredCars[3]],
  ].filter(pair => pair[0] && pair[1]);

  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  // auto-scroll every 4 seconds, but keep manual scroll possible
  useEffect(() => {
    if (!carouselRef.current || comparePairs.length <= 1) return;

    const container = carouselRef.current;

    const intervalId = setInterval(() => {
      setActiveIndex(prevIndex => {
        const nextIndex = (prevIndex + 1) % comparePairs.length;
        const cardWidth = container.clientWidth; // each slide = container width
        container.scrollTo({
          left: cardWidth * nextIndex,
          behavior: "smooth",
        });
        return nextIndex;
      });
    }, 4000);

    return () => clearInterval(intervalId);
  }, [comparePairs.length]);

  return (
    <div className="compare-page">
      {/* Section 1: full-height, white background */}
      <section className="compare-top-section">
        <div className="compare-top-inner">
          <h2 className="compare-heading">COMPARE CARS</h2>

          <div className="compare-card-grid">
            {/* Card 1 */}
            <div className="compare-card compare-card-select">
              <div className="compare-card-icon compare-card-icon-big">
                <FaCarSide />
              </div>
              <div className="compare-select-group">
                <select className="compare-select">
                  <option value="">Select car</option>
                  <option value="car-1">Car 1</option>
                  <option value="car-2">Car 2</option>
                </select>
                <select className="compare-select">
                  <option value="">Select brand</option>
                  <option value="toyota">Toyota</option>
                  <option value="honda">Honda</option>
                  <option value="mercedes">Mercedes</option>
                </select>
                <select className="compare-select">
                  <option value="">Select variants</option>
                  <option value="base">Base</option>
                  <option value="sport">Sport</option>
                  <option value="luxury">Luxury</option>
                </select>
              </div>
            </div>

            {/* Card 2 */}
            <div className="compare-card compare-card-select">
              <div className="compare-card-icon compare-card-icon-big">
                <FaCarSide />
              </div>
              <div className="compare-select-group">
                <select className="compare-select">
                  <option value="">Select car</option>
                  <option value="car-1">Car 1</option>
                  <option value="car-2">Car 2</option>
                </select>
                <select className="compare-select">
                  <option value="">Select brand</option>
                  <option value="toyota">Toyota</option>
                  <option value="honda">Honda</option>
                  <option value="mercedes">Mercedes</option>
                </select>
                <select className="compare-select">
                  <option value="">Select variants</option>
                  <option value="base">Base</option>
                  <option value="sport">Sport</option>
                  <option value="luxury">Luxury</option>
                </select>
              </div>
            </div>

            {/* Card 3 */}
            <div className="compare-card compare-card-add">
              <div className="compare-card-icon compare-card-icon-big">
                <FaPlus />
              </div>
              <h3 className="compare-add-title">Add 3rd car</h3>
            </div>

            {/* Card 4 */}
            <div className="compare-card compare-card-add">
              <div className="compare-card-icon compare-card-icon-big">
                <FaPlus />
              </div>
              <h3 className="compare-add-title">Add 4th car</h3>
            </div>
          </div>

          <div className="compare-top-button-row">
            <button type="button" className="compare-main-btn">
              COMPARE CARS
            </button>
          </div>
        </div>
      </section>

      {/* Section 2: full-height, light grey, auto-scroll + manual scroll */}
      <section className="compare-carousel-section">
        <div className="compare-carousel-inner" ref={carouselRef}>
          {comparePairs.map((pair, index) => (
            <div className="compare-pair-card" key={index}>
              <div className="compare-pair-images-row">
                <div className="compare-car-image-wrap">
                  <img
                    src={pair[0].image}
                    alt={pair[0].name}
                    className="compare-car-image"
                  />
                </div>

                <div className="compare-vs-overlay">VS</div>

                <div className="compare-car-image-wrap">
                  <img
                    src={pair[1].image}
                    alt={pair[1].name}
                    className="compare-car-image"
                  />
                </div>
              </div>

              
                <div className="compare-car-info-row">
                  <div className="compare-car-info">
                    <p className="compare-car-name">{pair[0].name}</p>
                    <p className="compare-car-price">{pair[0].price}</p>
                  </div>

                  <div className="compare-car-info">
                    <p className="compare-car-name">{pair[1].name}</p>
                    <p className="compare-car-price">{pair[1].price}</p>
                  </div>
                </div>


              <button type="button" className="compare-carousel-btn">
                COMPARE CARS
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Compare;
