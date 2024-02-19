import Shipping from '../../components/Shipping';
import Checkout from '../../components/Checkout';
import Product from '../../components/Product';

import './payment.css';
import { useState } from 'react';

const Payment = ({initStage}) => {
  const [stage, setStage] = useState(initStage);

  return (
    <div id="wrapper w-100 d-block">
      <div class="container small-container">
        <div class="mobile-data w-100 d-block d-lg-none">
          <div class="checkout-logo w-100 d-block"><img src="images/logo-blue.png" alt="" class="m-auto d-block" /></div>
          <div class="cus-breadcrumb w-100 d-block">
            <ul>
              <li>Shipping</li>
              <li class="active">Payment</li>
            </ul>
          </div>
        </div>
        <div class="d-flex flex-wrap w-100">
          <div class="right-side flex-auto order-lg-1">
            <div class="right-side-top w-100 d-block">
              <div class="product-thumb"><span class="cart-item">1</span><img src="images/product.jpeg" alt="" class="img-fluid" /></div>
              <div class="product-name w-100 d-block">Semaglutide</div>
              <div class="product-supply">1 Month Supply</div>
              <div class="product-price"><span>$395</span> $99.00</div>
            </div>
            <div class="discount-box w-100 d-block">
              <input type="text" class="form-control checkout" placeholder="Discount code" />
              <button>Apply</button>
            </div>
            <div class="discount-code-btn-row">
              <ul>
                <li>
                  <button class="discount-code-btn">75%OFF</button>
                  <span class="code-close-btn">x</span></li>
              </ul>
            </div>
            <div class="total-box-row w-100 d-block">
              <div class="data-row w-100 d-flex flex-wrap justify-content-between"> <span>Subtotal</span> <span>$99.00</span> </div>
              <div class="data-row w-100 d-flex flex-wrap justify-content-between"> <span>Shipping</span> <span>Free</span> </div>
              <div class="data-row w-100 d-flex flex-wrap justify-content-between total"> <span>Total</span> <span>USD $99.00</span> </div>
            </div>
          </div>
          <div class="left-side flex-auto order-lg-0">
            {stage == 0? 
              <Shipping setStage={setStage} /> 
              : <Checkout setStage={setStage} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
