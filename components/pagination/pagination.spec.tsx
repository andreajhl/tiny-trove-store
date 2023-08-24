import { render, fireEvent } from '@testing-library/react';
import { useRouter } from 'next/router';
import Pagination from '.';

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

const renderPagination = (total: number) => (
  render(
    <Pagination
      visiblePages={total}
      customRedirect={jest.fn()}
    />
  )
);

describe('<Pagination />', () => {
  test('renders pagination correctly', () => {
    const totalPageMock = 10;
    renderPagination(totalPageMock);
  });

  test('clicking on a page button navigates correctly', () => {
    const totalPageMock = 10;
    const { getAllByRole } = renderPagination(totalPageMock);

    const pageButtons = getAllByRole('listitem');
    expect(pageButtons).toHaveLength(5);

    fireEvent.click(pageButtons[2]);
    expect(useRouter().push).toHaveBeenCalled();
  });

  test('when the maximum number of available pages is reached, disable the button', () => {
    const totalPageMock = 3;
    const { getByTestId } = renderPagination(totalPageMock);

    const nextButton = getByTestId('next-button');

    fireEvent.click(nextButton);
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);

    expect(useRouter().push).toHaveBeenCalledTimes(3);
  });

  test('when the min number of zero is reached, disable the button', () => {
    const totalPageMock = 3;
    const { getByTestId } = renderPagination(totalPageMock);

    const nextButton = getByTestId('next-button');
    const prevButton = getByTestId('prev-button');

    fireEvent.click(prevButton);
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);
    fireEvent.click(prevButton);

    expect(useRouter().push).toHaveBeenCalledTimes(3);
  });
});
