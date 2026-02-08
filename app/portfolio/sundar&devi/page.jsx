"use client";

import Image from "next/image";

export default function Album1() {
  // All image URLs inside this component
  const images = [
    "https://res.cloudinary.com/dd2bavjj3/image/upload/v1770545328/wed06_pifmy9.jpg",
    "https://res.cloudinary.com/dd2bavjj3/image/upload/v1770545329/wed14_t8n6dc.jpg",
    "https://res.cloudinary.com/dd2bavjj3/image/upload/v1770545329/wed12_bea6ne.jpg",
    "https://res.cloudinary.com/dd2bavjj3/image/upload/v1770545330/wed07.jpg",
    "https://res.cloudinary.com/dd2bavjj3/image/upload/v1770545331/wed08.jpg",
    // Add all 25+ images here
  ];

  return (
    <>
      {/* Banner */}
      <section className="relative h-[60vh]">
        <Image
          src={images[0]} // Use first image as banner
          alt="Rahul & Anjali"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-5xl md:text-6xl font-cormorant">
            Rahul & Anjali
          </h1>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((imgUrl, i) => (
            <div
              key={i}
              className="relative aspect-[4/5] overflow-hidden rounded-xl shadow-lg"
            >
              <Image
                src={imgUrl}
                alt={`Album image ${i + 1}`}
                fill
                className="object-cover hover:scale-105 transition duration-700"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}