// este es un fichero para guardar las llamadas al backend

import { useState } from 'react/cjs/react.development';

require('react-dotenv');

const { REACT_APP_LOCALHOST } = process.env;

const useGetProducts = async ({ setProducts }) => {
  const [error, setError] = useState(false);
  try {
    console.log(`${REACT_APP_LOCALHOST}/products`);
    const response = await fetch(`${REACT_APP_LOCALHOST}/products`, {
      mode: 'no-cors',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      const body = await response.json();
      setProducts(body);
      setError(false);

      console.log(body);
    } else {
      console.error('Hubo un error con la petición');
      setError(true);
    }
  } catch (error) {
    console.error('Hubo un error al recibir los productos');
    setError(true);
  }
};

export { useGetProducts };
