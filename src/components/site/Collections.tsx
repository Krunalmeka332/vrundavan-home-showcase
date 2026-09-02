import { SectionHeading } from "./SectionHeading";
import bedroom from "@/assets/gal-bedroom.jpg";
import soft from "@/assets/coll-soft.jpg";
import murti from "@/assets/prod-murti.jpg";

const COLLECTIONS = [
  {
    number: "Collection 01",
    title: "The Bedroom Edit",
    items: "Bed Sheets · Bed Covers · Pillow Covers · Comforter Sets",
    image: bedroom,
    alt: "The Bedroom Edit — styled bed with layered linens",
  },
  {
    number: "Collection 02",
    title: "The Soft Home Edit",
    items: "Towels · Carpets · Doormats · Bath Accessories",
    image: soft,
    alt: "The Soft Home Edit — towels, bath textiles and woven mats",
  },
  {
    number: "Collection 03",
    title: "The Décor Edit",
    items: "Flower Pots · Artificial Murtis · Wallpapers",
    image: murti,
    alt: "The Décor Edit — elegant artificial murti for home décor",
  },
];

export function Collections() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-6">
        <SectionHeading
          eyebrow="Featured Collection"
          title="Create a Home That Feels Like You"
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {COLLECTIONS.map((c) => (
            <article key={c.title} data-reveal className="reveal group">
              <div className="media-zoom">
                <img
                  src={c.image}
                  alt={c.alt}
                  loading="lazy"
                  className="h-[340px] w-full object-cover md:h-[420px]"
                />
              </div>
              <p className="eyebrow mt-6">{c.number}</p>
              <h3 className="mt-3 text-[clamp(1.5rem,2.4vw,1.9rem)] text-navy">{c.title}</h3>
              <p className="mt-3 text-[13.5px] font-light leading-[1.9] text-muted-foreground">
                {c.items}
              </p>
              <a href="#products" className="link-arrow mt-5">
                Explore {c.title.replace("The ", "")} <span data-arrow>→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
