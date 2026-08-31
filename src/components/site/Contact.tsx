import { useState, type FormEvent } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { toast } from "sonner";
import { SectionHeading } from "./SectionHeading";

const CATEGORIES = [
  "Bed Sheets",
  "Bed Covers",
  "Pillow Covers",
  "Mattresses",
  "Comforter Sets",
  "Towels",
  "Carpets",
  "Doormats",
  "Wallpapers",
  "Artificial Flowers & Plants",
  "Flower Pots",
  "Bath Accessories",
];

const inputCls =
  "w-full border-b border-border bg-transparent py-3 text-[14px] font-light text-navy outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary";

export function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Thank you — your enquiry has been noted. Our team will get in touch shortly.");
    }, 600);
  };

  return (
    <section id="contact" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-6">
        <SectionHeading
          eyebrow="Enquiry"
          title="Let's Make Your Space Beautiful"
          subtitle="Have a product question or looking for something specific? Get in touch with our team."
        />

        <div className="mt-14 grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          <div data-reveal className="reveal space-y-8">
            <Detail Icon={Phone} label="Phone" value="+91 98250 00000" />
            <Detail Icon={Mail} label="Email" value="hello@vrundavanhomedecor.com" />
            <Detail
              Icon={MapPin}
              label="Showroom"
              value={"Vrundavan Home Decor\nRing Road, Surat, Gujarat 395002, India"}
            />
            <Detail
              Icon={Clock}
              label="Business Hours"
              value={"Monday – Saturday · 10:00 AM – 8:30 PM\nSunday · 11:00 AM – 6:00 PM"}
            />
          </div>

          <form data-reveal className="reveal" onSubmit={onSubmit}>
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="text-[10.5px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  Name
                </label>
                <input id="name" name="name" required placeholder="Your full name" className={inputCls} />
              </div>
              <div>
                <label htmlFor="phone" className="text-[10.5px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  Phone
                </label>
                <input id="phone" name="phone" required placeholder="Contact number" className={inputCls} />
              </div>
              <div>
                <label htmlFor="email" className="text-[10.5px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  Email
                </label>
                <input id="email" name="email" type="email" required placeholder="you@email.com" className={inputCls} />
              </div>
              <div>
                <label htmlFor="category" className="text-[10.5px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  Product / Category
                </label>
                <select id="category" name="category" defaultValue="" className={inputCls}>
                  <option value="" disabled>
                    Select a category
                  </option>
                  {CATEGORIES.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="text-[10.5px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us what you're looking for"
                  className={`${inputCls} resize-none`}
                />
              </div>
            </div>
            <button
              type="submit"
              disabled={sending}
              className="mt-10 inline-flex items-center gap-2.5 bg-primary px-9 py-4 text-[11.5px] font-semibold uppercase tracking-[0.16em] text-primary-foreground transition-colors hover:bg-navy disabled:opacity-70"
            >
              {sending ? "Sending…" : "Send Enquiry"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Detail({
  Icon,
  label,
  value,
}: {
  Icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  label: string;
  value: string;
}) {
  return (
    <div className="flex gap-4">
      <Icon className="mt-0.5 h-[18px] w-[18px] shrink-0 text-brand" strokeWidth={1.3} />
      <div>
        <p className="text-[10.5px] font-medium uppercase tracking-[0.2em] text-muted-foreground">{label}</p>
        <p className="mt-1.5 whitespace-pre-line text-[14px] font-light leading-[1.8] text-navy">{value}</p>
      </div>
    </div>
  );
}
