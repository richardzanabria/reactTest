import { useEffect, useState } from "react";
import DiscountCode from "../../components/DiscountCode";


const Product = () => {
  const [discountCodes, setDiscountCodes] = useState(["75%", "20%", "40%"]);
  const [curDiscountCode, setCurDiscountCode] = useState("");

  const removeDiscountCode = (idx) => {
    let newCodes = [...discountCodes];
    newCodes.splice(idx, 1);
    setDiscountCodes(newCodes);
  }

  const addDiscountCode = (newCode) => {
    setDiscountCodes([...discountCodes, newCode])
  }

  return (
    <section>
      <div className="right-side-top w-100 d-block">
        <div className="product-thumb"><span className="cart-item">1</span><img src="images/product.jpeg" alt="" className="img-fluid" /></div>
        <div className="product-name w-100 d-block">Semaglutide</div>
        <div className="product-supply">1 Month Supply</div>
        <div className="product-price"><span>$395</span> $99.00</div>
      </div>
      <div className="discount-box w-100 d-block">
        <input type="text" className="form-control checkout" placeholder="Discount code" onChange={(e) => {setCurDiscountCode(e.target.value)}} />
        <button onClick={() => addDiscountCode(curDiscountCode)}>Apply</button>
      </div>
      <DiscountCode discountCodes={discountCodes} removeDiscountCode={removeDiscountCode} />
      <div className="total-box-row w-100 d-block">
        <div className="data-row w-100 d-flex flex-wrap justify-content-between"> <span>Subtotal</span> <span>$99.00</span> </div>
        <div className="data-row w-100 d-flex flex-wrap justify-content-between"> <span>Shipping</span> <span>Free</span> </div>
        <div className="data-row w-100 d-flex flex-wrap justify-content-between total"> <span>Total</span> <span>USD $99.00</span> </div>
      </div>
    </section>
  );
}
  
export default Product;


