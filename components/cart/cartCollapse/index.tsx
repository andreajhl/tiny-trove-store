import { useContext } from 'react';
import { CartContext } from '@/context/cart';
import { FiShoppingCart } from 'react-icons/fi';
import CartItem from '../cartItem';
import { showWithPoints } from '@/utils/numbers';
import wordings from '@/wordings';

const CartCollapse = () => {
  const { cart } = useContext(CartContext);
  const { navbar, cart: { discount, total, subtotal, finishOrder } } = wordings;

  const calculateOriginalPrice = Object.values(cart).reduce((acc, current) => (
    acc + ((current.originalPrice || current.price) * current.quantity)
  ), 0);

  const calculateTotalPrice = Object.values(cart).reduce((acc, current) => (
    acc + (current.price * current.quantity)
  ), 0);

  const calculateDiscountTotal = calculateOriginalPrice - calculateTotalPrice;
  const hasDiscount = calculateDiscountTotal > 0;

  return (
    <>
      <button
        className="btn"
        data-testid="btn-cart-collapse" 
        aria-expanded="false"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
        aria-controls="navbarCollapse"
      >
        <FiShoppingCart />
      </button>
      <div
        id="navbarCollapse"
        className="collapse collapse-horizontal bg-body position-fixed top-0 end-0 z-3"
        style={{ height: "100vh" }}
      >
        <div style={{ width: "400px", height: "100vh"}} className="position-relative sticky-bottom p-4 bg-body top-0">
          <div className="sticky-top p-4 bg-body">
            <button
              className="btn-close"
              aria-expanded="false"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
            ></button>
            <h3 className="text-center p-0 m-0">{navbar.cart}</h3>            
          </div>
          <div className="overflow-y-scroll" style={{ height: "60%" }}>
            { 
              Object.values(cart).map(item => ( <CartItem {...item} key={item.id} /> ))
            }
          </div>
          <div className="sticky-bottom p-4 bg-body">
            {
              hasDiscount && (
                <>
                  <div className="d-flex justify-content-between">
                    <p>{subtotal}</p>
                    <p>${showWithPoints(calculateOriginalPrice)}</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p>{discount}</p>
                    <p>- ${showWithPoints(calculateDiscountTotal)}</p>
                  </div>
                </>
              )
            }
            <div className="d-flex justify-content-between">
              <p>{total}</p>
              <p data-testid="final-price">${showWithPoints(calculateTotalPrice)}</p>
            </div>
            <button className="btn bg-info text-light text-uppercase w-100">{finishOrder}</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartCollapse;
