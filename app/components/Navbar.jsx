"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

// LOGO
import studioinlogoWhite from "../../public/logos/sinwhite.png";

// SOCIAL ICONS (you can replace with your own links)
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

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
        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src={studioinlogoWhite}
            alt="Studio Logo"
            className="w-28 md:w-32 h-auto transition-all"
            priority
          />
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-8 font-medium text-white">
          <li className="hover:text-purple-500">
            <Link href="/service">Services</Link>
          </li>
          <li className="hover:text-purple-500">
            <Link href="/kids">Kids</Link>
          </li>
          <li className="hover:text-purple-500">
            <Link href="/about">About Us</Link>
          </li>
          <li className="hover:text-purple-500">
            <Link href="/testimonials">Testimonials</Link>
          </li>
          <li className="hover:text-purple-500">
            <Link href="/galleries">Galleries</Link>
          </li>
        </ul>

        {/* DESKTOP BUTTONS */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/contact">
            <button className="px-4 py-2 rounded-lg border border-white text-white hover:bg-white/20 transition">
              Get in Touch
            </button>
          </Link>

          <a href="tel:6374926377">
            <button className="px-4 py-2 rounded-lg bg-white text-black transition">
              Book Now
            </button>
          </a>
        </div>

        {/* MOBILE ICON */}
        <button className="md:hidden" onClick={() => setOpen(true)}>
          <Menu size={28} className={scrolled ? "text-black" : "text-white"} />
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex justify-end"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-3/4 bg-[#83a6a0] h-full flex flex-col justify-center items-center gap-8 p-8 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE BUTTON */}
            <div className="absolute top-6 right-6">
              <X
                size={28}
                onClick={() => setOpen(false)}
                className="cursor-pointer text-white"
              />
            </div>

            {/* MENU LINKS */}
            <ul className="flex flex-col items-center gap-6 text-white text-xl font-semibold">
              <li>
                <Link href="/service" onClick={() => setOpen(false)}>
                  Services
                </Link>
              </li>
              <li>
                <Link href="/kids" onClick={() => setOpen(false)}>
                  Kids
                </Link>
              </li>
              <li>
                <Link href="/about" onClick={() => setOpen(false)}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/testimonials" onClick={() => setOpen(false)}>
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/galleries" onClick={() => setOpen(false)}>
                  Galleries
                </Link>
              </li>
            </ul>

            {/* MOBILE BUTTONS */}
            <div className="flex flex-col items-center gap-4 mt-8 w-full">
              <a href="/contact" className="w-full">
                <button className="w-full py-3 text-lg font-semibold border border-white rounded-xl hover:bg-white/20 transition">
                  Get in Touch
                </button>
              </a>

              <a href="tel:6374926377" className="w-full">
                <button className="w-full py-3 text-lg font-semibold bg-white text-black rounded-xl transition">
                  Book Now
                </button>
              </a>
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex gap-6 mt-12">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-200"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-200"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-200"
              >
                <FaLinkedinIn size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-200"
              >
                <FaTwitter size={20} />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
