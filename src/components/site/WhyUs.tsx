import { Feather, Layers, Sparkles, Home } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const ITEMS = [
  {
    no: "01",
    Icon: Feather,
    title: "Quality You Can Feel",
    text: "Carefully selected products designed for everyday comfort and use.",
  },
  {
    no: "02",
    Icon: Layers,
    title: "Thoughtfully Curated",
    text: "A collection selected to make decorating your home easier and more beautiful.",
  },
  {
    no: "03",
    Icon: Sparkles,
    title: "Comfort Meets Style",
    text: "Practical home essentials that never compromise on visual appeal.",
  },
  {
    no: "04",
    Icon: Home,
    title: "Made for Everyday Living",
    text: "Beautiful pieces designed to fit naturally into real homes and real lifestyles.",
  },
];

export function WhyUs() {
  return (
    <section id="why" className="bg-[var(--sand)] py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-6">
        <SectionHeading
          eyebrow="Our Promise"
          title="Why Choose Vrundavan?"
          subtitle="Beautiful products are only the beginning. We focus on quality, comfort and thoughtful choices."
        />

        <div className="mt-14 grid gap-x-16 gap-y-10 md:grid-cols-2">
          {ITEMS.map(({ no, Icon, title, text }) => (
            <div
              key={no}
              data-reveal
              className="reveal flex items-start gap-6 border-t border-border pt-8"
            >
              <span className="font-[family-name:var(--font-display)] text-[15px] text-brand">{no}</span>
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <Icon className="h-[18px] w-[18px] text-brand" strokeWidth={1.3} />
                  <h3 className="text-[19px] text-navy">{title}</h3>
                </div>
                <p className="mt-2.5 max-w-sm text-[13.5px] font-light leading-[1.8] text-muted-foreground">
                  {text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
