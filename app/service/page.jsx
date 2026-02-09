"use client";

import Image from "next/image";


const sections = [
  {
    title: "Wedding",
    content:
      "Every wedding is a beautiful story of love, laughter, and lifelong promises. Based in Nagercoil and serving across Kanyakumari and all over Tamil Nadu, our wedding photography focuses on capturing real emotions  the happy tears, genuine smiles, and heartfelt moments that make your day unforgettable. With an artistic and storytelling approach, we create timeless wedding memories you will cherish forever. We also travel worldwide to document destination weddings with the same passion and care.",
    image: "/assets/banner 05.webp",
    imageRight: true,
  },
  {
    title: "Maternity",
    content:
      "Celebrate the magical journey of motherhood with our maternity photography services in Nagercoil, Kanyakumari, and across Tamil Nadu. We capture elegant, natural, and emotional moments that reflect the beauty, strength, and warmth of this special phase. Whether at home or an outdoor location, we create soulful maternity portraits that become lifelong memories. Worldwide travel available for maternity shoots.",
    image: "/assets/selectedworks/select work 03.webp",
    imageRight: false,
  },
  {
    title: "Baptism",
    content:
      "Baptism is a sacred and emotional milestone in your child’s life. Our baptism photography services in Nagercoil and Kanyakumari focus on preserving pure emotions, meaningful rituals, and heartfelt family moments. Serving churches and families across Tamil Nadu, we ensure every precious detail is captured beautifully, creating timeless memories you can relive forever.",
    image: "/kids/baptism/bap17.jpg",
    imageRight: true,
  },
  {
    title: "Modeling",
    content:
      "Our professional modeling photography services offer creative direction, cinematic lighting, and editorial storytelling. Based in Nagercoil and working across Tamil Nadu, we help aspiring and professional models build strong portfolios that stand out. From fashion to lifestyle shoots, we deliver high-quality visuals with a modern and artistic touch. Available for national and international projects.",
    image: "/assets/selectedworks/select work 01.webp",
    imageRight: false,
  },
  {
    title: "Other Events",
    content:
      "From birthdays and engagements to family celebrations and corporate events, we provide professional event photography services in Nagercoil, Kanyakumari, and all over Tamil Nadu. Every event is captured with creativity, attention to detail, and genuine emotion. We also travel worldwide to cover special occasions, ensuring your moments are preserved beautifully, wherever they happen.",
    image: "/assets/home/our service 04.webp",
    imageRight: true,
  },
];


export default function ServicesPage() {
  return (
    <section className="bg-white w-full">
      {/* BANNER */}
    <section className="relative h-[70vh] w-full">
        <Image
          src="https://res.cloudinary.com/dd2bavjj3/image/upload/v1770579065/service_q4xj67.png"
          alt="Portfolio Banner"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/20 flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-4 uppercase">
            Services
          </h1>
          <p className="text-lg md:text-xl  font-serif text-gray-200 max-w-3xl">
            Explore our best works  where every frame tells a timeless story.
          </p>
        </div>
      </section>
   

      {/* ZIG-ZAG CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-32 space-y-40">
        {sections.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-20 ${
              item.imageRight ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* TEXT */}
            <div className="md:w-1/2 w-full text-center">
              <h2
                className="text-4xl md:text-5xl mb-8 text-black"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {item.title}
              </h2>

              <p className="text-gray-600 leading-relaxed max-w-lg mx-auto mb-10">
                {item.content}
              </p>

              <Image
                src="/logos/sinblacl.png"
                alt="Studio Logo"
                width={110}
                height={45}
                className="mx-auto"
              />
            </div>

            {/* IMAGE */}
            <div className="md:w-1/2 w-full">
              <div
                className={`relative w-full h-[420px] md:h-[520px] overflow-hidden ${
                  item.imageRight
                    ? "rounded-tl-[140px] rounded-br-[140px]"
                    : "rounded-tr-[140px] rounded-bl-[140px]"
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}