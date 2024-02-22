import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import validator from "validator";
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import AddressForm from '../../components/AddressForm';
import { addContactMail, addShippingAddr } from '../../reducer'

const Shipping = ({stage, setStage}) => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const contactMail = useSelector((state) => state.contactInfo.contactMail)
  const shippingInfo = useSelector((state) => state.contactInfo.shippingAddr)
  const [continueState, setContinueState] = useState(true)
  const [message, setMessage] = useState("");
  const [emailAddr, setEmailAddr] = useState(contactMail);
  const [addrInfo, setAddrInfo] = useState(shippingInfo);
  const [showWarning, setShowWarning] = useState(false);

  const validateEmail = (e) => {
    const email = e.target.value;
    if (validator.isEmail(email)) {
      setMessage("");
      setEmailAddr(email);
    } else {
      setEmailAddr("");
      if(email) {
        setMessage("Please, enter valid Email!");
      } else {
        setMessage("");
      }
    }
  };

  const onContinueClick = () => {
    const {lastName, address, city, zipCode, phoneNum} = addrInfo
    if(emailAddr && lastName && address && phoneNum && city && zipCode) {
      dispatch(addContactMail(emailAddr))
      dispatch(addShippingAddr(addrInfo))
      setStage(1);
      setShowWarning(false)
      setMessage("")
      navigate('/checkout');
    } else {
      setShowWarning(true)
      if(!emailAddr) 
        setMessage("Please, enter valid Email!");
    }
  }

  return (
    <section>
      <Navbar stage={stage} />
      <div className="left-top-row w-100 d-flex flex-wrap justify-content-between">
        <div className="checkout-title flex-auto">Contact</div>
        <div className="email-box w-100 d-block">
          <input type="email" id="email" className="form-control checkout" placeholder="Email" defaultValue={contactMail} onChange={(e) => validateEmail(e)} />
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
            <AddressForm addrInfo={addrInfo} setAddrInfo={setAddrInfo} showWarning={showWarning} />
            <div className="btn-row w-100 d-flex justify-content-end">
              <button className={continueState ? "checkout-btn":"checkout-disable-btn" } disabled={!continueState}  onClick={() => onContinueClick()}>
                Continue to payment
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Shipping