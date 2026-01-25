"use client";

import { useEffect, useState } from "react";

const stats = [
  { value: 12, label: "Locations" },
  { value: 10000, label: "Weddings", suffix: "+" },
  { value: 200, label: "Employees", prefix: "+" },
  { value: 1, label: "Dream" }
];

export default function DreamCounter() {
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    stats.forEach((stat, index) => {
      let start = 0;
      const end = stat.value;
      const duration = 2000;
      const increment = Math.ceil(end / (duration / 16));

      const counter = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(counter);
        }

        setCounts(prev => {
          const updated = [...prev];
          updated[index] = start;
          return updated;
        });
      }, 16);
    });
  }, []);

  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {stats.map((stat, i) => (
            <div key={i}>
              <h3 className="text-4xl md:text-5xl font-semibold tracking-tight text-black">
                {stat.prefix}
                {counts[i].toLocaleString()}
                {stat.suffix}
              </h3>
              <p className="mt-2 text-sm uppercase tracking-widest text-gray-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
