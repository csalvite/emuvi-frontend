import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';

const { REACT_APP_LOCALHOST } = process.env;

const ProductList = () => {
  const { products, loading, error } = useProducts();
  if (loading) return 'Cargando....';
  if (error) return <div>{error}</div>;

  return products.length > 0 ? (
    <ul>
      {products.map((product, index) => (
        <li key={index}>
          <Link to={`/products/${product.id}`}>
            <div>
              {product.photos.map((photo, index) => (
                <img
                  key={index}
                  src={`${REACT_APP_LOCALHOST}/avatar/${photo.name}`}
                  alt='product_photo'
                  style={{width: '100vw', height: '20rem', objectFit: 'cover'}}
                />
              ))}
            </div>
            <h2>{product.name}</h2>
            <h3>{product.price}</h3>
            <h4>{product.category}</h4>{' '}
            <p>
              Producto creado el:{' '}
              {new Date(product.createdAt).toLocaleDateString()}{' '}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  ) : (
    <div>No hay productos</div>
  );
};

export default ProductList;
