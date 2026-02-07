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
              Our outdoor birthday photography captures joyful celebrations in
              natural light with creative themes, vibrant decor, and candid
              moments that turn special days into timeless memories.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3 text-gray-700">
              <ul className="space-y-2 list-disc list-inside">
                <li>Garden Birthday Photography</li>
                <li>Beach Birthday Photoshoot</li>
                <li>Balloon & Floral Decor</li>
                <li>Fairy Light Setup</li>
                <li>Picnic Style Themes</li>
                <li>Natural Light Portraits</li>
                <li>Poolside Celebrations</li>
              </ul>

              <ul className="space-y-2 list-disc list-inside">
                <li>Cake Smash Outdoor Shoot</li>
                <li>Kids Play Area Moments</li>
                <li>Family & Friends Group Shots</li>
                <li>Sunset Birthday Vibes</li>
                <li>Night Sparkle Photography</li>
                <li>Theme-based Decorations</li>
                <li>Candid Emotion Shots</li>
              </ul>
            </div>
          </div>

          {/* ================= RIGHT IMAGE / VIDEO ================= */}
          <div className="relative w-full h-[260px] sm:h-[340px] md:h-[420px] rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/kids/outdoor/out1.jpg" // replace with your image
              alt="Outdoor birthday photography with creative themes and natural light"
              className="w-full h-full object-cover"
            />

            {/*
            // Optional YouTube Video
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="Outdoor Birthday Photography"
              frameBorder="0"
              allow="autoplay; fullscreen"
            />
            */}
          </div>
        </div>
      </div>
    </section>
  );
}
