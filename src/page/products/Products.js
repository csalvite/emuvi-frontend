import { useEffect, useState } from 'react';
import './Products.css';
require('react-dotenv');

const { REACT_APP_LOCALHOST } = process.env;

function Products() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  const getProducts = async () => {
    try {
      const response = await fetch(`${REACT_APP_LOCALHOST}/products`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const body = await response.json();
        console.log('Devolvemos productos');

        console.log(body);

        setProducts(body.data);
        setError(false);
      } else {
        console.error('Hubo un error con la petición');
        setError(true);
      }
    } catch (error) {
      console.error('Hubo un error al recibir los productos');
      setError(true);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className='products'>
      <div>Página de Productos</div>
      <div>
        {error ? (
          <div style={{ color: 'red' }}>Ha habido un error</div>
        ) : (
          products.map((product) => <div key={product.id}>{product.name}</div>)
        )}
      </div>
    </div>
  );
}

export default Products;
