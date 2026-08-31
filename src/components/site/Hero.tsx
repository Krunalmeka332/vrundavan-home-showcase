import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-bedroom.jpg";

export function Hero() {
  return (
    <section id="home" className="bg-background">
      <div className="mx-auto grid max-w-[1280px] items-center gap-12 px-6 py-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20 lg:py-24">
        <div className="max-w-xl">
          <p className="eyebrow animate-[fade-in_700ms_ease-out_both]">Curated for Beautiful Homes</p>
          <h1 className="mt-6 text-[clamp(2.4rem,5.2vw,4rem)] leading-[1.08] tracking-[-0.01em] text-navy animate-[fade-in_800ms_ease-out_120ms_both]">
            Make Every Corner
            <br />
            Feel Like Home.
          </h1>
          <p className="mt-6 max-w-md text-[15px] font-light leading-[1.85] text-muted-foreground animate-[fade-in_800ms_ease-out_260ms_both]">
            Discover thoughtfully chosen furnishings and décor that bring comfort, character and
            timeless style to your everyday spaces.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4 animate-[fade-in_800ms_ease-out_400ms_both]">
            <a
              href="#collections"
              className="group inline-flex items-center gap-2.5 bg-primary px-8 py-4 text-[11.5px] font-semibold uppercase tracking-[0.16em] text-primary-foreground transition-colors hover:bg-navy"
            >
              Explore Collection
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                strokeWidth={1.6}
              />
            </a>
            <a
              href="#about"
              className="group inline-flex items-center gap-2.5 border border-border px-8 py-4 text-[11.5px] font-semibold uppercase tracking-[0.16em] text-navy transition-colors hover:border-primary hover:text-primary"
            >
              Discover Our Story
            </a>
          </div>
        </div>

        <div className="relative animate-[fade-in_900ms_ease-out_200ms_both]">
          <div className="absolute -left-6 top-8 hidden h-[78%] w-px bg-brand/25 lg:block" />
          <div className="overflow-hidden">
            <img
              src={heroImg}
              alt="Contemporary Indian bedroom styled with premium bedding and soft natural light"
              width={1408}
              height={1600}
              className="h-[62vh] w-full object-cover lg:h-[76vh] animate-[scale-in_1200ms_cubic-bezier(0.22,1,0.36,1)_both]"
            />
          </div>
          <p className="mt-5 max-w-[240px] text-[11px] font-light uppercase tracking-[0.2em] text-muted-foreground">
            The Bedroom Edit — Season 2026
          </p>
        </div>
      </div>
    </section>
  );
}
