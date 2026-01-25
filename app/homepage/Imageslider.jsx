"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function ImageSlider() {
  const images = [
    "/assets/home/inst1.jpg",
    "/assets/home/inst2.jpg",
    "/assets/home/inst3.jpg",
    "/assets/home/inst4.jpg",
    "/assets/home/inst5.jpg",
    "/assets/home/inst6.jpg",
  ];

  return (
    <div className="w-full bg-[#f8f9fa]">
      <div className="max-w-6xl mx-auto py-16 px-4">
        
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
            className="text-xl text-black font-semibold hover:text-black-600 transition duration-300"
          >
            Follow us on Instagram
          </a>
          <a
            href="https://www.instagram.com/studio_.in?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noreferrer"
            className="text-black hover:text-black-600 transition duration-300"
          >
            @Studioinphotography
          </a>
        </div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={2}
          navigation
          breakpoints={{
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="relative group">
                <img
                  src={src}
                  alt={`Instagram post ${index + 1}`}
                  className="w-full h-64 object-cover rounded-lg shadow-lg transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-500 rounded-lg"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
