"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    text: `Studio.in made our wedding day unforgettable! Every moment was beautifully captured, and the team was so professional and friendly.`,
    author: "Diana + Jeffery",
  },
  {
    text: `We couldn’t have asked for better photographers. They captured the love, laughter, and every tiny detail perfectly!`,
    author: "Devi + Prasanna",
  },
  {
    text: `From start to finish, the experience was amazing. Our photos turned out better than we imagined, and we’ll cherish them forever.`,
    author: "Vijay + Manasa",
  },
];

export default function Testimonials() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* TITLE */}
        <h2 className="text-sm md:text-base tracking-[0.35em] font-medium text-gray-800 mb-12 font-serif">
          TESTIMONIALS
        </h2>

        {/* SLIDER */}
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          loop
          spaceBetween={60}
          className="testimonial-swiper"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center">

                {/* TEXT */}
                <p className="font-serif italic text-gray-500 text-lg md:text-xl leading-[1.9] max-w-3xl mb-10">
                  {item.text}
                </p>

                {/* AUTHOR */}
                <span className="text-xs tracking-[0.25em] text-gray-700">
                  {item.author}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* CUSTOM PAGINATION STYLE */}
      <style jsx global>{`
        .testimonial-swiper .swiper-pagination {
          position: relative;
          margin-top: 3rem;
        }

        .testimonial-swiper .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #cfcfcf;
          opacity: 1;
          transform: rotate(45deg);
          margin: 0 10px !important;
          border-radius: 0;
        }

        .testimonial-swiper .swiper-pagination-bullet-active {
          background: transparent;
          border: 1px solid #9a9a9a;
          width: 12px;
          height: 12px;
        }
      `}</style>
    </section>
  );
}