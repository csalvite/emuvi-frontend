import React from 'react';
import './Categories.css';

function Categories() {
  return (
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
  );
}

export default Categories;
