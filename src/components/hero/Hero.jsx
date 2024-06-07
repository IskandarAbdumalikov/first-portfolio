import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import "./Hero.css";
const Hero = () => {
  return (
    <section id="hero" className="hero">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        pagination={{ clickable: true }}
        navigation
        loop={true}
      >
        <SwiperSlide>
          <img
            src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
            alt="Project 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
            alt="Project 2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
            alt="Project 3"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Hero;
