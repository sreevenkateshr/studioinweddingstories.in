"use client";

import Image from "next/image";

const CLOUDINARY_BASE =
  "https://res.cloudinary.com/yourcloud/image/upload/f_auto,q_auto/couples";

const images = Array.from({ length: 32 }, (_, i) => ({
  src: `${CLOUDINARY_BASE}/couple-${String(i + 1).padStart(2, "0")}.webp`,
}));

export default function CoupleGallerySection() {
  return (
    <section className="bg-white w-full">
      {/* ================= BANNER ================= */}
      <div className="relative w-full h-[70vh] md:h-[85vh]">
        <Image
          src={`${CLOUDINARY_BASE}/couple-01.webp`}
          alt="Couple Photography Banner"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 flex items-center">
          <div className="max-w-7xl mx-auto px-6 text-center text-white">
            <h1
              className="text-4xl md:text-6xl mb-6 tracking-wide"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Couple Stories
            </h1>

            <p className="max-w-2xl mx-auto text-lg text-white/90">
              Intimate moments, real emotions, and timeless love captured with
              elegance.
            </p>
          </div>
        </div>
      </div>

      {/* ================= GALLERY ================= */}
      <div className="max-w-7xl mx-auto px-6 py-32">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((img, i) => (
            <div
              key={i}
              className="relative aspect-[3/4] overflow-hidden rounded-2xl group"
            >
              <Image
                src={img.src}
                alt={`Couple ${i + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* subtle overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
