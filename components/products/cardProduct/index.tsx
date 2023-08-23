import { useContext } from "react";
import Image from "next/image";
import { ProductCardProps } from "@/interfaces/components/products/cardProduct";
import { showWithPoints } from "@/utils/numbers";
import wordings from "@/wordings";
import { CartContext } from "@/context/cart";
import Link from "next/link";
import './styles.scss';

const ProductCard = ({ thumbnail, title, price, originalPrice, id, availableQuantity }: ProductCardProps) => {
  const { addProductToCart, cart } = useContext(CartContext);
  const { cart: { addButton }} = wordings;

  const calculateQuantity = cart[id]?.quantity || 0;

  const addItemCart = () => {
    addProductToCart({
      id,
      title,
      thumbnail,
      price,
      originalPrice,
      availableQuantity,
      quantity: calculateQuantity + 1
    })
  };

  return (
    <section
      data-testid="product-card"
      className="product-card"
    >
      <Image src={thumbnail} className="card-img-top" alt={title} width={288} height={200}/>
      <div className="product-card__content-price">
        {
          originalPrice && (
            <p className="product-card__content-price--through">
              {showWithPoints(originalPrice)}
            </p>
          )
        }
        <p>{showWithPoints(price)}</p>
        <Link
          href={`/product/${id}`}
          className="product-card__content-price-title"
        >
          <h3 aria-current="page">{title}</h3>
        </Link>
      </div>
      <button
        className="product-card__btn-cart"
        onClick={addItemCart}
      >
        {addButton}
      </button>
    </section>
  );
};

export default ProductCard;
