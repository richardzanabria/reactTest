import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className="checkout-footer-link w-100 d-block"> 
            <Link to="#">Refund policy</Link> 
            <Link to="#">Shipping policy</Link> 
            <Link to="#">Privacy policy</Link> 
            <Link to="#">Terms of service</Link> 
        </div>  
    );
  }

export default Footer;