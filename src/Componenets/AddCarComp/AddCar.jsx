// src/Componenets/AddCarComp/AddCar.jsx
import "./addCar.css";
import { FaCarSide, FaBookOpen, FaPlusCircle, FaImages, FaCheckCircle } from "react-icons/fa";

const AddCar = () => {
  return (
    <section className="addcar">
      {/* TOP 5-STEP STRIP */}
      <div className="addcar-steps">
        <div className="addcar-step">
          <FaCarSide className="addcar-step-icon" />
          <h3 className="addcar-step-title">ADD CAR DETAILS</h3>
          <p className="addcar-step-text">Choose your car</p>
          <span className="addcar-step-underline" />
        </div>

        <div className="addcar-step">
          <FaBookOpen className="addcar-step-icon" />
          <h3 className="addcar-step-title">CHOOSE SPECIFICATIONS</h3>
          <p className="addcar-step-text">Specifications of your car</p>
          <span className="addcar-step-underlines" />
        </div>

        <div className="addcar-step">
          <FaPlusCircle className="addcar-step-icon" />
          <h3 className="addcar-step-title">CONTACT DETAILS</h3>
          <p className="addcar-step-text">Add your contact</p>
          <span className="addcar-step-underlines" />
        </div>

        <div className="addcar-step">
          <FaImages className="addcar-step-icon" />
          <h3 className="addcar-step-title">PHOTOS AND VIDEOS</h3>
          <p className="addcar-step-text">Add pics and videos</p>
          <span className="addcar-step-underlines" />
        </div>

        <div className="addcar-step">
          <FaCheckCircle className="addcar-step-icon" />
          <h3 className="addcar-step-title">PAY &amp; PUBLISH</h3>
          <p className="addcar-step-text">Choose your listing</p>
          <span className="addcar-step-underlines" />
        </div>
      </div>

      {/* FORM SECTION: ADD YOUR CAR DETAILS */}
      <div className="addcar-form-wrapper">
        <h2 className="addcar-form-title">ADD YOUR CAR DETAILS</h2>

        <form className="addcar-form">
          {/* Column 1 (5 fields) */}
          <div className="addcar-form-column">
            <div className="addcar-form-field">
              <label>Enter Make*</label>
              <input type="text" placeholder="e.g. Toyota" />
            </div>

            <div className="addcar-form-field">
              <label>Select Body Type*</label>
              <select>
                <option value="">Select</option>
                <option>Option 1</option>
                <option>Option 2</option>
              </select>
            </div>

            <div className="addcar-form-field">
              <label>Select No. of Gears*</label>
              <select>
                <option value="">Select</option>
                <option>Option 1</option>
                <option>Option 2</option>
              </select>
            </div>

            <div className="addcar-form-field">
              <label>Select Engine Type*</label>
              <select>
                <option value="">Select</option>
                <option>Option 1</option>
                <option>Option 2</option>
              </select>
            </div>

            <div className="addcar-form-field">
              <label>Select Fuel Type*</label>
              <select>
                <option value="">Select</option>
                <option>Option 1</option>
                <option>Option 2</option>
              </select>
            </div>
          </div>

          {/* Column 2 (5 fields) */}
          <div className="addcar-form-column">
            <div className="addcar-form-field">
              <label>Enter Model of your car*</label>
              <input type="text" placeholder="e.g. Corolla" />
            </div>

            <div className="addcar-form-field">
              <label>Select Seats*</label>
              <select>
                <option value="">Select</option>
                <option>Option 1</option>
                <option>Option 2</option>
              </select>
            </div>

            <div className="addcar-form-field">
              <label>Select Transmission Type*</label>
              <select>
                <option value="">Select</option>
                <option>Option 1</option>
                <option>Option 2</option>
              </select>
            </div>

            <div className="addcar-form-field">
              <label>Select No. of Cylinders*</label>
              <select>
                <option value="">Select</option>
                <option>Option 1</option>
                <option>Option 2</option>
              </select>
            </div>

            <div className="addcar-form-field">
              <label>Enter VIN/Chassis Number*</label>
              <input type="text" placeholder="Enter VIN/Chassis" />
            </div>
          </div>

          {/* Column 3 (4 fields) */}
          <div className="addcar-form-column">
            <div className="addcar-form-field">
              <label>Select Manufacture Year*</label>
              <select>
                <option value="">Select</option>
                <option>Option 1</option>
                <option>Option 2</option>
              </select>
            </div>

            <div className="addcar-form-field">
              <label>Select No. of Doors*</label>
              <select>
                <option value="">Select</option>
                <option>Option 1</option>
                <option>Option 2</option>
              </select>
            </div>

            <div className="addcar-form-field">
              <label>Select Drive Type*</label>
              <select>
                <option value="">Select</option>
                <option>Option 1</option>
                <option>Option 2</option>
              </select>
            </div>

            <div className="addcar-form-field">
              <label>Enter Engine Capacity*</label>
              <input type="text" placeholder="e.g. 2.0L" />
            </div>
          </div>
        </form>

        {/* Save & Continue button */}
        <div className="addcar-form-actions">
          <button type="button" className="addcar-save-btn">
            Save and Continue
          </button>
        </div>
      </div>
    </section>
  );
};

export default AddCar;
