"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Portfolio() {
  const portfolioItems = [
    {
      title: "Wedding Stories",
      img: "https://res.cloudinary.com/dd2bavjj3/image/upload/v1770545328/wed06_pifmy9.jpg",
      link: "/portfolio/lani&sophia",
      
    },
    {
      title: "Event Moments",
      img: "https://res.cloudinary.com/dd2bavjj3/image/upload/v1770545328/wed06_pifmy9.jpg",
      link: "/portfolio/sundar&devi",
    },
    {
      title: "Kids Portraits",
      img: "https://res.cloudinary.com/dd2bavjj3/image/upload/v1770546535/S_IN7917_nhbrwg.jpg",
      link: "/portfolio/baptism",
    },
  ];

  return (
    <>
      {/* ================= BANNER ================= */}
      <section className="relative h-[70vh] w-full">
        <Image
          src="/assets/banner 03.webp"
          alt="Portfolio Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-5xl md:text-7xl font-cormorant text-white mb-4 uppercase">
            Portfolio
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl">
            Explore our best works — where every frame tells a timeless story.
          </p>
        </div>
      </section>

      {/* ================= GRID ================= */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {portfolioItems.map((item, idx) => (
            <Link
              href={item.link}
              key={idx}
              className="group relative overflow-hidden rounded-2xl"
            >
              <div className="relative h-[420px]">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition duration-500" />

                {/* title */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-cormorant tracking-wide opacity-0 group-hover:opacity-100 transition duration-500">
                    {item.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}

        </div>
      </section>
    </>
  );
}