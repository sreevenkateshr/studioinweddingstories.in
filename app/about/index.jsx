"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const images = [
  "/assets/about-us-main_11zon.jpg",
  // "/assets/front-about.jpeg",
  // "/assets/frame-about.jpeg",
];

export default function AboutPage() {
  return (
    <>
      {/* 🔥 Featured Banner Section */}
      <section className="relative h-[80vh] w-full">
        <Image
          src="/assets/headers/aboutus.png"
          alt="Featured Banner"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-5xl md:text-7xl font-serif text-white uppercase drop-shadow-lg">
            About Us
          </h1>
          {/* <p className="mt-4 text-lg md:text-xl font-serif text-gray-200 max-w-3xl">
            Celebrating your special moments with elegance and timeless style.
          </p> */}
          <a
            href="/contact"
            className="mt-6 px-8 py-3 border border-white text-white rounded-full tracking-widest text-sm hover:bg-white hover:text-black transition"
          >
            Explore More
          </a>
        </div>
      </section>
      {/* 🧭 Main About Section */}
      <section className="bg-[#f9fafb] text-black">
        <div className="pt-20 md:pt-28 pb-16 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-4 sm:px-6 lg:px-8">
          {/* Left: Image Slider */}
          <div className="flex flex-col">
            <Swiper
              modules={[Pagination]}
              pagination={{ clickable: true }}
              loop={true}
              className="rounded-2xl shadow-lg overflow-hidden w-full aspect-[4/3]"
            >
              {images.map((src, index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={src}
                    alt={`Slide ${index + 1}`}
                    width={1200}
                    height={900}
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* <p className="mt-6 text-gray-800 leading-relaxed text-base md:text-lg">
        Paperboat is a wedding photography studio based in Kerala. We specialize
        in creative and artistic wedding photography with a natural relaxed
        style. Since 2010, couples have chosen Paper Boat Wedding Studio for our
        breathtaking photography, relentless professionalism, and personalized
        service. Our style is romantic, timeless, and authentic.
      </p> */}

            {/* <p className="mt-4 text-sm uppercase tracking-wide text-gray-500">
        Have a look through our website at what we can offer you to make your
        wedding day the most memorable of your life.
      </p> */}
          </div>

          {/* Right: Text content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-serif tracking-wide uppercase leading-snug">
              Come to us as you are
            </h2>

            <h2 className="text-3xl md:text-4xl font-serif tracking-wide uppercase mt-1 leading-snug text-[#84a7a1]">
              We’ll do the rest!
            </h2>

            <p className="mt-6 text-gray-800 leading-relaxed text-base md:text-lg">
              Our mission is simple – to tell your story by creating images that
              burst with the passion and love that you as a couple share. We
              promise not to spend hours posing or forcing you into something
              that isn’t representative of your day. Sure, there is time for
              some naturally posed images, but our drive is to be in the right
              place at the right time, soaking up the atmosphere and preserving
              those memories for you to keep forever.
            </p>

            <a
              href="/contact"
              className="mt-8 w-fit px-8 py-3 bg-[black] text-white font-semibold uppercase tracking-wider rounded-xl shadow-md hover:shadow-lg hover:opacity-90 transition duration-300"
            >
              Contact Us
            </a>

            {/* <p className="mt-10 text-2xl italic text-[#84a7a1]">— Studio.in</p> */}
          </div>
        </div>
      </section>

      {/* 🧑‍🎨 Founder Section */}
      <section className="bg-white py-16 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          {/* Text Content */}
          <div className="md:col-span-2">
            <h2 className="text-2xl md:text-3xl font-serif uppercase tracking-wide text-black">
              Manikandan
            </h2>
            <p className="text-sm uppercase tracking-widest text-gray-500 mt-1">
              Founder
            </p>
            <p className="mt-6 text-gray-700 text-base md:text-lg leading-relaxed">
              With over a decade of storytelling through wedding photography,
              Manikandan’s vision is to blend artistry and authenticity,
              ensuring every couple’s love story is preserved beautifully for
              generations.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <Image
              src="/assets/founderstudi.in.jpg"
              alt="Manikandan"
              width={256}
              height={256}
              className="w-56 h-56 md:w-64 md:h-64 object-cover rounded-2xl shadow-lg transform hover:scale-105 transition duration-300"
            />
          </div>
        </div>
      </section>
    </>
  );
}
