"use client";

import Image from "next/image";

export default function TestimonialsSection() {
  return (
    <>
      {/* =====================================
          HERO HEADER
      ====================================== */}
      <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-5">
          {[
            "/assets/banner 01.webp",
            "/assets/banner 02.webp",
            "/assets/banner 03.webp",
            "/assets/banner 04.webp",
            "/assets/banner 05.webp",
          ].map((img, i) => (
            <div key={i} className="relative">
              <Image src={img} alt="Featured" fill className="object-cover" priority={i === 0} />
            </div>
          ))}
        </div>

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 flex h-full items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-serif tracking-widest">
            TESTIMONIALS
          </h1>
        </div>
      </section>

      {/* =====================================
          STUDIO CARD
      ====================================== */}
      <section className="bg-[#f9fafb] py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 rounded-3xl bg-white p-8 shadow-lg hover:shadow-xl transition">
            <div className="flex items-start gap-5">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-black overflow-hidden">
                <img
                  src="https://res.cloudinary.com/dd2bavjj3/image/upload/v1770579477/STUDIOIN_logo_qixey6.png"
                  alt="Studio Logo"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Studio.in Photography</h3>
                <p className="mt-1 text-sm text-gray-500">Wedding & Creative Photography Studio</p>
                <div className="mt-3 flex items-center gap-2">
                  <div className="flex text-yellow-400 text-lg">★★★★★</div>
                  <span className="text-sm font-semibold text-gray-800">4.9</span>
                  <span className="text-sm text-gray-500">(600+ reviews)</span>
                </div>
              </div>
            </div>

            <a
              href="https://share.google/XjGQdAcM8u3SATD3K"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-black px-7 py-3 text-sm font-semibold text-white hover:bg-gray-800 transition"
            >
              View on Google
            </a>
          </div>
        </div>
      </section>

      {/* =====================================
          COUPLE TESTIMONIAL CARDS
      ====================================== */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-14 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Words From Our Couples
            </h2>
            <p className="mt-2 text-gray-500">
              Real experiences from couples who trusted us
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <p className="text-sm text-gray-600 leading-relaxed text-justify">“{item.text}”</p>

                <div className="mt-6 flex items-center gap-4 border-t pt-4">
                  <div className="h-12 w-12 rounded-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{item.name}</h4>
                    <p className="text-sm text-gray-500">{item.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

/* ===============================
    TESTIMONIALS DATA WITH COUPLE IMAGES
=============================== */
const testimonials = [
  {
    name: "LANI & SOPHIA",
    title: "Happily Married",
    text: "Had a wonderful experience with Studio.in. They captured every moment perfectly.",
    image: "https://res.cloudinary.com/dd2bavjj3/image/upload/v1770545328/wed06_pifmy9.jpg",
  },
  {
    name: "Edwin & Bini",
    title: "Simply Amazing",
    text: "They made our big day even more special with their creativity and professionalism.",
    image: "/assets/home/inst3.jpg",
  },
  {
    name: "Jasmi & Nithis",
    title: "Unforgettable Moments",
    text: "The photos were beyond our expectations. Truly amazing team!",
    image: "/assets/home/inst4.jpg",
  },
  {
    name: "Karthik & Ananya",
    title: "Perfect Memories",
    text: "From start to finish, the team was exceptional. Highly recommended!",
    image: "/assets/home/inst6.jpg",
  },
  {
    name: "Arun & Meera",
    title: "Best Decision",
    text: "Choosing Studio.in was the best decision for our wedding. Fantastic work!",
    image: "/assets/home/inst2.jpg",
  },
];