import { render, fireEvent } from '@testing-library/react';
import { useRouter } from 'next/router';
import { CartProvider } from '@/context/cart';
import ProductDetail from '.';
import { MOCK_CART_CONTEXT } from '@/mocks/context';
import { PRODUCT_ITEM_NORMALIZE } from '@/mocks/client/produc';
import { PRODUCT_DETAIL_CART } from '@/mocks/productDetail';
import wordings from '@/wordings';

jest.mock('next/router', () => ({
  useRouter: jest.fn()
}));

(useRouter as jest.Mock).mockReturnValue({
  query: { category: 'test', offset: '0' },
  push: jest.fn((params: any) => params)
});

beforeEach(() => {
  jest.clearAllMocks();
});

const renderProductDetail = (props = {}) =>{
  const basicProps = { ...PRODUCT_ITEM_NORMALIZE, ...props };

  return (
    render(
      <CartProvider value={MOCK_CART_CONTEXT}>
        <ProductDetail { ...basicProps } />
      </CartProvider>
    )
  )
};

describe('<ProductDetail />', () => {
  test('correctly render', () => {
    renderProductDetail();
  });

  test('renders product details correctly', () => {
    const { getByText, } = renderProductDetail();

    const titleElement = getByText(PRODUCT_ITEM_NORMALIZE.title);
    expect(titleElement).toBeInTheDocument();

    const priceElement = getByText(/9.795/);
    expect(priceElement).toBeInTheDocument();

    const addButton = getByText(wordings.product.addButtom);
    expect(addButton).toBeInTheDocument();
  });

  test('changes quantity correctly when increase and decrease buttons are clicked', () => {
    const { getByRole, getByText } = renderProductDetail();
  
    const quantityInput = getByRole('spinbutton') as HTMLInputElement;
    expect(quantityInput.value).toBe('1');

    const increaseButton = getByRole('button', { name: '+' });
    const decreaseButton = getByRole('button', { name: '-' });

    fireEvent.click(increaseButton);
    fireEvent.click(increaseButton);
    fireEvent.click(increaseButton);
    fireEvent.click(decreaseButton);

    const addButton = getByText(wordings.product.addButtom);
    fireEvent.click(addButton)

    expect(MOCK_CART_CONTEXT.addProductToCart).toBeCalledWith(PRODUCT_DETAIL_CART);
  });

  test('disables add to cart button when out of stock', () => {
    const outOfStockProps = { ...PRODUCT_ITEM_NORMALIZE, availableQuantity: 0 };

    const { getByText } = renderProductDetail(outOfStockProps);

    const outOfStock = getByText(wordings.product.outOfStock) as HTMLButtonElement;
    expect(outOfStock).toBeInTheDocument();
  });
});
