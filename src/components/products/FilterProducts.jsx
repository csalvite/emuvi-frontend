import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function FilterProducts() {
  const [params, setParams] = useSearchParams('');
  const [search, setSearch] = useState(
    params.has('search') ? params.get('search') : ''
  );
  const [direction, setDirection] = useState(
    params.has('direction') ? params.get('direction') : ''
  );
  const [order, setOrder] = useState(
    params.has('order') ? params.get('order') : ''
  );
  useEffect(() => {
    setParams({
      search,
      order,
      direction,
    });
  }, [direction, params, setParams, order, search]);

  return (
    <>
      <div className='container_input'>
        <label htmlFor='form_product_category'></label>
        <select
          value={order}
          onChange={(e) => {
            setOrder(e.target.value);
          }}
          className='select_product_category'
          name='form_product_category'
        >
          <option hidden selected>
            Filtros:
          </option>
          <option value='price'>Por precio</option>

          <option value='createdAt'>Por fecha</option>
          <option value='name'>Por orden alfabetico</option>
          <option value='rating'>Por valoraciones</option>
        </select>
      </div>

      <div className='container_input'>
        <label htmlFor='form_product_category'></label>
        <select
          value={direction}
          onChange={(e) => {
            setDirection(e.target.value);
            console.log(e.target.value);
          }}
          className='select_product_category'
          name='form_product_category'
        >
          <option hidden selected>
            ORDENAR PRECIO:
          </option>
          <option value='ASC'>Ascendente</option>
          <option value='DESC'>Descendente</option>
        </select>
      </div>
    </>
  );
}

export default FilterProducts;
