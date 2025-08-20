"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import CategoryCard from './CategoryCard';

const CategorySlider = () => {
  // ✅ Generate gradients first
  const categories = Array.from({ length: 10 }, (_, i) => ({
    name: `Category ${i + 1}`,
    path: "#",
    background: generateGradient(),
  }));

  // ✅ Generate random hex color
  function createHex() {
    const hexvalues = "0123456789abcdef";
    let hexCode = "";
    for (let i = 0; i < 6; i++) {
      hexCode += hexvalues[Math.floor(Math.random() * hexvalues.length)];
    }
    return hexCode;
  }

  // ✅ Generate random gradient
  function generateGradient() {
    const deg = Math.floor(Math.random() * 360);
    return `linear-gradient(${deg}deg, #${createHex()}, #${createHex()})`;
  }

  return (
    <div>
      <h1 style={{
        textAlign: 'center',
        fontSize: '2rem',
        fontWeight: 'bold',
        margin: '10px 5px',
        color: 'black',
        padding: '10px',
        background:"linear-gradient(to bottom right, #ff0000, #ffff00) 0% 0%, transparent 100% 100%"
      }}>Categories</h1>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 10 },
          750: { slidesPerView: 2, spaceBetween: 20 },
          1000: { slidesPerView: 3, spaceBetween: 40 },
          1500: { slidesPerView: 5, spaceBetween: 50 },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {categories.map((category) => (
          <SwiperSlide key={category.name}>
            <CategoryCard name={category.name} path={category.path} bgcolor={category.background} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CategorySlider;
