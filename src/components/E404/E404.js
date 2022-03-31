import React from 'react';
import Logo from '../logo/logo';
import './E404.css';
import Footer from '../footer/Footer';
import NoLandscape from '../../components/noLandscape/NoLandscape';

const E404 = () => {
  return (
    <div className='E404'>
      <NoLandscape />
      <Logo className='logo-404'></Logo>
      <div className='Imagenn404'>
        <img
          className='imagen404'
          src='../resources/images/ninos404.png'
          alt='Error 404'
        ></img>
        <div className='TextoYBoton'>
          <h1 className='h1-404'>Ups... Error 404</h1>
          <h2 className='h2-404'>
            Parece que tenemos problemas en encontrar eso
          </h2>
          <a href={`https://www.emuviproject.net`} className='logo'>
            <button className='products-button'>Volver</button>
          </a>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default E404;
