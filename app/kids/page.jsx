"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Swiper (client-safe)
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import img1 from "../../public/kids/about1.jpg";
import img2 from "../../public/kids/about2.jpg";
import kidshero from "../../public/kids/kids hero.jpg";
/**
 * SelectedWorks - masonry-like gallery using CSS columns
 */
function SelectedWorks() {
  const photos = [
    "/assets/selectedworks/select work 01.webp",
    "/assets/selectedworks/select work 13.webp",
    "/assets/selectedworks/select work 20.webp",
    "/assets/selectedworks/select work 09.webp",
    "/assets/selectedworks/select work 177.webp",
    "/assets/selectedworks/select work 17.webp",
    "/assets/selectedworks/select work 04.webp",
    "/assets/selectedworks/select work 19.webp",
    "/assets/selectedworks/select work 05.webp",
    "/assets/selectedworks/select work 15.webp",
    "/assets/selectedworks/select work 02.webp",
    "/assets/selectedworks/select work 03.webp",
    "/assets/selectedworks/select work 07.webp",
    "/assets/selectedworks/select work 166.webp",
    "/assets/selectedworks/select work 18.webp",
    "/assets/selectedworks/select work 12.webp",
    "/assets/selectedworks/select work 10.webp",
    "/assets/selectedworks/select work 08.webp",
    "/assets/selectedworks/select work 111.webp",
    "/assets/selectedworks/select work 14.webp",
  ];

  return (
    <section className="py-20 px-4 md:px-10 bg-white font-spectral text-center">
      <h2 className="text-sm text-gray-500 tracking-wider uppercase mb-8">
        Selected works
      </h2>

      <div className="columns-2 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 max-w-7xl mx-auto">
        {photos.map((src, index) => (
          <div key={index} className="break-inside-avoid mb-4">
            <Image
              src={src}
              width={700}
              height={1000}
              alt={`selected-${index}`}
              className="w-full h-auto rounded-lg object-cover shadow filter grayscale hover:grayscale-0 transition duration-500"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      <div className="mt-12">
        <Link
          href="/portfolio"
          className="px-6 py-2 text-black border border-black rounded-full text-sm tracking-wide hover:bg-black hover:text-white transition duration-300 inline-block"
        >
          View Portfolio
        </Link>
      </div>
    </section>
  );
}

/**
 * Instagram-like Swiper Slider
 */
function InstagramSlider() {
  const images = [
    "https://picsum.photos/id/1015/600/600",
    "https://picsum.photos/id/1016/600/600",
    "https://picsum.photos/id/1018/600/600",
    "https://picsum.photos/id/1020/600/600",
    "https://picsum.photos/id/1024/600/600",
    "https://picsum.photos/id/1025/600/600",
  ];

  return (
    <div className="max-w-6xl mx-auto py-16 px-4">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer"
          className="text-xl font-semibold hover:text-pink-600 transition duration-300"
        >
          Follow us on Instagram
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer"
          className="text-gray-500 hover:text-pink-600 transition duration-300"
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
              <Image
                src={kidshero}
                alt={`insta-${index}`}
                className="w-full h-64 object-cover rounded-lg shadow-lg transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-500 rounded-lg"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

/**
 * KidsHome main page*/
export default function KidsHome() {
  return (
    <main className="bg-gray-50 min-h-screen font-sans">
      {/* Hero Section */}
      <div className="relative h-[120vh] w-full">
        <Image
          src={kidshero}
          alt="Kids Home"
          fill
          style={{ objectFit: "cover" }}
          className="object-cover"
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/80 flex flex-col justify-center items-center text-center px-6">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Kids Studio Moments
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-200 max-w-2xl mt-4 leading-relaxed"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Capture the innocence, laughter, and colorful world of your child
            where every photo tells a story.
          </motion.p>
          <motion.button
            className="mt-8 px-10 py-3 bg-white text-black font-semibold rounded-full shadow-lg hover:bg-black hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Explore Gallery
          </motion.button>
        </div>
      </div>

      {/* About US page */}
      <section className="py-20 px-6 md:px-16 bg-white font-spectral">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          {/* Left Image */}
          <div className="md:col-span-1">
            <Image
              src={kidshero}
              alt="Bride"
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </div>

          {/* Stacked Images */}
          <div className="md:col-span-1 space-y-4">
            {[img2].map((src, idx) => (
              <Image
                key={idx}
                src={kidshero}
                alt={`stacked ${idx}`}
                className="rounded-lg shadow-md w-full object-cover"
              />
            ))}
          </div>

          {/* Text Content */}
          <div className="md:col-span-1 text-gray-800">
            <p className="uppercase text-sm tracking-widest text-gray-600 mb-4">
              Why Little Studio.in?
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold leading-snug mb-6 text-gray-900">
              Lasting childhood memories <br /> through magical, soulful
              photography
            </h2>

            <p className="text-base leading-relaxed mb-6 text-gray-700">
              We specialize in capturing the pure joy, curiosity, and innocence
              of childhood through creative and expressive photography. From
              newborn and toddler portraits to birthday shoots and family
              moments, we turn every milestone into a beautiful story. With a
              warm kid-friendly approach, professional lighting, and handcrafted
              edits, we ensure every photograph becomes a timeless keepsake for
              parents. Our focus on comfort, safety, and on-time delivery makes
              the entire experience joyful and memorable for both kids and
              families.
            </p>

            {/* ✅ Next.js navigation */}
            <Link href="/aboutus">
              <button className="px-6 py-2 border border-black rounded-full text-sm tracking-wide hover:bg-black hover:text-white transition duration-300">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      {/* <section className="py-20 bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-800">Why Choose Our Kids Studio?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6 max-w-6xl mx-auto">
          {[
            {
              title: "Playful Environment",
              desc: "A kid-friendly studio with toys and props to make sessions fun and natural.",
              img: "https://images.unsplash.com/photo-1544388964-6e341bb7e4c6?auto=format&fit=crop&w=800&q=80",
            },
            {
              title: "Creative Concepts",
              desc: "From fairy tales to superheroes, we design magical photo sessions.",
              img: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
            },
            {
              title: "Memories for a Lifetime",
              desc: "High-quality photos and albums that you’ll cherish forever.",
              img: "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=800&q=80",
            },
          ].map((feature, i) => (
            <motion.div
              key={i}
              className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Image
                src={feature.img}
                alt={feature.title}
                width={800}
                height={520}
                className="w-full h-52 object-cover rounded-xl mb-4"
                loading="lazy"
              />
              <h3 className="text-xl font-bold text-gray-800">{feature.title}</h3>
              <p className="text-gray-600 mt-2">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section> */}

      {/* Gallery Preview */}
      {/* <section className="py-20 bg-gray-100">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gray-800">A Peek Into Our Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-6 max-w-7xl mx-auto">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
            <motion.div key={num} className="rounded-xl overflow-hidden">
              <motion.img
                src={`https://source.unsplash.com/600x600/?kids,photography,${num}`}
                alt={`Kids Gallery ${num}`}
                className="w-full h-60 object-cover cursor-pointer transition-transform"
                whileHover={{ scale: 1.05 }}
              />
            </motion.div>
          ))}
        </div>
      </section> */}

      {/* Selected Works (after Gallery Preview) */}
      <SelectedWorks />

      {/* Testimonials */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-800">
          What Parents Say
        </h2>
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 px-2">
          {[
            {
              name: "Anita Sharma",
              review:
                "The studio session was magical! My son enjoyed every moment, and the photos turned out beyond my expectations.",
            },
            {
              name: "Rahul Mehta",
              review:
                "Amazing concepts and very professional team. My daughter felt so comfortable, and the photos are priceless!",
            },
               {
              name: "Rahul Mehta",
              review:
                "Amazing concepts and very professional team. My daughter felt so comfortable, and the photos are priceless!",
            },
          ].map((t, i) => (
            <motion.div
              key={i}
              className="p-6 bg-gray-50 rounded-2xl shadow-md hover:shadow-lg transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.3, duration: 0.7 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-600 italic">“{t.review}”</p>
              <h4 className="mt-4 font-bold text-gray-800">— {t.name}</h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Instagram Swiper (after Testimonials) */}
      <InstagramSlider />

      {/* Final CTA */}
      {/* <section className="py-20 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Ready to Capture Beautiful Memories?</h2>
        <p className="max-w-2xl mx-auto mb-8 text-lg">
          Book your child’s photoshoot today and let us turn every smile into timeless art.
        </p>
        <button className="px-10 py-3 bg-white text-purple-600 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300">
          Book a Session
        </button>
      </section> */}
    </main>
  );
}
