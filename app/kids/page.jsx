"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Icons
import { Plus, Minus } from "lucide-react";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// Images
import img1 from "../../public/kids/about1.jpg";
import img2 from "../../public/kids/about2.jpg";
import kidshero from "../../public/kids/kids hero.jpg";

/* ================= SELECTED WORKS ================= */
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
    <section className="py-20 px-4 bg-white text-center">
      <h2 className="text-sm tracking-wider uppercase mb-8 text-black">
        Selected Works
      </h2>

      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 max-w-7xl mx-auto">
        {photos.map((src, index) => (
          <div key={index} className="break-inside-avoid">
            <Image
              src={src}
              width={700}
              height={1000}
              alt={`selected-${index}`}
              className="w-full rounded-lg shadow grayscale hover:grayscale-0 transition"
            />
          </div>
        ))}
      </div>

      <div className="mt-12">
        <Link
          href="/portfolio"
          className="px-6 py-2 border border-black rounded-full hover:bg-black hover:text-white transition text-black"
        >
          View Portfolio
        </Link>
      </div>
    </section>
  );
}

/* ================= INSTAGRAM SLIDER ================= */
function InstagramSlider() {
  const images = [kidshero, kidshero, kidshero, kidshero, kidshero];

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <a href="#" className="text-xl font-semibold text-black">
          Follow us on Instagram
        </a>
        <span className="text-black">@Studioinphotography</span>
      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        navigation
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <Image
              src={img}
              alt="Instagram"
              className="rounded-lg object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

/* ================= MAIN PAGE ================= */
export default function KidsHome() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <main className="bg-white text-black">

      {/* HERO */}
      <section className="relative h-screen">
        <Image
          src={kidshero}
          alt="Kids Photography"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center px-6">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-black"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Kids Studio Moments
          </motion.h1>
          <p className="mt-4 max-w-2xl text-black">
            Capturing innocence, joy, and childhood magic through soulful
            photography.
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 items-center">
          <Image src={img1} alt="Kids Studio" className="rounded-lg" />
          <Image src={img2} alt="Kids Studio" className="rounded-lg" />

          <div>
            <h2 className="text-3xl font-semibold mb-4 text-black">
              Magical childhood memories
            </h2>
            <p className="mb-6 text-black">
              We specialize in capturing joyful, playful, and emotional moments
              of childhood with professional lighting and creative storytelling.
            </p>
            <Link
              href="/aboutus"
              className="px-6 py-2 border rounded-full hover:bg-black hover:text-white transition text-black"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <SelectedWorks />

      {/* TESTIMONIALS */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-3xl font-bold mb-10 text-black">What Parents Say</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-4">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-gray-50 p-6 rounded-xl shadow">
              <p className="italic text-black">“{t.review}”</p>
              <h4 className="mt-4 font-semibold text-black">{t.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-10 text-black">
            Photography FAQs
          </h2>

          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="bg-white mb-4 rounded-xl border">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-6 flex justify-between items-center text-black"
                >
                  <span className="font-medium text-black">{faq.q}</span>
                  {isOpen ? <Minus /> : <Plus />}
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-black">{faq.a}</div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <InstagramSlider />
    </main>
  );
}

/* ================= DATA ================= */
const testimonials = [
  {
    name: "Anita Sharma",
    review:
      "The session was magical! My son enjoyed every moment and the photos are priceless.",
  },
  {
    name: "Rahul Mehta",
    review:
      "Professional team and beautiful concepts. My daughter felt so comfortable.",
  },
  {
    name: "Priya Nair",
    review:
      "Absolutely loved the experience. The photos captured real emotions.",
  },
];

const faqs = [
  {
    q: "Do you handle kids comfortably?",
    a: "Yes! Our studio is kid-friendly and designed to make children feel safe and playful.",
  },
  {
    q: "Do you offer birthday shoots?",
    a: "Absolutely. We specialize in birthday, milestone, and family sessions.",
  },
  {
    q: "How long is the delivery time?",
    a: "Edited photos are delivered within 7–14 days depending on the package.",
  },
];
