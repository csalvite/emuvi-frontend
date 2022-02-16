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
      <div>
        <h3 className='carousel-title'>Novedades</h3>
        <div className='carousel-container'></div>
        <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards]}
          className='mySwiper'
        >
          <SwiperSlide className='carousel-card'>
            <LatestProducts />
          </SwiperSlide>
          <SwiperSlide className='carousel-card'>
            <LatestProducts />
          </SwiperSlide>
          <SwiperSlide className='carousel-card'>Slide 3</SwiperSlide>
          <SwiperSlide className='carousel-card'>Slide 4</SwiperSlide>
          <SwiperSlide className='carousel-card'>Slide 5</SwiperSlide>
          <SwiperSlide className='carousel-card'>Slide 6</SwiperSlide>
          <SwiperSlide className='carousel-card'>Slide 7</SwiperSlide>
          <SwiperSlide className='carousel-card'>Slide 8</SwiperSlide>
          <SwiperSlide className='carousel-card'>Slide 9</SwiperSlide>
          <SwiperSlide className='carousel-card'>Slide 10</SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
