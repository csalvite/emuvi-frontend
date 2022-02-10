import React from 'react';
import './RRSS.css';

const RRSS = () => {
  return (
    <div>
      <div>
        <ul className='iconss'>
          <li>
            <a href='https://www.instagram.com'>
              <img
                className='lgi'
                src='/resources/vectors/instagram-square-brands.svg'
                alt='informatica icon'
              ></img>
            </a>
          </li>
          <li>
            <a href='https://www.facebook.com'>
              <img
                className='lgi'
                src='/resources/vectors/facebook-square-brands.svg'
                alt='informatica icon'
              ></img>
            </a>
          </li>

          <li>
            <a href='https://www.linkedin.com'>
              <img
                className='lgi'
                src='/resources/vectors/linkedin-brands.svg'
                alt='informatica icon'
              ></img>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RRSS;
