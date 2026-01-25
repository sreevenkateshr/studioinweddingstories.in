"use client";

import React, { useState } from "react";

/* ---------- DATA ---------- */

const galleryImages = [
  "https://images.unsplash.com/photo-1603201667230-bd3d3edba0c1?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1606813902919-3f8b8a701e1b?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1544551763-cedd6e1ec66b?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1601582589907-f92af5ed9db1?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=800&q=80",
];

const faqs = [
  {
    q: "What age groups do you cover for birthday photography?",
    a: "We photograph birthdays from 1st birthday cake-smashes to teenage celebrations."
  },
  {
    q: "Do you provide themed birthday shoots?",
    a: "Yes. We offer customized themes, props, backdrops, and color palettes."
  },
  {
    q: "How long does a birthday photoshoot take?",
    a: "Usually 2–4 hours depending on the event size and child’s comfort."
  },
  {
    q: "Do you capture candid moments?",
    a: "Absolutely. Our style focuses on natural expressions and real emotions."
  },
  {
    q: "When will we receive the photos?",
    a: "Edited photos are delivered within 7–10 working days."
  },
  {
    q: "Do you cover outdoor birthday parties?",
    a: "Yes, we cover home, outdoor venues, resorts, and party halls."
  },
  {
    q: "How do we book a birthday shoot?",
    a: "You can contact us via WhatsApp or the booking form on KidsStudio.in."
  }
];

/* ---------- PAGE ---------- */

export default function Birthday() {
  const [active, setActive] = useState(null);

  return (
    <main className="bg-white">

      {/* HERO / FEATURED IMAGE */}
      <section className="relative h-[70vh] w-full">
        <img
          src="https://images.unsplash.com/photo-1603201667230-bd3d3edba0c1?auto=format&fit=crop&w=1600&q=80"
          alt="Kids Birthday Photography"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Birthday Photography
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl">
            Playful smiles, cake-smash fun, and timeless birthday memories.
          </p>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-20 px-4 md:px-10">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
          Featured Birthday Moments
        </h2>

        <div className="columns-2 md:columns-3 gap-4 space-y-4 max-w-7xl mx-auto">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className="break-inside-avoid overflow-hidden rounded-xl shadow group"
            >
              <img
                src={img}
                alt={`Birthday ${i + 1}`}
                className="w-full grayscale group-hover:grayscale-0 
                           scale-100 group-hover:scale-105 
                           transition-all duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="bg-gray-50 py-20 px-4 md:px-10">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow overflow-hidden"
            >
              <button
                onClick={() => setActive(active === i ? null : i)}
                className="w-full text-left px-6 py-5 font-medium flex justify-between items-center"
              >
                {item.q}
                <span className="text-xl">
                  {active === i ? "−" : "+"}
                </span>
              </button>

              {active === i && (
                <div className="px-6 pb-5 text-gray-600">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-20 px-4 md:px-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-6">
            About KidsStudio.in
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16">
            We specialize in kids and birthday photography, capturing joyful,
            candid, and emotion-filled moments that families cherish forever.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                name: "Creative Team",
                desc: "Experts in themes, props, lighting, and playful storytelling."
              },
              {
                name: "Kids Specialists",
                desc: "Ensuring children feel safe, relaxed, and happy during shoots."
              },
              {
                name: "Post-Production",
                desc: "Premium editing that preserves natural colors and emotions."
              }
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-2xl p-8 text-center shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold mb-3">{item.name}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
