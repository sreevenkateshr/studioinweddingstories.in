"use client";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import Image from "next/image";
import studio from "../../public/logos/sinwhite.png";

export default function Footer() {
  return (
    <>
      <footer className="bg-[#84a6a1] text-white font-inter text-sm px-6 md:px-16 lg:px-28 py-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
          {/* Logo + Contact */}
          <div className="space-y-6">
            <Image
              src={studio}
              alt="Studio Logo"
              width={220}
              height={80}
              className="w-56 h-auto"
            />
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-white" />
                <span>Kanyakumari, Tamil Nadu - 629001</span>
              </div>
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-white" />
                <span>+91 95975 08874</span>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-white" />
                <span>studio.in26@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="uppercase font-semibold mb-4 tracking-wide">
              Our Services
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="/contact" className="hover:text-gray-200 transition">
                  Traditional Wedding Photography
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-gray-200 transition">
                  Candid Wedding Photography
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-gray-200 transition">
                  Pre-Wedding Photography
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-gray-200 transition">
                  Post-Wedding Photography
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-gray-200 transition">
                  Engagement
                </a>
              </li>
            </ul>
          </div>

          {/* Gallery */}
          <div>
            <h3 className="uppercase font-semibold mb-4 tracking-wide">
              Gallery
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="/galleries" className="hover:text-gray-200 transition">
                  Gallery
                </a>
              </li>
              <li>
                <a href="/kids/gallery" className="hover:text-gray-200 transition">
                  Kids
                </a>
              </li>
              <li>
                <a href="/kids/indoor" className="hover:text-gray-200 transition">
                  Indoor
                </a>
              </li>
              <li>
                <a href="/kids/outdoor" className="hover:text-gray-200 transition">
                  Outdoor
                </a>
              </li>
            </ul>
          </div>

          {/* FAQ + Blog */}
          <div className="space-y-8">
            <div>
              <h3 className="uppercase font-semibold mb-4 tracking-wide">FAQ</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/faq" className="hover:text-gray-200 transition">
                    Frequently Asked Questions
                  </a>
                </li>
              </ul>
            </div>
            {/* <div>
              <h3 className="uppercase font-semibold mb-4 tracking-wide">Blog</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/blog" className="hover:text-gray-200 transition">
                    Weddings
                  </a>
                </li>
              </ul>
            </div> */}
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 mt-12 justify-center text-white text-2xl">
          <a href="https://www.instagram.com/studio_.in" className="hover:text-gray-200 transition transform hover:scale-110">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/studio_.in" className="hover:text-gray-200 transition transform hover:scale-110">
            <FaInstagram />
          </a>
          <a href="https://www.youtube.com/@studio.inweddingphotography" className="hover:text-gray-200 transition transform hover:scale-110">
            <FaYoutube />
          </a>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 border-t border-white/40 pt-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-white text-sm">©2026 StudioIn. All rights reserved.</p>
          <p className="text-sm mt-2 md:mt-0">
            Powered by{" "}
            <a href="https://sreevenkatesh.vercel.app" target="_blank" rel="noopener noreferrer" className="bg-clip-text text-white hover:underline">
              Cape Tech Solutions
            </a>
          </p>
        </div>
      </footer>

      {/* =========================
          Floating WhatsApp Button
      ========================= */}
      <a
        href="https://wa.me/919597508874"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 transition transform hover:scale-110"
      >
        <FaWhatsapp className="text-2xl" />
      </a>
    </>
  );
}