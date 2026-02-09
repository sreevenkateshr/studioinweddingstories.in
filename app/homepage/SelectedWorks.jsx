"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

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

export default function SelectedWorks() {
  // Track which image is tapped (for mobile)
  const [activeIndex, setActiveIndex] = useState(null);

  const handleTap = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // toggle off
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section className="py-20 px-4 md:px-10 bg-white font-spectral text-center">
      <h2 className="text-xl text-gray-500 tracking-wider uppercase mb-8"
      style={{ fontFamily: "'Playfair Display', serif" }}>
        Selected works
      </h2>

      <div className="columns-2 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 max-w-7xl mx-auto">
        {photos.map((src, index) => (
          <div
            key={index}
            className="break-inside-avoid mb-4 cursor-pointer"
            onClick={() => handleTap(index)}
          >
            <Image
              src={src}
              width={500}
              height={700}
              alt={`photo-${index}`}
              className={`
                w-full h-auto rounded-lg object-cover shadow filter
                transition duration-500
                ${activeIndex === index ? "grayscale-0" : "grayscale"}
                hover:grayscale-0
              `}
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