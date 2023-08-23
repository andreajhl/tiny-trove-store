import { useContext, useState } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import Carousel from '../../ui/Carousel';
import { CartContext } from '@/context/cart';
import { roundToTwoDecimals, showWithPoints } from '@/utils/numbers';
import wordings from '@/wordings';
import { ProductDetailProps } from '@/interfaces/components/products/productDetail';
import './styles.scss';

const ProductDatil = (props: ProductDetailProps) => {
  const { addProductToCart } = useContext(CartContext);
  const { product: { quantity, outOfStock, addButtom, available } } = wordings;
  const { id, title, price, thumbnail, originalPrice, availableQuantity, pictures } = props;

  const calcultePercentageDiscount = (initialPrice: number, finalPrice: number) => {
    const pertencage = ((initialPrice - finalPrice) / finalPrice) * 100;

    return roundToTwoDecimals(pertencage);
  };

  const [countItem, setCountItem] = useState(1);

  const addCountItem = () => {
    if(countItem + 1 > availableQuantity) return;
    setCountItem(prev => prev + 1);
  };

  const substraCountItem = () => {
    if(countItem - 1 < 1) return;
    setCountItem(prev => prev - 1);
  }

  const addItemCart = () => {
    addProductToCart({
      id,
      title,
      thumbnail,
      price,
      originalPrice,
      availableQuantity,
      quantity: countItem
    })
  };

  return (
    <div className="product-detail">
      <div className="product-detail-content">
        <div className="product-detail-content__carousel">
          <Carousel pictures={pictures} />
        </div>
        <div className="product-detail-content__data">
          <div className="ps-4 fw-bold">
            <h1 className="product-detail-content__data-title">{title}</h1>
            <div className="text-start mt-4">
              {
                originalPrice ? (
                  <div className="product-detail-content__data-discount">
                    <p className="product-detail-content__data-discount-price--through">{showWithPoints(originalPrice)}</p>
                    <p className="product-detail-content__data-discount-price">{showWithPoints(price)}</p>
                    <p className="product-detail-content__data-discount-percentage">{calcultePercentageDiscount(originalPrice, price)}</p>
                  </div>
                )
                : <p className="product-detail-content__data-price">{showWithPoints(price)}</p>
              }
            </div>
            <div>
              {
                availableQuantity ? (
                  <>
                    <div className="product-detail-content__data-units">
                      <p className="fw-normal">{quantity}</p>
                      <div className="product-detail-content__data-units-input">
                        <button className="btn bg-dark-subtle rounded-circle" onClick={substraCountItem}>-</button>
                        <input type="number" className="form-control w-25" value={countItem} readOnly />
                        <button className="btn bg-dark-subtle rounded-circle" onClick={addCountItem}>+</button>
                        <p className="text-body-tertiary fw-light">{availableQuantity} {available}</p>
                      </div>
                    </div>
                    <button className="product-detail-content__data-btn-cart" onClick={addItemCart}>
                      <FiShoppingCart /> {addButtom}
                    </button>
                  </>
                )
                : <p className="">{outOfStock}</p>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDatil;
