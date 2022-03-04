import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

function DirectionProducts(props) {
  const [params, setSearchParams] = useSearchParams('');

  const [direction, setDirection] = useState(
    params.has('direction') ? params.get('direction') : ''
  );

  // useEffect(() => {
  //   setSearchParams({ direction: encodeURIComponent(direction) });
  // }, [direction, params, setSearchParams]);
  return (
    <div className='container_input'>
      <label htmlFor='form_product_category'></label>
      <select
        placeholder='Categoría'
        value={direction}
        onChange={(e) => {
          setDirection(e.target.value);
        }}
        className='select_product_category'
        name='form_product_category'
      >
        <option hidden selected>
          ORDENAR PRECIO:
        </option>
        <option value='ASC'>ORDEN ASCENDENTE</option>
        <option value='DESC'>ORDEN DESCENDENTE</option>
      </select>
    </div>
  );
}

export default DirectionProducts;
