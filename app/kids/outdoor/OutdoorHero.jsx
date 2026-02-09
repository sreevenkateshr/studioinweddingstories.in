"use client";
import Image from "next/image";

export default function OutdoorHero() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* ================= LEFT CONTENT ================= */}
          <div>
            <h1 className="text-4xl md:text-5xl font-serif font-semibold text-gray-900 leading-tight">
              Birthday Outdoor <br /> Photography
            </h1>

            <p className="mt-6 text-gray-600 text-base md:text-lg leading-relaxed max-w-xl">
              Celebrate outdoor birthdays in Nagercoil, Kanyakumari, Trivandrum,
              Tirunelveli, and surrounding areas with StudioIn Wedding Stories.
              Our outdoor birthday photography captures joyful garden parties,
              beach celebrations, poolside fun, and picnic-style themes with
              vibrant balloon and floral decor, fairy lights, and creative
              setups. From cake smash sessions and kids’ play area moments to
              family and friends group portraits, sunset vibes, night sparkle
              photography, and candid emotion shots, we ensure every moment is
              beautifully captured, turning your special day into timeless
              memories.
            </p>
          </div>

          {/* ================= RIGHT IMAGE ================= */}
          <div className="relative w-full h-[260px] sm:h-[340px] md:h-[420px]">
            <div
              className="
                w-full h-full overflow-hidden shadow-lg
                rounded-[0_180px_180px_0]
                md:rounded-[0_220px_220px_0]
              "
            >
              <img
                src="/kids/outdoor/out1.jpg"
                alt="Outdoor birthday photography with creative themes and natural light"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
