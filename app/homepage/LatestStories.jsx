"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const stories = [
  {
    id: 1,
    title: "Wedding Stories",
    subtitle: "Timeless love, beautifully told",
    href: "/portfolio/lani&sophia",
    image:
      "https://res.cloudinary.com/dd2bavjj3/image/upload/v1770545328/wed06_pifmy9.jpg",
  },
  // {
  //   id: 2,
  //   title: "Event Moments",
  //   subtitle: "Celebrations that live forever",
  //   href: "/events",
  //   image:
  //     "https://res.cloudinary.com/dd2bavjj3/image/upload/v1770545328/wed06_pifmy9.jpg",
  // },
  {
    id: 3,
    title: "Baptism",
    subtitle: "Pure joy, honest frames",
    href: "/portfolio/baptism",
    image:
      "https://res.cloudinary.com/dd2bavjj3/image/upload/v1770546535/S_IN7917_nhbrwg.jpg",
  },
];

export default function LatestStories() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-white">
      <div className="max-w-[1700px] mx-auto grid grid-cols-1 lg:grid-cols-[520px_1fr]">

        {/* ================= LEFT PANEL ================= */}
        <div className="relative px-8 sm:px-16 py-20 lg:py-32 flex flex-col justify-center">

          <span className="mb-6 text-xs tracking-[0.45em] uppercase text-neutral-400">
            Portfolio
          </span>

          <h2 className="mb-16 font-cormorant text-4xl sm:text-5xl xl:text-6xl text-black leading-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}>
            Our Latest <br /> Stories
          </h2>

          <div className="space-y-14">
            {stories.map((item, index) => (
              <Link
                key={item.id}
                href={item.href}
                onMouseEnter={() => setActive(index)}
                onClick={() => setActive(index)}
                className="group block"
              >
                <div className="flex items-start gap-6">

                  {/* INDEX */}
                  <span className="font-cormorant text-3xl text-neutral-300">
                    0{index + 1}
                  </span>

                  {/* TEXT */}
                  <div>
                    <h3 className="relative font-cormorant text-2xl sm:text-3xl text-black">
                      {item.title}

                      {/* underline */}
                      <span
                        className={`absolute left-0 -bottom-2 h-[1px] bg-black transition-all duration-500
                        ${
                          active === index
                            ? "w-full"
                            : "w-0 group-hover:w-full"
                        }`}
                      />
                    </h3>

                    <p className="mt-2 text-sm text-neutral-500 tracking-wide">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* ================= RIGHT IMAGE ================= */}
        <div className="relative h-[380px] sm:h-[520px] lg:h-auto lg:min-h-[90vh] overflow-hidden">

          {stories.map((item, index) => (
            <div
              key={item.id}
              className={`absolute inset-0 transition-all duration-[900ms] ease-[cubic-bezier(.22,.61,.36,1)]
              ${
                active === index
                  ? "opacity-100 scale-100 z-10"
                  : "opacity-0 scale-105 z-0"
              }`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                priority={index === 0}
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 65vw"
              />

              {/* subtle overlay */}
              <div className="absolute inset-0 bg-black/10" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}