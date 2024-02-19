import { useNavigate } from 'react-router-dom';

const Shipping = ({setStage}) => {
  const navigate = useNavigate();

  return (
    <>
    <div class="left-top-row w-100 d-flex flex-wrap justify-content-between">
    </div>
    <div class="checkout-title flex-auto">Contact</div>
    <div class="email-box w-100 d-block">
        <input type="email" id="email" class="form-control checkout" placeholder="Email" />
        <div class="checkbox-row w-100 d-block">
            <label class="control control-checkbox">
            Email me with news and offers
            <input type="checkbox" />
            <div class="control-indicator"></div>
            </label>
        </div>
    </div>
    <div class="checkout-form-section w-100 d-block">
      <div class="checkout-title flex-auto">Shipping address</div>
      <div class="checkout-form w-100 d-block">
        <div class="row gx-3">
          <div class="col-12">
            <div class="form-group">
              <select id="country" class="form-select checkout">
                <option data-code="US" data-pure-numeric-postal-code="false" value="United States"> United States </option>
              </select>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <input type="text" id="first-name" class="form-control checkout" placeholder="First name (optional)" />
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <input type="text" id="last-name" class="form-control checkout" placeholder="Last name" />
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group">
              <input type="text" id="address" class="form-control checkout" placeholder="Address" />
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group">
              <input type="text" id="apartment" class="form-control checkout" placeholder="Apartment, suite, etc. (optional)" />
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <input type="text" id="city" class="form-control checkout" placeholder="City" />
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <select id="state" class="form-select checkout">
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
          <div class="col-md-4">
            <div class="form-group">
              <input type="text" id="zipCode	" class="form-control checkout" placeholder="Zip code" />
            </div>
          </div>
          <div class="col-12">
            <div class="form-group">
              <input type="tel" id="phone" class="form-control checkout" placeholder="Phone" />
            </div>
          </div>
        </div>
        <div class="btn-row w-100 d-flex justify-content-end">
          <button class="checkout-btn" onClick={()=>{
            setStage(1);
            navigate('/checkout');
          }}>Continue to payment</button>
        </div>
      </div>
    </div>
    </>
  );
}

export default Shipping