import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import owner from "@/assets/owner.jpg";

const points = [
  "10+ years serving athletes, academies, and clubs",
  "Direct partnerships with leading equipment makers",
  "Custom orders, team kits, and bulk supply",
  "Dedicated after-sales service & warranty support",
];

export function About() {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-dark text-secondary-foreground overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] max-w-md mx-auto rounded-3xl overflow-hidden shadow-elegant">
            <img
              src={owner}
              alt="Founder of Arbeit Sports"
              loading="lazy"
              width={800}
              height={1000}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-primary-foreground">
              <div className="font-display text-2xl">Arjun Bhatia</div>
              <div className="text-sm uppercase tracking-[0.2em] text-primary">Founder & CEO</div>
            </div>
          </div>
          <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-gradient-primary blur-3xl opacity-50" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
            About Arbeit Sports
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-display">
            From a Local Store to a <span className="text-gradient-primary">Trusted Name</span>
          </h2>
          <p className="mt-6 text-base text-secondary-foreground/80 leading-relaxed">
            Arbeit Sports (OPC) Pvt Ltd was founded with one mission — to make world-class sporting
            equipment accessible to every athlete in India. From humble beginnings as a
            single-counter store, we now supply gear to clubs, schools, and individual athletes
            across the country.
          </p>
          <p className="mt-4 text-base text-secondary-foreground/80 leading-relaxed">
            Every product we stock is hand-picked, tested, and backed by warranty. When you choose
            Arbeit, you choose performance.
          </p>

          <ul className="mt-8 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={20} />
                <span className="text-secondary-foreground/90">{p}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 grid grid-cols-3 gap-6 pt-8 border-t border-border/20">
            <div>
              <div className="font-display text-4xl text-primary">10+</div>
              <div className="text-xs uppercase tracking-wider text-secondary-foreground/60 mt-1">
                Years
              </div>
            </div>
            <div>
              <div className="font-display text-4xl text-primary">500+</div>
              <div className="text-xs uppercase tracking-wider text-secondary-foreground/60 mt-1">
                Clients
              </div>
            </div>
            <div>
              <div className="font-display text-4xl text-primary">50+</div>
              <div className="text-xs uppercase tracking-wider text-secondary-foreground/60 mt-1">
                Cities
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
