"use client";

import Image from "next/image";

const images = [
  { src: "/kids/baptism/bap1.jpg" },
  { src: "/kids/baptism/bap2.jpg" },
  { src: "/kids/baptism/bap3.jpg" },
  { src: "/kids/baptism/bap4.jpg" },
  { src: "/kids/baptism/bap5.jpg" },
  { src: "/kids/baptism/bap6.jpg" },

  { src: "/kids/baptism/bap7.jpg" },
  { src: "/kids/baptism/bap8.jpg" },
  { src: "/kids/baptism/bap9.jpg" },

  { src: "/kids/baptism/bap10.jpg" },
  { src: "/kids/baptism/bap11.jpg" },

  { src: "/kids/baptism/bap12.jpg" },
  { src: "/kids/baptism/bap13.jpg" },
  { src: "/kids/baptism/bap14.jpg" },
  { src: "/kids/baptism/bap15.jpg" },
  { src: "/kids/baptism/bap16.jpg" },

  { src: "/kids/baptism/bap18.jpg" },
  { src: "/kids/baptism/bap19.jpg" },

  { src: "/kids/baptism/bap20.jpg" },

  { src: "/kids/baptism/bap21.jpg" },

  { src: "/kids/baptism/bap22.jpg" },
];

export default function Baptismportfolio() {
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
