import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ProductCard, type Product } from "./ProductCard";

export function ProductsPreview() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    import("@/data/products.json").then((mod) => {
      setProducts((mod.default as Product[]).slice(0, 3));
    });
  }, []);

  return (
    <section id="products" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
            Featured Products
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-display text-secondary">
            Top Picks From Our <span className="text-gradient-primary">Catalog</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            A glimpse of the gear our customers love most. Explore the full range for more.
          </p>
        </motion.div>

        <div className="mt-20 space-y-24">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20 text-center"
        >
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-primary text-primary-foreground font-semibold shadow-elegant hover:scale-105 transition-transform group"
          >
            View All Products
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
