import React, { useState, useEffect } from "react";
import "./Questionaire.css";
import API from "../../utils/API";
const energyLevels = ["Mellow", "Moderate", "High", "Hyper"];
const allergies = ["Short", "Medium", "Long"];

export default () => {
  const [prefs, setPrefs] = useState({
    size: 5,
    age: 1,
    energyLevel: 0,
    gender: 0,
    allergies: 0,
  });

  //data
  const [breedData, setBreed] = useState([]);

  const [APIdata, setData] = useState({
    breed: "",
    malePref: false,
    femalePref: false,
    size: 5,
    age: 1,
    energyLevel: 0,
    allergies: 0,
  });

  console.log(APIdata);

  useEffect(() => {
    getBreedList();
  }, []);

  function getBreedList() {
    API.getBaseBreedsList()
      .then((res) => setBreed({ breeds: res.data.message }))
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }
  console.log(breedData);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(APIdata);
    API.createPref(APIdata);
  };
  //event.target.checked
  const handleInputChange = ({ target: { name, value } }) => {
    setPrefs({ ...prefs, [name]: value });
    console.log(prefs);
    setData({ ...APIdata, [name]: value });
  };

  // const handleCheckChange =
  // console.log(prefs);

  // if (!breedData) return <h1>Loading...</h1>;

  return (
    <>
      <h1 className="mt-3 mb-5" style={{ textAlign: "center" }}>
        TELL US YOUR PREFERENCES TO SET UP A PLAYDATE!
      </h1>
      <div className="container">
        <form>
          <div class="form-group">
            {/* from Brian's code */}
            <input
              // value={}
              onChange={handleInputChange}
              name="breed"
              list="breeds"
              type="text"
              className="form-control"
              placeholder="Type in a dog breed to begin"
              id="breed"
            />
            {/* <datalist id="breeds">
              {breedData.map((breed) => (
                <option value={breed} key={breed} />
              ))}
            </datalist> */}

            {/* from Aragon */}
            {/* <label for="breedInput">Select Breed</label>
            <datalist
              name="breed"
              value={setData.breed}
              onChange={handleInputChange}
              class="form-control"
              id="breedInput">
              <option>Golden Retriever</option>
              <option>Pitbull</option>
              <option>German Shepherd</option>
              <option>Chihuahua</option>
              <option>Terrier</option>
            </datalist> */}
          </div>
          <legend>Gender</legend>
          <div className="form-group">
            <div className="custom-control custom-checkbox">
              <input
                name="malePref"
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
                // value={setData.malePref}
              />
              <label className="custom-control-label" for="customCheck1">
                Male
              </label>
            </div>
            <div className="custom-control custom-checkbox">
              <input
                name="femalePref"
                type="checkbox"
                className="custom-control-input"
                id="customCheck2"
                // value={setData.femalePref}
              />
              <label className="custom-control-label" for="customCheck2">
                Female
              </label>
            </div>
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
              // value={}
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
              // value={setData.age}
            />
          </div>
          <div className="sliders">
            <legend>Energy Level</legend>
            <label for="energySlide">{energyLevels[prefs.energyLevel]}</label>
            <input
              name="energyLevel"
              defaultValue="0"
              onChange={handleInputChange}
              min="0"
              max="3"
              type="range"
              className="custom-range"
              id="energySlide"
              // value={setData.energyLevel}
            />
          </div>
          <div className="sliders">
            <legend>Allergies</legend>
            <label for="allergiesSlide">{allergies[prefs.allergies]}</label>
            <input
              name="allergies"
              defaultValue="0"
              onChange={handleInputChange}
              min="0"
              max="2"
              type="range"
              className="custom-range"
              id="alergiesSlide"
              // value={setData.allergies}
            />
          </div>

          <button
            type="submit"
            onClick={handleSubmit}
            className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};
