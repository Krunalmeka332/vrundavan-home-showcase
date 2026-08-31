import { Heart } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import bedsheets from "@/assets/cat-bedsheets.jpg";
import bedcover from "@/assets/prod-bedcover.jpg";
import pillows from "@/assets/cat-pillows.jpg";
import comforter from "@/assets/prod-comforter.jpg";
import towels from "@/assets/cat-towels.jpg";
import decor from "@/assets/cat-decor.jpg";
import plant from "@/assets/prod-plant.jpg";
import carpet from "@/assets/cat-carpet.jpg";

const PRODUCTS = [
  {
    image: bedsheets,
    category: "Bed Sheets",
    name: "Luxury Floral Bed Sheet",
    text: "Fine cotton weave with a hand-drawn floral print.",
  },
  {
    image: bedcover,
    category: "Bed Covers",
    name: "Premium Cotton Bed Cover",
    text: "Softly draping cover finished with a woven border.",
  },
  {
    image: pillows,
    category: "Pillow Covers",
    name: "Elegant Pillow Cover Set",
    text: "Embroidered detailing in ivory and indigo.",
  },
  {
    image: comforter,
    category: "Comforter Sets",
    name: "Classic Comforter Set",
    text: "Lightly quilted warmth for every season.",
  },
  {
    image: towels,
    category: "Towels",
    name: "Soft Premium Towels",
    text: "Dense terry cotton with a quick-dry finish.",
  },
  {
    image: decor,
    category: "Flower Pots",
    name: "Decorative Flower Pot",
    text: "Textured ceramic in a quiet, natural glaze.",
  },
  {
    image: plant,
    category: "Artificial Plants",
    name: "Artificial Green Plant",
    text: "Lifelike foliage that stays fresh all year.",
  },
  {
    image: carpet,
    category: "Carpets",
    name: "Elegant Pattern Carpet",
    text: "Traditional motifs woven in a durable pile.",
  },
];

export function Products() {
  return (
    <section id="products" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Best Sellers"
            title="Best of Vrundavan"
            subtitle="Discover pieces chosen to bring comfort, beauty and character into your home."
          />
          <a href="#contact" className="link-arrow pb-2">
            Enquire Now <span data-arrow>→</span>
          </a>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-x-5 gap-y-12 lg:grid-cols-4">
          {PRODUCTS.map((p) => (
            <article key={p.name} data-reveal className="reveal group">
              <div className="media-zoom relative bg-[var(--sand)]">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  className="h-[240px] w-full object-cover md:h-[340px]"
                />
                <button
                  type="button"
                  aria-label={`Add ${p.name} to wishlist`}
                  className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center bg-background/90 text-navy opacity-0 transition-all duration-300 hover:text-primary group-hover:opacity-100"
                >
                  <Heart className="h-4 w-4" strokeWidth={1.5} />
                </button>
              </div>
              <p className="mt-4 text-[10.5px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                {p.category}
              </p>
              <h3 className="mt-2 text-[17px] leading-snug text-navy">{p.name}</h3>
              <p className="mt-1.5 text-[13px] font-light leading-relaxed text-muted-foreground">
                {p.text}
              </p>
              <a
                href="#contact"
                className="link-arrow mt-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100 max-lg:opacity-100"
              >
                View Product <span data-arrow>→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
