"use client";

import { FaInstagram } from "react-icons/fa";

export default function HeroSection() {
  const handleDownArrowClick = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative h-screen w-screen overflow-hidden">
      {/* ================= VIDEO BACKGROUND ================= */}
      <div className="absolute inset-0 -z-10">
        <iframe
          className="absolute top-1/2 left-1/2
                     w-[177.77vh] h-[100vh] 
                     max-w-none max-h-none
                     -translate-x-1/2 -translate-y-1/2
                     sm:w-[200vw] sm:h-[112.5vw] md:w-[177.77vh] md:h-[100vh]"
          src="https://www.youtube.com/embed/7s_G5rikLRA?autoplay=1&mute=1&controls=0&loop=1&playlist=7s_G5rikLRA&rel=0&modestbranding=1&playsinline=1"
          title="Studio.in Wedding Photography"
          frameBorder="0"
          allow="autoplay; fullscreen"
        />
      </div>

      {/* ================= OVERLAY ================= */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* ================= INSTAGRAM ICON ================= */}
      {/* <div className="absolute left-6 top-1/2 -translate-y-1/2 z-20">
        <a
          href="https://www.instagram.com//"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-2xl hover:opacity-80 transition"
        >
          <FaInstagram />
        </a>
      </div> */}

      {/* ================= SCROLL ARROW ================= */}
      <div
        onClick={handleDownArrowClick}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 cursor-pointer"
      >
        <span className="block h-8 w-8 border-b-2 border-r-2 border-white rotate-45 animate-bounce" />
      </div>
    </section>
  );
}