import { render } from '@testing-library/react';
import Carousel from '.';
import { carouselImages } from '@/constants/carousel';

const renderCarousel = () => render(<Carousel pictures={carouselImages} />);

describe('<Carousel />', () => {
  test('renders correctly', () => {
    renderCarousel()
  });

  test('shows a slide for each item in the array', () => {
    const { getAllByRole } = renderCarousel();
    const slides = getAllByRole('img');

    expect(slides).toHaveLength(carouselImages.length)
  });
});
