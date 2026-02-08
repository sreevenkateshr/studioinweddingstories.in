"use client";

import Image from "next/image";

export default function Album1() {
  const images = [
    //  "https://res.cloudinary.com/dd2bavjj3/image/upload/v1770545329/wed14_t8n6dc.jpg",
    "https://res.cloudinary.com/dd2bavjj3/image/upload/v1770552048/S_IN7907_rkvlxo.jpg",
    "https://res.cloudinary.com/dd2bavjj3/image/upload/v1770552051/S_IN7917_umauvh.jpg",
    "https://res.cloudinary.com/dd2bavjj3/image/upload/v1770552060/S_IN7911_hchgux.jpg",
    "https://res.cloudinary.com/dd2bavjj3/image/upload/v1770552056/S_IN7909_ddx63m.jpg",
    "https://res.cloudinary.com/dd2bavjj3/image/upload/v1770552052/S_IN8056_wpasnd.jpg",
    "https://res.cloudinary.com/dd2bavjj3/image/upload/v1770552053/S_IN8156_y72qjm.jpg",
    "https://res.cloudinary.com/dd2bavjj3/image/upload/v1770552055/S_IN7935_goyhtu.jpg",
    "https://res.cloudinary.com/dd2bavjj3/image/upload/v1770552056/S_IN8139_ufleog.jpg",
    "https://res.cloudinary.com/dd2bavjj3/image/upload/v1770552060/S_IN8191_py8sy8.jpg",
    "https://res.cloudinary.com/dd2bavjj3/image/upload/v1770552061/S_IN8199_vcsaxl.jpg",
    "https://res.cloudinary.com/dd2bavjj3/image/upload/v1770552062/S_IN8183_vofcex.jpg",
    "https://res.cloudinary.com/dd2bavjj3/image/upload/v1770552063/S_IN8482_zqnowf.jpg",
    "https://res.cloudinary.com/dd2bavjj3/image/upload/v1770552064/S_IN8466_aqt3ge.jpg",
    "https://res.cloudinary.com/dd2bavjj3/image/upload/v1770552067/SNPY6447_jjh54l.jpg",
    "https://res.cloudinary.com/dd2bavjj3/image/upload/v1770552069/SNPY6455_pdntap.jpg",
    "https://res.cloudinary.com/dd2bavjj3/image/upload/v1770552069/S_IN8505_hpvypv.jpg",
    "https://res.cloudinary.com/dd2bavjj3/image/upload/v1770552070/SNPY6444_e2uazu.jpg",
    "https://res.cloudinary.com/dd2bavjj3/image/upload/v1770552072/SNPY6459_th3s1f.jpg",
    "https://res.cloudinary.com/dd2bavjj3/image/upload/v1770552072/SNPY6475_icnj4g.jpg",
    "https://res.cloudinary.com/dd2bavjj3/image/upload/v1770552075/SNPY6465_odje3b.jpg",
    // add more images here
  ];

  return (
    <>
      {/* Banner */}
      <section className="relative h-[60vh]">
        <Image
          src="https://res.cloudinary.com/dd2bavjj3/image/upload/v1770552056/S_IN8139_ufleog.jpg"
          alt="Couple Name"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-5xl md:text-6xl font-serif">
            JAPHET ELRON
          </h1>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((imgUrl, i) => (
            <div
              key={i}
              className="relative aspect-[4/5] overflow-hidden rounded-xl"
            >
              <Image
                src={imgUrl}
                alt={`Album image ${i + 1}`}
                fill
                className="object-cover hover:scale-105 transition duration-700"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
