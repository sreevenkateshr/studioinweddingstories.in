"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

type Album = {
  title: string;
  subtitle?: string;
  image: string;
  size?: "xl";
};

const albums: Album[] = [
  {
    title: "THE BRIDE",
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
  const scrollRef = useRef<HTMLDivElement | null>(null);

  // Convert vertical scroll → horizontal scroll (trackpad friendly)
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

    return () => {
      el.removeEventListener("wheel", onWheel);
    };
  }, []);

  return (
    <>
      {/* 🔝 FEATURED BANNER */}
      <section className="relative h-[70vh] w-full">
        <Image
          src="/assets/headers/galleriesheader.png"
          alt="Gallery Banner"
          fill
          priority
          className="object-cover"
        />
      </section>

      {/* 📌 PAGE TITLE — ONLY ONE H1 */}
      <section className="bg-white py-20 text-center px-6">
        <h1
          className="text-3xl md:text-5xl tracking-[0.35em] text-black mb-6"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          GALLERIES
        </h1>

       <p className="text-gray-500 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
  A curated selection of moments, emotions, and timeless stories captured through our lens.
  From intimate glances to grand celebrations, each frame reflects love, culture, and connection.
  These galleries showcase memories crafted to be felt, remembered, and cherished forever.
</p>

      </section>

      {/* 🖼️ HORIZONTAL EDITORIAL GALLERY */}
      <section className="bg-white pb-24">
        <div
          ref={scrollRef}
          className="flex gap-20 px-8 md:px-20 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing"
        >
          {albums.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 text-center"
            >
              {/* IMAGE */}
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
                  className="object-cover"
                />
              </div>

              {/* TEXT */}
              <div className="mt-6">
                {item.subtitle && (
                  <p className="italic text-gray-400 mb-1">
                    {item.subtitle}
                  </p>
                )}
                <h2 className="tracking-[0.3em] text-sm text-gray-800">
                  {item.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
