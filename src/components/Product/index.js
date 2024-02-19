const Product = () => {
    return (
        <>
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
        </>
    );
  }
  
  export default Product;


