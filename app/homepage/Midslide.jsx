"use client"; // ✅ Required for Client Component

import React from "react";
import Image from "next/image";
import heroImage from "@/public/assets/home/last banner.webp"; // ✅ Correct import path for Next.js public folder

export default function SliderHero() {
  return (
    <section className="relative h-screen flex items-center justify-end overflow-hidden">
      {/* ✅ Background Image using Next.js <Image> */}
      <Image
        src={heroImage}
        alt="Studio.in Hero"
        fill
        priority
        className="object-cover object-center "
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Text Content */}
      <div className="relative z-10 text-white mr-10 max-w-lg text-right">
        <h1 className="text-4xl md:text-5xl font-serif leading-snug drop-shadow-lg">
  Let Your Love Shine <br />
  In the Open <em className="italic">Outdoors</em>
</h1>

        <button className="mt-6 px-6 py-2 border border-white rounded-full text-white hover:bg-white hover:text-black transition duration-300">
        Book Now
        </button>
      </div>
    </section>
  );
}
