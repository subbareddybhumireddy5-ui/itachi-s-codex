import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <a href="#hero" className="font-display text-sm tracking-[0.3em] text-foreground">
          S<span className="text-sharingan">K</span>R
        </a>

        {/* Desktop */}
        <div className="hidden gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-body text-xs tracking-widest text-muted-foreground uppercase transition-colors hover:text-sharingan"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="flex flex-col gap-1 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`h-px w-5 bg-foreground transition-all ${open ? "translate-y-[3px] rotate-45" : ""}`} />
          <span className={`h-px w-5 bg-foreground transition-all ${open ? "opacity-0" : ""}`} />
          <span className={`h-px w-5 bg-foreground transition-all ${open ? "-translate-y-[3px] -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="flex flex-col gap-4 border-t border-border bg-background px-4 py-6 md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-body text-sm tracking-widest text-muted-foreground uppercase transition-colors hover:text-sharingan"
              >
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
