import { fireEvent, render } from '@testing-library/react';
import { CartProvider } from '@/context/cart';
import { CART } from '@/mocks/cart';
import CartCollapse from '.';

const renderCartCollapse = () => (
  render(
    <CartProvider value={{ cart: CART }}>
      <CartCollapse />
    </CartProvider>
  )
);

describe('<CartCollapse />', () => {
  test('basic render', () => {
    renderCartCollapse();
  });

  test('renders an item per box key of the cart object', () => {
    const { getAllByTestId } = renderCartCollapse();
    const totalItems = Object.keys(CART).length;

    const itemsCart = getAllByTestId("cart-item");
    expect(itemsCart).toHaveLength(totalItems);
  });

  test('shows the total cost of all items', () => {
    const { getByTestId } = renderCartCollapse();

    const finalPrice = getByTestId("final-price");
    expect(finalPrice.textContent).toContain("54.690");
  });

  test('when the delete button is clicked, it executes the update of the state', () => {
    const { getAllByTestId } = renderCartCollapse();
    const totalItems = Object.keys(CART).length;

    const cartItems = getAllByTestId('cart-item');
    expect(cartItems).toHaveLength(totalItems)

    const removeBtn = getAllByTestId('btn-remove')[0];
    fireEvent.click(removeBtn);

    expect(getAllByTestId('cart-item')).toHaveLength(totalItems);
  });
});
