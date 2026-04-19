import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroCricket from "@/assets/hero-cricket.jpg";
import heroBadminton from "@/assets/hero-badminton.jpg";
import heroJersey from "@/assets/hero-jersey.jpg";

const slides = [
  {
    image: heroCricket,
    eyebrow: "Cricket Gear",
    title: "Built for Champions",
    subtitle: "Tournament-grade cricket equipment trusted by clubs and academies across India.",
  },
  {
    image: heroBadminton,
    eyebrow: "Racket Sports",
    title: "Speed. Precision. Power.",
    subtitle: "Premium badminton rackets engineered for every level of play.",
  },
  {
    image: heroJersey,
    eyebrow: "Custom Apparel",
    title: "Wear Your Team's Pride",
    subtitle: "Fully customised sports jerseys with sublimation printing and durable fabric.",
  },
];

export function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), 5500);
    return () => clearInterval(t);
  }, []);

  const slide = slides[index];

  return (
    <section id="home" className="relative h-screen min-h-[640px] w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img
            src={slide.image}
            alt={slide.title}
            width={1920}
            height={1080}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero" />
          <div className="absolute inset-0 bg-secondary/30" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 lg:px-10 flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-2xl text-primary-foreground"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/90 text-primary-foreground text-xs font-bold uppercase tracking-[0.2em]">
              {slide.eyebrow}
            </span>
            <h1 className="mt-6 font-display text-5xl sm:text-7xl lg:text-8xl leading-none">
              {slide.title}
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-primary-foreground/85 max-w-xl">
              {slide.subtitle}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#products"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-lg bg-gradient-primary text-primary-foreground font-semibold shadow-elegant hover:scale-105 transition-transform"
              >
                Explore Products <ArrowRight size={18} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-7 py-4 rounded-lg border-2 border-primary-foreground/30 text-primary-foreground font-semibold hover:bg-primary-foreground hover:text-secondary transition-colors backdrop-blur-sm"
              >
                Get a Quote
              </a>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="absolute bottom-10 left-6 lg:left-10 flex gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-12 bg-primary" : "w-6 bg-primary-foreground/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
