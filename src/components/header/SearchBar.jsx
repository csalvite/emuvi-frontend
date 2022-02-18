import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
// import ProductList from '../page/products/ProductList';
const SearchBar = (props) => {
  const [params, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState(params.get('search'));

  let navigate = useNavigate();
  useEffect(() => {
    setSearchParams({ search: encodeURIComponent(search) });
  }, [search, params, setSearchParams]);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/products?&search=${encodeURIComponent(search)}`);
  };

  return (
    <div className='search_box'>
      <form onSubmit={handleSubmit}>
        <input
          placeholder='Busca tu producto...'
          type='text'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
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
