import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import './LatestProductsResponsive.css';

// import required modules
import { EffectCards } from 'swiper';

import useLatestProducts from '../../hooks/useLatestProducts';
import { Link } from 'react-router-dom';

const { REACT_APP_LOCALHOST } = process.env;

const LatestProductsResponsive = () => {
	const { products, loading, error } = useLatestProducts();

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
};

export default LatestProductsResponsive;
