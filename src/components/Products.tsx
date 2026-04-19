import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProductCard, type Product } from "./ProductCard";

const filters = [
  { key: "all", label: "All" },
  { key: "cricket", label: "Cricket" },
  { key: "badminton", label: "Badminton" },
  { key: "jersey", label: "Jersey" },
  { key: "fitness", label: "Fitness" },
  { key: "football", label: "Football" },
];

export function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [active, setActive] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    import("@/data/products.json")
      .then((mod) => {
        if (mounted) {
          setProducts(mod.default as Product[]);
          setLoading(false);
        }
      })
      .catch(() => setLoading(false));
    return () => {
      mounted = false;
    };
  }, []);

  const filtered = active === "all" ? products : products.filter((p) => p.category === active);

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
            Our Catalog
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-display text-secondary">
            Gear for Every <span className="text-gradient-primary">Sport</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            From cricket pitches to fitness floors — explore products built for serious play.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActive(f.key)}
              className={`relative px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                active === f.key
                  ? "bg-secondary text-secondary-foreground shadow-elegant"
                  : "bg-muted text-foreground hover:bg-muted/70"
              }`}
            >
              {active === f.key && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 rounded-full bg-gradient-primary -z-10"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className={active === f.key ? "text-primary-foreground relative" : ""}>
                {f.label}
              </span>
            </button>
          ))}
        </div>

        {/* Product list */}
        <div className="mt-20 space-y-24">
          <AnimatePresence mode="popLayout">
            {loading ? (
              <div className="text-center text-muted-foreground py-20">Loading products…</div>
            ) : filtered.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center text-muted-foreground py-20"
              >
                No products in this category yet.
              </motion.div>
            ) : (
              filtered.map((product, i) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                >
                  <ProductCard product={product} index={i} />
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
