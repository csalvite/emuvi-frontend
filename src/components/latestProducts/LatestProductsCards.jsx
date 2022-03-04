import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// import required modules
import { EffectCards } from 'swiper';

import useLatestProducts from '../../hooks/useLatestProducts';
import { Link } from 'react-router-dom';
import './LatestProductsCards.css';
import { ButtonNewOffer } from '../offers/ButtonNewOffer';
import { usePrivateUser } from '../../hooks/usePrivateUser';
import { ButtonFavProduct } from '../products/ButtonAddFavProducts';

const { REACT_APP_LOCALHOST } = process.env;

const LatestProductsCards = () => {
	const {privateUser} = usePrivateUser();
	const { products, loading, error } = useLatestProducts();

	if (loading) return 'Cargando....';
	if (error) return <div>{error}</div>;
	return products.length > 0 ? (
		<div className="cards-carousel-container">
			<h3 className="cards-carousel-title">LO ÚLTIMO EN LLEGAR</h3>
			<ul className="cards-carousel-list-items">
				<Swiper
					id="cards-swiper"
					effect={'cards'}
					grabCursor={true}
					modules={[EffectCards]}>
					{products.map((product) => (
						<SwiperSlide id="cards-swiper-slide" key={product.id}>
							<Link to={`/products/${product.id}`}>
								<img
									className="cards-carousel-img"
									src={
										product.photos.length > 0
											? `${REACT_APP_LOCALHOST}/avatar/${product.photos[0].name}`
											: '/resources/images/product-photo-not-found.jpg'
									}
									alt="product_photo"
									style={{ width: '100%' }}
								/>
								<h2 className="cards-carousel-product-name">{product.name}</h2>
								<h3 className="cards-carousel-product-price">
									{product.price} €
								</h3>
							</Link>
							<div className="main-carousel-icon-box">
								<ButtonNewOffer idUser={privateUser.id} idProduct={product.id} />
								<ButtonFavProduct idProduct={product.id} />
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

export default LatestProductsCards;
