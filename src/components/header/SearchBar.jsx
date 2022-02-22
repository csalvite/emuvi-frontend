import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
// import ProductList from '../page/products/ProductList';
const SearchBar = (props) => {
  const [params, setSearchParams] = useSearchParams();

  // const [search, setSearch] = useState(params.get('search'));
  const [search, setSearch] = useState(params.get('search'));

  let navigate = useNavigate();
  useEffect(() => {
    setSearchParams({ search: encodeURIComponent(search) });
  }, [search, params, setSearchParams]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search) {
      let path = `/products?&search=${encodeURIComponent(search)}`;
      navigate(path);
    } else navigate(`/`);
  };

  return (
    <div className='search_box'>
      <form onSubmit={handleSubmit}>
        <input
          autoFocus
          placeholder='Busca tu producto...'
          type='search'
          name='product'
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
