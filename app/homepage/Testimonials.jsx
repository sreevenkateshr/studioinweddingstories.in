"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    image: "/assets/hometest1.jpg",
    date: "October 26, 2025",
    text: "Studio.in captured every moment of our wedding beautifully. The team was professional, friendly, and creative, making our day unforgettable.",
    author: "Sundar + Devi",
  },
  {
    id: 2,
    image: "/assets/hometest2.jpg",
    date: "November 19, 2025",
    text: "We are thrilled with our photos! Every detail was perfectly captured, and the team made the entire experience smooth and enjoyable.",
    author: "Japhet Elron Parents",
  },
  {
    id: 3,
    image: "/assets/hometest3.jpg",
    date: "January 11, 2026",
    text: "Amazing work! Studio.in captured the joy and emotion perfectly. We will treasure these memories forever.",
    author: "Lahiz Parents",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  /* AUTO SLIDE */
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const prevSlide = () =>
    setActive((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  const nextSlide = () =>
    setActive((prev) => (prev + 1) % testimonials.length);

  return (
    <section className="bg-white py-20 sm:py-28 lg:py-32">
      {/* HEADING */}
      <div className="text-center mb-14 sm:mb-20 px-4">
        <h2
          className="text-2xl sm:text-3xl md:text-4xl tracking-[0.25em] sm:tracking-[0.35em] mb-4 text-black"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          TESTIMONIALS
        </h2>
        <p className="italic text-gray-500 text-sm sm:text-base max-w-xl mx-auto">
          Hear from couples who trusted Studio.in for their wedding memories in
          Nagercoil & Kanyakumari
        </p>
      </div>

      {/* SLIDER */}
      <div className="relative max-w-[1400px] mx-auto overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="min-w-full grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-16 items-stretch"
            >
              {/* IMAGE */}
              <div className="relative h-[260px] sm:h-[340px] md:h-[420px] lg:h-[520px]">
                <Image
                  src={item.image}
                  alt={item.author}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* TEXT */}
              <div className="bg-[#83a6a0] px-6 py-10 sm:px-10 sm:py-14 lg:p-20 text-center lg:text-left flex flex-col justify-center">
                <span className="block text-xs sm:text-sm mb-4 text-white/80">
                  {item.date}
                </span>

                <p className="text-sm sm:text-base lg:text-lg leading-relaxed mb-8 text-white">
                  {item.text}
                </p>

                <h6 className="tracking-[0.25em] sm:tracking-[0.35em] text-xs sm:text-sm text-white font-medium">
                  {item.author}
                </h6>
              </div>
            </div>
          ))}
        </div>

        {/* NAVIGATION */}
        <div className="flex justify-center items-center gap-10 mt-10 sm:mt-12">
          <button
            onClick={prevSlide}
            className="text-xl hover:opacity-60 transition"
            aria-label="Previous testimonial"
          >
            ←
          </button>

          <span className="text-xs sm:text-sm tracking-widest text-gray-600">
            {String(active + 1).padStart(2, "0")} /{" "}
            {String(testimonials.length).padStart(2, "0")}
          </span>

          <button
            onClick={nextSlide}
            className="text-xl hover:opacity-60 transition"
            aria-label="Next testimonial"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
