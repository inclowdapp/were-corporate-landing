import { useEffect, useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { useLang } from "@/i18n/LanguageProvider";
import { waLink } from "@/data/site";

const sections = ["home", "about", "brands", "products", "testimonials", "contact"] as const;

export function Header() {
  const { lang, setLang, T } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = sections.map((k) => ({ id: k, label: T.nav[k][lang] }));

  const go = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "glass shadow-[0_8px_30px_-12px_rgba(0,0,0,0.08)]" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <button onClick={() => go("home")} className="flex items-center gap-2" aria-label="Were home">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground font-display text-lg font-bold">
            W
          </span>
          <span className="font-display text-xl font-semibold tracking-tight text-foreground">Were</span>
        </button>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {nav.map((n) => (
            <button
              key={n.id}
              onClick={() => go(n.id)}
              className="relative text-sm font-medium text-foreground/80 transition-colors hover:text-primary after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              {n.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setLang(lang === "id" ? "en" : "id")}
            className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-background/60 px-3 py-1.5 text-xs font-semibold text-foreground/80 transition-colors hover:border-primary hover:text-primary"
            aria-label="Switch language"
          >
            <Globe className="h-3.5 w-3.5" />
            {lang.toUpperCase()}
          </button>
          <a
            href={waLink(undefined, lang)}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition hover:bg-primary/90 hover:shadow-md sm:inline-flex"
          >
            {T.nav.whatsapp[lang]}
          </a>
          <button
            className="grid h-10 w-10 place-items-center rounded-full border border-border/70 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <motion.nav
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="glass overflow-hidden border-t border-border/60 lg:hidden"
          aria-label="Mobile"
        >
          <div className="flex flex-col px-6 py-4">
            {nav.map((n) => (
              <button
                key={n.id}
                onClick={() => go(n.id)}
                className="border-b border-border/40 py-3 text-left text-sm font-medium text-foreground/90"
              >
                {n.label}
              </button>
            ))}
            <a
              href={waLink(undefined, lang)}
              target="_blank"
              rel="noreferrer"
              className="mt-4 rounded-full bg-primary px-4 py-2.5 text-center text-sm font-medium text-primary-foreground"
            >
              {T.nav.whatsapp[lang]}
            </a>
          </div>
        </motion.nav>
      )}
    </motion.header>
  );
}