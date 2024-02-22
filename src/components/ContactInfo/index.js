import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';

function ContactInfo() {
  const contactMail = useSelector((state) => state.contactInfo.contactMail)

  return (
    <div className="payment-top w-100 d-block">
      <ul>
        <li className="d-flex w-100 flex-wrap justify-content-between"> 
          <span className="left-text">Contact</span>
          <span>{contactMail}</span>  
          <span><Link to="/">Change</Link></span> 
        </li>
        <li className="d-flex w-100 flex-wrap justify-content-between"> 
          <span className="left-text">Ship to</span> 
          <span></span>
          <span><Link to="/">Change</Link></span> 
        </li>
        <li className="d-flex w-100 flex-wrap justify-content-between"> 
          <span className="left-text">Shipping method</span> 
          <span>Standard</span> 
          <span><Link to="/">Change</Link></span> 
        </li>
      </ul>
    </div>
  );
}

export default ContactInfo;