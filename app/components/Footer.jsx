"use client";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPinterestP,
} from "react-icons/fa";
import Image from "next/image";
import studio from "../../public/logos/sinwhite.png";

export default function Footer() {
  return (
    <footer className="bg-[#84a7a1] text-white font-inter text-sm px-6 md:px-16 lg:px-28 py-16">
      <div className="flex flex-col lg:flex-row justify-between gap-12 md:gap-16">
        {/* Logo + Contact */}
        <div className="w-full lg:w-1/4 space-y-6">
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

        {/* Weddings Section */}
        <div className="w-full lg:w-1/4">
          <h3 className="uppercase font-semibold mb-4 tracking-wide">
            Our Services
          </h3>
          <ul className="space-y-2">
            <li>
              <a
                href="/wedding-photography/outdoor"
                className="hover:text-gray-200 transition"
              >
                Traditional Wedding Photography
              </a>
            </li>
            <li>
              <a
                href="/wedding-photography/muslim"
                className="hover:text-gray-200 transition"
              >
                Candid Wedding Photography
              </a>
            </li>
            <li>
              <a
                href="/wedding-photography/christian"
                className="hover:text-gray-200 transition"
              >
                Pre-Wedding Photography
              </a>
            </li>
            <li>
              <a
                href="/wedding-photography/brahmin"
                className="hover:text-gray-200 transition"
              >
                Post-Wedding Photography
              </a>
            </li>
            <li>
              <a
                href="/wedding-photography/telugu"
                className="hover:text-gray-200 transition"
              >
                Enagement
              </a>
            </li>
            {/* <li>
              <a
                href="/wedding-photography/hindu"
                className="hover:text-gray-200 transition"
              >
                Hindu Wedding Photography
              </a>
            </li> */}
            {/* <li>
              <a
                href="/wedding-photography/engagement"
                className="hover:text-gray-200 transition"
              >
                Engagement Photography
              </a>
            </li> */}
          </ul>
        </div>

        {/* Gallery */}
        <div className="w-full lg:w-1/4 space-y-8">
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
                <a
                  href="/kids/gallery"
                  className="hover:text-gray-200 transition"
                >
                  Kids
                </a>
              </li>
              <li>
                <a
                  href="/kids/indoor"
                  className="hover:text-gray-200 transition"
                >
                  Indoor
                </a>
              </li>
              <li>
                <a
                  href="/kids/outdoor"
                  className="hover:text-gray-200 transition"
                >
                  Outdoor
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Video + Blog */}
        <div className="w-full lg:w-1/4 space-y-8">
          <div>
            <h3 className="uppercase font-semibold mb-4 tracking-wide">
              FAq
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://youtu.be/7s_G5rikLRA?si=_TkSGykTNu1uEr8x"
                  className="hover:text-gray-200 transition"
                >
                  Traditional Wedding Films
                </a>
              </li>
              {/* <li>
                <a
                  href="/wedding-films/outdoor"
                  className="hover:text-gray-200 transition"
                >
                  Outdoor Wedding Films
                </a>
              </li> */}
              {/* <li>
                <a
                  href="/wedding-films/shortstories"
                  className="hover:text-gray-200 transition"
                >
                  Short Stories
                </a>
              </li> */}
            </ul>
          </div>

          <div>
            <h3 className="uppercase font-semibold mb-4 tracking-wide">Blog</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/blog"
                  className="hover:text-gray-200 transition"
                >
                  Weddings
                </a>
              </li>
              {/* <li>
                <a
                  href="/blog/natural-light-tips"
                  className="hover:text-gray-200 transition"
                >
                  Natural Light Tips
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex gap-6 mt-12 justify-center text-white text-2xl">
        <a
          href="#"
          className="hover:text-gray-200 transition transform hover:scale-110"
        >
          <FaFacebookF />
        </a>
        <a
          href="#"
          className="hover:text-gray-200 transition transform hover:scale-110"
        >
          <FaInstagram />
        </a>
        <a
          href="#"
          className="hover:text-gray-200 transition transform hover:scale-110"
        >
          <FaYoutube />
        </a>
        <a
          href="#"
          className="hover:text-gray-200 transition transform hover:scale-110"
        >
          <FaPinterestP />
        </a>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-white/40 pt-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-white text-sm">
          ©2026 StudioIn. All rights reserved.
        </p>
        <p className="text-sm mt-2 md:mt-0">
          Powered by{" "}
          <a
            href="https://sreevenkatesh.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-clip-text text-white hover:underline"
          >
            Cape Tech Solutions
          </a>
        </p>
      </div>
    </footer>
  );
}
