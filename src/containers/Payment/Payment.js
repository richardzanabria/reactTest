import Shipping from '../../components/Shipping';
import Checkout from '../../components/Checkout';
import Product from '../../components/Product';

import './payment.css';
import { useState } from 'react';

const Payment = ({initStage}) => {
  const [stage, setStage] = useState(initStage);

  return (
    <div id="wrapper w-100 d-block">
      <div className="container small-container">
        <div className="mobile-data w-100 d-block d-lg-none">
          <div className="checkout-logo w-100 d-block"><img src="images/logo-blue.png" alt="" className="m-auto d-block" /></div>
          <div className="cus-breadcrumb w-100 d-block">
            <ul>
              <li>Shipping</li>
              <li className="active">Payment</li>
            </ul>
          </div>
        </div>
        <div className="d-flex flex-wrap w-100">
          <div className="right-side flex-auto order-lg-1">
            <Product />
          </div>
          <div className="left-side flex-auto order-lg-0">
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
