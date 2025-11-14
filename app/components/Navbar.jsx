"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import studioinlogo from "../../public/logos/sinblacl.png"; // Replace with your logo path

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between relative">
        {/* Left Menu - Desktop */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          {/* Wedding Dropdown */}
          <li className="relative group cursor-pointer">
            <div className="flex items-center gap-1">
              Wedding
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <ul className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md py-2 w-44 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="/weddings/hindu">Traditional</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="/weddings/christian">Christian</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="/weddings/muslim">Muslim</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="/weddings/prewedding">Pre-Wedding</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="/weddings/engagement">Engagement</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="/weddings/outdoor">Outdoor</Link>
              </li>
            </ul>
          </li>

          {/* Kids Direct Link */}
          <li className="hover:text-black">
            <Link href="/kids">Kids</Link>
          </li>

          <li className="hover:text-black">
            <Link href="/portfolio">Portfolio</Link>
          </li>
        </ul>

        {/* Center Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link href="/">
            <Image
              src={studioinlogo}
              alt="Studio Logo"
              className="h-3 md:h-24 lg:h-18 w-auto transition-transform duration-300 hover:scale-105"
              priority
            />
          </Link>
        </div>

        {/* Right Menu - Desktop */}
        <ul className="hidden md:flex space-x-4 items-center text-gray-700 font-medium">
          <li className="hover:text-black">
            <Link href="/about">About</Link>
          </li>
          <li className="hover:text-black">
            <Link href="/blog">Blogs</Link>
          </li>
          <li className="hover:text-black">
            <Link href="/contact">Contact</Link>
          </li>
          {/* Get a Quote → Redirect to contact */}
          <li>
            <Link href="/contact">
              <button className="px-4 py-2 border border-gray-800 rounded-lg hover:bg-gray-100 transition">
                Get a Quote
              </button>
            </Link>
          </li>
          {/* Book Now → Call number */}
          <li>
            <a href="tel:6374926377">
              <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition">
                Book Now
              </button>
            </a>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white px-4 py-6 shadow-md animate-slide-down">
          <ul className="space-y-4 text-gray-700 font-medium">
            <li>
              <details>
                <summary className="cursor-pointer flex items-center justify-between">
                  Wedding
                </summary>
                <ul className="pl-4 mt-2 space-y-2">
                  <li>
                    <Link
                      href="/wedding/traditional"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Traditional
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/wedding/christian"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Christian
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/wedding/muslim"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Muslim
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/wedding/prewedding"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Pre-Wedding
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/wedding/engagement"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Engagement
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/wedding/outdoor"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Outdoor
                    </Link>
                  </li>
                </ul>
              </details>
            </li>

            {/* Other Links */}
            <li>
              <Link href="/kidspage" onClick={() => setIsMobileMenuOpen(false)}>
                Kids
              </Link>
            </li>
            <li>
              <Link href="/portfolio" onClick={() => setIsMobileMenuOpen(false)}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/aboutus" onClick={() => setIsMobileMenuOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link href="/blogs" onClick={() => setIsMobileMenuOpen(false)}>
                Blogs
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                Contact
              </Link>
            </li>

            {/* Mobile - Get a Quote → Contact */}
            <li>
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <button className="w-full py-2 border border-gray-800 rounded-lg hover:bg-gray-100 transition">
                  Get a Quote
                </button>
              </Link>
            </li>

            {/* Mobile - Book Now → Call */}
            <li>
              <a href="tel:6374926377" onClick={() => setIsMobileMenuOpen(false)}>
                <button className="w-full py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition">
                  Book Now
                </button>
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
