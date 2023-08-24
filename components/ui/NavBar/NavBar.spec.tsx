import { render } from '@testing-library/react';
import { useRouter } from 'next/router';
import NavBar from '.';
import { CartProvider } from '@/context/cart';

jest.mock('next/router', () => ({
  useRouter: jest.fn()
}));

(useRouter as jest.Mock).mockReturnValue({
  query: { category: 'test', offset: '0' },
  push: jest.fn((params: any) => params)
});

const renderNavBar = () =>(
  render(
    <CartProvider>
      <NavBar />
    </CartProvider>
  )
);

describe('<NavBar />', () => {
  test('renders correctly', () => {
    const { getByRole } = renderNavBar();

    const navBarElement = getByRole('navigation');
    expect(navBarElement).toBeInTheDocument();
  });
});
