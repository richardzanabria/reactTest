import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import AddressForm from '../../components/AddressForm';


const Checkout = ({stage, setStage}) => {
  const [showAddrForm, setShowAddrForm] = useState(false);


  return (
    <section>
      <Navbar stage={stage} />
      <div className="payment-top w-100 d-block">
        <ul>
          <li className="d-flex w-100 flex-wrap justify-content-between"> <span className="left-text">Contact</span> <span><a href="#">Change</a></span> </li>
          <li className="d-flex w-100 flex-wrap justify-content-between"> <span className="left-text">Ship to</span> <span><a href="#">Change</a></span> </li>
          <li className="d-flex w-100 flex-wrap justify-content-between"> <span className="left-text">Shipping method</span> <span>Standard</span> <span><a href="#">Change</a></span> </li>
        </ul>
      </div>
      <div className="payment-card-section w-100 d-block">
        <div className="checkout-title flex-auto">Payment</div>
        <p> All transactions are secure and encrypted. </p>
        <div className="payment-card-box w-100 d-block">
          <div className="payment-card-box-top w-100 d-flex flex-wrap justify-content-between"> <span>Credit card </span> <span><img src="images/card-logo.jpg" alt="" className="img-fluid" /></span> </div>
          <div className="payment-card-box-data w-100 d-block">
            <div className="row gx-3">
              <div className="col-12">
                <div className="form-group w-100 d-block">
                  <input type="text" id="card-number" placeholder="Card Number" className="form-control checkout" />
                </div>
              </div>
              <div className="col-12">
                <div className="form-group w-100 d-block">
                  <input type="text" id="name" placeholder="Name on card" className="form-control checkout" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group w-100 d-block">
                  <input type="text" id="expiration" placeholder="Expiration date (MM / YY)" className="form-control checkout" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group w-100 d-block">
                  <input type="text" id="Security-code" placeholder="Security code" className="form-control checkout" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="billing-address-section w-100 d-block">
        <div className="checkout-title flex-auto">Billing address</div>
        <p> Select the address that matches your card or payment method. </p>
        <div className="radio-button-row w-100 d-block">
          <label className="control control-radio">
            Same as shipping address
            <input type="radio" name="billing-address" defaultChecked="checked" onChange={(e)=> setShowAddrForm(!e.target.checked)} />
            <div className="control-indicator"></div>
          </label>
          <label className="control control-radio">
            Use a different billing address
            <input type="radio" name="billing-address" id="address-change" onChange={(e)=> setShowAddrForm(e.target.checked)} />
            <div className="control-indicator"></div>
          </label>
        </div>
        { showAddrForm ? 
          <div className="billing-address-form w-100">
            <div className="checkout-form w-100 d-block">
              <AddressForm />
            </div>
          </div> : null }
      </div>
      <div className="btn-row w-100 d-flex justify-content-between">
        <div className="back-link">
          <Link to="/" className="flex">
            <svg focusable="false" aria-hidden="true" className="icon-svg icon-svg--color-accent icon-svg--size-10 previous-link__icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10">
              <path d="M8 1L7 0 3 4 2 5l1 1 4 4 1-1-4-4"></path>
            </svg>
            <span>Return to shipping</span>
          </Link>
        </div>
        <button className="checkout-btn">Checkout now</button>
      </div>
      
      <Footer />
    </section>  
  );
}

export default Checkout;
