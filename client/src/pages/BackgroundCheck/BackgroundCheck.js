import React from "react";
import Button from "../../components/CustomButtons/Button.js";

export default () => (
  <>
  <div className="container">

   


<div class="form-group has-danger">
  <label class="form-control-label" for="inputDanger1"></label>
  <input type="text" value="wrong value" class="form-control is-invalid" id="inputInvalid"/>
  <div class="invalid-feedback">Sorry, that username's taken. Try another?</div>
</div>



<div class="form-group">
  <label class="col-form-label" for="inputDefault">Default input</label>
  <input type="text" class="form-control" placeholder="Default input" id="inputDefault"/>
</div>

<Button
                color="success"
                size="lg"
                href="/hang"
                >
                Preferences
              </Button>



  </div>
  </>
);
