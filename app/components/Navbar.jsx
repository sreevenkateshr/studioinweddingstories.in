"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

// IMPORT TWO LOGOS
import studioinlogoBlack from "../../public/logos/sinblacl.png";
import studioinlogoWhite from "../../public/logos/sinwhite.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[#84a7a1] shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">

        {/* LOGO SWITCH */}
        <Link href="/" className="flex items-center">
          <Image
            src={scrolled ? studioinlogoWhite : studioinlogoWhite}
            alt="Studio Logo"
            className="w-28 md:w-32 h-auto transition-all"
            priority
          />
        </Link>

        {/* DESKTOP MENU */}
        <ul
          className={`hidden md:flex gap-8 font-medium transition-all ${
            scrolled ? "text-white-800" : "text-white"
          }`}
        >
          {/* DROPDOWN */}
          <li className="relative group cursor-pointer">
            <div className="flex items-center gap-1 hover:text-purple-500">
              Weddings
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            <ul className="absolute top-full left-0 mt-2 bg-white text-gray-700 shadow-lg rounded-md py-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <li className="px-4 py-2 hover:bg-gray-100"><Link href="/weddings/hindu">Traditional</Link></li>
              <li className="px-4 py-2 hover:bg-gray-100"><Link href="/weddings/christian">Candid</Link></li>
              <li className="px-4 py-2 hover:bg-gray-100"><Link href="/weddings/muslim">Pre-Wedding</Link></li>
              <li className="px-4 py-2 hover:bg-gray-100"><Link href="/weddings/prewedding">Post-Wedding</Link></li>
              <li className="px-4 py-2 hover:bg-gray-100"><Link href="/weddings/engagement">Engagement</Link></li>
              {/* <li className="px-4 py-2 hover:bg-gray-100"><Link href="/weddings/outdoor">Outdoor</Link></li> */}
            </ul>
          </li>

          <li className="hover:text-purple-500"><Link href="/kids">Kids</Link></li>
          <li className="hover:text-purple-500"><Link href="/portfolio">Portfolio</Link></li>
          <li className="hover:text-purple-500"><Link href="/about">About Us</Link></li>
          <li className="hover:text-purple-500"><Link href="/testimonials">Testimonials</Link></li>
          <li className="hover:text-purple-500"><Link href="/galleries">Galleries</Link></li>
        </ul>

        {/* DESKTOP BUTTONS */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/contact">
            <button
              className={`px-4 py-2 rounded-lg transition ${
                scrolled
                  ? "border border-white-900 text-white hover:bg-gray-100"
                  : "border border-white text-white hover:bg-white/20"
              }`}
            >
              Get in Touch
            </button>
          </Link>

          <a href="tel:9597508874">
            <button
              className={`px-4 py-2 rounded-lg transition ${
                scrolled ? "bg-white text-black" : "bg-white text-black"
              }`}
            >
              Book Now
            </button>
          </a>
        </div>

        {/* MOBILE ICON */}
        <button className="md:hidden" onClick={() => setOpen(true)}>
          <Menu size={28} className={`${scrolled ? "text-black" : "text-white"}`} />
        </button>
      </div>

      {/* MOBILE MENU SIDEBAR */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 md:hidden"
          onClick={() => setOpen(false)}
        >
          <div
            className="absolute right-0 top-0 w-3/4 bg-white h-full p-6 shadow-md"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end mb-6">
              <X size={28} onClick={() => setOpen(false)} className="cursor-pointer" />
            </div>

            <ul className="space-y-6 text-lg font-medium text-gray-700">
              <details>
                <summary className="cursor-pointer">Weddings</summary>
                <ul className="mt-2 pl-4 space-y-2">
                  <li><Link href="/weddings/hindu">Traditional</Link></li>
                  <li><Link href="/weddings/christian">Christian</Link></li>
                  <li><Link href="/weddings/muslim">Muslim</Link></li>
                  <li><Link href="/weddings/prewedding">Pre-Wedding</Link></li>
                  <li><Link href="/weddings/engagement">Engagement</Link></li>
                  <li><Link href="/weddings/outdoor">Outdoor</Link></li>
                </ul>
              </details>

              <li><Link href="/kids">Kids</Link></li>
              <li><Link href="/portfolio">Portfolio</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/blog">Blogs</Link></li>
              <li><Link href="/testimonials">Testimonials</Link></li>
            </ul>

            {/* BUTTONS */}
            <div className="mt-10 space-y-4 w-full">
              <Link href="/contact">
                <button className="w-full py-3 text-lg font-semibold border border-gray-900 rounded-xl hover:bg-gray-100 active:scale-[0.98] transition-all">
                  Get in Touch
                </button>
              </Link>

              <a href="tel:6374926377">
                <button className="w-full py-3 text-lg font-semibold bg-black text-white rounded-xl shadow-md hover:bg-gray-800 active:scale-[0.98] transition-all">
                  Book Now
                </button>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;