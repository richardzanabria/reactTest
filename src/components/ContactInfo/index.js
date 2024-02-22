import { useSelector, useDispatch } from 'react-redux'
import { updateContactMail } from '../../reducer'



function ContactInfo() {
  const contactMail = useSelector((state) => state.contactInfo.contactMail)

  return (
    <div className="payment-top w-100 d-block">
      <ul>
        <li className="d-flex w-100 flex-wrap justify-content-between"> 
          <span className="left-text">Contact</span>
          <span>{contactMail}</span>  
          <span><a href="#">Change</a></span> 
        </li>
        <li className="d-flex w-100 flex-wrap justify-content-between"> 
          <span className="left-text">Ship to</span> 
          <span></span>
          <span><a href="#">Change</a></span> 
        </li>
        <li className="d-flex w-100 flex-wrap justify-content-between"> 
          <span className="left-text">Shipping method</span> 
          <span>Standard</span> 
          <span><a href="#">Change</a></span> 
        </li>
      </ul>
    </div>
  );
}

export default ContactInfo;