"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function KidsNavbar() {
  const pathname = usePathname();

  const navItem = (href, label) => {
    const isActive = pathname === href;
    return (
      <Link
        href={href}
        className={`px-3 py-2 text-sm font-medium transition ${
          isActive
            ? "text-purple-700 font-bold border-b-2 border-purple-700"
            : "text-gray-700 hover:text-purple-600"
        }`}
      >
        {label}
      </Link>
    );
  };

  return (
    <div className="w-full bg-white border-b shadow-sm sticky top-16 z-40">
      <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-between py-4">

        {/* Logo Section */}
        <Link href="/kids" className="flex items-center gap-2">
          <Image
            src="/logos/kidslogoblack.png"
            alt="Kids Studio Logo"
            width={120}
            height={50}
            className="object-contain"
            priority
          />
        </Link>

        {/* Nav Links */}
        <nav className="flex flex-wrap gap-6">
          {navItem("/kids", "Home")}
          {navItem("/kids/indoor", "Indoor")}
          {navItem("/kids/outdoor", "Outdoor")}
          {navItem("/kids/birthday", "Birthday")}
          {navItem("/kids/baptism", "Baptism")}
          {navItem("/kids/gallery", "Gallery")}
        </nav>
      </div>
    </div>
  );
}
