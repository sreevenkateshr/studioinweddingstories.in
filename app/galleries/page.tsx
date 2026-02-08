"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

const albums = [
  {
    title: "PHOTOGRAPHER",
    subtitle: "Happiness",
    href: "/albums/photographer",
    image: "/assets/selectedworks/select work 01.webp",
    size: "xl",
  },
  {
    title: "BIG DAY",
    href: "/albums/big-day",
    image: "/assets/selectedworks/select work 13.webp",
  },
  {
    title: "FRIEND",
    href: "/albums/friend",
    image: "/assets/selectedworks/select work 20.webp",
  },
  {
    title: "ROSES",
    href: "/albums/roses",
    image: "/assets/selectedworks/select work 09.webp",
  },
  {
    title: "WEDDING",
    href: "/albums/wedding",
    image: "/assets/selectedworks/select work 04.webp",
  },
  {
    title: "CREATIVE STYLING",
    href: "/albums/styling",
    image: "/assets/selectedworks/select work 19.webp",
  },
  {
    title: "JUST US",
    href: "/albums/just-us",
    image: "/assets/selectedworks/select work 05.webp",
  },
  {
    title: "SPRING WEDDING",
    href: "/albums/spring",
    image: "/assets/selectedworks/select work 15.webp",
  },
];

export default function SelectedWorks() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // 🔥 FIX: Non-passive wheel listener (trackpad compatible)
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

  return (
    <>
      {/* 🌟 FEATURED BANNER */}
      <section className="relative h-[75vh] w-full">
        <Image
          src="/assets/banner 03.webp"
          alt="Gallery Banner"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-white text-5xl md:text-7xl tracking-[0.25em] mb-6">
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
            <Link
              key={index}
              href={item.href}
              className="group flex-shrink-0"
            >
              <div
                className={`relative overflow-hidden ${
                  item.size === "xl"
                    ? "w-[420px] h-[560px]"
                    : "w-[280px] h-[360px]"
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* TEXT */}
              <div className="mt-6 text-center">
                {item.subtitle && (
                  <p className="italic text-gray-400 mb-1">
                    {item.subtitle}
                  </p>
                )}
                <h3 className="tracking-[0.3em] text-sm text-gray-800">
                  {item.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}