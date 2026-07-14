import { useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X, Check, MessageCircle } from "lucide-react";
import type { Product } from "@/data/products";
import { useLang } from "@/i18n/LanguageProvider";
import { waLink } from "@/data/site";

type Props = {
  product: Product | null;
  onClose: () => void;
};

export function ProductModal({ product, onClose }: Props) {
  const { lang, T } = useLang();

  useEffect(() => {
    if (!product) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [product, onClose]);

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-end justify-center overflow-y-auto bg-foreground/60 p-0 backdrop-blur-md sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={product.name}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ type: "spring", stiffness: 260, damping: 28 }}
            className="relative w-full max-w-5xl overflow-hidden rounded-t-3xl bg-card text-card-foreground shadow-2xl sm:rounded-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mx-auto mt-2 h-1.5 w-12 rounded-full bg-foreground/20 sm:hidden" aria-hidden="true" />
            <button
              onClick={onClose}
              aria-label={T.products.close[lang]}
              className="fixed right-4 top-4 z-20 grid h-11 w-11 place-items-center rounded-full bg-background text-foreground shadow-lg ring-1 ring-border transition hover:bg-primary hover:text-primary-foreground sm:absolute"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="grid gap-0 md:grid-cols-2">
              <div className="relative aspect-square bg-secondary/60 md:aspect-auto">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="max-h-[70vh] overflow-y-auto p-6 sm:p-8 md:max-h-[85vh]">
                <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                  {product.category[lang]}
                </span>
                <h3 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground">
                  {product.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {product.description[lang]}
                </p>

                <div className="mt-6">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-primary">
                    {T.products.benefits[lang]}
                  </h4>
                  <ul className="mt-2 space-y-1.5">
                    {product.benefits[lang].map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-foreground/80">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-primary">
                    {T.products.features[lang]}
                  </h4>
                  <ul className="mt-2 space-y-1.5">
                    {product.features[lang].map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-foreground/80">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-primary">
                      {T.products.ingredients[lang]}
                    </h4>
                    <p className="mt-1.5 text-sm text-muted-foreground">{product.ingredients[lang]}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-primary">
                      {T.products.howto[lang]}
                    </h4>
                    <p className="mt-1.5 text-sm text-muted-foreground">{product.howto[lang]}</p>
                  </div>
                </div>

                <a
                  href={waLink(product.name, lang)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition hover:bg-primary/90"
                >
                  <MessageCircle className="h-4 w-4" />
                  {T.products.orderWa[lang]}
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}