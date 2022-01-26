import React, { useContext } from 'react';
import { LoginButton } from './users/LoginButton';
import { Link } from 'react-router-dom';
import { ProfileHeader } from './users/ProfileHeader';

import './Header.css';
import { TokenContext } from '..';

function Header1() {
  const [token] = useContext(TokenContext);

  return (
    <div>
      <header>
        <video autoPlay loop muted src="./resources/videos/HeaderVideoBG.mp4">
          Video cannot be loaded :(
        </video>
        <nav>
          <a href="#" className="logo">
            <i className="fas fa-globe-africa"></i>EMUVI
          </a>
          <div className="search_box">
            <input type="search" placeholder="Encontrar algo..." />
            <span className="fas fa-search"></span>
          </div>

          {token ? 
          <>
            <ProfileHeader />
          </> : 
          <LoginButton />
        }
        </nav>
      
        <div className="header-container">
          <h2>EL MUNDO VINTAGE</h2>
          <h3>COMPRA-VENTA DE ARTÍCULOS RETRO</h3>
          <Link to="/products">
            <button className="products-button">PRODUCTOS</button>
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Header1;
