"use client";

import Image from "next/image";

const services = [
  {
    title: "PHOTO SHOOTING",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie orci ut nibh",
    image: "/assets/photoshoot.jpg",
  },
  {
    title: "PHOTO EDITING",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie orci ut nibh",
    image: "/assets/photoedit.jpg",
  },
  {
    title: "PHOTO EXIBITION",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie orci ut nibh",
    image: "/assets/Photoframe.jpg",
  },
];

export default function WhoWeAre() {
  return (
    <section className="bg-white py-20 px-4">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl tracking-[0.3em] font-light text-gray-800 uppercase">
          Who We Are
        </h2>
        <p className="mt-4 text-lg italic text-gray-500 font-serif">
          Alienum phaedrum torquatos
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {services.map((item, index) => (
          <div key={index} className="text-center">
            {/* Image */}
            <div className="relative w-full aspect-[4/3] mb-8">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>

            {/* Title */}
            <h3 className="text-xl tracking-[0.25em] font-light text-gray-800 mb-4 uppercase">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-500 leading-relaxed font-serif max-w-sm mx-auto">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
