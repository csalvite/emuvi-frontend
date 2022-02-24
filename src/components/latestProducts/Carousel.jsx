import React from 'react';
import LatestProducts from './LatestProducts';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import './Carousel.css';

// import required modules
import { EffectCards } from 'swiper';

export default function Carousel() {
	return (
		<>
			<LatestProducts />
		</>
	);
}
