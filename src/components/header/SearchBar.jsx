import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const SearchBar = () => {
  const [params, setSearchParams] = useSearchParams('');

  const [search, setSearch] = useState(
    params.has('search') ? params.get('search') : ''
  );
  useEffect(() => {
    const param = {};
    // if (params.has('search')) {
    //   setSearchParams({ search: encodeURIComponent(search) });
    // } else {
    //   setSearchParams(params);
    // }
    if (search) param.search = search;
    setSearchParams(param);
  }, [params, setSearchParams, search]);
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search) {
      let path = `/products?&search=${encodeURIComponent(search)}`;
      navigate(path);
    } else {
      navigate(`/products`);
    }
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
