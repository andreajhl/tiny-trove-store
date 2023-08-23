import { useContext } from "react";
import Image from "next/image";
import { GoTrash } from "react-icons/go";
import { CartContext } from "@/context/cart";
import { CartItemProps } from "@/interfaces/components/cart";
import { showWithPoints } from "@/utils/numbers";

const CartItem = ({ thumbnail, title, price, originalPrice, quantity , id}: CartItemProps) => {
  const { removeCartProduct } = useContext(CartContext);
  const priceTotalByItem = price * quantity;

  const handleRemoveItem = () => removeCartProduct(id);

  return (
    <section data-testid="cart-item" className="d-flex flex-row justify-content-center align-items-start p-4 text-body-secondary">
      <div className="d-flex flex-column justify-content-center">
        <p className="mt-2 text-center text-capitalize" aria-current="page">{title}</p>
        <div className="d-flex flex-row">
          <Image
            src={thumbnail}
            className="card-img-top w-50"
            alt={title}
            width={60}
            height={100}
            layout="fixed"
          />
          <div className="text-start ps-4">
            <p className="m-0 fs-6">${showWithPoints(price)} * {quantity} und</p>
            <p className="m-0 fs-6" data-testid="price">${showWithPoints(priceTotalByItem)}</p>
            {
              originalPrice && (
                <p className="text-secondary text-start text-decoration-line-through" data-testid="original-price">
                  ${showWithPoints(originalPrice)}
                </p>
              )
            }
          </div>
        </div>
      </div>
      <button
        data-testid="btn-remove"
        onClick={handleRemoveItem}
        className="btn w-auto mt-2"
      >
        <GoTrash />
      </button>
    </section>
  );
};

export default CartItem;
