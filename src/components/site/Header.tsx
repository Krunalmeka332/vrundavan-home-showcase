import { useEffect, useState } from "react";
import { Search, Heart, MessageSquare, Menu, X } from "lucide-react";
import logo from "@/assets/vrundavan-logo-main.png.asset.json";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "Collections", href: "#collections" },
  { label: "Products", href: "#products" },
  { label: "About Us", href: "#about" },
  { label: "Why Choose Us", href: "#why" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = NAV.map((n) => n.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive("#" + visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.6] },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="bg-navy text-center">
        <p className="mx-auto max-w-[1280px] px-6 py-2.5 text-[10.5px] font-light uppercase tracking-[0.28em] text-white/85">
          Thoughtfully Chosen for Beautiful Homes
        </p>
      </div>

      <header
        className={`sticky top-0 z-50 border-b bg-background transition-all duration-300 ${
          scrolled ? "border-border shadow-[0_6px_24px_-18px_rgba(8,43,76,0.5)]" : "border-transparent"
        }`}
      >
        <div
          className={`mx-auto flex max-w-[1280px] items-center justify-between px-6 transition-all duration-300 ${
            scrolled ? "h-[68px]" : "h-[92px]"
          }`}
        >
          <a href="#home" className="flex items-center" aria-label="Vrundavan Home Decor — home">
            <img
              src={logo.url}
              alt="Vrundavan Home Decor"
              className={`w-auto transition-all duration-300 ${scrolled ? "h-10" : "h-14"}`}
              width={200}
              height={128}
            />
          </a>

          <nav className="hidden items-center gap-9 lg:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative py-1 text-[12.5px] font-medium tracking-[0.06em] text-foreground/80 transition-colors hover:text-primary"
              >
                {item.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-px bg-primary transition-all duration-300 ${
                    active === item.href ? "w-full" : "w-0"
                  }`}
                />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-1">
            <div className="hidden items-center gap-1 sm:flex">
              <IconButton label="Search">
                <Search className="h-[18px] w-[18px]" strokeWidth={1.5} />
              </IconButton>
              <IconButton label="Wishlist">
                <Heart className="h-[18px] w-[18px]" strokeWidth={1.5} />
              </IconButton>
              <IconButton label="Enquiry" href="#contact">
                <MessageSquare className="h-[18px] w-[18px]" strokeWidth={1.5} />
              </IconButton>
            </div>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              className="p-2.5 text-foreground/80 transition-colors hover:text-primary lg:hidden"
            >
              {open ? <X className="h-5 w-5" strokeWidth={1.5} /> : <Menu className="h-5 w-5" strokeWidth={1.5} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="border-t border-border bg-background lg:hidden">
            <nav className="mx-auto flex max-w-[1280px] flex-col px-6 py-2">
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-border/60 py-3.5 text-[13px] font-medium tracking-[0.06em] text-foreground/85 last:border-0"
                >
                  {item.label}
                </a>
              ))}
              <div className="flex items-center gap-5 py-4 sm:hidden">
                <Search className="h-[18px] w-[18px] text-primary" strokeWidth={1.5} />
                <Heart className="h-[18px] w-[18px] text-primary" strokeWidth={1.5} />
                <MessageSquare className="h-[18px] w-[18px] text-primary" strokeWidth={1.5} />
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}

function IconButton({
  children,
  label,
  href,
}: {
  children: React.ReactNode;
  label: string;
  href?: string;
}) {
  const cls =
    "inline-flex h-9 w-9 items-center justify-center text-foreground/70 transition-colors hover:text-primary";
  if (href)
    return (
      <a href={href} aria-label={label} className={cls}>
        {children}
      </a>
    );
  return (
    <button type="button" aria-label={label} className={cls}>
      {children}
    </button>
  );
}
