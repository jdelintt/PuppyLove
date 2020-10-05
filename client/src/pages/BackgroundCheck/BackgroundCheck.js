import React, { useState } from "react";
import Button from "../../components/CustomButtons/Button.js";
import API from "../../utils/API";

function Background() {
  const [background, setUserData] = useState({
    Sherrif: "",
    lastName: "",
  });

  const handleInput = ({ target: { name, value } }) => {
    setUserData({ ...background, [name]: value });
    console.log(background);
  };

  const BackgroundCheck = (event) => {
    event.preventDefault();
    API.checkUser(background).then(({ data }) => {
      // localstorage set username and user can have access to it throughotu the pge
      console.log(data);
      if (data) alert("We are sorry. You're a criminal");
      else window.location.replace("/hang");
    });
  };

  return (
    <div className="container">
      <h1> Background Check</h1>
      <p>
        {" "}
        We care about our furry friends and we know you do too! In order to
        safegaurd these animals from bad actors we require every user to go
        through a simple background check. We appreciate your help in ensuring
        the well being of these animals.
      </p>

      <div class="form-group">
        <label class="col-form-label" for="inputDefault"></label>
        <input
          name="lastName"
          type="text"
          placeholder="last name"
          onChange={handleInput}
        />
      </div>
      <div>
        <label for="police office">Choose a sherrif's office: </label>
        <select name="Sherrif" id="sherrif" onChange={handleInput}>
          <option name="Alameda County">ca-acso</option>
          <option name="Fresno County">ca-fcso</option>
          <option name="Los Angeles County">ca-lcso</option>
          <option name="Mendocino County">ca-mcso</option>
        </select>
      </div>

      <Button color="success" size="lg" onClick={BackgroundCheck}>
        Run Background Check
      </Button>

      <Button color="success" size="lg" href="/hang">
        Preferences
      </Button>
    </div>
  );
}


export default Background;




