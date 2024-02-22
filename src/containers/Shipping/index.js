import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import validator from "validator";
import Footer from '../../components/Footer';
import Dropdown from '../../components/Dropdown';
import Navbar from '../../components/Navbar';
import AddressForm from '../../components/AddressForm';

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
    } else {
      setContinueState(false)
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
            <AddressForm setLastName={setLastName} setAddress={setAddress} setPhone={setPhone} setCity={setCity} setZipCode={setZipCode} />
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