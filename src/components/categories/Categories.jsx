import React from 'react';
import './Categories.css';
import { Link } from 'react-router-dom';

function Categories() {
  const category = [
    {
      title: 'Informatica',
      image: './resources/vectors/informática icon',
    },
    {
      title: 'Videojuegos',
      image: './resources/vectors/videojuegos icon',
    },
    {
      title: 'Musica',
      image: './resources/vectors/música icon',
    },
    {
      title: 'Moda Vintage',
      image: './resources/vectors/moda vintage icon',
    },

    {
      title: 'Video',
      image: './resources/vectors/video icon',
    },
    {
      title: 'Otros',
      image: './resources/vectors/otros icon',
    },
  ];

  const categorylist = category.map((cat, index) => (
    <li key={index}>
      <Link
        to={`/products?search=${cat.title}
          `}
      >
        <img src={cat.image} alt='categories'></img>
        <h4>{cat.title}</h4>
      </Link>
    </li>
  ));

  return (
    <section className='categories'>
      <h3 className='category-title'>CATEGORÍAS</h3>

      <ul className=''>{categorylist}</ul>
    </section>
  );

  /* return (
    <section className="categories">
      <div className="wrapper">
        <h3 className="category-title">CATEGORÍAS</h3>

        <div className="categories-container">
          <div className="category">
            <img
              src="./resources/vectors/informática icon"
              alt="informatica icon"
            ></img>
            <h4>Informática</h4>
          </div>
          <div className="category">
            <img
              src="./resources/vectors/videojuegos icon"
              alt="videojuegos icon"
            ></img>
            <h4>Videojuegos</h4>
          </div>
          <div className="category">
            <img src="./resources/vectors/música icon" alt="musica icon"></img>
            <h4>Música</h4>
          </div>
          <div className="category">
            <img
              src="./resources/vectors/moda vintage icon"
              alt="moda vintage icon"
            ></img>
            <h4>Moda vintage</h4>
          </div>
          <div className="category">
            <img src="./resources/vectors/video icon" alt="video icon"></img>
            <h4>Vídeo</h4>
          </div>
          <div className="category">
            <img src="./resources/vectors/otros icon" alt="otros icon"></img>
            <h4>Otros</h4>
          </div>
        </div>
      </div>
    </section>
  ); */
}

export default Categories;
