import useLatestProducts from '../../hooks/useLatestProducts';
import { Link } from 'react-router-dom';
import './Carousel.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper';
import { ButtonNewOffer } from '../offers/ButtonNewOffer';

const { REACT_APP_LOCALHOST } = process.env;

const LatestProducts = () => {
	const { products, loading, error } = useLatestProducts();

<<<<<<< HEAD
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
                    src={
                      product.photos.length > 0
                        ? `${REACT_APP_LOCALHOST}/avatar/${product.photos[0].name}`
                        : '/resources/images/product-photo-not-found.jpg'
                    }
                    alt='product_photo'
                    style={{ width: '100%' }}
                  />
                  {/* ))} */}
                </div>
                <h2>{product.name}</h2>
                <h3>{product.price}</h3>
              </Link>
              <ButtonNewOffer idProduct={product.id} idUser={product.idUser} />
            </SwiperSlide>
          ))}
        </Swiper>
      </ul>
    </div>
  ) : (
    <div>No hay productos</div>
  );
=======
	if (loading) return 'Cargando....';
	if (error) return <div>{error}</div>;
	return products.length > 0 ? (
		<div className="carousel-container">
			<h3 className="carousel-title">LO ÚLTIMO EN LLEGAR</h3>
			<ul className="carousel-list-items">
				<Swiper
					effect={'cards'}
					grabCursor={true}
					modules={[EffectCards]}
					className="mySwiper">
					{products.map((product) => (
						<SwiperSlide key={product.id}>
							<div className="carousel-container">
								<Link to={`/products/${product.id}`}>
									<img
										className="carousel-img"
										src={
											product.photos.length > 0
												? `${REACT_APP_LOCALHOST}/avatar/${product.photos[0].name}`
												: '/resources/images/product-photo-not-found.jpg'
										}
										alt="product_photo"
										style={{ width: '100%' }}
									/>
									<h2 className="carousel-product-name">{product.name}</h2>
									<h3 className="carousel-product-price">{product.price} €</h3>
									<p className="detalles-link">Proponer compra</p>
								</Link>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</ul>
		</div>
	) : (
		<div>No hay productos</div>
	);
>>>>>>> Marco
};

export default LatestProducts;
