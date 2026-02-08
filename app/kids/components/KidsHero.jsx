"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

// Images
import birthImg from "../../../public/kids/birthday/birth10.jpg";
import indoorImg from "../../../public/kids/indoor/ind7.jpg";
import outdoorImg from "../../../public/kids/outdoor/out8.jpg";

const heroImages = [birthImg, indoorImg, outdoorImg];

export default function KidsHero() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* SLIDER */}
      <div className="absolute inset-0 z-0">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop
          className="h-full"
        >
          {heroImages.map((img, index) => (
            <SwiperSlide key={index}>
              <Image
                src={img}
                alt="Kids Photography"
                fill
                priority={index === 0}
                className="object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* TEXT CONTENT */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-serif tracking-wide text-white"
        >
          Kids Studio Moments
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6 max-w-2xl text-white/90 text-base md:text-lg"
        >
          Capturing innocence, joy, and childhood magic through soulful
          photography.
        </motion.p>
      </div>
    </section>
  );
}
