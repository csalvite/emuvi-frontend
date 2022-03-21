import React from 'react';

function SelectOrder({ order, setOrder }) {
  return (
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
          Filtrar por:
        </option>
        <option value='price'>Por precio</option>

        <option value='createdAt'>Por fecha</option>
        <option value='name'>Por orden alfabetico</option>
        <option value='rating'>Por valoraciones</option>
      </select>
    </div>
  );
}

export default SelectOrder;
