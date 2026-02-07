"use client";
import Image from "next/image";

export default function BirthdayIndoorHero() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* ================= LEFT IMAGE / VIDEO ================= */}
          <div className="relative w-full h-[260px] sm:h-[340px] md:h-[420px] rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/kids/indoor/ind16.jpg" // replace with your image
              alt="Indoor Birthday Photography with creative decorations"
              className="w-full h-full object-cover"
            />

            {/*
            // Optional YouTube video
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="Indoor Birthday Photography"
              frameBorder="0"
              allow="autoplay; fullscreen"
            />
            */}
          </div>

          {/* ================= RIGHT CONTENT ================= */}
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-gray-900 leading-tight">
              Birthday Indoor <br /> Photography
            </h2>

            <p className="mt-6 text-gray-600 text-base md:text-lg leading-relaxed max-w-xl">
              Capture joyful indoor birthday moments with elegant lighting,
              creative setups, and personalized decor for unforgettable
              celebrations.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3 text-gray-700">
              <ul className="space-y-2 list-disc list-inside">
                <li>Home Celebrations</li>
                <li>Balloon Arch Setup</li>
                <li>Theme-based Decor</li>
                <li>Soft Studio Lighting</li>
                <li>Kids Friendly Setup</li>
                <li>Custom Backdrops</li>
                <li>Detail Close-ups</li>
              </ul>

              <ul className="space-y-2 list-disc list-inside">
                <li>Cake Cutting Moments</li>
                <li>Family Portraits</li>
                <li>Friends Group Shots</li>
                <li>Minimalist Themes</li>
                <li>Night Celebrations</li>
                <li>Emotion Candid Shots</li>
                <li>Decor Highlights</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
