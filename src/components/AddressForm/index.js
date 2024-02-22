import { useState } from "react";
import Dropdown from "../Dropdown";

function AddressForm({addrInfo, setAddrInfo, showWarning}) {

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
          <input type="text" id="last-name" className={(showWarning && !addrInfo.lastName)? "form-control checkout warning":"form-control checkout"} placeholder="Last name" 
            defaultValue={addrInfo.lastName} onChange={(e) => setAddrInfo({...addrInfo, lastName: e.target.value })} />
        </div>
      </div>
      <div className="col-md-12">
        <div className="form-group">
          <input type="text" id="address" className={(showWarning && !addrInfo.address)? "form-control checkout warning":"form-control checkout"} placeholder="Address" defaultValue={addrInfo.address}
            onChange={(e) => setAddrInfo({...addrInfo, address: e.target.value })} />
        </div>
      </div>
      <div className="col-md-12">
        <div className="form-group">
          <input type="text" id="apartment" className="form-control checkout" placeholder="Apartment, suite, etc. (optional)" />
        </div>
      </div>
      <div className="col-md-4">
        <div className="form-group">
          <input type="text" id="city" className={(showWarning && !addrInfo.city)? "form-control checkout warning":"form-control checkout"} placeholder="City" 
            defaultValue={addrInfo.city} onChange={(e) => setAddrInfo({...addrInfo, city: e.target.value })} />
        </div>
      </div>
      <div className="col-md-4">
        <Dropdown />
      </div>
      <div className="col-md-4">
        <div className="form-group">
          <input type="text" id="zipCode" className={(showWarning && !addrInfo.zipCode)? "form-control checkout warning":"form-control checkout"} placeholder="Zip code" 
            defaultValue={addrInfo.zipCode} onChange={(e) => setAddrInfo({...addrInfo, zipCode: e.target.value })} />
        </div>
      </div>
      <div className="col-12">
        <div className="form-group">
          <input type="tel" id="phone" className={(showWarning && !addrInfo.phoneNum)? "form-control checkout warning":"form-control checkout"} placeholder="Phone" 
            defaultValue={addrInfo.phoneNum} onChange={(e) => setAddrInfo({...addrInfo, phoneNum: e.target.value })} />
        </div>
      </div>
    </div>
  );
}

export default AddressForm