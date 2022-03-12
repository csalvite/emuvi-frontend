import { useNavigate, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Slider from '@mui/material/Slider';
import Rating from '@mui/material/Rating';

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

  const [minPrice = 1, setMinPrice] = useState(
    params.has('minPrice') ? params.get('minPrice') : ''
  );

  const [maxPrice] = useState(10000);
  if (maxPrice) {
    params.get('maxPrice');
  } else {
    params.get('');
  }

  useEffect(() => {
    setParams({
      minPrice,
      maxPrice,
      search,
      order,
      direction,
      rating,
    });
  }, [direction, params, setParams, order, search, rating, minPrice, maxPrice]);
  console.log(rating);
  let navigate = useNavigate();
  const cleanFilter = (e) => {
    e.preventDefault();
    navigate(
      `/products?minPrice=&maxPrice=10000&search=&order=&direction=&rating=`
    );
  };

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
      <div>
        <h4>Categorías:</h4>
        <forms>
          <input
            type='radio'
            name='categorias'
            value='informatica'
            id='informatica'
            checked={search === 'informatica'}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <label for='informatica'>Infórmatica</label>
          <input
            type='radio'
            value='musica'
            id='musica'
            checked={search === 'musica'}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            name='categorias'
          />
          <label for='musica'>Música</label>
          <input
            type='radio'
            value='videojuegos'
            checked={search === 'videojuegos'}
            id='videojuegos'
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            name='categorias'
          />
          <label for='videojuegos'>Videojuegos</label>
          <input
            type='radio'
            value='video'
            checked={search === 'video'}
            id='video'
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            name='categorias'
          />
          <label for='video'>Video</label>
          <input
            type='radio'
            value='modavintage'
            checked={search === 'modavintage'}
            id='modavintage'
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            name='categorias'
          />
          <label for='modavintage'>Moda Vintage</label>
          <input
            type='radio'
            value='otros'
            checked={search === 'otros'}
            id='otros'
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            name='categorias'
          />
          <label for='otros'>Otros</label>
        </forms>
      </div>
      <div>
        {minPrice <= 1 && maxPrice >= 10000 ? (
          <h4>Filtrar por precio:</h4>
        ) : (
          <p>{`${minPrice}€ - ${maxPrice}€`}</p>
        )}
        <Slider
          sx={{ width: '14.5rem' }}
          color='secondary'
          min={1}
          max={10000}
          step={10}
          value={minPrice}
          onChange={(e) => {
            setMinPrice(e.target.value);
          }}
          valueLabelDisplay='auto'
        />
      </div>

      <div>
        <h4>Opiniones del vendedor:</h4>
        <Rating
          name='rating'
          value={Number(rating)}
          onChange={(e) => {
            setRating(Number(e.target.value));
          }}
        />
      </div>
      <button on Click={cleanFilter}>
        Borrar filtros
      </button>
    </>
  );
}

export default FilterProducts;
