import React from 'react';
import './popUp.css';

const PopUp = ({ setshowpopUp, children }) => {
  return (
    <section onClick={() => setshowpopUp(false)} id='popUp_background'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        id='popUp_close'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M6 18L18 6M6 6l12 12'
        />
      </svg>
      <section id='popUp_content' onClick={(e) => e.stopPropagation()}>
        {children}
      </section>
    </section>
  );
};

export default PopUp;
