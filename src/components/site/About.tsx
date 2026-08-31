import aboutImg from "@/assets/about-interior.jpg";

export function About() {
  return (
    <section id="about" className="bg-[var(--sand)] py-20 lg:py-28">
      <div className="mx-auto grid max-w-[1280px] items-center gap-12 px-6 lg:grid-cols-2 lg:gap-20">
        <div data-reveal className="reveal media-zoom">
          <img
            src={aboutImg}
            alt="Warm contemporary Indian living room with layered textiles and wooden furniture"
            loading="lazy"
            className="h-[380px] w-full object-cover lg:h-[620px]"
          />
        </div>

        <div data-reveal className="reveal border-l border-brand/30 pl-8 lg:pl-10">
          <p className="eyebrow">Our Story</p>
          <h2 className="mt-4 text-[clamp(1.8rem,3.2vw,2.6rem)] leading-[1.18] text-navy">
            Details That Turn a House
            <br />
            Into a Home.
          </h2>
          <p className="mt-6 max-w-md text-[14.5px] font-light leading-[1.9] text-muted-foreground">
            At Vrundavan Home Decor, we believe that the right details can completely transform the
            feeling of a space.
          </p>
          <p className="mt-4 max-w-md text-[14.5px] font-light leading-[1.9] text-muted-foreground">
            Our collection brings together furnishings, décor and everyday essentials chosen to add
            comfort, character and effortless elegance to modern homes.
          </p>
          <p className="mt-8 font-[family-name:var(--font-display)] text-[19px] italic text-navy">
            Thoughtfully chosen. Beautifully lived.
          </p>
          <a href="#contact" className="link-arrow mt-8">
            Know More About Us <span data-arrow>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
