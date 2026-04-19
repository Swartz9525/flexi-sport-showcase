import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Products } from "@/components/Products";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

export const Route = createFileRoute("/products")({
  component: ProductsPage,
  head: () => ({
    meta: [
      { title: "All Products — Arbeit Sports (OPC) Pvt Ltd" },
      {
        name: "description",
        content:
          "Browse the full Arbeit Sports catalog — cricket, badminton, jerseys, fitness and football gear with category filters.",
      },
      { property: "og:title", content: "All Products — Arbeit Sports" },
      {
        property: "og:description",
        content:
          "Filter and explore every product Arbeit Sports offers, from tournament-grade kits to custom jerseys.",
      },
    ],
  }),
});

function ProductsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Page header */}
      <section className="pt-32 pb-12 bg-gradient-dark text-secondary-foreground">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
              Full Catalog
            </span>
            <h1 className="mt-3 text-5xl sm:text-6xl font-display">
              Every Product, <span className="text-gradient-primary">One Place</span>
            </h1>
            <p className="mt-4 text-secondary-foreground/70 max-w-xl mx-auto">
              Use the filters below to find exactly what you need.
            </p>
          </motion.div>
        </div>
      </section>

      <Products />
      <Footer />
    </main>
  );
}
