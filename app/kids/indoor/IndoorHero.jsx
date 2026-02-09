"use client";
import Image from "next/image";

export default function BirthdayIndoorHero() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* ================= LEFT IMAGE ================= */}
          <div className="relative w-full h-[260px] sm:h-[340px] md:h-[420px]">
            <div
              className="
                w-full h-full overflow-hidden shadow-lg
                rounded-[180px_0_0_180px]
                md:rounded-[220px_0_0_220px]
              "
            >
              <img
                src="/kids/indoor/ind16.jpg"
                alt="Indoor Birthday Photography with creative decorations"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* ================= RIGHT CONTENT ================= */}
          <div>
            <h1 className="text-4xl md:text-5xl font-serif font-semibold text-gray-900 leading-tight">
              Indoor <br /> Photography
            </h1>

            <p className="mt-6 text-gray-600 text-base md:text-lg leading-relaxed max-w-xl">
              Capture joyful indoor birthday moments in Nagercoil, Kanyakumari,
              Trivandrum, Tirunelveli, and nearby areas with StudioIn Wedding
              Stories. We specialize in elegant lighting, creative themed
              setups, balloon arches, custom backdrops, and kid-friendly
              arrangements. From cake cutting and family portraits to candid
              shots of friends and decor highlights, every detail is beautifully
              captured to make your indoor celebrations unforgettable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
