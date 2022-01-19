import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header1() {
  return (
    <header>
      <video autoPlay loop muted src="./resources/videos/retro tv.mp4">
        Video cannot be loaded :(
      </video>
      <nav>
        <a href="#" class="logo">
          <i className="fas fa-globe-africa"></i>EMUVI
        </a>
        <div className="search_box">
          <input type="search" placeholder="Encontrar algo..." />
          <span class="fas fa-search"></span>
        </div>
        <button type="submit" class="btn">
          LOGIN/REGISTER
        </button>
      </nav>

      <div className="header-container">
        <h2>EL MUNDO VINTAGE</h2>
        <h3>COMPRA-VENTA DE ARTÍCULOS RETRO</h3>
        <Link to="/products">
          <button className="btn">PRODUCTOS</button>
        </Link>
      </div>
    </header>
  );
}

export default Header1;
