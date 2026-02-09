"use client";

import Image from "next/image";

export default function Album1() {
  const images = [
    //  "https://res.cloudinary.com/dd2bavjj3/image/upload/v1770545329/wed14_t8n6dc.jpg",
    "https://res.cloudinary.com/dd2bavjj3/image/upload/v1770545329/wed12_bea6ne.jpg",
    "https://res.cloudinary.com/dd2bavjj3/image/upload/v1770545329/wed10_wh9xhv.jpg",
    "https://res.cloudinary.com/dd2bavjj3/image/upload/v1770545329/wed08_zhwlnc.jpg",
    "https://res.cloudinary.com/dd2bavjj3/image/upload/v1770545329/wed09_njkf8o.jpg",
    "https://res.cloudinary.com/dd2bavjj3/image/upload/v1770545328/wed06_pifmy9.jpg",
    "https://res.cloudinary.com/dd2bavjj3/image/upload/v1770545328/wed07_abxvuw.jpg",
    "https://res.cloudinary.com/dd2bavjj3/image/upload/v1770545328/wed02_bbk5p5.jpg",
    "https://res.cloudinary.com/dd2bavjj3/image/upload/v1770545328/wed01_otnspp.jpg",
    "https://res.cloudinary.com/dd2bavjj3/image/upload/v1770545328/wed04_hmgwfr.jpg",
    // add more images here
  ];

  return (
    <>
      {/* Banner */}
      <section className="relative h-[60vh]">
        <Image
          src="https://res.cloudinary.com/dd2bavjj3/image/upload/v1770577634/album_01_c19w7n.png"
          alt="Couple Name"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-5xl md:text-6xl font-cormorant">
            LANI & SOPHIA
          </h1>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((imgUrl, i) => (
            <div
              key={i}
              className="relative aspect-[4/5] overflow-hidden rounded-xl"
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
