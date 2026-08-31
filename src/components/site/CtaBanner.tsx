import ctaImg from "@/assets/cta-lifestyle.jpg";

export function CtaBanner() {
  return (
    <section className="relative">
      <img
        src={ctaImg}
        alt="Elegant Indian living room styled with textiles and décor"
        loading="lazy"
        className="h-[520px] w-full object-cover lg:h-[620px]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/45 to-transparent" />
      <div className="absolute inset-0">
        <div className="mx-auto flex h-full max-w-[1280px] items-center px-6">
          <div data-reveal className="reveal max-w-lg">
            <h2 className="text-[clamp(1.9rem,3.6vw,2.9rem)] leading-[1.16] text-white">
              Your Home Deserves
              <br />
              Beautiful Details.
            </h2>
            <p className="mt-5 max-w-md text-[14.5px] font-light leading-[1.9] text-white/80">
              Explore furnishings and décor selected to make everyday living more comfortable,
              personal and beautiful.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#collections"
                className="group inline-flex items-center gap-2.5 bg-brand-bright px-8 py-4 text-[11.5px] font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-white hover:text-navy"
              >
                Explore Collection <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2.5 border border-white/50 px-8 py-4 text-[11.5px] font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:border-white hover:bg-white/10"
              >
                Enquire With Us <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
