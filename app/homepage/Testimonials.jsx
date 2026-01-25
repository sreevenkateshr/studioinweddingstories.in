"use client";

import React, { useState, useEffect } from "react";

const testimonials = [
  { text: "Thank you Zerowatts to capture best moments of our wedding & reception. We loved the pre-wedding shoots and the tradition pictures.", name: "THEEBICA + PURUSHOTH" },
  { text: "We had the pleasure of working with Zerowatts Photography for our engagement, reception, and wedding. Incredible professionalism!", name: "JEEVITHA + PAWAN" },
  { text: "They did a wonderful job and made us feel comfortable. Would really love to work with them again :)", name: "PRATIBHA + ASHWANTH" },
  { text: "Absolutely fantastic photography service! The quality of the pictures is outstanding.", name: "ANITA + RAJESH" },
  { text: "Professional, creative, and very easy to work with.", name: "DIVYA + KARTHIK" },
  { text: "Every shot was beautifully framed and perfectly edited.", name: "SNEHA + VIKRAM" },
];

export default function TestimonialsSlider() {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3;

  const next = () => setStartIndex((prev) => (prev + visibleCount) % testimonials.length);
  const prev = () => setStartIndex((prev) => (prev - visibleCount + testimonials.length) % testimonials.length);

  const visibleTestimonials = [];
  for (let i = 0; i < visibleCount; i++) {
    visibleTestimonials.push(testimonials[(startIndex + i) % testimonials.length]);
  }

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [startIndex]);

  return (
    <div className="bg-[#84a7a1] py-20">
      <div className="container mx-auto px-6 md:px-20 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif mb- text-white">What Our Clients Say</h2>
          <p className="text-gray-600 text-white">Hear from the happy couples and families we’ve worked with</p>
        </div>

        <div className="flex justify-between items-center mb-12">
          <h2 className="text-sm tracking-[0.3em] text-gray-800 uppercase text-white">TESTIMONIALS</h2>
          <div className="flex space-x-6">
            <button onClick={prev} className="text-2xl hover:text-gray-600">←</button>
            <button onClick={next} className="text-2xl hover:text-gray-600">→</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {visibleTestimonials.map((t, idx) => (
            <div key={idx} className="max-w-sm transition-all duration-500 ease-in-out transform hover:-translate-y-1">
              <p className="text-lg leading-relaxed text-gray-800 mb-6 text-white">“{t.text}”</p>
              <p className="tracking-[0.3em] text-gray-900 font-medium text-white">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
