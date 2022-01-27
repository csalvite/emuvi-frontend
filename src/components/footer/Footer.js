import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import Logo from '../logo/logo';
import RRSS from '../RRSS/RRSS';
import PopUp from '../popUp/popUp';
import { useState } from 'react';

const Footer = () => {
  const [showpopUp, setshowpopUp] = useState(false);

  return (
    <div className='footer'>
      <nav id='botones'>
        <button onClick={() => setshowpopUp(true)}>
          Términos y Condiciones
        </button>
        <button onClick={() => setshowpopUp(true)}>Sobre Nosotros</button>
        <button onClick={() => setshowpopUp(true)}>Cookies</button>
      </nav>
      <nav id='enlacess'>
        <Logo />
        <p id='siguenos'>Siguenos en redes sociales</p>
        <RRSS></RRSS>
        {showpopUp && <PopUp setshowpopUp={setshowpopUp} />}
      </nav>
    </div>
  );
};

export default Footer;
