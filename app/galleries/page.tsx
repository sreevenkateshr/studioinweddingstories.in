"use client";

import React from "react";
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
  return (
    <>
      {/* 🌟 FEATURED BANNER */}
      <section className="relative h-[70vh] w-full">
        <Image
          src="/assets/banner 03.webp"
          alt="Portfolio Banner"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 uppercase">
            Galleries
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl">
            Explore our best works — where every frame tells a timeless story.
          </p>
        </div>
      </section>

      {/* 🖼️ MASONRY GRID */}
      <section className="py-20 px-4 md:px-10 bg-white font-spectral text-center">
        <div className="columns-2 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 max-w-7xl mx-auto">
          {photos.map((src, index) => (
            <div
              key={index}
              className="break-inside-avoid mb-4 overflow-hidden rounded-xl shadow group"
            >
              <Image
                src={src}
                width={500}
                height={700}
                alt={`photo-${index}`}
                className="w-full h-auto object-cover "  
              />
            </div>
          ))}
        </div>

      </section>
    </>
  );
}


//  grayscale group-hover:grayscale-0
//                            scale-100 group-hover:scale-105
//                            transition-all duration-500 ease-out