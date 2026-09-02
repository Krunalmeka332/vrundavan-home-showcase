import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-murti.jpg";

export function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[600px] w-full overflow-hidden">
      <img
        src={heroImg}
        alt="Elegant Indian living room styled with an artificial deity murti and premium home décor"
        width={1920}
        height={1088}
        className="absolute inset-0 h-full w-full object-cover animate-[scale-in_1400ms_cubic-bezier(0.22,1,0.36,1)_both]"
       
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/50 to-navy/20" />

      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-[1280px] px-6">
          <div className="max-w-2xl">
            <p className="eyebrow animate-[fade-in_700ms_ease-out_both] text-white/90">
              Curated for Beautiful Homes
            </p>
            <h1 className="mt-6 font-[family-name:var(--font-serif)] text-[clamp(2.6rem,6vw,4.6rem)] leading-[1.06] tracking-[-0.02em] text-white animate-[fade-in_800ms_ease-out_120ms_both]">
              Make Every Corner
              <br />
              Feel Like Home.
            </h1>
            <p className="mt-6 max-w-lg text-[15.5px] font-light leading-[1.9] text-white/85 animate-[fade-in_800ms_ease-out_260ms_both]">
              Discover thoughtfully chosen furnishings and décor — from elegant murtis to soft
              bedding — that bring comfort, character and timeless style to your everyday spaces.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4 animate-[fade-in_800ms_ease-out_400ms_both]">
              <a
                href="#collections"
                className="group inline-flex items-center gap-2.5 bg-primary px-8 py-4 text-[11.5px] font-semibold uppercase tracking-[0.16em] text-primary-foreground transition-colors hover:bg-white hover:text-navy"
              >
                Explore Collection
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  strokeWidth={1.6}
                />
              </a>
              <a
                href="#about"
                className="group inline-flex items-center gap-2.5 border border-white/60 px-8 py-4 text-[11.5px] font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:border-white hover:bg-white/10"
              >
                Discover Our Story
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 z-10 hidden lg:block">
        <div className="mx-auto max-w-[1280px] px-6">
          <p className="max-w-[260px] text-[11px] font-light uppercase tracking-[0.2em] text-white/70">
            The Décor Edit — Season 2026
          </p>
        </div>
      </div>
    </section>
  );
}
