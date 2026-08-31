import { Star } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const REVIEWS = [
  {
    quote:
      "The quality and finish completely changed the look of our bedroom. Everything feels thoughtfully selected.",
    name: "Priya S.",
  },
  {
    quote: "Beautiful collection and the products look even better in person.",
    name: "Neha R.",
  },
  {
    quote:
      "The carpet and décor pieces gave our living room a completely different character.",
    name: "Rohan S.",
  },
];

export function Testimonials() {
  return (
    <section className="bg-[var(--sand)] py-20 lg:py-24">
      <div className="mx-auto max-w-[1280px] px-6">
        <SectionHeading
          eyebrow="Testimonials"
          title="Beautifully Loved"
          subtitle="Real homes. Thoughtful choices."
          align="center"
        />

        <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-6">
          {REVIEWS.map((r) => (
            <blockquote key={r.name} data-reveal className="reveal border-t border-border pt-7 md:px-2">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-brand text-brand" strokeWidth={0} />
                ))}
              </div>
              <p className="mt-5 font-[family-name:var(--font-display)] text-[17px] leading-[1.65] text-navy">
                “{r.quote}”
              </p>
              <footer className="mt-5 text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                — {r.name}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
