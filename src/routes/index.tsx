import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { useReveal } from "@/hooks/use-reveal";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Categories } from "@/components/site/Categories";
import { Products } from "@/components/site/Products";
import { WhyUs } from "@/components/site/WhyUs";
import { Collections } from "@/components/site/Collections";
import { About } from "@/components/site/About";
import { Gallery } from "@/components/site/Gallery";

import { CtaBanner } from "@/components/site/CtaBanner";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";

const TITLE = "Vrundavan Home Decor | Premium Home Furnishings & Décor";
const DESCRIPTION =
  "Explore premium bed sheets, comforters, towels, carpets, wallpapers, murtis and décor from Vrundavan Home Decor — thoughtfully chosen furnishings for beautiful everyday living.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();

  return (
    <div className="min-h-screen overflow-x-clip bg-background">
      <Header />
      <main>
        <Hero />
        <Categories />
        <Products />
        <WhyUs />
        <Collections />
        <About />
        <Gallery />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
      <Toaster />
      <WhatsAppButton />
    </div>
  );
}
