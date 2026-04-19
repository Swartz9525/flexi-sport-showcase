import { motion } from "framer-motion";
import { Trophy, Truck, ShieldCheck, Users } from "lucide-react";

const items = [
  {
    icon: Trophy,
    title: "Tournament Quality",
    desc: "Equipment trusted by professional clubs and certified academies.",
  },
  {
    icon: Truck,
    title: "Pan-India Delivery",
    desc: "Fast, insured shipping to clubs, schools, and stores nationwide.",
  },
  {
    icon: ShieldCheck,
    title: "Authentic Gear",
    desc: "Every product backed by manufacturer warranty and quality checks.",
  },
  {
    icon: Users,
    title: "Bulk & Custom",
    desc: "Special pricing for teams, schools, and corporate sports events.",
  },
];

export function Featured() {
  return (
    <section id="featured" className="py-24 bg-muted/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
            Why Arbet
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-display text-secondary">
            Built on Performance, <span className="text-gradient-primary">Driven by Passion</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            We supply gear that helps athletes train harder, play better, and win more.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-card rounded-2xl p-7 shadow-card hover:shadow-elegant transition-all duration-500 hover:-translate-y-1 border border-border"
            >
              <div className="h-14 w-14 rounded-xl bg-gradient-primary flex items-center justify-center shadow-elegant group-hover:scale-110 transition-transform">
                <item.icon className="text-primary-foreground" size={26} />
              </div>
              <h3 className="mt-5 font-display text-xl text-secondary">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
