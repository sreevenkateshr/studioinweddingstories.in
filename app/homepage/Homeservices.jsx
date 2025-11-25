"use client";
import React from "react";

export default function Categoryshowcase() {
  return (
    <div style={{ backgroundColor: "#f4f3ef", width: "100%" }}>
      <div className="max-w-screen-xl mx-auto px-4 py-20">
        <h2
          className=" text-black text-center text-4xl md:text-4xl mb-16"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Our Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* ENGAGEMENT */}
          <div className="flex flex-col items-center group">
            <img
              src="/assets/home/our service 01..webp"
              alt="Engagement"
              className="w-full h-[500px] object-cover transform group-hover:scale-105 transition duration-500"
            />
            <button className="mt-6 text-black px-8 py-2 border border-black rounded-full text-xs tracking-widest hover:bg-black hover:text-white transition">
              ENGAGEMENT
            </button>
          </div>

          {/* WEDDING */}
          <div className="flex flex-col items-center group">
            <img
              src="/assets/home/our service 02.webp"
              alt="Wedding"
              className="w-full h-[500px] object-cover transform group-hover:scale-105 transition duration-500"
            />
            <button className="mt-6 text-black px-8 py-2 border border-black rounded-full text-xs tracking-widest hover:bg-black hover:text-white transition">
              WEDDING
            </button>
          </div>

          {/* MATERNITY */}
          <div className="flex flex-col items-center group">
            <img
              src="/assets/selectedworks/select work 03.webp"
              alt="Maternity"
              className="w-full h-[500px] object-cover transform group-hover:scale-105 transition duration-500"
            />
            <button className="mt-6  text-black px-8 py-2 border border-black rounded-full text-xs tracking-widest hover:bg-black hover:text-white transition">
              MATERNITY
            </button>
          </div>

          {/* OUTDOOR */}
          <div className="flex flex-col items-center group">
            <img
              src="/assets/home/our service 04.webp"
              alt="Outdoor"
              className="w-full h-[500px] object-cover transform group-hover:scale-105 transition duration-500"
            />
            <button className="mt-6 text-black px-8 py-2 border border-black rounded-full text-xs tracking-widest hover:bg-black hover:text-white transition">
              OUTDOOR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
