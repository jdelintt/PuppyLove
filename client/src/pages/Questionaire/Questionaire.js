import React, { useState } from "react";
import "./Questionaire.css";
const energyLevels = ['Mellow', 'Moderate', 'High', 'Hyper']

export default () => {
  const [prefs, setPrefs] = useState({
      size: 5,
      age: 1,
      energy: 0
  });
  const handleInputChange = ({ target: { name, value } }) =>
    setPrefs({ ...prefs, [name]: value });
  console.log(prefs);
  return (
    <>
      <h1 className="mt-3 mb-5" style={{ textAlign: "center" }}>
        TELL US YOUR PREFERENCES TO SET UP A PLAYDATE!
      </h1>
      <div className="container">
        <form>
          <div class="form-group">
            <label for="breedInput">Select Breed</label>
            <select
              name="breed"
              onChange={handleInputChange}
              class="form-control"
              id="breedInput"
            >
              <option>Golden Retriever</option>
              <option>Pitbull</option>
              <option>German Shepherd</option>
              <option>Chihuahua</option>
              <option>Terrier</option>
            </select>
          </div>
          <div className="sliders">
            <legend>Size</legend>
            <label for="sizeSlide">{prefs.size} LBS</label>
            <input
            defaultValue="5"
              name="size"
              onChange={handleInputChange}
              min="5"
              max="150"
              type="range"
              className="custom-range"
              id="sizeSlide"
            />
          </div>
          <div className="sliders">
            <legend>Age</legend>
            <label for="ageSlide">{prefs.age} YR</label>
            <input
              name="age"
              defaultValue="1"
              onChange={handleInputChange}
              min="1"
              max="15"
              type="range"
              className="custom-range"
              id="ageSlide"
            />
          </div>
          <div className="sliders">
            <legend>Energy Level</legend>
            <label for="energySlide">{energyLevels[prefs.energy]}</label>
            <input
              name="energy"
              defaultValue="0"
              onChange={handleInputChange}
              min="0"
              max="3"
              type="range"
              className="custom-range"
              id="energySlide"
            />
          </div>
          <div className="form-group">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" for="customCheck1">
                Check this custom checkbox
              </label>
            </div>
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck2"
              />
              <label className="custom-control-label" for="customCheck2">
                Disabled custom checkbox
              </label>
            </div>
          </div>
          <div className="form-group">
            <div className="custom-control custom-switch">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customSwitch1"
              />
              <label className="custom-control-label" for="customSwitch1">
                Toggle this switch element
              </label>
            </div>
            <div className="custom-control custom-switch">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customSwitch2"
              />
              <label className="custom-control-label" for="customSwitch2">
                Disabled switch element
              </label>
            </div>
          </div>
          <div className="form-group">
            <select className="custom-select">
              <option selected="">Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </form>
      </div>
    </>
  );
};
