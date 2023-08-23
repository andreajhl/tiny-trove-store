import { useContext, useState } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import Carousel from '../../ui/Carousel';
import { CartContext } from '@/context/cart';
import { roundToTwoDecimals, showWithPoints } from '@/utils/numbers';
import wordings from '@/wordings';
import { ProductDetailProps } from '@/interfaces/components/products/productDetail';

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
    <div className="d-flex justify-content-center p-5">
      <div className="d-flex w-75">
        <div className="w-50 me-4">
          <Carousel pictures={pictures} />
        </div>
        <div className="w-50">
          <div className="ps-4 fw-bold">
            <h1 className="text-center text-dark-emphasis">{title}</h1>
            <div className="text-start mt-4">
              {
                originalPrice ? (
                  <div className="d-flex justify-content-start align-items-center">
                    <p className="text-secondary text-decoration-line-through fw-lighter fs-6 me-2">${showWithPoints(originalPrice)}</p>
                    <p className="text-info fs-3 me-3">${showWithPoints(price)}</p>
                    <p className="text-white bg-info p-2">{calcultePercentageDiscount(originalPrice, price)}%</p>
                  </div>
                )
                : <p className="fs-2 text-secondary-emphasis">${showWithPoints(price)}</p>
              }
            </div>
            <div>
              {
                availableQuantity ? (
                  <>
                    <div className="w-50 mt-4 mb-5">
                      <p className="fw-normal">{quantity}</p>
                      <div className="d-flex justify-content-between align-items-center w-100">
                        <button className="btn bg-dark-subtle rounded-circle" onClick={substraCountItem}>-</button>
                        <input type="number" className="form-control w-25" value={countItem} readOnly />
                        <button className="btn bg-dark-subtle rounded-circle" onClick={addCountItem}>+</button>
                        <p className="text-body-tertiary fw-light">{availableQuantity} {available}</p>
                      </div>
                    </div>
                    <button className="btn btn-secondary mt-2 w-100" onClick={addItemCart}>
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
