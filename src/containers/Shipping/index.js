import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import validator from "validator";
import Footer from '../../components/Footer/footer';
import Dropdown from '../../components/Dropdown';
import Navbar from '../../components/Navbar';

const Shipping = ({stage, setStage}) => {
  const navigate = useNavigate();
  const [continueState, setContinueState] = useState(false)
  const [message, setMessage] = useState("");
  const [emailAddr, setEmailAddr] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");

  useEffect(() => {
    if(emailAddr && lastName && address && phone && city && zipCode) {
      setContinueState(true)
    }
  }, [emailAddr, lastName, address, phone, city, zipCode])

  const validateEmail = (e) => {
    const email = e.target.value;
    if (validator.isEmail(email)) {
      setMessage("");
      setEmailAddr(email)
    } else {
      if(email) {
        setMessage("Please, enter valid Email!");
      } else {
        setMessage("");
      }
    }
  };

  return (
    <section>
      <Navbar stage={stage} />
      <div className="left-top-row w-100 d-flex flex-wrap justify-content-between">
        <div className="checkout-title flex-auto">Contact</div>
        <div className="email-box w-100 d-block">
          <input type="email" id="email" className="form-control checkout" placeholder="Email" onChange={(e) => validateEmail(e)} />
          {message ? <label className="text-red-800">{message}</label> : null }
            <div className="checkbox-row w-100 d-block">
              <label className="control control-checkbox">
                Email me with news and offers
                <input type="checkbox" />
                <div className="control-indicator"></div>
              </label>
            </div>
        </div>
        <div className="checkout-form-section w-100 d-block">
          <div className="checkout-title flex-auto">Shipping address</div>
          <div className="checkout-form w-100 d-block">
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
            <div className="btn-row w-100 d-flex justify-content-end">
              <button className={continueState ? "checkout-btn":"checkout-disable-btn" } disabled={!continueState}  onClick={()=>{
                setStage(1);
                navigate('/checkout');
              }}>Continue to payment</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Shipping