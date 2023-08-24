import { fireEvent, render } from '@testing-library/react';
import { CartProvider } from '@/context/cart';
import { CART } from '@/mocks/cart';
import CartItem from '.';

const mockRemoveCartProductm = jest.fn();
const ITEM = CART.MLA1173303642;

const renderCartItem = (props: Record<string, number | Function> = {}) => {
  const basicProps = { ...ITEM, ...props };
  const mockProvider = { removeCartProduct: mockRemoveCartProductm, }

  return render(
    <CartProvider value={mockProvider}>
      <CartItem {...basicProps} />
    </CartProvider>
  );
};

describe('<CartItem />', () => {
  test('basic render', () => {
    renderCartItem();
  });

  test('if the product has a discount, it shows the original price and the final one', () => {
    const { getByTestId } = renderCartItem({ originalPrice: 5000 });

    const originalPriceText = getByTestId('original-price');
    const priceText = getByTestId('price');

    expect(originalPriceText.textContent).toContain('5.000');
    expect(priceText.textContent).toContain('3.915');
  });

  test('when the delete button is clicked, it executes the update of the state', () => {
    const { getByRole } = renderCartItem();

    const removeBtn = getByRole('button');
    fireEvent.click(removeBtn);

    expect(mockRemoveCartProductm).toHaveBeenCalledWith(ITEM.id);
  });
});
