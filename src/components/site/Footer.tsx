import { ArrowUp, Mail, MapPin, Phone } from "lucide-react";
import { useLang } from "@/i18n/LanguageProvider";
import { EMAIL, SOCIALS, WHATSAPP_DISPLAY } from "@/data/site";

const sections = ["home", "about", "brands", "products", "testimonials", "contact"] as const;

export function Footer() {
  const { lang, T } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <div className="absolute -left-24 top-10 h-96 w-96 rounded-full bg-accent blur-3xl" />
        <div className="absolute -right-24 bottom-10 h-96 w-96 rounded-full bg-primary-foreground blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-primary-foreground/15 font-display text-xl font-bold">
                W
              </span>
              <div>
                <p className="font-display text-2xl font-semibold">Were</p>
                <p className="text-xs text-primary-foreground/70">PT Were Sulapa Eppa</p>
              </div>
            </div>
            <p className="mt-4 max-w-md text-sm text-primary-foreground/80">
              {T.footer.tagline[lang]}
            </p>
            <div className="mt-6 space-y-2 text-sm text-primary-foreground/80">
              <p className="flex items-center gap-2"><Phone className="h-4 w-4" /> {WHATSAPP_DISPLAY}</p>
              <p className="flex items-center gap-2"><Mail className="h-4 w-4" /> {EMAIL}</p>
              <p className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4" /> Ngijo RT.05, Srimulyo, Piyungan, Bantul</p>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">{T.footer.nav[lang]}</p>
            <ul className="mt-4 space-y-2 text-sm">
              {sections.map((k) => (
                <li key={k}>
                  <a href={`#${k}`} className="text-primary-foreground/80 transition hover:text-accent">
                    {T.nav[k][lang]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">{T.footer.social[lang]}</p>
            <ul className="mt-4 space-y-2 text-sm">
              {SOCIALS.map((s) => (
                <li key={s.name}>
                  <a href={s.url} target="_blank" rel="noreferrer" className="text-primary-foreground/80 transition hover:text-accent">
                    {s.name} · {s.handle}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/70 sm:flex-row sm:items-center">
          <p>© {year} PT Were Sulapa Eppa. {T.footer.rights[lang]}</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-accent">{T.footer.privacy[lang]}</a>
            <a href="#" className="hover:text-accent">{T.footer.terms[lang]}</a>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="inline-flex items-center gap-1 rounded-full border border-primary-foreground/30 px-3 py-1.5 transition hover:bg-primary-foreground/10"
            >
              <ArrowUp className="h-3.5 w-3.5" /> {T.footer.top[lang]}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}