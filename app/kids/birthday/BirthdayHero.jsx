"use client";

export default function BirthdayHero() {
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
                src="/kids/birthday/birth14.jpg"
                alt="Outdoor Birthday Photography with creative decor"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* ================= RIGHT CONTENT ================= */}
          <div>
            <h1 className="text-4xl md:text-5xl font-serif font-semibold text-gray-900 leading-tight">
              Birthday Outdoor <br /> Photography
            </h1>

            <p className="mt-6 text-gray-600 text-base md:text-lg leading-relaxed max-w-xl">
              Celebrate your special day with creative outdoor birthday themes
              and natural light photography.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3 text-gray-700">
              <ul className="space-y-2 list-disc list-inside">
                <li>Garden Party</li>
                <li>Balloon Setup</li>
                <li>Beach Celebration</li>
                <li>Fairy Lights</li>
                <li>Picnic Style</li>
                <li>Floral Backdrop</li>
                <li>Poolside Party</li>
              </ul>

              <ul className="space-y-2 list-disc list-inside">
                <li>Cake Smash</li>
                <li>Kids’ Play Area</li>
                <li>Family Moments</li>
                <li>Sunset Vibes</li>
                <li>Night Sparkles</li>
                <li>Friends Group Shots</li>
                <li>Theme-based Decor</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}