import React from 'react';
import { useNavigate } from 'react-router-dom';

function ButtonReset(props) {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate('/products');
        }}
      >
        Limpiar filtros
      </button>
    </div>
  );
}

export default ButtonReset;
