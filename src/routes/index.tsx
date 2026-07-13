import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { motion } from "motion/react";
import {
  Sparkles,
  Leaf,
  FlaskConical,
  ShieldCheck,
  HeartHandshake,
  Award,
  ChevronRight,
  Star,
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  Instagram,
  ExternalLink,
  Quote,
  BadgePercent,
} from "lucide-react";

import { LanguageProvider, useLang } from "@/i18n/LanguageProvider";
import { BRANDS, PRODUCTS, type BrandKey, type Product } from "@/data/products";
import { EMAIL, MAPS_EMBED, MAPS_URL, SOCIALS, WHATSAPP_DISPLAY, waLink } from "@/data/site";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ProductModal } from "@/components/site/ProductModal";
import { Lightbox } from "@/components/site/Lightbox";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { CompanyVideo } from "@/components/site/CompanyVideo";

import heroBg from "@/assets/hero-bg.jpg";
import aboutLab from "@/assets/about-lab.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <LanguageProvider>
      <SitePage />
    </LanguageProvider>
  );
}

function SitePage() {
  const [openProduct, setOpenProduct] = useState<Product | null>(null);
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [brandFilter, setBrandFilter] = useState<BrandKey | "all">("all");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <CompanyVideo />
        <Brands setBrandFilter={setBrandFilter} />
        <Products
          brandFilter={brandFilter}
          setBrandFilter={setBrandFilter}
          onOpen={setOpenProduct}
        />
        <Promo />
        <WhyUs />
        <Testimonials />
        <Gallery onOpen={setLightbox} />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
      <ProductModal product={openProduct} onClose={() => setOpenProduct(null)} />
      <Lightbox src={lightbox} alt="Gallery" onClose={() => setLightbox(null)} />
    </div>
  );
}

// ---------- Reusable animation ----------
const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
      <Sparkles className="h-3 w-3" /> {children}
    </span>
  );
}

// ---------- Hero ----------
function Hero() {
  const { lang, T } = useLang();
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden pb-24 pt-32 sm:pt-40 lg:pt-48"
    >
      <div className="absolute inset-0 -z-10">
        <img
          src={heroBg}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover opacity-70"
          width={1600}
          height={1200}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <SectionEyebrow>{T.hero.eyebrow[lang]}</SectionEyebrow>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl"
          >
            {T.hero.headline[lang].split(" ").slice(0, -1).join(" ")}{" "}
            <span className="text-gradient-gold">
              {T.hero.headline[lang].split(" ").slice(-1)}
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
          >
            {T.hero.desc[lang]}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <a
              href="#products"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:shadow-xl hover:shadow-primary/30"
            >
              {T.hero.ctaProducts[lang]}
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={waLink(undefined, lang)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-background/60 px-6 py-3 text-sm font-semibold text-primary backdrop-blur transition hover:border-primary hover:bg-background"
            >
              <MessageCircle className="h-4 w-4" />
              {T.hero.ctaContact[lang]}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-16 grid max-w-lg grid-cols-3 gap-6 border-t border-border/60 pt-8 text-sm"
          >
            {[
              { k: "10k+", v: { id: "Pelanggan", en: "Customers" } },
              { k: "3", v: { id: "Brand", en: "Brands" } },
              { k: "100%", v: { id: "Alami", en: "Natural" } },
            ].map((s) => (
              <div key={s.k}>
                <p className="font-display text-3xl font-semibold text-foreground">{s.k}</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                  {s.v[lang]}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ---------- About ----------
function About() {
  const { lang, T } = useLang();
  const values = [
    { icon: Sparkles, label: T.about.valInnovation[lang] },
    { icon: Leaf, label: T.about.valNature[lang] },
    { icon: FlaskConical, label: T.about.valScience[lang] },
    { icon: ShieldCheck, label: T.about.valTrust[lang] },
  ];
  return (
    <section id="about" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
          <motion.div {...fadeUp} className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-primary/10">
              <img src={aboutLab} alt="Were research team" className="h-full w-full object-cover" loading="lazy" width={1200} height={900} />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden max-w-xs rounded-2xl bg-card p-5 shadow-xl ring-1 ring-border sm:block">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-primary/10 text-primary">
                  <Award className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">Quality First</p>
                  <p className="text-xs text-muted-foreground">
                    {lang === "id" ? "Standar produksi tinggi" : "High production standard"}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...fadeUp}>
            <SectionEyebrow>{T.about.tag[lang]}</SectionEyebrow>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              {T.about.title[lang]}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">{T.about.body[lang]}</p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-card p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">{T.about.vision[lang]}</p>
                <p className="mt-2 text-sm text-foreground/85">{T.about.visionText[lang]}</p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">{T.about.mission[lang]}</p>
                <p className="mt-2 text-sm text-foreground/85">{T.about.missionText[lang]}</p>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">{T.about.values[lang]}</p>
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {values.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex flex-col items-center gap-2 rounded-2xl border border-border bg-card px-3 py-4 text-center transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
                  >
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="text-xs font-semibold text-foreground">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ---------- Brands ----------
function Brands({ setBrandFilter }: { setBrandFilter: (b: BrandKey) => void }) {
  const { lang, T } = useLang();
  const brandTint: Record<BrandKey, string> = {
    bioherluxe: "from-primary/90 to-primary",
    nutraluxe: "from-accent to-primary/70",
    were: "from-primary/70 to-accent",
  };

  const goToProducts = (b: BrandKey) => {
    setBrandFilter(b);
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="brands" className="scroll-mt-24 bg-secondary/50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
          <SectionEyebrow>{T.brands.tag[lang]}</SectionEyebrow>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            {T.brands.title[lang]}
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {BRANDS.map((b, i) => (
            <motion.button
              key={b.key}
              {...fadeUp}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              onClick={() => goToProducts(b.key)}
              className="group relative overflow-hidden rounded-3xl bg-card p-8 text-left shadow-sm ring-1 ring-border transition hover:shadow-xl"
            >
              <div
                className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${brandTint[b.key]} opacity-80`}
              />
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                {b.tagline[lang]}
              </p>
              <h3 className="mt-2 font-display text-3xl font-semibold tracking-tight">{b.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b.desc[lang]}</p>
              <div className="mt-6 flex flex-wrap gap-1.5">
                {PRODUCTS.filter((p) => p.brand === b.key).slice(0, 4).map((p) => (
                  <span
                    key={p.id}
                    className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-foreground/70"
                  >
                    {p.name}
                  </span>
                ))}
              </div>
              <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary transition group-hover:gap-2">
                {T.brands.explore[lang]} <ChevronRight className="h-4 w-4" />
              </span>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Products ----------
function Products({
  brandFilter,
  setBrandFilter,
  onOpen,
}: {
  brandFilter: BrandKey | "all";
  setBrandFilter: (b: BrandKey | "all") => void;
  onOpen: (p: Product) => void;
}) {
  const { lang, T } = useLang();
  const filtered = useMemo(
    () => (brandFilter === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.brand === brandFilter)),
    [brandFilter],
  );

  const filters: { key: BrandKey | "all"; label: string }[] = [
    { key: "all", label: T.products.all[lang] },
    ...BRANDS.map((b) => ({ key: b.key, label: b.name })),
  ];

  return (
    <section id="products" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div {...fadeUp} className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <SectionEyebrow>{T.products.tag[lang]}</SectionEyebrow>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              {T.products.title[lang]}
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setBrandFilter(f.key)}
                className={`rounded-full border px-4 py-2 text-xs font-semibold transition ${
                  brandFilter === f.key
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-background text-foreground/70 hover:border-primary/40 hover:text-primary"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 8) * 0.05 }}
              whileHover={{ y: -6 }}
              className="group flex cursor-pointer flex-col overflow-hidden rounded-3xl bg-card shadow-sm ring-1 ring-border transition hover:shadow-xl"
              onClick={() => onOpen(p)}
            >
              <div className="relative aspect-square overflow-hidden bg-secondary/40">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  width={900}
                  height={900}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full bg-background/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-primary backdrop-blur">
                  {p.category[lang]}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-xl font-semibold tracking-tight">{p.name}</h3>
                <p className="mt-1.5 line-clamp-2 text-sm text-muted-foreground">{p.short[lang]}</p>
                <div className="mt-5 flex items-center gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpen(p);
                    }}
                    className="flex-1 rounded-full border border-border px-3 py-2 text-xs font-semibold text-foreground/80 transition hover:border-primary hover:text-primary"
                  >
                    {T.products.viewDetail[lang]}
                  </button>
                  <a
                    href={waLink(p.name, lang)}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex-1 rounded-full bg-primary px-3 py-2 text-center text-xs font-semibold text-primary-foreground transition hover:bg-primary/90"
                  >
                    {T.products.order[lang]}
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Promo ----------
function Promo() {
  const { lang, T } = useLang();
  return (
    <section className="px-6 py-16 lg:px-8">
      <motion.div
        {...fadeUp}
        className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-primary/80 p-8 text-primary-foreground shadow-2xl shadow-primary/20 sm:p-12"
      >
        <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-accent/30 blur-3xl" aria-hidden="true" />
        <div className="absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-accent/20 blur-3xl" aria-hidden="true" />
        <div className="relative flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <motion.span
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-widest text-accent-foreground"
            >
              <BadgePercent className="h-3.5 w-3.5" /> {T.promo.badge[lang]}
            </motion.span>
            <h3 className="mt-4 max-w-lg font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              {T.promo.title[lang]}
            </h3>
            <p className="mt-3 max-w-lg text-sm text-primary-foreground/80">{T.promo.desc[lang]}</p>
          </div>
          <a
            href={waLink(undefined, lang)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-bold text-accent-foreground shadow-lg transition hover:scale-[1.03]"
          >
            <MessageCircle className="h-4 w-4" />
            {T.promo.cta[lang]}
          </a>
        </div>
      </motion.div>
    </section>
  );
}

// ---------- Why Us ----------
function WhyUs() {
  const { lang, T } = useLang();
  const items = [
    { i: Leaf, t: { id: "Bahan Alami", en: "Natural Ingredients" }, d: { id: "Dipilih langsung dari kekayaan alam Indonesia.", en: "Selected directly from Indonesia's natural heritage." } },
    { i: FlaskConical, t: { id: "Berbasis Sains", en: "Science-Based" }, d: { id: "Formulasi didukung riset ilmiah yang bertanggung jawab.", en: "Formulations backed by responsible scientific research." } },
    { i: ShieldCheck, t: { id: "Formula Aman", en: "Safe Formula" }, d: { id: "Kandungan yang aman untuk penggunaan sehari-hari.", en: "Ingredients that are safe for everyday use." } },
    { i: Award, t: { id: "Kualitas Premium", en: "Premium Quality" }, d: { id: "Standar produksi tinggi dan quality control ketat.", en: "High production standards with strict quality control." } },
    { i: Sparkles, t: { id: "Inovasi Berkelanjutan", en: "Continuous Innovation" }, d: { id: "Terus berkembang untuk menghadirkan yang lebih baik.", en: "Constantly evolving to deliver something better." } },
    { i: HeartHandshake, t: { id: "Kepuasan Pelanggan", en: "Customer Satisfaction" }, d: { id: "Ribuan pelanggan setia mempercayai produk kami.", en: "Thousands of loyal customers trust our products." } },
  ];
  return (
    <section className="bg-secondary/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
          <SectionEyebrow>{T.why.tag[lang]}</SectionEyebrow>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            {T.why.title[lang]}
          </h2>
        </motion.div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ i: Icon, t, d }, idx) => (
            <motion.div
              key={t.en}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className="group rounded-3xl border border-border bg-card p-7 transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
            >
              <span className="inline-grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold tracking-tight">{t[lang]}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d[lang]}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Testimonials ----------
const TESTIMONIALS = [
  { name: "Rina W.", city: "Yogyakarta", quote: { id: "Meguaz benar-benar membantu menjaga stamina saya sebagai ibu bekerja.", en: "Meguaz truly helps maintain my stamina as a working mom." } },
  { name: "Andi S.", city: "Makassar", quote: { id: "Coco Crispy jadi camilan favorit anak-anak, sehat dan enak.", en: "Coco Crispy became my kids' favorite snack — healthy and tasty." } },
  { name: "Dewi P.", city: "Bandung", quote: { id: "Kulit saya terasa lebih tenang sejak pakai Were Acne Lotion.", en: "My skin feels calmer since I started using Were Acne Lotion." } },
  { name: "Bagas H.", city: "Jakarta", quote: { id: "Pelayanan ramah, produk premium. Nutralatte enak banget!", en: "Friendly service, premium products. Nutralatte tastes amazing!" } },
  { name: "Sari L.", city: "Surabaya", quote: { id: "Asmaraloka membantu saya merasa lebih seimbang setiap hari.", en: "Asmaraloka helps me feel more balanced every day." } },
];

function Testimonials() {
  const { lang, T } = useLang();
  const [i, setI] = useState(0);
  const t = TESTIMONIALS[i];
  return (
    <section id="testimonials" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
          <SectionEyebrow>{T.testimonials.tag[lang]}</SectionEyebrow>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            {T.testimonials.title[lang]}
          </h2>
        </motion.div>

        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative mt-12 rounded-3xl border border-border bg-card p-8 shadow-lg sm:p-14"
        >
          <Quote className="absolute left-6 top-6 h-8 w-8 text-primary/20" />
          <div className="mb-3 flex justify-center gap-0.5 text-accent">
            {Array.from({ length: 5 }).map((_, k) => (
              <Star key={k} className="h-4 w-4 fill-current" />
            ))}
          </div>
          <p className="text-center font-display text-xl leading-relaxed text-foreground sm:text-2xl">
            “{t.quote[lang]}”
          </p>
          <div className="mt-6 flex flex-col items-center">
            <div className="grid h-12 w-12 place-items-center rounded-full bg-primary/10 font-display text-lg font-semibold text-primary">
              {t.name.charAt(0)}
            </div>
            <p className="mt-3 text-sm font-semibold text-foreground">{t.name}</p>
            <p className="text-xs text-muted-foreground">{t.city}</p>
          </div>
        </motion.div>

        <div className="mt-6 flex items-center justify-center gap-2">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Testimonial ${idx + 1}`}
              className={`h-2 rounded-full transition-all ${
                idx === i ? "w-8 bg-primary" : "w-2 bg-border hover:bg-primary/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Gallery ----------
function Gallery({ onOpen }: { onOpen: (src: string) => void }) {
  const { lang, T } = useLang();
  const images = PRODUCTS.map((p) => p.image);
  const spans = ["row-span-2", "", "", "row-span-2", "", "", ""];
  return (
    <section className="bg-secondary/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
          <SectionEyebrow>{T.gallery.tag[lang]}</SectionEyebrow>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            {T.gallery.title[lang]}
          </h2>
        </motion.div>

        <div className="mt-12 grid auto-rows-[180px] grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {images.map((src, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 6) * 0.05 }}
              onClick={() => onOpen(src)}
              className={`group relative overflow-hidden rounded-2xl bg-secondary shadow-sm transition hover:shadow-xl ${spans[i % spans.length]}`}
            >
              <img src={src} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 transition group-hover:opacity-100" />
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Contact ----------
function Contact() {
  const { lang, T } = useLang();
  return (
    <section id="contact" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
          <SectionEyebrow>{T.contact.tag[lang]}</SectionEyebrow>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            {T.contact.title[lang]}
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-6 lg:grid-cols-5">
          <motion.div {...fadeUp} className="rounded-3xl border border-border bg-card p-8 lg:col-span-2">
            <div className="space-y-6">
              <ContactRow icon={<MessageCircle className="h-5 w-5" />} label="WhatsApp" value={WHATSAPP_DISPLAY} href={waLink(undefined, lang)} external />
              <ContactRow icon={<Phone className="h-5 w-5" />} label={lang === "id" ? "Telepon" : "Phone"} value={WHATSAPP_DISPLAY} href={`tel:+${"6281234593249"}`} />
              <ContactRow icon={<Mail className="h-5 w-5" />} label="Email" value={EMAIL} href={`mailto:${EMAIL}`} />
              <ContactRow icon={<MapPin className="h-5 w-5" />} label={T.contact.address[lang]} value="Ngijo RT.05, Srimulyo, Piyungan, Bantul" />
              <ContactRow icon={<Award className="h-5 w-5" />} label={T.contact.hours[lang]} value={T.contact.hoursValue[lang]} />
            </div>

            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">{T.footer.social[lang]}</p>
              <div className="mt-3 grid grid-cols-2 gap-2">
                {SOCIALS.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between rounded-2xl border border-border bg-background px-4 py-3 text-sm transition hover:border-primary hover:bg-primary/5"
                  >
                    <div>
                      <p className="font-semibold text-foreground">{s.name}</p>
                      <p className="text-xs text-muted-foreground">{s.handle}</p>
                    </div>
                    <Instagram className="h-4 w-4 text-primary opacity-0 transition group-hover:opacity-100" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div {...fadeUp} className="overflow-hidden rounded-3xl border border-border bg-card lg:col-span-3">
            <iframe
              title="Were location on Google Maps"
              src={MAPS_EMBED}
              className="h-80 w-full lg:h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="border-t border-border p-4">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
              >
                {T.contact.openMap[lang]} <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
  external,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}) {
  const inner = (
    <div className="flex items-start gap-4">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
        {icon}
      </span>
      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">{label}</p>
        <p className="mt-0.5 break-words text-sm text-foreground/90">{value}</p>
      </div>
    </div>
  );
  if (href) {
    return (
      <a href={href} {...(external ? { target: "_blank", rel: "noreferrer" } : {})} className="block transition hover:opacity-80">
        {inner}
      </a>
    );
  }
  return inner;
}
