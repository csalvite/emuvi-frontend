import useLatestProducts from '../../hooks/useLatestProducts';
import { Link } from 'react-router-dom';
import './LatestProducts.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper';

const { REACT_APP_LOCALHOST } = process.env;

const LatestProducts = () => {
  const { products, loading, error } = useLatestProducts();

  if (loading) return 'Cargando....';
  if (error) return <div>{error}</div>;
  return products.length > 0 ? (
    <div className='product-list'>
      <h3>PRODUCTOS MÁS NOVEDOSOS:</h3>
      <ul className='containerlist'>
        <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards]}
          className='mySwiper'
        >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <Link to={`/products/${product.id}`}>
              <div>
                {/* {product.photos.map((photo, index) => ( */}
                  <img
                    src={`${REACT_APP_LOCALHOST}/avatar/${product.photos[0].name}`}
                    alt='product_photo'
                    style={{width: '100%'}}
                  />  
                {/* ))} */}
              </div>
              <h2>{product.name}</h2>
              <h3>{product.price}</h3>
            </Link>
          </SwiperSlide>
        ))}
        </Swiper>
      </ul>
    </div>
  ) : (
    <div>No hay productos</div>
  );
};

export default LatestProducts;
