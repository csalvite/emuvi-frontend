import useLatestProducts from '../../hooks/useLatestProducts';
import { Link } from 'react-router-dom';
import './LatestProducts.css';

const LatestProducts = () => {
  const { products, loading, error } = useLatestProducts();

  if (loading) return 'Cargando....';
  if (error) return <div>{error}</div>;
  return products.length > 0 ? (
    <div className='product-list'>
      <h3>PRODUCTOS MÁS NOVEDOSOS:</h3>
      <ul className='containerlist'>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>
              <div>
                {product.photos.map((photo, index) => (
                  <img
                    key={index}
                    src={`${process.env.REACT_APP_LOCALHOST}/avatar/${photo.photos}`}
                    alt='product_photo'
                  />
                ))}
              </div>
              <h2>{product.name}</h2>
              <h3>{product.price}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <div>No hay productos</div>
  );
};

export default LatestProducts;
