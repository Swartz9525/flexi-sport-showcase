import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@tanstack/react-router";

type NavLink = { label: string } & ({ href: string } | { to: string });

const links: NavLink[] = [
  { href: "/#home", label: "Home" },
  { to: "/products", label: "Products" },
  { href: "/#featured", label: "Featured" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

function NavItem({ link, onClick }: { link: NavLink; onClick?: () => void }) {
  const cls =
    "text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full";
  if ("to" in link) {
    return (
      <Link
        to={link.to}
        onClick={onClick}
        className={cls}
        activeProps={{ className: "text-primary" }}
      >
        {link.label}
      </Link>
    );
  }
  return (
    <a href={link.href} onClick={onClick} className={cls}>
      {link.label}
    </a>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-lg border-b border-border shadow-card"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-18 flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-lg bg-gradient-primary flex items-center justify-center shadow-elegant">
            <span className="font-display text-2xl text-primary-foreground">A</span>
          </div>
          <div className="leading-tight">
            <div className="font-display text-xl tracking-wide text-primary">
              ARBEIT <span className="text-primary">SPORTS</span>
            </div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              OPC Pvt Ltd
            </div>
          </div>
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.label}>
              <NavItem link={l} />
            </li>
          ))}
        </ul>

        <a
          href="/#contact"
          className="hidden md:inline-flex items-center px-5 py-2.5 rounded-lg bg-gradient-primary text-primary-foreground text-sm font-semibold shadow-elegant hover:scale-105 transition-transform"
        >
          Enquire Now
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-t border-border overflow-hidden"
          >
            <ul className="flex flex-col p-6 gap-4">
              {links.map((l) => (
                <li key={l.label}>
                  <NavItem link={l} onClick={() => setOpen(false)} />
                </li>
              ))}
              <a
                href="/#contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex justify-center px-5 py-3 rounded-lg bg-gradient-primary text-primary-foreground font-semibold"
              >
                Enquire Now
              </a>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
