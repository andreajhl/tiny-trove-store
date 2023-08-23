import { useContext } from "react";
import Image from "next/image";
import { GoTrash } from "react-icons/go";
import { CartContext } from "@/context/cart";
import { CartItemProps } from "@/interfaces/components/cart";
import { showWithPoints } from "@/utils/numbers";
import './styles.scss';

const CartItem = ({ thumbnail, title, price, originalPrice, quantity , id}: CartItemProps) => {
  const { removeCartProduct } = useContext(CartContext);
  const priceTotalByItem = price * quantity;

  const handleRemoveItem = () => removeCartProduct(id);

  return (
    <section data-testid="cart-item" className="cart-item">
      <div className="cart-item__main">
        <div className="cart-item__main-title">
          <p className="cart-item__main-title--text" aria-current="page">{title}</p>
          <button
            data-testid="btn-remove"
            onClick={handleRemoveItem}
            className="btn w-auto mt-0"
          >
            <GoTrash />
          </button>
        </div>
        <div className="cart-item__main-content">
          <Image
            src={thumbnail}
            className="card-img-top w-50"
            alt={title}
            width={60}
            height={100}
            layout="fixed"
          />
          <div className="cart-item__main-content-price">
            <p className="m-0">{showWithPoints(price)} * {quantity} und</p>
            <p className="m-0" data-testid="price">{showWithPoints(priceTotalByItem)}</p>
            {
              originalPrice && (
                <p className="cart-item__main-content-price--through" data-testid="original-price">
                  {showWithPoints(originalPrice)}
                </p>
              )
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartItem;
