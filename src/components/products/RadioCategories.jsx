import React from 'react';

function RadioCategories({ search, setSearch }) {
  return (
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
  );
}

export default RadioCategories;
