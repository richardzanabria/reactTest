import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <>
    <div className="checkout-logo w-100 d-none d-lg-block"><img src="images/logo-blue.png" alt="" /></div>
    <div className="cus-breadcrumb w-100 d-none d-lg-block">
      <ul>
        <li>Shipping </li>
        <li className="active">Payment</li>
      </ul>
    </div>
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
        <input type="radio" name="billing-address" defaultChecked="checked" />
        <div className="control-indicator"></div>
        </label>
        <label className="control control-radio">
        Use a different billing address
        <input type="radio" name="billing-address" id="address-change" />
        <div className="control-indicator"></div>
        </label>
      </div>
      <div className="billing-address-form w-100 d-none">
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
                <input type="text" id="last-name" className="form-control checkout" placeholder="Last name" />
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group">
                <input type="text" id="address" className="form-control checkout" placeholder="Address" />
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group">
                <input type="text" id="apartment" className="form-control checkout" placeholder="Apartment, suite, etc. (optional)" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <input type="text" id="city" className="form-control checkout" placeholder="City" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <select id="state" className="form-select checkout">
                  <option>State</option>
                  <option data-alternate-values="[&quot;Alabama&quot;]" value="AL">Alabama</option>
                  <option data-alternate-values="[&quot;Alaska&quot;]" value="AK">Alaska</option>
                  <option data-alternate-values="[&quot;Arizona&quot;]" value="AZ">Arizona</option>
                  <option data-alternate-values="[&quot;Arkansas&quot;]" value="AR">Arkansas</option>
                  <option data-alternate-values="[&quot;California&quot;]" value="CA">California</option>
                  <option data-alternate-values="[&quot;Colorado&quot;]" value="CO">Colorado</option>
                  <option data-alternate-values="[&quot;Connecticut&quot;]" value="CT">Connecticut</option>
                  <option data-alternate-values="[&quot;Delaware&quot;]" value="DE">Delaware</option>
                  <option data-alternate-values="[&quot;Florida&quot;]" value="FL">Florida</option>
                  <option data-alternate-values="[&quot;Georgia&quot;]" value="GA">Georgia</option>
                  <option data-alternate-values="[&quot;Hawaii&quot;]" value="HI">Hawaii</option>
                  <option data-alternate-values="[&quot;Idaho&quot;]" value="ID">Idaho</option>
                  <option data-alternate-values="[&quot;Illinois&quot;]" value="IL">Illinois</option>
                  <option data-alternate-values="[&quot;Indiana&quot;]" value="IN">Indiana</option>
                  <option data-alternate-values="[&quot;Iowa&quot;]" value="IA">Iowa</option>
                  <option data-alternate-values="[&quot;Kansas&quot;]" value="KS">Kansas</option>
                  <option data-alternate-values="[&quot;Kentucky&quot;]" value="KY">Kentucky</option>
                  <option data-alternate-values="[&quot;Louisiana&quot;]" value="LA">Louisiana</option>
                  <option data-alternate-values="[&quot;Maine&quot;]" value="ME">Maine</option>
                  <option data-alternate-values="[&quot;Maryland&quot;]" value="MD">Maryland</option>
                  <option data-alternate-values="[&quot;Massachusetts&quot;]" value="MA">Massachusetts</option>
                  <option data-alternate-values="[&quot;Michigan&quot;]" value="MI">Michigan</option>
                  <option data-alternate-values="[&quot;Minnesota&quot;]" value="MN">Minnesota</option>
                  <option data-alternate-values="[&quot;Mississippi&quot;]" value="MS">Mississippi</option>
                  <option data-alternate-values="[&quot;Missouri&quot;]" value="MO">Missouri</option>
                  <option data-alternate-values="[&quot;Montana&quot;]" value="MT">Montana</option>
                  <option data-alternate-values="[&quot;Nebraska&quot;]" value="NE">Nebraska</option>
                  <option data-alternate-values="[&quot;Nevada&quot;]" value="NV">Nevada</option>
                  <option data-alternate-values="[&quot;New Hampshire&quot;]" value="NH">New Hampshire</option>
                  <option data-alternate-values="[&quot;New Jersey&quot;]" value="NJ">New Jersey</option>
                  <option data-alternate-values="[&quot;New Mexico&quot;]" value="NM">New Mexico</option>
                  <option data-alternate-values="[&quot;New York&quot;]" value="NY">New York</option>
                  <option data-alternate-values="[&quot;North Carolina&quot;]" value="NC">North Carolina</option>
                  <option data-alternate-values="[&quot;North Dakota&quot;]" value="ND">North Dakota</option>
                  <option data-alternate-values="[&quot;Ohio&quot;]" value="OH">Ohio</option>
                  <option data-alternate-values="[&quot;Oklahoma&quot;]" value="OK">Oklahoma</option>
                  <option data-alternate-values="[&quot;Oregon&quot;]" value="OR">Oregon</option>
                  <option data-alternate-values="[&quot;Pennsylvania&quot;]" value="PA">Pennsylvania</option>
                  <option data-alternate-values="[&quot;Puerto Rico&quot;]" value="PR">Puerto Rico</option>
                  <option data-alternate-values="[&quot;Rhode Island&quot;]" value="RI">Rhode Island</option>
                  <option data-alternate-values="[&quot;South Carolina&quot;]" value="SC">South Carolina</option>
                  <option data-alternate-values="[&quot;South Dakota&quot;]" value="SD">South Dakota</option>
                  <option data-alternate-values="[&quot;Tennessee&quot;]" value="TN">Tennessee</option>
                  <option data-alternate-values="[&quot;Texas&quot;]" value="TX">Texas</option>
                  <option data-alternate-values="[&quot;Utah&quot;]" value="UT">Utah</option>
                  <option data-alternate-values="[&quot;Vermont&quot;]" value="VT">Vermont</option>
                  <option data-alternate-values="[&quot;Virginia&quot;]" value="VA">Virginia</option>
                  <option data-alternate-values="[&quot;Washington&quot;]" value="WA">Washington</option>
                  <option data-alternate-values="[&quot;District of Columbia&quot;]" value="DC">Washington DC</option>
                  <option data-alternate-values="[&quot;West Virginia&quot;]" value="WV">West Virginia</option>
                  <option data-alternate-values="[&quot;Wisconsin&quot;]" value="WI">Wisconsin</option>
                  <option data-alternate-values="[&quot;Wyoming&quot;]" value="WY">Wyoming</option>
                  <option data-alternate-values="[&quot;Armed Forces Pacific&quot;]" value="AP">Armed Forces Pacific</option>
                </select>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <input type="text" id="zipCode	" className="form-control checkout" placeholder="Zip code" />
              </div>
            </div>
            <div className="col-12">
              <div className="form-group">
                <input type="tel" id="phone" className="form-control checkout" placeholder="Phone" />
              </div>
            </div>
          </div>
        </div>
      </div>
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
    <div className="checkout-footer-link w-100 d-block"> <a href="#">Refund policy</a> <a href="#">Shipping policy</a> <a href="#">Privacy policy</a> <a href="#">Terms of service</a> </div>
  
    </>
  
  );
}

export default Checkout;
