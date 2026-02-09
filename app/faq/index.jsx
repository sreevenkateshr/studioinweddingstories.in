"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Image from "next/image";

const faqs = [
  {
    q: "Why should we choose a candid wedding photographer for our big day?",
    a: "A candid wedding photographer captures genuine emotions, natural moments, and unscripted beauty, giving you wedding pictures that feel real, authentic, and timeless.",
  },
  {
    q: "Do you offer both photography and wedding films?",
    a: "Yes! Our team specializes in both beautiful wedding pictures and cinematic wedding films so you can relive your special day in the most heartfelt way.",
  },
  {
    q: "How do you ensure our photos look natural and not staged?",
    a: "We focus on candid photography, blending into your celebration and capturing genuine laughter, tears, and joy without interrupting the flow of your wedding.",
  },
  {
    q: "Can we customize our wedding photography package?",
    a: "Absolutely. We offer flexible packages to suit your budget and vision, from intimate weddings to grand celebrations.",
  },
  {
    q: "How many edited photos will we receive from our wedding?",
    a: "Depending on your package, you’ll receive a curated collection of beautiful wedding pictures, each professionally edited for timeless elegance.",
  },
  {
    q: "Do you travel for destination weddings?",
    a: "Yes! We love capturing destination weddings and are available to travel anywhere to create unforgettable memories for you.",
  },
  {
    q: "How long does it take to deliver the final wedding photos and films?",
    a: "On average, your photos are delivered within 4–6 weeks, while wedding films take 6–8 weeks. We also provide a sneak peek within a few days of your wedding.",
  },
  {
    q: "What makes your wedding photography style unique?",
    a: "Our style is a blend of creativity and storytelling—we focus on capturing candid emotions while also curating cinematic frames that feel dreamy yet real.",
  },
  {
    q: "Do you offer pre-wedding or engagement shoots?",
    a: "Yes, we offer pre-wedding and engagement photography sessions, perfect for couples who want to create beautiful pictures before their big day.",
  },
  {
    q: "How can we book you for our wedding?",
    a: "Simply get in touch through our contact page. We recommend booking early, as dates fill up quickly, especially during wedding season.",
  },
];

export default function HomeFAQ() {
  // ✅ Removed TypeScript type annotation
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-gray-50 min-h-screen">
      {/* Banner */}
      <div className="relative w-full h-[50vh] md:h-[60vh]">
        <Image
          src="https://res.cloudinary.com/dd2bavjj3/image/upload/v1770578037/cover_pics_di8otg.png"
          alt="FAQ Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            FAQs
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mt-4">
            Answers to the most common questions about our photography services.
          </p>
        </div>
      </div>

      {/* Accordion */}
      <div className="max-w-4xl mx-auto py-16 px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
          Photography FAQs
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg border overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition"
                >
                  <span className="text-lg md:text-xl font-medium text-gray-900">
                    {faq.q}
                  </span>
                  {isOpen ? (
                    <Minus className="w-5 h-5 text-gray-600" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-600" />
                  )}
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-96 p-6" : "max-h-0 p-0"
                  }`}
                >
                  <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
