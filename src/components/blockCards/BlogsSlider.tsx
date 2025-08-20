"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import BlogCard from './BlogCard';

const BlogsSlider = () => {
    const blogs = [
        { 
            name: 'Blog 1', 
            path: '#', 
            background: 'black' 
        },
        { 
            name: 'Blog 2', 
             path: '#', 
            background: 'black'
         },
        {
            name: 'Blog 3',  
            path: '#', 
            background: 'black' 

        },
        { 
            name: 'Blog 4',  
            path: '#', 
            background: 'black' 
            
        },
        { 
            name: 'Blog 5',   
            path: '#', 
            background: 'black' 
            
        },
        { 
            name: 'Blog 6',    
            path: '#', 
            background: 'black' 
            
        },
        { 
            name: 'Blog 7',     
            path: '#', 
            background: 'black' 
            
        },
        { 
            name: 'Blog 8',      
            path: '#', 
            background: 'black' 
            
        },
      ]
  return (
    <div>
    <h1 style={{
        textAlign: 'center',
        fontSize: '2rem',
        fontWeight: 'bold',
        margin: '10px 5px',
        color: 'black',
        padding: '10px',
        background:"linear-gradient(to bottom right, #00e1ffff, #2bff00ff) 0% 0%, transparent 100% 100%"
      }}>Latest Blogs</h1>
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
        {blogs.map((blog) => (
          <SwiperSlide key={blog.name}>
            <BlogCard name={blog.name} path={blog.path} bgcolor={blog.background} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default BlogsSlider
