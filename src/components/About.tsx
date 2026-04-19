import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import owner from "@/assets/owner.jpg";

const points = [
  "Newly launched store bringing quality sports goods to our town",
  "Selling top-tier sports products in both retail and bulk orders",
  "Growing selection of accessible equipment for local athletes",
  "Dedicated to friendly, personalized customer service",
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
              <div className="font-display text-2xl">Gopal Kumar</div>
              <div className="text-sm uppercase tracking-[0.2em] text-primary">Owner</div>
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
            About the Owner
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-display">
            Your Local <span className="text-gradient-primary">Sports Hub</span>
          </h2>
          <p className="mt-6 text-base text-secondary-foreground/80 leading-relaxed">
            Started just months ago by a local small businessman, our goal is to bring top-quality sporting products directly to our town. Whether you're an individual athlete looking for retail gear or a team needing bulk supplies, we are here to provide the best equipment with a personal touch.
          </p>
          <p className="mt-4 text-base text-secondary-foreground/80 leading-relaxed">
            Every product we stock is carefully chosen to ensure reliability. When you shop with us, you're supporting a growing local business committed to sports and fitness in the community.
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
              <div className="font-display text-4xl text-primary">New</div>
              <div className="text-xs uppercase tracking-wider text-secondary-foreground/60 mt-1">
                Startup
              </div>
            </div>
            <div>
              <div className="font-display text-4xl text-primary">Local</div>
              <div className="text-xs uppercase tracking-wider text-secondary-foreground/60 mt-1">
                Business
              </div>
            </div>
            <div>
              <div className="font-display text-4xl text-primary">Retail</div>
              <div className="text-xs uppercase tracking-wider text-secondary-foreground/60 mt-1">
                & Bulk
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
