"use client";
import React from "react";
import { Slider } from "./Slider";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Autoplay,
  Pagination,
  EffectCoverflow,
  Thumbs,
} from "swiper/modules";
import SwiperCore from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/thumbs";
import Image from "next/image";

SwiperCore.use([Pagination, EffectCoverflow, Navigation, Autoplay]);

export const ImageContainer = () => {
  return (
    <div className="pt-10 max-w-[400px] m-auto ">
      <Swiper
        loop={true}
        effect="coverflow"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        direction="horizontal"
        slidesPerView={1}
        freeMode={true}
        centeredSlides
        style={{ marginTop: "40px" }}
        spaceBetween={20}
      >
        <SwiperSlide>
          <Image
            src="https://m.media-amazon.com/images/I/81IbT+qBZNL._SX569_.jpg"
            alt="#"
            width={500}
            height={600}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://m.media-amazon.com/images/I/61QEf3ZYf0L._SY741_.jpg"
            alt="#"
            width={500}
            height={600}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src="https://m.media-amazon.com/images/I/61dFuXPs+jL._SY741_.jpg"
            alt="#"
            width={500}
            height={600}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://m.media-amazon.com/images/I/51SVbBfL0iL._SY741_.jpg"
            alt="#"
            width={500}
            height={600}
          />
        </SwiperSlide>
      </Swiper>

      <Slider />
    </div>
  );
};
