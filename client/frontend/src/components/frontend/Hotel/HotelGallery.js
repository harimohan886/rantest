import React from 'react'
import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

export default function HotelGallery() {
  return (
    <Swiper
      modules={[Navigation, A11y]}
      spaceBetween={50}
      navigation
      loop={true}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <img src="../image/hotel1.jpeg" className="img-responsive" alt='Hotel'/>
      </SwiperSlide>
      <SwiperSlide>
        <img src="../image/hotel2.jpeg" className="img-responsive" alt='Hotel'/>
      </SwiperSlide>
      <SwiperSlide>
        <img src="../image/hotel3.jpeg" className="img-responsive" alt='Hotel'/>
      </SwiperSlide>
      <SwiperSlide>
        <img src="../image/hotel4.jpeg" className="img-responsive" alt='Hotel'/>
      </SwiperSlide>
    </Swiper>
  )
}
