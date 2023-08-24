import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { PiMagnifyingGlassBold } from 'react-icons/pi';
import { normalizeText } from '@/utils/strings';
import wordings from '@/wordings';
import { useRouter } from 'next/router';
import { useDebounce } from '@/hooks/useDebounce';
import './styles.scss';

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

      setSearch('');
    };
  };

  const debouncedRedirect = useDebounce(handleRedirect, INTERVAL_TIME);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const normalizedText = normalizeText(event.target.value);
    setSearch(normalizedText);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleRedirect();
  };

  useEffect(() => {
    if(search.length) debouncedRedirect();
  }, [search]);

  return (
    <div className="search">
      <form
        onSubmit={handleSubmit}
        className="search__form-control"
      >
        <input
          onChange={handleChange}
          aria-label={placeholder}
          placeholder={placeholder}
          className="search__form-control-input"
        />
        <button className="search__form-control-btn" type="submit">
          <PiMagnifyingGlassBold />
        </button>
      </form>
    </div>
  );
};

export default Search;
