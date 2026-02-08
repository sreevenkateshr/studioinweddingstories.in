"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Do you handle kids comfortably?",
    a: "Yes! Our studio is kid-friendly and playful.",
  },
  {
    q: "Do you offer birthday shoots?",
    a: "Yes, we specialize in birthdays and milestones.",
  },
  {
    q: "How long is delivery time?",
    a: "Photos will be delivered within 7–14 working days.",
  },
];

export default function KidsFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-20 bg-gray-50 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl   font-serif text-center mb-12 text-black">
          Photography FAQs
        </h2>

        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div key={index} className="bg-white mb-4 rounded-xl border">
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full p-6 flex justify-between items-center text-left"
              >
                <span className="font-medium">{faq.q}</span>
                {isOpen ? <Minus /> : <Plus />}
              </button>

              {isOpen && (
                <div className="px-6 pb-6 text-black/80">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
