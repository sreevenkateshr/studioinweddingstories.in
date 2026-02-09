"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const albums = [
  {
    title: "THe BRIDE",
    subtitle: "Capturing Happiness",
    image: "/assets/selectedworks/select work 01.webp",
    size: "xl",
  },
  {
    title: "BIG DAY",
    subtitle: "Moments to Remember",
    image: "/assets/selectedworks/select work 13.webp",
  },
  {
    title: "HAPPILY ENGAGED",
    subtitle: "Cherished Bonds",
    image: "/assets/selectedworks/select work 20.webp",
  },
  {
    title: "ROSES & LOVE",
    subtitle: "Romantic Touches",
    image: "/assets/selectedworks/select work 09.webp",
  },
  {
    title: "JUST US",
    subtitle: "A Beautiful Beginning",
    image: "/assets/selectedworks/select work 04.webp",
  },
  {
    title: "CREATIVE STYLING",
    subtitle: "Elegance in Details",
    image: "/assets/selectedworks/select work 19.webp",
  },
  {
    title: "WEDDING VOWS",
    subtitle: "Intimate Moments",
    image: "/assets/selectedworks/select work 05.webp",
  },
  {
    title: "SPRING WEDDING",
    subtitle: "Fresh Beginnings",
    image: "/assets/selectedworks/select work 15.webp",
  },
];

export default function SelectedWorks() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // 🔥 Non-passive wheel listener for trackpad scrolling
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        el.scrollLeft += e.deltaY;
      }
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  const handleTap = (index: number) => {
    if (activeIndex === index) setActiveIndex(null);
    else setActiveIndex(index);
  };

  return (
    <>
      {/* 🌟 FEATURED BANNER */}
      <section className="relative h-[75vh] w-full">
        <Image
          src="https://res.cloudinary.com/dd2bavjj3/image/upload/v1770577256/Galleries_1_xflrac.png"
          alt="Gallery Banner"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-3xl md:text-6xl font-serif text-white mb-4">
            GALLERIES
          </h1>
          <p className="text-gray-200 max-w-2xl text-lg md:text-xl">
            A curated selection of moments, emotions, and timeless stories.
          </p>
        </div>
      </section>

      {/* 🖼️ HORIZONTAL EDITORIAL GALLERY */}
      <section className="bg-white py-24">
        <div
          ref={scrollRef}
          className="flex gap-20 px-20 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing"
        >
          {albums.map((item, index) => (
            <div
              key={index}
              className="group flex-shrink-0 cursor-pointer"
              onClick={() => handleTap(index)}
            >
              <div
                className={`relative overflow-hidden rounded-lg shadow ${
                  item.size === "xl"
                    ? "w-[420px] h-[560px]"
                    : "w-[280px] h-[360px]"
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className={`object-cover transition duration-500 ${
                    activeIndex === index
                      ? "filter-none" // tapped → color
                      : "filter grayscale group-hover:grayscale-0" // default grayscale
                  }`}
                />
              </div>

              {/* TEXT */}
              <div className="mt-6 text-center">
                {item.subtitle && (
                  <p className="italic text-gray-400 mb-1">{item.subtitle}</p>
                )}
                <h3 className="tracking-[0.3em] text-sm text-gray-800">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
