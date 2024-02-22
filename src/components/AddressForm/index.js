import { useState } from "react";
import Dropdown from "../Dropdown";

function AddressForm({setLastName, setAddress, setPhone, setCity, setZipCode}) {

  return (
    <div className="row gx-3">
      <div className="col-12">
        <div className="form-group">
          <select id="country" className="form-select checkout">
            <option data-code="US" data-pure-numeric-postal-code="false" value="United States"> United States </option>
          </select>
        </div>
      </div>
      <div className="col-md-6">
        <div className="form-group">
          <input type="text" id="first-name" className="form-control checkout" placeholder="First name (optional)" />
        </div>
      </div>
      <div className="col-md-6">
        <div className="form-group">
          <input type="text" id="last-name" className="form-control checkout" placeholder="Last name" onChange={(e) => setLastName(e.target.value)} />
        </div>
      </div>
      <div className="col-md-12">
        <div className="form-group">
          <input type="text" id="address" className="form-control checkout" placeholder="Address" onChange={(e) => setAddress(e.target.value)}/>
        </div>
      </div>
      <div className="col-md-12">
        <div className="form-group">
          <input type="text" id="apartment" className="form-control checkout" placeholder="Apartment, suite, etc. (optional)" />
        </div>
      </div>
      <div className="col-md-4">
        <div className="form-group">
          <input type="text" id="city" className="form-control checkout" placeholder="City" onChange={(e) => setCity(e.target.value)}/>
        </div>
      </div>
      <div className="col-md-4">
        <Dropdown />
      </div>
      <div className="col-md-4">
        <div className="form-group">
          <input type="text" id="zipCode	" className="form-control checkout" placeholder="Zip code" onChange={(e) => setZipCode(e.target.value)}/>
        </div>
      </div>
      <div className="col-12">
        <div className="form-group">
          <input type="tel" id="phone" className="form-control checkout" placeholder="Phone" onChange={(e) => setPhone(e.target.value)}/>
        </div>
      </div>
    </div>
  );
}

export default AddressForm