import { SectionHeading } from "./SectionHeading";
import bedroom from "@/assets/gal-bedroom.jpg";
import fabric from "@/assets/gal-fabric.jpg";
import corner from "@/assets/gal-corner.jpg";
import pillows from "@/assets/cat-pillows.jpg";
import carpet from "@/assets/cat-carpet.jpg";
import decor from "@/assets/cat-decor.jpg";
import bath from "@/assets/coll-soft.jpg";
import wallpaper from "@/assets/cat-wallpaper.jpg";

const ITEMS = [
  { image: bedroom, label: "Bedroom Edit", h: "h-[300px] md:h-[430px]" },
  { image: pillows, label: "Everyday Comfort", h: "h-[260px] md:h-[300px]" },
  { image: bath, label: "Soft Textures", h: "h-[300px] md:h-[380px]" },
  { image: fabric, label: "Soft Textures", h: "h-[300px] md:h-[440px]" },
  { image: corner, label: "Quiet Corners", h: "h-[260px] md:h-[300px]" },
  { image: decor, label: "Natural Details", h: "h-[260px] md:h-[360px]" },
  { image: carpet, label: "Quiet Corners", h: "h-[300px] md:h-[400px]" },
  { image: wallpaper, label: "Natural Details", h: "h-[260px] md:h-[330px]" },
];

export function Gallery() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-6">
        <SectionHeading
          eyebrow="Home Inspiration"
          title="Find Inspiration for Your Space"
          subtitle="Small details can make a beautiful difference."
          align="center"
        />

        <div className="mt-14 gap-4 md:columns-3 [&>figure]:mb-4">
          {ITEMS.map((item, i) => (
            <figure
              key={i}
              data-reveal
              className="reveal media-zoom group relative break-inside-avoid"
            >
              <img
                src={item.image}
                alt={item.label}
                loading="lazy"
                className={`w-full object-cover ${item.h}`}
              />
              <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-navy/70 to-transparent p-5 text-[10.5px] font-medium uppercase tracking-[0.2em] text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                {item.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
