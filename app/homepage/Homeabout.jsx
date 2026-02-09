"use client"; // required because it includes a button (interactive)
import React from "react";
import Link from "next/link"; // ✅ Correct import
import img1 from "../../public/assets/bride single.webp";
import img2 from "../../public/assets/collage.webp";

export default function AboutSection() {
  return (
    <section className="py-20 px-6 md:px-16 bg-white font-spectral">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
        {/* Left Image */}
        <div className="md:col-span-1">
          <img
            src={img1.src}
            alt="Bride in Nagercoil Wedding"
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>

        {/* Stacked Images */}
        <div className="md:col-span-1 space-y-4">
          {[img2].map((src, idx) => (
            <img
              key={idx}
              src={src.src}
              alt={`Wedding Collage ${idx}`}
              className="rounded-lg shadow-md w-full object-cover"
            />
          ))}
        </div>

        {/* Text Content */}
        <div className="md:col-span-1 text-gray-800">
          <p className="uppercase text-sm tracking-widest text-gray-600 mb-4">
            Why Studio.in?
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold leading-snug mb-6 text-gray-900">
            8+ Years of Expertise in Wedding Photography <br /> Nagercoil & Kanyakumari
          </h1>
          <p className="text-base leading-relaxed mb-6 text-gray-700">
            Studio.in is a premier wedding photography studio based in Nagercoil and Kanyakumari, specializing in capturing the most cherished moments of your special day. With over 8 years of experience, we deliver breathtaking, soulful imagery that preserves your love story with elegance and creativity. From candid shots to cinematic wedding films, our professional team ensures high-quality results, timely delivery, and a personalized approach for every couple.  
            Trust us to turn your wedding memories into timeless treasures.
          </p>

          {/* ✅ Next.js navigation */}
          <Link href="/about">
            <button className="px-6 py-2 border border-black rounded-full text-sm tracking-wide hover:bg-black hover:text-white transition duration-300">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}