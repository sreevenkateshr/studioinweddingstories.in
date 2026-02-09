import Image from "next/image";
import Link from "next/link";

const photos = [
  "https://res.cloudinary.com/dd2bavjj3/image/upload/v1770580856/indorg11_kpczn6.jpg",
  "https://res.cloudinary.com/dd2bavjj3/image/upload/v1770580854/kidswork2_dj7wbw.jpg",
  "/kids/outdoor/out9.jpg",
  "/kids/outdoor/out5.jpg",
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
