import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-gradient-primary flex items-center justify-center">
              <span className="font-display text-2xl text-primary-foreground">A</span>
            </div>
            <div>
              <div className="font-display text-xl tracking-wide">
                ARBEIT <span className="text-primary">SPORTS</span>
              </div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-secondary-foreground/60">
                OPC Pvt Ltd
              </div>
            </div>
          </div>
          <p className="mt-5 text-sm text-secondary-foreground/70 max-w-md leading-relaxed">
            Premium sporting equipment for athletes, academies, and clubs across India. Built on
            quality, driven by passion.
          </p>
          <div className="mt-6 flex gap-3">
            {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="social"
                className="h-10 w-10 rounded-full border border-secondary-foreground/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-colors"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-base uppercase tracking-wider text-primary">
            Quick Links
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-secondary-foreground/70">
            {["Home", "Products", "About", "Contact"].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="hover:text-primary transition-colors">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base uppercase tracking-wider text-primary">
            Categories
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-secondary-foreground/70">
            {["Cricket", "Badminton", "Jerseys", "Fitness", "Football"].map((l) => (
              <li key={l}>
                <a href="/products" className="hover:text-primary transition-colors">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-secondary-foreground/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col sm:flex-row justify-between gap-3 text-xs text-secondary-foreground/60">
          <div>© {new Date().getFullYear()} Arbeit Sports (OPC) Pvt Ltd. All rights reserved.</div>
          <div>Crafted for champions.</div>
        </div>
      </div>
    </footer>
  );
}
