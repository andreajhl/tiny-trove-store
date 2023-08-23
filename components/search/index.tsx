import { ChangeEvent, FormEvent, useState } from 'react';
import { PiMagnifyingGlassBold } from 'react-icons/pi';
import { normalizeText } from '@/utils/strings';
import wordings from '@/wordings';
import { useRouter } from 'next/router';
import { useDebounce } from '@/hooks/useDebounce';

const INTERVAL_TIME = 1000;

const Search = () => {
  const { navbar: { placeholder } } = wordings;

  const router = useRouter();
  const [search, setSearch] = useState('');

  const handleRedirect = () => {
    if (search.length) {
      router.push({
        pathname: '/search',
        query: { q: search, offset: 0 },
      });
    }
  };

  const debouncedRedirect = useDebounce(handleRedirect, INTERVAL_TIME);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const normalizedText = normalizeText(event.target.value);
    setSearch(normalizedText);
    debouncedRedirect();
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleRedirect();
  };

  return (
    <div className='w-100'>
      <form
        role="search"
        onSubmit={handleSubmit}
        className="form-control d-flex justify-content-around"
      >
        <input
          type="search"
          onChange={handleChange}
          aria-label={placeholder}
          placeholder={placeholder}
          className="border border-0 w-75"
        />
        <button className="btn" type="submit">
          <PiMagnifyingGlassBold />
        </button>
      </form>
    </div>
  );
};

export default Search;
