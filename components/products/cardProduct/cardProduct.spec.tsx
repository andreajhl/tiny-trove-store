import { render, fireEvent, waitFor } from '@testing-library/react';
import { CartProvider } from '@/context/cart';
import ProductCard from '.';
import { PRODUCT_ITEM_NORMALIZE } from '@/mocks/client/produc';
import wordings from '@/wordings';
import { MOCK_CART_CONTEXT } from '@/mocks/context';

const renderCardProduct = () =>(
  render(
    <CartProvider value={MOCK_CART_CONTEXT}>
      <ProductCard { ...PRODUCT_ITEM_NORMALIZE } />
    </CartProvider>
  )
);

describe('ProductCard />', () => {
  test('renders ProductCard correctly', () => {
    const { getByText } = renderCardProduct();
  
    const titleElement = getByText(PRODUCT_ITEM_NORMALIZE.title);
    expect(titleElement).toBeInTheDocument();
  });

  test('when clicking the add button executes the function to add to the context', () => {
    const { getByRole } = renderCardProduct();
  
    const addButton = getByRole('button', { name: wordings.cart.addButton });
    fireEvent.click(addButton);
  
    expect(MOCK_CART_CONTEXT.addProductToCart).toBeCalled()
  });
  
  test('when clicking the title executes redirect', () => {
    const { getByRole } = renderCardProduct();
  
    const titleLink = getByRole('link', { name: PRODUCT_ITEM_NORMALIZE.title });
    expect(titleLink.getAttribute('href')).toBe(`/product/${PRODUCT_ITEM_NORMALIZE.id}`);
  })
})

