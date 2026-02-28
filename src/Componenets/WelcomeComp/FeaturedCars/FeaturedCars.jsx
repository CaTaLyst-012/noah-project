// src/components/Home/FeaturedCars/FeaturedCars.jsx
import React, { useRef, useEffect } from "react";
import "./featuredCars.css";
import { FaCarSide, FaGasPump } from "react-icons/fa";
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import Car3 from "../../../assets/Images/car3.jpeg";
import car7 from "../../../assets/Images/car7.jpeg";
import Car8 from "../../../assets/Images/car8.jpeg";
import Car4 from "../../../assets/Images/car4.jpeg";
import Car9 from "../../../assets/Images/car9.jpeg";
import Car10 from "../../../assets/Images/car10.jpeg";
import Car15 from "../../../assets/Images/car15.jpeg";
import Car16 from "../../../assets/Images/car16.jpeg";
import Car17 from "../../../assets/Images/car17.jpeg";

export const featuredCars = [
  {
    id: 1,
    name: "Mercedes-AMG GLE 63S",
    price: "₦120,000,000",
    speed: "250km/h",
    description: "Clean title, low mileage, perfect for city and highway.",
    status: "sale",
    image: Car3,
    seats: 5,
    fuel: "Petrol",
    type: "Sport",
  },
  {
    id: 2,
    name: "BMW M4",
    price: "₦320,000,000",
    speed: "400km/h",
    description: "Premium interior, smooth ride, fully loaded options.",
    status: "rent",
    image: car7,
    seats: 5,
    fuel: "Petrol",
    type: "Sport",
  },
  {
    id: 3,
    name: "BMW M8",
    price: "₦290,800,000",
    speed: "430km/h",
    description: "A highly modified variant of the BMW 8 Series, built for speed.",
    status: "sale",
    image: Car8,
    seats: 5,
    fuel: "Petrol",
    type: "Sport",
  },
  {
    id: 4,
    name: "BMW M4",
    price: "₦235,500,000",
    speed: "400km/h",
    description: "High performance coupe and convertible that balances daily luxry with track-ready power.",
    status: "rent",
    image: Car4,
    seats: 5,
    fuel: "Petrol",
    type: "Sport",
  },
  {
    id: 5,
    name: "Porsche 911 GT3 RS",
    price: "₦190,500,000",
    speed: "350km/h",
    description: "Highly track-focused model featuring aggressive aerodynamics.",
    status: "sale",
    image: Car9,
    seats: 5,
    fuel: "Petrol",
    type: "Sport",
  },
  {
    id: 6,
    name: "Porsche 911 GT3 RS",
    price: "₦200,500,000",
    speed: "350km/h",
    description: "Highly track-focused model featuring aggressive aerodynamics.",
    status: "rent",
    image: Car10,
    seats: 5,
    fuel: "Petrol",
    type: "Sport",
  },
  {
    id: 7,
    name: "Tesla Roadster",
    price: "₦500,500,000",
    speed: "500km/h",
    description: "A sleek, two-seaters sports car.",
    status: "sale",
    image: Car15,
    seats: 2,
    fuel: "Petrol",
    type: "Sport",
  },
  {
    id: 8,
    name: "Land Rover Range Rover Evoque",
    price: "₦278,500,000",
    speed: "230km/h",
    description: "Luxury SUV with powerful performance and comfort.",
    status: "rent",
    image: Car16,
    seats: 5,
    fuel: "Petrol",
    type: "Sport",
  },
  {
    id: 9,
    name: "Lamborghini Urus",
    price: "₦700,500,000",
    speed: "450km/h",
    description: "Luxury SUV with powerful performance and comfort.",
    status: "sale",
    image: Car17,
    seats: 5,
    fuel: "Petrol",
    type: "Sport",
  },
  

];

const FeaturedCars = () => {
  const carouselRef = useRef(null);

  // Auto-scroll effect
  useEffect(() => {
    const container = carouselRef.current;
    if (!container) return;

    const autoScroll = () => {
      const maxScrollLeft = container.scrollWidth - container.clientWidth;

      if (container.scrollLeft >= maxScrollLeft - 5) {
        // reset back to start for infinite feel
        container.scrollTo({ left: 0, behavior: "instant" });
      } else {
        // scroll by roughly one card
        container.scrollBy({ left: 280, behavior: "smooth" });
      }
    };

    const intervalId = setInterval(autoScroll, 3000); // every 3s

    return () => clearInterval(intervalId);
  }, []);

  const scrollByAmount = (direction) => {
    const container = carouselRef.current;
    if (!container) return;
    const cardWidth = container.firstChild
      ? container.firstChild.getBoundingClientRect().width
      : 300;

    const amount = direction === "left" ? -cardWidth : cardWidth;
    container.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section className="featured-section">
      <div className="featured-header">
        <h2 className="featured-title">Featured Cars</h2>
        <div className="featured-title-underline" />
        <p className="featured-subtext">Best car deals</p>
      </div>

      <div className="featured-carousel-wrapper">
        <button
          type="button"
          className="featured-arrow featured-arrow-left"
          onClick={() => scrollByAmount("left")}
          aria-label="Scroll left"
        >
          ‹
        </button>

        <div className="featured-carousel" ref={carouselRef}>
          {featuredCars.concat(featuredCars).map((car, index) => (
            <article className="car-card" key={`${car.id}-${index}`}>
              <div className="car-card-image-wrapper">
                <img
                  src={car.image}
                  alt={car.name}
                  className="car-card-image"
                />
                <span
                  className={`car-card-badge ${
                    car.status === "sale"
                      ? "car-card-badge-sale"
                      : "car-card-badge-rent"
                  }`}
                >
                  {car.status === "sale" ? "For Sale" : "For Rent"}
                </span>
              </div>

              <div className="car-card-body">
                <div className="car-card-header">
                  <h3 className="car-card-name">{car.name}</h3>
                  <div className="car-card-name-underline" />
                  <p className="car-card-price">{car.price}</p>
                </div>

                <p className="car-card-speed">Top speed: {car.speed}</p>
                <p className="car-card-description">{car.description}</p>
              </div>

              <div className="car-card-footer">
                <div className="car-card-meta">
                  <MdAirlineSeatReclineNormal className="car-card-icon" />
                  <span>{car.seats} Seats</span>
                </div>
                <div className="car-card-meta">
                  <FaGasPump className="car-card-icon" />
                  <span>{car.fuel}</span>
                </div>
                <div className="car-card-meta">
                  <FaCarSide className="car-card-icon" />
                  <span>{car.type}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <button
          type="button"
          className="featured-arrow featured-arrow-right"
          onClick={() => scrollByAmount("right")}
          aria-label="Scroll right"
        >
          ›
        </button>
      </div>

      <div className="featured-sell-card">
        <div className="featured-sell-image-wrapper">
          <img
            src={Car16}
            alt="Sell your car"
            className="featured-sell-image"
          />
        </div>
        <div className="featured-sell-content">
          <div className="featured-sell-text">
            <h3>Sell Your Car</h3>
            <p>
              List your vehicle on AUT0MAN and reach thousands of ready buyers
              in minutes.
            </p>
          </div>
          <button type="button" className="featured-sell-button">
            SUBMIT CAR
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars;
