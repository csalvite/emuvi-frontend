import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';

const ProductList = () => {
  const { products, loading, error } = useProducts();
  if (loading) return 'Cargando....';
  if (error) return <div>{error}</div>;

  return products.length > 0 ? (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <Link to={`/products/${product.id}`}>
            <div>
              {product.photos.map((photo) => (
                <img
                  src={`${process.env.REACT_APP_LOCALHOST}/static/avatar/${photo.photos}`}
                  alt='product_photo'
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
