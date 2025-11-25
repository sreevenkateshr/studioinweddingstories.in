"use client";
import React from "react";

const albums = [
  {
    id: 1,
    title: "Diviya",
    type: "Baby Shower",
    image: "/assets/albums/Album thumb1.webp",
    pdf: "/assets/albums/baby shower 2025.pdf",
  },
  {
    id: 2,
    title: "Sophia & Liam",
    type: "Maternity Album",
    image: "https://picsum.photos/300/400?random=2",
    pdf: "/assets/albums/",
  },
  {
    id: 3,
    title: "SUNDAR & DEVI",
    type: "Engagement Album",
    image: "https://picsum.photos/300/400?random=3",
    pdf: "/public/assets/albums/",
  },
  {
    id: 4,
    title: "Ava & Ethan",
    type: "Family Album",
    image: "https://picsum.photos/300/400?random=4",
    pdf: "/assets/albums/family-ava-ethan.pdf",
  },
];

export default function AlbumShowcase() {
  return (
    <section className="w-full py-16 px-6 md:px-12 bg-white">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-black">
            Albums Showcases
          </h2>
          <p className="text-gray-600 mt-2 max-w-xl">
            Explore our curated albums. Each album beautifully captures memorable moments. Click "View Album" to see the complete work. Photographers can also contact us for designing custom albums.
          </p>
        </div>
        <a
          href="/contact"
          className="text-sm bg-black text-white px-5 py-2 rounded-full hover:bg-gray-800 transition-all duration-300"
        >
          Contact Us
        </a>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {albums.map((album) => (
          <div
            key={album.id}
            className="group relative bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col"
          >
            {/* Image */}
            <div className="overflow-hidden rounded-t-lg">
              <img
                src={album.image}
                alt={album.title}
                className="w-full h-64 object-cover rounded-t-lg transform group-hover:scale-105 transition duration-500"
              />
            </div>

            {/* Info */}
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-lg font-semibold text-gray-900">{album.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{album.type}</p>

              {/* View Album Button */}
              <a
                href={album.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto text-center bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition"
              >
                View More
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
