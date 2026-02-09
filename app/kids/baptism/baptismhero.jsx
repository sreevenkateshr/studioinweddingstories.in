"use client";
import Image from "next/image";

export default function Baptismhero() {
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
                src="/kids/baptism/bap17.jpg"
                alt="Baptism Photography"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* ================= RIGHT CONTENT ================= */}
          <div>
            <h1 className="text-4xl md:text-5xl font-serif font-semibold text-gray-900 leading-tight">
              Baptism  <br /> Photography
            </h1>

            <p className="mt-6 text-gray-600 text-base md:text-lg leading-relaxed max-w-xl">
  Celebrate your child’s special day with professional outdoor birthday photography in Nagercoil, Kanyakumari, Trivandrum, Tirunelveli, and surrounding areas. Our creative themes include garden parties, beach celebrations, poolside fun, floral and fairy-light backdrops, cake smash sessions, and candid family moments. Capture joyful memories with natural light, playful setups, and beautiful themed decor, making every birthday truly unforgettable.
</p>

          </div>

        </div>
      </div>
    </section>
  );
}