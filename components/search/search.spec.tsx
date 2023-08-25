import { render, fireEvent, waitFor } from '@testing-library/react';
import { useRouter } from 'next/router';
import Search from '.';

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

beforeAll(() => {
  jest.useFakeTimers();
});

afterAll(() => {
  jest.useRealTimers();
});

const renderSearch = () => render(<Search />);

describe('<Search />', () => {
  test('renders Search correctly', () => {
    const { container } = renderSearch();
    expect(container).toBeInTheDocument();
  });

  test('should update search state on input change', () => {
    const { getByRole } = renderSearch();

    const input = getByRole('textbox') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'test' } });

    expect(input.value).toBe('test');
  });

  test('should debounce the redirection on input change', async () => {
    const clearTimeoutSpy = jest.spyOn(window, 'clearTimeout');
    const setIntervalSpy = jest.spyOn(window, 'setTimeout');

    const { getByRole } = renderSearch();

    const input = getByRole('textbox') as HTMLInputElement;
  
    fireEvent.change(input, { target: { value: 'test' } });
    fireEvent.change(input, { target: { value: 'testing' } });

    expect(clearTimeoutSpy).toHaveBeenCalled();

    jest.advanceTimersByTime(1000);

    expect(setIntervalSpy).toHaveBeenCalled();
    expect(useRouter().push).toHaveBeenCalledTimes(1);
  });

  test('should redirect on form submission', async () => {
    const { getByRole } = renderSearch();

    const input = getByRole('textbox') as HTMLInputElement;
    const submitButton = getByRole('button');

    fireEvent.change(input, { target: { value: 'test' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(useRouter().push).toHaveBeenCalledWith({
        pathname: '/search',
        query: { q: 'test', offset: 0 },
      })
    });
  });
});
