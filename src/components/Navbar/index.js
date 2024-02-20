
function Navbar({stage}) {
    return (
        <>
        <div className="checkout-logo w-100 d-none d-lg-block"><img src="images/logo-blue.png" alt="" /></div>
        <div className="cus-breadcrumb w-100 d-none d-lg-block">
            <ul>
            <li className={stage == 0? "":"active" }>Shipping</li>
            <li className={stage == 1? "":"active" }>Payment</li>
            </ul>
        </div>
        </>
    );
  }

export default Navbar;