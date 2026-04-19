import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Map JSON image paths to imported assets
import cricket from "@/assets/product-cricket.jpg";
import badminton from "@/assets/product-badminton.jpg";
import jersey from "@/assets/product-jersey.jpg";
import fitness from "@/assets/product-fitness.jpg";
import football from "@/assets/product-football.jpg";

const imageMap: Record<string, string> = {
  "/src/assets/product-cricket.jpg": cricket,
  "/src/assets/product-badminton.jpg": badminton,
  "/src/assets/product-jersey.jpg": jersey,
  "/src/assets/product-fitness.jpg": fitness,
  "/src/assets/product-football.jpg": football,
};

export interface Product {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

export function ProductCard({ product, index }: { product: Product; index: number }) {
  const isEven = index % 2 === 0;
  const src = imageMap[product.image] ?? product.image;

  const Image = (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative overflow-hidden rounded-3xl shadow-card group aspect-[4/3]"
    >
      <img
        src={src}
        alt={product.title}
        loading="lazy"
        width={1200}
        height={900}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute top-5 left-5">
        <span className="inline-block px-3 py-1 rounded-full bg-background/90 backdrop-blur text-[11px] font-bold uppercase tracking-wider text-primary">
          {product.category}
        </span>
      </div>
    </motion.div>
  );

  const Text = (
    <motion.div
      initial={{ opacity: 0, x: isEven ? 50 : -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
      className="flex flex-col justify-center"
    >
      <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
        {product.category}
      </span>
      <h3 className="mt-3 font-display text-4xl sm:text-5xl text-secondary leading-tight">
        {product.title}
      </h3>
      <p className="mt-5 text-base text-muted-foreground leading-relaxed max-w-lg">
        {product.description}
      </p>
      <div className="mt-8">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-gradient-primary text-primary-foreground font-semibold shadow-elegant hover:scale-105 transition-transform group"
        >
          Enquire Now
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </motion.div>
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
      {isEven ? (
        <>
          {Image}
          {Text}
        </>
      ) : (
        <>
          <div className="order-2 lg:order-1">{Text}</div>
          <div className="order-1 lg:order-2">{Image}</div>
        </>
      )}
    </div>
  );
}
