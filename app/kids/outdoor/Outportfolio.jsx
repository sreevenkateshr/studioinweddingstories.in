"use client";

import Image from "next/image";

const images = [
  { src: "/kids/outdoor/out1.jpg" },
  { src: "/kids/outdoor/out2.jpg" },
  { src: "/kids/outdoor/out3.jpg" },
  { src: "/kids/outdoor/out4.jpg" },
  { src: "/kids/outdoor/out6.jpg" },
  { src: "/kids/outdoor/out5.jpg" },

  { src: "/kids/outdoor/out7.jpg" },
  { src: "/kids/outdoor/out9.jpg" },
  { src: "/kids/outdoor/out8.jpg" },

  { src: "/kids/outdoor/out10.jpg" },
  { src: "/kids/outdoor/out12.jpg" },
  { src: "/kids/outdoor/out11.jpg" },
];

export default function BirthdayOutdoorHero() {
  return (
    <section className="custom-portfolio py-12 px-4 bg-[#f8f9fa]">
      <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-center text-gray-900">
        Outdoor Birthday Memories
      </h2>

      <div className="portfolio-columns flex flex-wrap justify-center gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
          >
            <div className="relative w-full aspect-square">
              <Image
                src={image.src} // ✅ Fixed this line
                alt={`birthday-${index + 1}`}
                fill
                className="object-cover rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
