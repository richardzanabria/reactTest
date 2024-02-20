import { useEffect, useState } from 'react';
import Shipping from '../../containers/Shipping';
import Checkout from '../../containers/Checkout';
import Product from '../../containers/Product';
import './payment.css';

const Payment = ({initStage}) => {
  const [stage, setStage] = useState(initStage);

  return (
    <div id="wrapper w-100 d-block">
      <div className="container small-container">
        <div className="mobile-data w-100 d-block d-lg-none">
          <div className="checkout-logo w-100 d-block"><img src="images/logo-blue.png" alt="" className="m-auto d-block" /></div>
          <div className="cus-breadcrumb w-100 d-block">
            <ul>
              <li className={stage == 0? "":"active" }>Shipping</li>
              <li className={stage == 1? "":"active" }>Payment</li>
            </ul>
          </div>
        </div>
        <div className="d-flex flex-wrap w-100">
          <div className="right-side flex-auto order-lg-1">
            <Product />
          </div>
          <div className="left-side flex-auto order-lg-0">
            {
              stage == 0? 
              <Shipping setStage={setStage} stage={stage} /> : 
              <Checkout setStage={setStage} stage={stage}/>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
