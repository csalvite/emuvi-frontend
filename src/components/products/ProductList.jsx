import CardProduct from './CardProduct';
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import './ProductList.css';
// const { REACT_APP_LOCALHOST } = process.env;

const { REACT_APP_LOCALHOST } = process.env;

const ProductList = () => {
  const { products, loading, error } = useProducts();
  if (loading) return 'Cargando....';
  if (error) return <div>{error}</div>;

  return products.length > 0 ? (
    //     <ul className='container_productlist'>
    //       {products.map((product) => (
    //         <li key={product.id}>
    //           <Link to={`/products/${product.id}`}>
    //             <div>
    //               {product.photos.map((photo, index) => (
    //                 <img
    //                   key={index}
    //                   src={`${REACT_APP_LOCALHOST}/avatar/${photo.name}`}
    //                   alt='product_photo'
    //                   style={{
    //                     width: '8rem',
    //                     height: '8rem',
    //                     objectFit: 'cover',
    //                   }}
    //                 />
    //               ))}
    //             </div>
    //             <h3>{product.name}</h3>
    //             <h4>{product.price}</h4>
    //             <h5>{product.category}</h5>{' '}
    //             <p>
    //               Producto creado el:{' '}
    //               {new Date(product.createdAt).toLocaleDateString()}{' '}
    //             </p>
    //           </Link>
    //         </li>
    //       ))}
    //     </ul>
    //   ) : (
    //     <div>No hay productos</div>
    //   );
    // };
    <ul className='container_productlist' style={{ listStyleType: 'none' }}>
      {products.map((product, index) => {
        return (
          <Link to={`/products/${product.id}`}>
            <CardProduct product={product} key={product.id} />
          </Link>
        );
      })}
    </ul>
  ) : (
    <div>No hay productos</div>
  );
};

export default ProductList;
