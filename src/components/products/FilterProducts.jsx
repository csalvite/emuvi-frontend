import { useSearchParams } from 'react-router-dom';

import { useState, useEffect } from 'react';
import Slider from '@mui/material/Slider';
import Rating from '@mui/material/Rating';

import './FilterProducts.css';
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

  const [minPrice, setMinPrice] = useState(1);

  const [maxPrice, setMaxPrice] = useState(1000);

  useEffect(() => {
    const param = {};

    if (minPrice !== 1) param.minPrice = minPrice;
    if (maxPrice !== 1000) param.maxPrice = maxPrice;
    if (search) param.search = search;
    if (direction) param.direction = direction;
    if (rating) param.rating = rating;
    if (order) param.order = order;

    setParams(param);
  }, [minPrice, maxPrice, search, order, direction, rating, params, setParams]);
  function reset() {
    setDirection('');
    setSearch('');
    setMinPrice('');
    setMaxPrice('');
    setRating('');
    setOrder('');
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
          <div>
            {minPrice <= 1 && maxPrice >= 1000 ? (
              <h4>Filtrar por precio:</h4>
            ) : (
              <p>{`${minPrice}€ - ${maxPrice}€`}</p>
            )}
            <Slider
              sx={{ width: '14.5rem' }}
              color='secondary'
              min={1}
              max={1000}
              step={5}
              defaultvalue={[minPrice, maxPrice]}
              onChange={(e, value) => {
                setMinPrice(value[0]);
                setMaxPrice(value[1]);
              }}
              onChangeCommitted={(e, value) => {
                setMinPrice(value[0]);
                setMaxPrice(value[1]);
              }}
              valueLabelDisplay='auto'
            />
          </div>

          <div className='filters-categories-container'>
            <form>
              <p className='filters-subtitle'>Categoría:</p>
              <input
                className='filters-radio-input'
                type='radio'
                name='categorias'
                value='informatica'
                id='informatica'
                checked={search === 'informatica'}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
              <label for='informatica' className='radio-label'>
                Infórmatica
              </label>
              <input
                className='filters-radio-input'
                type='radio'
                value='musica'
                id='musica'
                checked={search === 'musica'}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                name='categorias'
              />
              <label for='musica' className='radio-label'>
                Música
              </label>
              <input
                className='filters-radio-input'
                type='radio'
                value='videojuegos'
                checked={search === 'videojuegos'}
                id='videojuegos'
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                name='categorias'
              />
              <label for='videojuegos' className='radio-label'>
                Videojuegos
              </label>
              <input
                className='filters-radio-input'
                type='radio'
                value='video'
                checked={search === 'video'}
                id='video'
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                name='categorias'
              />
              <label for='video' className='radio-label'>
                Video
              </label>
              <input
                className='filters-radio-input'
                type='radio'
                value='modavintage'
                checked={search === 'modavintage'}
                id='modavintage'
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                name='categorias'
              />
              <label for='modavintage' className='radio-label'>
                Moda Vintage
              </label>
              <input
                className='filters-radio-input'
                type='radio'
                value='otros'
                checked={search === 'otros'}
                id='otros'
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                name='categorias'
              />
              <label for='otros' className='radio-label'>
                Otros
              </label>
            </form>
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
