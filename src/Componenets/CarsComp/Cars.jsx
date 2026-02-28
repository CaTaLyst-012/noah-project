// src/Componenets/CarsComp/Cars.jsx
import React, { useMemo, useState } from "react";
import "./cars.css";
import { featuredCars as rawFeaturedCars } from "../WelcomeComp/FeaturedCars/FeaturedCars.jsx";
import { FaThLarge, FaListUl } from "react-icons/fa";
import Car16 from "../../assets/Images/car16.jpeg";

const WHATSAPP_NUMBER = "2349020610057";

// extend imported featuredCars with extra fields only for this page
const carsData = rawFeaturedCars.map((car) => {
  switch (car.id) {
    case 1:
      return {
        ...car,
        mileage: 18000,
        year: 2021,
        model: "GLE 63S",
        brand: "Mercedes",
        gear: "Automatic",
        engineSize: "4.0L",
        firstRegistration: 2021,
        color: "Black",
      };
    case 2:
      return {
        ...car,
        mileage: 12000,
        year: 2022,
        model: "M4",
        brand: "BMW",
        gear: "Automatic",
        engineSize: "3.0L",
        firstRegistration: 2022,
        color: "Blue",
      };
    case 3:
      return {
        ...car,
        mileage: 8000,
        year: 2022,
        model: "M8",
        brand: "BMW",
        gear: "Automatic",
        engineSize: "4.4L",
        firstRegistration: 2022,
        color: "Black",
      };
    case 4:
      return {
        ...car,
        mileage: 15000,
        year: 2021,
        model: "M4",
        brand: "BMW",
        gear: "Automatic",
        engineSize: "3.0L",
        firstRegistration: 2021,
        color: "White",
      };
    case 5:
      return {
        ...car,
        mileage: 9000,
        year: 2020,
        model: "911 GT3 RS",
        brand: "Porsche",
        gear: "Automatic",
        engineSize: "4.0L",
        firstRegistration: 2020,
        color: "Yellow",
      };
    case 6:
      return {
        ...car,
        mileage: 11000,
        year: 2021,
        model: "911 GT3 RS",
        brand: "Porsche",
        gear: "Automatic",
        engineSize: "4.0L",
        firstRegistration: 2021,
        color: "Red",
      };
    case 7:
      return {
        ...car,
        mileage: 5000,
        year: 2023,
        model: "Roadster",
        brand: "Tesla",
        gear: "Automatic",
        engineSize: "Electric",
        firstRegistration: 2023,
        color: "Red",
      };
    case 8:
      return {
        ...car,
        mileage: 20000,
        year: 2020,
        model: "Range Rover Evoque",
        brand: "Land Rover",
        gear: "Automatic",
        engineSize: "2.0L",
        firstRegistration: 2020,
        color: "Silver",
      };
    case 9:
      return {
        ...car,
        mileage: 7000,
        year: 2022,
        model: "Urus",
        brand: "Lamborghini",
        gear: "Automatic",
        engineSize: "4.0L",
        firstRegistration: 2022,
        color: "Yellow",
      };
    default:
      return { ...car };
  }
});

// dropdown options
const brandOptions = Array.from(
  new Set(carsData.map((car) => car.brand).filter(Boolean))
);
const modelOptions = Array.from(
  new Set(carsData.map((car) => car.model).filter(Boolean))
);

const Cars = () => {
  const [viewMode, setViewMode] = useState("grid"); // "grid" | "list"
  const [sortBy, setSortBy] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCarId, setSelectedCarId] = useState(null);
  const carsPerPage = 9;

  // sidebar filter state
  const [filters, setFilters] = useState({
    brand: "",
    model: "",
    firstRegistration: "",
    priceMax: "",
    fuel: "",
    gear: "",
    engineSize: "",
    kmMax: "",
    carType: "",
    carColor: "",
  });

  // helper: convert "₦120,000,000" to 120000000
  const parsePrice = (priceString) => {
    if (!priceString) return 0;
    const cleaned = priceString.replace(/[₦,]/g, "");
    return Number(cleaned) || 0;
  };

  // WhatsApp link with prefilled message
  const getWhatsAppLink = (car) => {
    const text = `Hello, I'm interested in the ${car.name} (${car.status === "rent" ? "for rent" : "for sale"}) listed on your site.`;
    const encoded = encodeURIComponent(text);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
  };

  const handleCardClick = (id) => {
    setSelectedCarId((prev) => (prev === id ? null : id));
  };

  const handleFilterChange = (field, value) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
    setCurrentPage(1);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  // apply filters
  const filteredCars = useMemo(() => {
    return carsData.filter((car) => {
      if (filters.brand && car.brand !== filters.brand) {
        return false;
      }
      if (filters.model && car.model !== filters.model) {
        return false;
      }
      if (filters.firstRegistration && car.firstRegistration) {
        if (car.firstRegistration < Number(filters.firstRegistration)) return false;
      }

      const price = parsePrice(car.price);
      if (filters.priceMax && price > Number(filters.priceMax)) return false;

      if (filters.fuel && car.fuel !== filters.fuel) return false;
      if (filters.gear && car.gear !== filters.gear) return false;
      if (filters.engineSize && car.engineSize !== filters.engineSize) return false;

      if (filters.kmMax && car.mileage > Number(filters.kmMax)) return false;

      if (filters.carType && car.type !== filters.carType) return false;
      if (filters.carColor && car.color?.toLowerCase() !== filters.carColor.toLowerCase())
        return false;

      return true;
    });
  }, [filters]);

  // sort
  const sortedCars = useMemo(() => {
    const arr = [...filteredCars];
    if (sortBy === "priceLowHigh") {
      arr.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
    } else if (sortBy === "priceHighLow") {
      arr.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
    } else if (sortBy === "newest") {
      arr.sort((a, b) => (b.year || 0) - (a.year || 0));
    } else if (sortBy === "oldest") {
      arr.sort((a, b) => (a.year || 0) - (b.year || 0));
    }
    return arr;
  }, [filteredCars, sortBy]);

  // pagination
  const totalPages = Math.ceil(sortedCars.length / carsPerPage) || 1;
  const startIndex = (currentPage - 1) * carsPerPage;
  const currentCars = sortedCars.slice(startIndex, startIndex + carsPerPage);

  const resultsLabel = `${filteredCars.length} results found for exotic cars`;

  return (
    <div className="cars-page">
      {/* Left: results + grid/list */}
      <div className="cars-main">
        {/* top header row */}
        <div className="cars-header-row">
          <p className="cars-results-text">{resultsLabel}</p>
          <div className="cars-header-controls">
            <div className="cars-sort">
              <span>Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => {
                  setSortBy(e.target.value);
                  setCurrentPage(1);
                }}
              >
                <option value="default">Default</option>
                <option value="priceLowHigh">Price: Low to High</option>
                <option value="priceHighLow">Price: High to Low</option>
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
              </select>
            </div>
            <div className="cars-view-toggle">
              <button
                type="button"
                className={`view-toggle-btn ${viewMode === "grid" ? "active" : ""}`}
                onClick={() => setViewMode("grid")}
                aria-label="Grid view"
              >
                <FaThLarge />
              </button>
              <button
                type="button"
                className={`view-toggle-btn ${viewMode === "list" ? "active" : ""}`}
                onClick={() => setViewMode("list")}
                aria-label="List view"
              >
                <FaListUl />
              </button>
            </div>
          </div>
        </div>

        {/* cars grid/list */}
        <div className={viewMode === "grid" ? "cars-grid" : "cars-list"}>
          {currentCars.map((car) => {
            const isExpanded = selectedCarId === car.id;

            return (
              <article
                key={car.id}
                className={
                  viewMode === "grid" ? "car-card car-card-grid" : "car-card car-card-list"
                }
                onClick={() => handleCardClick(car.id)}
              >
                <div className="car-card-image-wrapper">
                  <img src={car.image} alt={car.name} className="car-card-image" />
                  <span
                    className={`car-card-badge ${
                      car.status === "sale" ? "car-card-badge-sale" : "car-card-badge-rent"
                    }`}
                  >
                    {car.status === "sale" ? "For Sale" : "For Rent"}
                  </span>
                </div>

                <div className="car-card-body">
                  <div className="car-card-header">
                    <h3 className="car-card-name">{car.name}</h3>
                    <div className="car-card-name-underline" />
                  </div>

                  <p className="car-card-description">{car.description}</p>

                  {/* price badge bar always visible */}
                  <div
                    className={
                      car.status === "sale"
                        ? "car-price-bar car-price-bar-sale"
                        : "car-price-bar car-price-bar-rent"
                    }
                  >
                    <span className="car-price-text">{car.price}</span>
                    <span className="car-price-status">
                      {car.status === "sale" ? "For sale" : "For rental"}
                    </span>
                  </div>

                  {/* extra details only when expanded */}
                  {isExpanded && (
                    <>
                      <div className="car-details-row">
                        <span>Year: {car.year}</span>
                        <span>Model: {car.model}</span>
                        <span>
                          Mileage:{" "}
                          {car.mileage ? car.mileage.toLocaleString() : "N/A"} km
                        </span>
                      </div>
                      <div className="car-details-row">
                        <span>Fuel: {car.fuel}</span>
                        <span>Gear: {car.gear}</span>
                        <span>Engine: {car.engineSize}</span>
                      </div>

                      <div className="car-actions-row">
                        <a
                          href={getWhatsAppLink(car)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="car-whatsapp-btn"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {car.status === "rent" ? "Rent Now" : "Buy Now"}
                        </a>
                      </div>
                    </>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        {/* pagination */}
        <div className="cars-pagination">
          <button
            type="button"
            className="page-arrow"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>

          <div className="page-numbers">
            {Array.from({ length: totalPages }).map((_, index) => {
              const page = index + 1;
              return (
                <button
                  key={page}
                  type="button"
                  className={`page-number-btn ${
                    page === currentPage ? "page-number-active" : ""
                  }`}
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </button>
              );
            })}
          </div>

          <button
            type="button"
            className="page-arrow"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>

      {/* Right sidebar */}
      <aside className="cars-sidebar">
        {/* refine form (entity 1) */}
        <div className="refine-search-card">
          <h3>Refine Your Search</h3>
          <form onSubmit={handleSearchSubmit} className="refine-form">
            <div className="form-group">
              <label>Brand</label>
              <select
                value={filters.brand}
                onChange={(e) => handleFilterChange("brand", e.target.value)}
              >
                <option value="">Any</option>
                {brandOptions.map((brand) => (
                  <option key={brand} value={brand}>
                    {brand}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Model</label>
              <select
                value={filters.model}
                onChange={(e) => handleFilterChange("model", e.target.value)}
              >
                <option value="">Any</option>
                {modelOptions.map((model) => (
                  <option key={model} value={model}>
                    {model}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>1st registration</label>
              <input
                type="number"
                value={filters.firstRegistration}
                onChange={(e) =>
                  handleFilterChange("firstRegistration", e.target.value)
                }
                placeholder="From year"
              />
            </div>

            <div className="form-group">
              <label>
                Price:{" "}
                <span className="range-value">
                  ₦{Number(filters.priceMax || 0).toLocaleString()}
                </span>
              </label>
              <input
                type="range"
                min="0"
                max="1000000000"
                step="5000000"
                value={filters.priceMax || 0}
                onChange={(e) => handleFilterChange("priceMax", e.target.value)}
                className="horizontal-slider"
              />
            </div>

            <div className="form-group">
              <label>
                Kilometers:{" "}
                <span className="range-value">
                  {Number(filters.kmMax || 0).toLocaleString()} km
                </span>
              </label>
              <input
                type="range"
                min="0"
                max="300000"
                step="5000"
                value={filters.kmMax || 0}
                onChange={(e) => handleFilterChange("kmMax", e.target.value)}
                className="horizontal-slider"
              />
            </div>

            <div className="form-group">
              <label>Fuel</label>
              <select
                value={filters.fuel}
                onChange={(e) => handleFilterChange("fuel", e.target.value)}
              >
                <option value="">Any</option>
                <option value="Petrol">Petrol</option>
                <option value="Diesel">Diesel</option>
                <option value="Hybrid">Hybrid</option>
                <option value="Electric">Electric</option>
              </select>
            </div>

            <div className="form-group">
              <label>Gear</label>
              <select
                value={filters.gear}
                onChange={(e) => handleFilterChange("gear", e.target.value)}
              >
                <option value="">Any</option>
                <option value="Automatic">Automatic</option>
                <option value="Manual">Manual</option>
              </select>
            </div>

            <div className="form-group">
              <label>Engine size</label>
              <input
                type="text"
                placeholder="e.g. 2.0L"
                value={filters.engineSize}
                onChange={(e) => handleFilterChange("engineSize", e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Car type</label>
              <input
                type="text"
                value={filters.carType}
                onChange={(e) => handleFilterChange("carType", e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Car color</label>
              <input
                type="text"
                value={filters.carColor}
                onChange={(e) => handleFilterChange("carColor", e.target.value)}
              />
            </div>

            <button type="submit" className="refine-search-btn">
              SEARCH
            </button>
          </form>
        </div>
      

        {/* submit car (entity 2, separate block below form) */}
        <div className="sidebar-sell-card">
          <div className="sidebar-sell-image-wrapper">
            {/* <img
              src={Car16}
              alt="Sell your car"
              className="sidebar-sell-image"
            /> */}
          </div>
          <div className="sidebar-sell-content">
            <div className="sidebar-sell-text">
              <h3>Sell Your Car</h3>
              <p>
                List your vehicle on AUT0MAN and reach thousands of ready buyers in minutes.
              </p>
            </div>
            <button type="button" className="sidebar-sell-button">
              SUBMIT CAR
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Cars;
