import { useEffect, useState } from 'react';
import './Products.css';
require('react-dotenv');

const { REACT_APP_LOCALHOST } = process.env;

function Products() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  const getProducts = async () => {
    try {
      console.log(`${REACT_APP_LOCALHOST}/products`);
      await fetch(`${REACT_APP_LOCALHOST}/products`)
        .then((response) => response.json())
        .then((data) => {
          console.log('data ' + data);
          setProducts(data);
        });

      /* console.log(body);
      setProducts(body); */
      setError(false);
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
          products.map((product) => <div key={product.id}>{product}</div>)
        )}
      </div>
    </div>
  );
}

export default Products;
