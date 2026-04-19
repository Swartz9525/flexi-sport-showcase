import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
            Get in Touch
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-display text-secondary">
            Let's Talk <span className="text-gradient-primary">Sports</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Have a question, bulk order, or custom request? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-5 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            {[
              { icon: Phone, label: "Call us", value: "+91 98765 43210" },
              { icon: Mail, label: "Email us", value: "hello@arbetsports.in" },
              { icon: MapPin, label: "Visit us", value: "Connaught Place, New Delhi 110001" },
            ].map((c) => (
              <div
                key={c.label}
                className="flex items-start gap-4 p-5 rounded-2xl bg-muted/50 border border-border"
              >
                <div className="h-12 w-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-elegant shrink-0">
                  <c.icon className="text-primary-foreground" size={20} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">
                    {c.label}
                  </div>
                  <div className="mt-1 font-medium text-foreground">{c.value}</div>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            onSubmit={onSubmit}
            className="lg:col-span-3 bg-card rounded-3xl p-8 shadow-card border border-border space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-medium text-foreground">Name</label>
                <input
                  required
                  type="text"
                  className="mt-2 w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">Phone</label>
                <input
                  required
                  type="tel"
                  className="mt-2 w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition"
                  placeholder="+91 ..."
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground">Email</label>
              <input
                required
                type="email"
                className="mt-2 w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground">Message</label>
              <textarea
                required
                rows={5}
                className="mt-2 w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition resize-none"
                placeholder="Tell us what you're looking for..."
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-gradient-primary text-primary-foreground font-semibold shadow-elegant hover:scale-105 transition-transform"
            >
              {sent ? "Message sent ✓" : "Send Message"}
              {!sent && <Send size={18} />}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
