import { motion } from "motion/react";
import { useLang } from "@/i18n/LanguageProvider";
import { waLink } from "@/data/site";

export function WhatsAppFloat() {
  const { lang } = useLang();
  return (
    <motion.a
      href={waLink(undefined, lang)}
      target="_blank"
      rel="noreferrer"
      aria-label="Contact us on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 15 }}
      whileHover={{ scale: 1.08 }}
      className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-[0_10px_30px_-5px_rgba(0,0,0,0.3)]"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor" aria-hidden="true">
        <path d="M16 3C9 3 3.4 8.6 3.4 15.6c0 2.5.7 4.9 2 7L3 29l6.6-2.3c2 1.1 4.2 1.7 6.4 1.7 7 0 12.6-5.6 12.6-12.6S23 3 16 3zm0 22.7c-2 0-4-.5-5.7-1.6l-.4-.2-3.9 1.4 1.4-3.8-.3-.4c-1.2-1.9-1.8-4-1.8-6.2C5.3 9.7 10.1 5 16 5s10.7 4.7 10.7 10.6-4.8 10.7-10.7 10.7zm5.9-8c-.3-.2-1.9-.9-2.2-1s-.5-.2-.8.2c-.2.3-.9 1-1.1 1.2-.2.2-.4.2-.7 0s-1.4-.5-2.6-1.6c-1-.9-1.6-1.9-1.8-2.2-.2-.3 0-.5.1-.7l.5-.6c.2-.2.2-.3.3-.6.1-.2 0-.4 0-.6-.1-.2-.8-1.9-1-2.6-.3-.7-.6-.6-.8-.6h-.7c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9 0 1.7 1.2 3.4 1.4 3.6.2.2 2.4 3.6 5.7 5 3.3 1.4 3.3.9 3.9.9.6-.1 1.9-.8 2.2-1.5.3-.7.3-1.4.2-1.5-.1-.1-.3-.2-.6-.3z" />
      </svg>
    </motion.a>
  );
}