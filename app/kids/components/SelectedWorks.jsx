import Image from "next/image";
import Link from "next/link";

const photos = [
  "/assets/selectedworks/select work 01.webp",
  "/assets/selectedworks/select work 13.webp",
  "/assets/selectedworks/select work 20.webp",
  "/assets/selectedworks/select work 09.webp",
];

export default function SelectedWorks() {
  return (
    <section className="py-20 px-4 bg-white text-center">
      <h2 className="text-sm tracking-widest uppercase mb-10 text-black font-serif">
        Selected Works
      </h2>

      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 max-w-7xl mx-auto">
        {photos.map((src, index) => (
          <div key={index} className="break-inside-avoid">
            <Image
              src={src}
              alt={`work-${index}`}
              width={600}
              height={900}
              className="w-full rounded-xl shadow grayscale hover:grayscale-0 transition"
            />
          </div>
        ))}
      </div>

      {/* <div className="mt-12">
        <Link
          href="/portfolio"
          className="inline-block px-8 py-3 border border-black rounded-full hover:bg-black hover:text-white transition"
        >
          View Portfolio
        </Link>
      </div> */}
    </section>
  );
}
