"use client";

import Image from "next/image";



const sections = [
  {
    title: "Wedding",
    content:
      "Every wedding is a story of love, laughter, and promises. Our wedding photography captures timeless emotions.",
    image: "/assets/banner 05.webp",
    imageRight: true,
  },
  {
    title: "Maternity",
    content:
      "Celebrate the beauty of motherhood with elegant maternity photography filled with warmth and grace.",
    image: "/assets/selectedworks/select work 03.webp",
    imageRight: false,
  },
  {
    title: "Baptism",
    content:
      "Pure and emotional moments captured beautifully to preserve your child’s special day forever.",
    image: "/kids/baptism/bap17.jpg",
    imageRight: true,
  },
  {
    title: "Modeling",
    content:
      "Professional modeling shoots with creative direction and editorial storytelling.",
    image: "/assets/selectedworks/select work 01.webp",
    imageRight: false,
  },
  {
    title: "Other Events",
    content:
      "From birthdays to celebrations, we capture every moment with creativity and care.",
    image: "/assets/home/our service 04.webp",
    imageRight: true,
  },
];

export default function ServicesPage() {
  return (
    <section className="bg-white w-full">
      {/* BANNER */}
    <section className="relative h-[70vh] w-full">
        <Image
          src="/assets/banner 03.webp"
          alt="Portfolio Banner"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 uppercase">
            Portfolio
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl">
            Explore our best works – where every frame tells a timeless story.
          </p>
        </div>
      </section>
   

      {/* ZIG-ZAG CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-32 space-y-40">
        {sections.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-20 ${
              item.imageRight ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* TEXT */}
            <div className="md:w-1/2 w-full text-center">
              <h2
                className="text-4xl md:text-5xl mb-8 text-black"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {item.title}
              </h2>

              <p className="text-gray-600 leading-relaxed max-w-lg mx-auto mb-10">
                {item.content}
              </p>

              <Image
                src="/logos/sinblacl.png"
                alt="Studio Logo"
                width={110}
                height={45}
                className="mx-auto"
              />
            </div>

            {/* IMAGE */}
            <div className="md:w-1/2 w-full">
              <div
                className={`relative w-full h-[420px] md:h-[520px] overflow-hidden ${
                  item.imageRight
                    ? "rounded-tl-[140px] rounded-br-[140px]"
                    : "rounded-tr-[140px] rounded-bl-[140px]"
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}