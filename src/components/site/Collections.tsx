import { SectionHeading } from "./SectionHeading";
import bedroom from "@/assets/gal-bedroom.jpg";
import soft from "@/assets/coll-soft.jpg";
import decor from "@/assets/cat-decor.jpg";
import wallpaper from "@/assets/cat-wallpaper.jpg";

export function Collections() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-6">
        <SectionHeading
          eyebrow="Featured Collection"
          title="Create a Home That Feels Like You"
        />

        {/* 01 — wide split */}
        <div data-reveal className="reveal mt-16 grid items-center gap-10 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="media-zoom">
            <img
              src={bedroom}
              alt="The Bedroom Edit — styled bed with layered linens"
              loading="lazy"
              className="h-[320px] w-full object-cover md:h-[520px]"
            />
          </div>
          <div>
            <p className="eyebrow">Collection 01</p>
            <h3 className="mt-3 text-[clamp(1.6rem,2.6vw,2.1rem)] text-navy">The Bedroom Edit</h3>
            <ul className="mt-6 space-y-2.5 text-[13.5px] font-light text-muted-foreground">
              {["Bed Sheets", "Bed Covers", "Pillow Covers", "Comforter Sets"].map((i) => (
                <li key={i} className="border-b border-border pb-2.5">
                  {i}
                </li>
              ))}
            </ul>
            <a href="#products" className="link-arrow mt-7">
              Explore Bedroom <span data-arrow>→</span>
            </a>
          </div>
        </div>

        {/* 02 + 03 — offset pair */}
        <div className="mt-6 grid gap-10 lg:mt-20 lg:grid-cols-2 lg:gap-16">
          <div data-reveal className="reveal">
            <div className="media-zoom">
              <img
                src={soft}
                alt="The Soft Home Edit — towels, bath textiles and woven mats"
                loading="lazy"
                className="h-[360px] w-full object-cover md:h-[540px]"
              />
            </div>
            <p className="eyebrow mt-6">Collection 02</p>
            <h3 className="mt-3 text-[clamp(1.5rem,2.4vw,1.9rem)] text-navy">The Soft Home Edit</h3>
            <p className="mt-3 text-[13.5px] font-light leading-[1.9] text-muted-foreground">
              Towels · Carpets · Doormats · Bath Accessories
            </p>
            <a href="#products" className="link-arrow mt-5">
              Explore Collection <span data-arrow>→</span>
            </a>
          </div>

          <div data-reveal className="reveal lg:pt-24">
            <div className="grid grid-cols-2 gap-4">
              <div className="media-zoom">
                <img
                  src={decor}
                  alt="Decorative flower pots with artificial plants"
                  loading="lazy"
                  className="h-[200px] w-full object-cover md:h-[300px]"
                />
              </div>
              <div className="media-zoom mt-8">
                <img
                  src={wallpaper}
                  alt="Textured wallpaper feature wall"
                  loading="lazy"
                  className="h-[200px] w-full object-cover md:h-[300px]"
                />
              </div>
            </div>
            <p className="eyebrow mt-6">Collection 03</p>
            <h3 className="mt-3 text-[clamp(1.5rem,2.4vw,1.9rem)] text-navy">The Décor Edit</h3>
            <p className="mt-3 text-[13.5px] font-light leading-[1.9] text-muted-foreground">
              Flower Pots · Artificial Plants · Wallpapers
            </p>
            <a href="#products" className="link-arrow mt-5">
              Explore Décor <span data-arrow>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
