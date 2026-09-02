import { SectionHeading } from "./SectionHeading";
import bedsheets from "@/assets/cat-bedsheets.jpg";
import pillows from "@/assets/cat-pillows.jpg";
import towels from "@/assets/cat-towels.jpg";
import carpet from "@/assets/cat-carpet.jpg";
import decor from "@/assets/cat-decor.jpg";
import wallpaper from "@/assets/cat-wallpaper.jpg";
import comforter from "@/assets/prod-comforter.jpg";
import bedcover from "@/assets/prod-bedcover.jpg";
import murti from "@/assets/prod-murti.jpg";
import bathroom from "@/assets/coll-soft.jpg";
import corner from "@/assets/gal-corner.jpg";
import bedroom from "@/assets/gal-bedroom.jpg";

function Tile({
  image,
  name,
  className = "",
  height,
  large = false,
}: {
  image: string;
  name: string;
  className?: string;
  height: string;
  large?: boolean;
}) {
  return (
    <a
      href="#products"
      data-reveal
      className={`reveal media-zoom group relative block ${className}`}
    >
      <img
        src={image}
        alt={name}
        loading="lazy"
        className={`w-full object-cover ${height}`}
      />
      <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/60 via-navy/5 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />
      <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5">
        <span
          className={`font-[family-name:var(--font-display)] text-white ${
            large ? "text-2xl md:text-3xl" : "text-lg"
          }`}
        >
          {name}
        </span>
        <span className="link-arrow text-white/90">
          Explore <span data-arrow>→</span>
        </span>
      </span>
    </a>
  );
}

export function Categories() {
  return (
    <section id="collections" className="bg-[var(--sand)] py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-6">
        <SectionHeading
          eyebrow="Shop by Category"
          title="Everything Your Home Needs"
          subtitle="From everyday comfort to the finishing touches, explore our carefully selected home collection."
        />

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          <Tile image={bedsheets} name="Bed Sheets" height="h-[420px] md:h-[560px]" className="md:col-span-2" large />
          <div className="grid gap-4">
            <Tile image={comforter} name="Comforter Sets" height="h-[260px] md:h-[272px]" />
            <Tile image={pillows} name="Pillow Covers" height="h-[260px] md:h-[272px]" />
          </div>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <Tile image={bedcover} name="Bed Covers" height="h-[300px]" />
          <Tile image={bedroom} name="Mattresses" height="h-[300px]" />
          <Tile image={towels} name="Towels" height="h-[300px]" />
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-4">
          <Tile image={carpet} name="Carpets" height="h-[240px]" />
          <Tile image={corner} name="Doormats" height="h-[240px]" />
          <Tile image={wallpaper} name="Wallpapers" height="h-[240px]" />
          <Tile image={murti} name="Artificial Murti" height="h-[240px]" />
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <Tile image={decor} name="Flower Pots" height="h-[280px]" />
          <Tile image={bathroom} name="Bath Accessories" height="h-[280px]" />
        </div>
      </div>
    </section>
  );
}
