import { useEffect } from "react";
import { Link } from "react-router-dom";

function DiscountCode({discountCodes, removeDiscountCode}) {

  return (
    <div className="discount-code-btn-row">
      <ul>
        {discountCodes.map((discountCode, index) => {
          return (
            <li key={index}>
                <button className="discount-code-btn">{discountCode} OFF</button>
                <span className="code-close-btn" onClick={() => removeDiscountCode(index)}>x</span>
            </li>    
          )})}
      </ul>
    </div>
  );
}

export default DiscountCode;
