import { useEffect, useRef, useState } from "react";
import { Instagram, Facebook } from "lucide-react";
import logoFooter from "@/assets/vrundavan-logo-footer-white.png.asset.json";

const COLUMNS = [
  {
    title: "Shop",
    links: ["Bed Sheets", "Bed Covers", "Pillow Covers", "Mattresses", "Comforter Sets", "Towels"],
  },
  {
    title: "Décor",
    links: ["Flower Pots", "Artificial Flowers", "Wallpapers", "Doormats", "Carpets", "Bath Accessories"],
  },
  { title: "Company", links: ["About Us", "Why Choose Us", "Collections", "Contact Us"] },
  { title: "Help", links: ["FAQs", "Shipping Information", "Returns", "Privacy Policy", "Terms & Conditions"] },
];

const SOCIAL = [
  {
    Icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/vrundavan_homedecor_cg/?utm_source=ig_web_button_share_sheet",
  },
  {
    Icon: Facebook,
    label: "Facebook",
    href: "https://www.facebook.com/VrundavanHomeDecor",
  },
];

export function Footer() {
  const logoRef = useRef<HTMLImageElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = logoRef.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <footer className="bg-brand-azure text-white">
      <div className="mx-auto max-w-[1280px] px-6 py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_2.7fr]">
          <div>
            <img
              ref={logoRef}
              src={logoFooter.url}
              alt="Vrundavan Home Decor"
              width={1000}
              height={652}
              className="h-16 w-auto origin-left transition-[opacity,transform] duration-700 ease-out hover:scale-110 lg:h-20"
              style={{
                opacity: shown ? 1 : 0,
                transform: shown ? "translateY(0) scale(1)" : "translateY(16px) scale(0.98)",
              }}
              loading="lazy"
            />
            <p className="mt-6 max-w-xs text-[13px] font-light leading-[1.9] text-white/65">
              Thoughtfully chosen home décor and furnishings for beautiful everyday living.
            </p>
            <div className="mt-7 flex items-center gap-3">
              {SOCIAL.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex h-9 w-9 items-center justify-center border border-white/20 text-white/75 transition-colors hover:border-brand-bright hover:text-white"
                >
                  <Icon className="h-4 w-4" strokeWidth={1.4} />
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <h3 className="font-[family-name:var(--font-sans)] text-[10.5px] font-semibold uppercase tracking-[0.22em] text-white">
                  {col.title}
                </h3>
                <ul className="mt-5 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#products"
                        className="text-[13px] font-light text-white/60 transition-colors hover:text-white"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1280px] px-6 py-6">
          <p className="text-[11.5px] font-light tracking-[0.06em] text-white/50">
            © 2026 Vrundavan Home Decor. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
