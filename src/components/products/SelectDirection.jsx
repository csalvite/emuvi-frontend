import React from 'react';

function SelectDirection({ direction, setDirection }) {
  return (
    <div className='container_input'>
      <label htmlFor='form_product_category'></label>
      <select
        value={direction}
        onChange={(e) => {
          setDirection(e.target.value);
        }}
        className='select_product_category'
        name='form_product_category'
      >
        <option hidden selected>
          Ordenar Por:
        </option>
        <option value='ASC'>Ascendente</option>
        <option value='DESC'>Descendente</option>
      </select>
    </div>
  );
}

export default SelectDirection;
