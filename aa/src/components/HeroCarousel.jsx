import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const HeroCarousel = () => {
  return (
    <div className="w-full bg-white">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="w-full h-[300px] md:h-[500px]"
      >
        <SwiperSlide>
          <img src="./images/hero_slide_1.png" alt="Hero 1" className="w-full h-full object-cover invert-safe" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/hero_slide_2.png" alt="Hero 2" className="w-full h-full object-cover invert-safe" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/hero_slide_3.png" alt="Hero 3" className="w-full h-full object-cover invert-safe" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroCarousel;
