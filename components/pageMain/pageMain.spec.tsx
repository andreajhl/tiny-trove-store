import { render } from '@testing-library/react';
import "@testing-library/jest-dom";
import PageMain from '.';
import { categories } from '@/constants/categories';

const renderPageMain = () => render(<PageMain />);

describe('<PageMain />', () => {
  test('basic render', () => {
    renderPageMain();
  });

  test('renders the carousel correctly with the advertising items', () => {
    const { getAllByTestId, getByTestId } = renderPageMain();

    const btnNextSlide = getByTestId('btn-next');
    const btnPrevSlide = getByTestId('btn-prev');
    const slides = getAllByTestId('carousel-item');

    expect(btnNextSlide).toBeInTheDocument();
    expect(btnPrevSlide).toBeInTheDocument();
    expect(slides).toHaveLength(3);
  });

  test('renders the card info correctly', () => {
    const { getAllByTestId } = renderPageMain();

    const cardsInfo = getAllByTestId('card-info');
    expect(cardsInfo).toHaveLength(3);
  });

  test('navigate to the correct url when the banner card is clicked', () => {
    const { getAllByRole } = renderPageMain();
    const { id } = categories[0];

    const [cardCategory] = getAllByRole('link');
    expect(cardCategory.getAttribute('href')).toBe(`/category/${id}?offset=0`);
  });
});
