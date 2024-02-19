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
            <Product />
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
