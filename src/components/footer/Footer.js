import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
      <nav id='botones'>
        <Link to='/terminos'>
          <button>Términos y Condiciones</button>
        </Link>
        <Link to='/sobreNosotros'>
          <button>Sobre Nosotros</button>
        </Link>
        <Link to='/contacto'>
          <button>Contacto</button>
        </Link>
        <Link to='/Cookies'>
          <button>Cookies</button>
        </Link>
      </nav>
      <section id='enlacess'>
        <a href='#' className='LogoEmuvi'>
          <i className='fas fa-globe-africa'>
            <p className='nombre'>EMUVI ®</p>
          </i>
        </a>
        <div className='tr'>
          <p>dsfrojgppordes</p>
          <a href='.' target='_blank'>
            {/* <Link to='www.google.es' target='_blank'> */}
            <img
              className='twicon'
              src='./resources/vectors/twitter-svgrepo-com.svg'
              alt='twitter-icon'
            />
          </a>
          {/* </Link> */}
          <img
            className='twicon'
            src='./resources/vectors/instagram-svgrepo-com.svg'
            alt='instagram-icon'
          />
          <a href='.' target='_blank'>
            <img
              className='twicon'
              src='./resources/vectors/linkedin-svgrepo-com.svg'
              alt='linkedin-icon'
            />
          </a>
          <img
            className='social-icon'
            src='./resources/vectors/twitch-svgrepo-com.svg'
            alt='twitch-icon'
          />
          <img
            className='social-icon'
            src='./resources/vectors/youtube-svgrepo-com.svg'
            alt='youtube-icon'
          />
        </div>
      </section>
    </div>
  );
};

export default Footer;
