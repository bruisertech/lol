import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const HeroCarousel = () => {
  return (
    <div className="w-full bg-[#f2f4f7] relative">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="w-full h-[400px] md:h-[450px]"
      >
        <SwiperSlide>
          <div className="flex flex-col h-full w-full">
            <a href="https://clientes.axacolpatria.co/descargar-soat" target="_blank" rel="noopener noreferrer" className="block w-full h-full relative overflow-hidden flex justify-center items-center">
              <picture>
                <source media="(max-width: 767px)" srcSet="./images/banner-mobile-descarga-soat.webp" />
                <img src="./images/hero_slide_1.png" alt="Descarga tu SOAT fácil y rápido" className="w-full h-full object-cover invert-safe md:scale-[1.05] md:translate-y-[2%]" />
              </picture>
            </a>
            <div className="flex flex-col items-center justify-center p-6 text-center md:hidden bg-white">
              <h2 className="text-2xl font-bold text-[#000033] mb-2">Descarga tu SOAT fácil y rápido</h2>
              <p className="text-sm text-gray-600 mb-4">Ingresa la placa y tu número de documento y descarga tu SOAT de manera rápida.</p>
              <a href="https://clientes.axacolpatria.co/descargar-soat" target="_blank" rel="noopener noreferrer" className="bg-[#000033] text-white px-8 py-3 rounded-full font-semibold uppercase text-sm w-full max-w-[250px] transition-colors hover:bg-blue-900">
                DESCARGAR
              </a>
            </div>
            {/* Desktop Button Overlay */}
            <div className="hidden md:flex absolute bottom-8 left-0 right-0 justify-center pointer-events-none z-10">
               <a href="https://clientes.axacolpatria.co/descargar-soat" target="_blank" rel="noopener noreferrer" className="pointer-events-auto bg-[#000033] text-white px-8 py-3 rounded-full font-semibold uppercase text-sm transition-colors hover:bg-blue-900 shadow-lg">
                 DESCARGAR
               </a>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex flex-col h-full w-full">
            <div className="block w-full h-full relative overflow-hidden flex justify-center items-center">
              <picture>
                <source media="(max-width: 767px)" srcSet="./images/banner-responsive-soat.jpg" />
                <img src="./images/hero_slide_2.png" alt="SOAT" className="w-full h-full object-cover invert-safe md:scale-[1.05] md:translate-y-[2%]" />
              </picture>
            </div>
            <div className="flex flex-col items-center justify-center p-6 text-center md:hidden bg-white">
              <h2 className="text-2xl font-bold text-[#000033]">SOAT</h2>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex flex-col h-full w-full">
            <div className="block w-full h-full relative overflow-hidden flex justify-center items-center">
              <picture>
                <source media="(max-width: 767px)" srcSet="./images/banner-mobile-siniestros-soat.webp" />
                <img src="./images/hero_slide_3.png" alt="Radica tu solicitud de indemnización SOAT" className="w-full h-full object-cover invert-safe md:scale-[1.05] md:translate-y-[2%]" />
              </picture>
            </div>
            <div className="flex flex-col items-center justify-center p-6 text-center md:hidden bg-white">
              <h2 className="text-2xl font-bold text-[#000033] mb-2">Radica tu solicitud de indemnización SOAT</h2>
              <p className="text-sm text-gray-600 mb-4">Asegúrate de adjuntar todos los documentos requeridos para evitar devoluciones en el trámite.</p>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default HeroCarousel;
