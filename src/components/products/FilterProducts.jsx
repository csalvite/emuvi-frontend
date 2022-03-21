import { useSearchParams } from 'react-router-dom';

import { useState, useEffect } from 'react';

import SelectOrder from './SelectOrder';

import './FilterProducts.css';

import SelectDirection from './SelectDirection';
import { Rating } from '@mui/material';
import RadioCategories from './RadioCategories';
import Sliderprice from './Sliderprice';

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
  const [rating, setRating] = useState(
    params.has('rating') ? params.get('rating') : ''
  );

  const [prices, setPrices] = useState(
    params.has('minPrice')
      ? [params.get('minPrice'), params.get('maxPrice')]
      : ''
  );

  const [sliderNums, setSliderNums] = useState(
    params.has('minPrice')
      ? [params.get('minPrice'), params.get('maxPrice')]
      : [0, 999]
  );

  const handleChangePrices = (event, newValue) => {
    setSliderNums(newValue);
  };

  useEffect(() => {
    const param = {};

    if (search) param.search = search;
    if (direction) param.direction = direction;
    if (rating) param.rating = rating;
    if (order) param.order = order;
    if (prices) param.minPrice = prices[0];
    if (prices) param.maxPrice = prices[1];

    setParams(param);
  }, [search, order, direction, rating, params, prices, setParams]);
  function reset() {
    setDirection('');
    setSearch('');
    setRating('');
    setOrder('');
    setPrices('');
  }
  return (
    <>
      <div className='accordion'>
        <label className='accordion-label' for='accordion1'>
          <h3 className='filter-title'>
            FILTRAR PRODUCTOS
            <i className='fa-solid fa-sort filter-icon'></i>
          </h3>
        </label>
        <input type='checkbox' id='accordion1'></input>
        <div className='accordion-inputs-container'>
          <SelectOrder order={order} setOrder={setOrder} />
          <SelectDirection direction={direction} setDirection={setDirection} />
          <div className='filters-rating-container'>
            <p className='filters-subtitle'>Valoraciones del vendedor:</p>

            <Rating
              name='rating'
              value={Number(rating)}
              onChange={(e) => {
                setRating(Number(e.target.value));
              }}
            />
          </div>
          <Sliderprice
            handleChangePrices={handleChangePrices}
            sliderNums={sliderNums}
            setPrices={setPrices}
          />

          <div className='filters-categories-container'>
            <RadioCategories search={search} setSearch={setSearch} />
            <div className='clean-filter-button'>
              <button onClick={reset}>Limpiar Filtros</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FilterProducts;
