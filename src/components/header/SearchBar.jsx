import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const SearchBar = () => {
  const [params, setSearchParams] = useSearchParams('');

  const [search, setSearch] = useState(
    params.has('search') ? params.get('search') : ''
  );

  let navigate = useNavigate();

  useEffect(() => {
    setSearchParams({ search: encodeURIComponent(search) });
  }, [search, params, setSearchParams]);

  const handleSubmit = (e) => {
    e.preventDefault();

    let path = `/products?&search=${encodeURIComponent(search)}`;

    navigate(path);
  };

  return (
    <div className='search_box'>
      <form onSubmit={handleSubmit}>
        <input
          autoFocus
          placeholder='Busca tu producto...'
          type='search'
          querysearch={search}
          name='product'
          value={search}
          onChange={(e) => {
            setSearch(e.target.value.toString());
          }}
        ></input>
        <span
          className='fas fa-search'
          onClick={handleSubmit}
          type='submit'
        ></span>
      </form>
    </div>
  );
};

export default SearchBar;
