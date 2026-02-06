"use client";

import Image from "next/image";
import weddingImg from "@/public/assets/selectedworks/select work 05.webp";
import preWeddingImg from "@/public/assets/selectedworks/select work 05.webp";
import postWeddingImg from "@/public/assets/selectedworks/select work 05.webp";
import maternityImg from "@/public/assets/selectedworks/select work 05.webp";
import studioinlogo from "@/public/logos/sinblacl.png"; // Correct import
import banner from "@/public/assets/selectedworks/select work 08.webp"; // Featured banner image

const sections = [
  {
    title: "Wedding",
    content:
      "Every wedding is a story of love, laughter, and promises. Our wedding photography captures not just the events but the emotions — the joy in every smile, the tears of happiness, and the little moments that make your day unforgettable. With a blend of artistry and storytelling, we transform your wedding into a collection of timeless memories you’ll treasure forever.",
    img: weddingImg,
    imgRight: true,
  },
  {
    title: "Pre-Wedding",
    content:
      "Capture your love story before the big day! Our pre-wedding photography highlights your unique bond with natural and candid shots. We create memories that tell your journey from 'yes' to 'I do'.",
    img: preWeddingImg,
    imgRight: false,
  },
  {
    title: "Post-Wedding",
    content:
      "Celebrate the beginning of your married life with stunning post-wedding shoots. We focus on romantic, creative, and cinematic visuals that immortalize your love and joy.",
    img: postWeddingImg,
    imgRight: true,
  },
  {
    title: "Other Events",
    content:
      "From maternity shoots to birthdays and special celebrations, we provide professional photography services to capture every cherished moment. Our approach ensures each image tells a story you’ll love revisiting.",
    img: maternityImg,
    imgRight: false,
  },
];

export default function ServicesPage() {
  return (
    <section className="bg-white">
      {/* Featured Banner */}
      <div className="relative w-full h-[60vh] md:h-[80vh]">
        <Image
          src={banner}
          alt="Featured Banner"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Our Weddings
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl">
            Discover timeless memories captured with love, laughter, and creativity.
          </p>
        </div>
      </div>

      {/* Zig-Zag Sections */}
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
        {sections.map((sec, idx) => (
          <div
            key={idx}
            className={`flex flex-col md:flex-row items-center gap-10 ${
              sec.imgRight ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className="md:w-1/2 w-full rounded-xl overflow-hidden shadow-lg">
              <Image
                src={sec.img}
                alt={sec.title}
                className="object-cover w-full h-80 md:h-[400px]"
              />
            </div>

            {/* Content */}
            <div className="md:w-1/2 w-full text-black space-y-6">
              <h2 className="text-4xl font-bold">{sec.title}</h2>
              <p className="text-gray-700 leading-relaxed">{sec.content}</p>
              <div className="w-32">
                <Image src={studioinlogo} alt="Studio Logo" className="object-contain" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
