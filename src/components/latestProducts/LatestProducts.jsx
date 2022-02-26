import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper';

import useLatestProducts from '../../hooks/useLatestProducts';
import { Link } from 'react-router-dom';
import './LatestProducts.css';

const { REACT_APP_LOCALHOST } = process.env;

const LatestProducts = () => {
	const { products, loading, error } = useLatestProducts();

	if (loading) return 'Cargando....';
	if (error) return <div>{error}</div>;
	return products.length > 0 ? (
		<div className="carousel-container">
			<h3 className="carousel-title">LO ÚLTIMO EN LLEGAR</h3>
			<ul className="carousel-list-items">
				<Swiper
					effect={'coverflow'}
					grabCursor={true}
					centeredSlides={true}
					slidesPerView={'auto'}
					coverflowEffect={{
						rotate: 50,
						stretch: 0,
						depth: 100,
						modifier: 1,
						slideShadows: true,
					}}
					pagination={true}
					modules={[EffectCoverflow, Pagination]}
					className="mySwiper">
					{products.map((product) => (
						<SwiperSlide key={product.id}>
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
