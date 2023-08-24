import { render } from '@testing-library/react';
import { useRouter } from 'next/router';
import ProductList from '.';
import { CartProvider } from '@/context/cart';
import { MOCK_CART_CONTEXT } from '@/mocks/context';
import { ProductItem } from '@/interfaces/client/products';
import { PRODUCT_ITEM_NORMALIZE, PRODUCT_LIST_NORMALIZE } from '@/mocks/client/produc';

jest.mock('next/router', () => ({
  useRouter: jest.fn()
}));

(useRouter as jest.Mock).mockReturnValue({
  query: { category: 'test', offset: '0' },
  push: jest.fn((params: any) => params)
});

const renderProductList = (total: number, productList: ProductItem[]) =>(
  render(
    <CartProvider value={MOCK_CART_CONTEXT}>
      <ProductList
        customRedirect={jest.fn()}
        productList={productList}
        totalItems={total}
      />
    </CartProvider>
  )
);

describe('<ProductList />', () => {
  test('correctly render', () => {
    renderProductList(2, PRODUCT_LIST_NORMALIZE);
  });

  test('renders product list and pagination correctly', () => {
    const totalMock = 25; 
    const productListMock = new Array(totalMock).fill(0).map(() => PRODUCT_ITEM_NORMALIZE);

    const { getAllByTestId, getByRole } = renderProductList(totalMock, productListMock);

    const productCards = getAllByTestId('product-card');
    expect(productCards).toHaveLength(totalMock);

    const pagination = getByRole('list');
    expect(pagination).toBeInTheDocument();
  });

  test('does not render pagination if totalPage is less than or equal to 1', () => {
    const totalMock = PRODUCT_LIST_NORMALIZE.length; 
    const { queryByTestId } = renderProductList(totalMock, PRODUCT_LIST_NORMALIZE);

    const pagination = queryByTestId('pagination');
    expect(pagination).toBeNull();
  });
});
