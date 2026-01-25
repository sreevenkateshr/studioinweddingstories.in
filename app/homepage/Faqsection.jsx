"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Do you cover destination weddings worldwide?",
    a: "Yes, we photograph weddings across India and international destinations with complete travel coordination."
  },
  {
    q: "What style of photography do you specialize in?",
    a: "Our style blends candid storytelling with elegant portraits, focusing on real emotions."
  },
  {
    q: "How early should we book?",
    a: "We recommend booking 4–8 months in advance to secure your wedding date."
  },
  {
    q: "Do you offer customized packages?",
    a: "Yes. Every package is tailored based on your wedding size, events, and vision."
  },
  {
    q: "When will we receive our photos?",
    a: "Preview images are shared within weeks, and full delivery is completed within 4–6 weeks."
  }
];

export default function FaqSection() {
  const [active, setActive] = useState(null);

  return (
    <section className="max-w-4xl mx-auto py-16 px-4">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="border border-gray-200 rounded-2xl p-5 cursor-pointer bg-white shadow-sm hover:shadow-md transition"
            onClick={() => setActive(active === i ? null : i)}
          >
            <div className="flex justify-between items-center">
              <h3 className="font-medium text-lg">{faq.q}</h3>
              <span className="text-xl">{active === i ? "−" : "+"}</span>
            </div>

            {active === i && (
              <p className="mt-4 text-gray-600 leading-relaxed">
                {faq.a}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
