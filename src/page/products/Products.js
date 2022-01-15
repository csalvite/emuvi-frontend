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
    <div className='list-products'>
      <div>
        <h1>Página de Productos</h1>
      </div>
      <div>
        {error ? (
          <div style={{ color: 'red' }}>Ha habido un error</div>
        ) : (
          products.map((product) => {
            return (
              <div key={product.id} className='product'>
                <h2>{product.name}</h2>
                <h3>{product.price}€</h3>
                <p>{product.category}</p>
                <p>
                  Producto creado el:{' '}
                  {new Date(product.createdAt).toLocaleDateString()}
                </p>
                {product.photos.map((photo) => (
                  <img
                    src={`${REACT_APP_LOCALHOST}/photos/${photo.name}`}
                    alt='product_photo'
                  />
                ))}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Products;
