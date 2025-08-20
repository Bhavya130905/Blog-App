"use client"
import React, { useState, useEffect } from 'react'
import Image from "next/image";
import img1 from "@/assets/slider/img1.jpg"
import img2 from "@/assets/slider/img2.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

const width = 1550; 
const height = 1200;
const HomeSlider = () => { 
  return ( 
  <> 
  <Swiper 
  slidesPerView={1} 
  spaceBetween={30} 
  loop={true} 
  pagination={{ clickable: true, }} 
  navigation={true} 
  modules={[Pagination, Navigation]} 
  className="mySwiper" > 

  <SwiperSlide> 
    <Image 
  src={img1} 
  alt="First slide" 
  width={width} 
  height={height/2} 
  style={{objectFit: 'cover'}} /> 

  </SwiperSlide> 
  
  <SwiperSlide> 
    <Image 
    src={img2} 
    alt="Second slide" 
    width={width} 
    height={height/2} 
    style={{objectFit: 'cover'}} /> 
    </SwiperSlide>
    
      </Swiper>
    </>
  );
}

export default HomeSlider;
