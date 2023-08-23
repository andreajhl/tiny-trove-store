import { useContext } from 'react';
import { CartContext } from '@/context/cart';
import { FiShoppingCart } from 'react-icons/fi';
import CartItem from '../cartItem';
import { showWithPoints } from '@/utils/numbers';
import wordings from '@/wordings';
import './styles.scss';

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
        className="btn fs-4"
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
        className="collapse collapse-horizontal"
      >
        <div className="cart">
          <div className="cart__header">
            <button
              className="btn-close"
              aria-expanded="false"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
            ></button>
            <h3 className="cart__header-title">{navbar.cart}</h3>            
          </div>
          <div className="cart__main">
            { 
              Object.values(cart).map(item => ( <CartItem {...item} key={item.id} /> ))
            }
          </div>
          <div className="cart__footer">
            {
              hasDiscount && (
                <>
                  <div className="cart__footer-price">
                    <p>{subtotal}</p>
                    <p>${showWithPoints(calculateOriginalPrice)}</p>
                  </div>
                  <div className="cart__footer-price">
                    <p>{discount}</p>
                    <p>- ${showWithPoints(calculateDiscountTotal)}</p>
                  </div>
                </>
              )
            }
            <div className="cart__footer-price">
              <p>{total}</p>
              <p data-testid="cart__footer-price">${showWithPoints(calculateTotalPrice)}</p>
            </div>
            <button className="cart__footer-btn">{finishOrder}</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartCollapse;
