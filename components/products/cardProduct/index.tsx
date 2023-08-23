import { useContext } from "react";
import Image from "next/image";
import { ProductCardProps } from "@/interfaces/components/products/cardProduct";
import { showWithPoints } from "@/utils/numbers";
import wordings from "@/wordings";
import { CartContext } from "@/context/cart";
import Link from "next/link";

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
      className="card text-lowercase text-center p-2 m-2 col-xs-12 col-sm-8 col-md-6 col-lg-2"
    >
      <Image src={thumbnail} className="card-img-top" alt={title} width={288} height={200}/>
      <div className="card-body">
        {
          originalPrice && (
            <p className="text-secondary text-start fw-light m-0 fs-6 text-decoration-line-through">
              ${showWithPoints(originalPrice)} /
            </p>
          )
        }
        <p className="card-text text-start text-dark fw-light fs-6 m-0">${showWithPoints(price)}</p>
        <Link href={`/product/${id}`} className="text-decoration-none text-dark-emphasis">
          <h3 className="mt-2 fs-6 fw-semibold text-lowercase" aria-current="page">{title}</h3>
        </Link>
      </div>
      <button className="btn bg-info text-light text-uppercase w-100" onClick={addItemCart}>{addButton}</button>
    </section>
  );
};

export default ProductCard;
