import React from 'react';
import './Header.css';

function Header1() {
  return (
    <nav>
      <a href="#" class="logo">
        <i class="fas fa-globe-africa"></i>EMUVI<span></span>
      </a>
      <div class="search_box">
        <input type="search" placeholder="Encontrar algo..." />
        <span class="fas fa-search"></span>
      </div>
      <button type="submit" class="btn">
        LOGIN/REGISTER
      </button>
    </nav>
  );
}

export default Header1;
