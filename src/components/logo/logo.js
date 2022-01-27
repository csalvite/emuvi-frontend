import React from 'react';
import { Link } from 'react-router-dom';
import './logo.css';

const Logo = () => {
  return (
    <nav>
      <a href='#' className='logo'>
        <i id='globo' className='fas fa-globe-africa'></i>EMUVI{' '}
        <p className='Rreg'>®</p>
      </a>
    </nav>
  );
};

export default Logo;
