import React from 'react'
import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

export default function HotelGallery({ hotel }) {

  const detail = hotel.hotel;

  return (
    <Swiper
      modules={[Navigation, A11y]}
      spaceBetween={50}
      navigation
      loop={true}
      onSwiper={(swiper) => ''}
      onSlideChange={() => ''}
    >

      {detail && detail?.images.map((item, index) => (
        <SwiperSlide key={index}>
          <img src={(`${item.image.substring(item.image.indexOf('/uploads'), item.length)}`)} className="img-responsive" alt='' />
        </SwiperSlide>

      ))}
    </Swiper>
  )
}
