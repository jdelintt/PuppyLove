import React from "react";

export default () => (
  <>
    <div class="form-group">
  <fieldset disabled="">
    <label class="control-label" for="disabledInput">Disabled input</label>
    <input class="form-control" id="disabledInput" type="text" placeholder="Disabled input here..." disabled=""/>
  </fieldset>
</div>

<div class="form-group">
  <fieldset>
    <label class="control-label" for="readOnlyInput">Readonly input</label>
    <input class="form-control" id="readOnlyInput" type="text" placeholder="Readonly input here…" readonly=""/>
  </fieldset>
</div>

<div class="form-group has-success">
  <label class="form-control-label" for="inputSuccess1">Valid input</label>
  <input type="text" value="correct value" class="form-control is-valid" id="inputValid"/>
  <div class="valid-feedback">Success! You've done it.</div>
</div>

<div class="form-group has-danger">
  <label class="form-control-label" for="inputDanger1">Invalid input</label>
  <input type="text" value="wrong value" class="form-control is-invalid" id="inputInvalid"/>
  <div class="invalid-feedback">Sorry, that username's taken. Try another?</div>
</div>

<div class="form-group">
  <label class="col-form-label col-form-label-lg" for="inputLarge">Large input</label>
  <input class="form-control form-control-lg" type="text" placeholder=".form-control-lg" id="inputLarge"/>
</div>

<div class="form-group">
  <label class="col-form-label" for="inputDefault">Default input</label>
  <input type="text" class="form-control" placeholder="Default input" id="inputDefault"/>
</div>

<div class="form-group">
  <label class="col-form-label col-form-label-sm" for="inputSmall">Small input</label>
  <input class="form-control form-control-sm" type="text" placeholder=".form-control-sm" id="inputSmall"/>
</div>

<div class="form-group">
  <label class="control-label">Input addons</label>
  <div class="form-group">
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text">$</span>
      </div>
      <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)"/>
      <div class="input-group-append">
        <span class="input-group-text">.00</span>
      </div>
    </div>
  </div>
</div>

  </>
);
