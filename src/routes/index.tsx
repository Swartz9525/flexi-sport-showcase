import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { HeroCarousel } from "@/components/HeroCarousel";
import { Featured } from "@/components/Featured";
import { ProductsPreview } from "@/components/ProductsPreview";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Arbeit Sports (OPC) Pvt Ltd — Premium Sporting Equipment in India" },
      {
        name: "description",
        content:
          "Arbeit Sports supplies premium cricket, badminton, fitness, jerseys & football gear to athletes, clubs and academies across India.",
      },
      { property: "og:title", content: "Arbeit Sports — Built for Champions" },
      {
        property: "og:description",
        content:
          "Tournament-grade sports equipment, custom team jerseys, and bulk supply across India.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroCarousel />
      <Featured />
      <ProductsPreview />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
