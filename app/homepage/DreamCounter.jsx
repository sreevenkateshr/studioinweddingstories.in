"use client";

import { useEffect, useState } from "react";

const stats = [
  { value: 12, label: "BRANCHES IN TAMIL NADU" },
  { value: 860, label: "COMPLETE WEDDINGS" },
  { value: 18, label: "YEARS EXPERIENCE" },
  { value: 95, label: "TEAM MEMBERS" },
  { value: 1200, label: "HAPPY FAMILIES" },
];

export default function DreamCounter() {
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    stats.forEach((stat, index) => {
      let current = 0;
      const end = stat.value;
      const step = Math.max(1, Math.floor(end / 50));

      const interval = setInterval(() => {
        current += step;
        if (current >= end) {
          current = end;
          clearInterval(interval);
        }

        setCounts((prev) => {
          const copy = [...prev];
          copy[index] = current;
          return copy;
        });
      }, 30);
    });
  }, []);

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-16 gap-x-6 text-center">

          {stats.map((stat, i) => (
            <div
              key={i}
              className="relative flex items-center justify-center min-h-[120px]"
            >
              {/* BACKGROUND NUMBER */}
              <span
                className="
                  absolute
                  font-serif
                  text-[#83a6a0]
                  font-family: Cormorant Garamond, serif;
                  opacity-1%
                  leading-none
                  select-none
                  text-[clamp(56px,10vw,120px)]
                "
              >
                {counts[i]}
              </span>

              {/* LABEL */}
              <p
                className="
                  relative
                  z-10
                  max-w-[140px]
                  mx-auto
                  text-[10px]
                  md:text-[11px]
                  tracking-[0.32em]
                  uppercase
                  text-[#2f2f2f]
                "
              >
                {stat.label}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}