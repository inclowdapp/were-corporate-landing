import { motion } from "motion/react";
import { useLang } from "@/i18n/LanguageProvider";
import heroBg from "@/assets/hero-bg.jpg";

// TODO: Ganti URL ini dengan video company profile resmi Were.
// Bisa berupa file .mp4 yang di-upload ke Lovable Assets, atau URL publik apa pun.
const COMPANY_VIDEO_URL =
  "@/assets/video-company.mp4";

export function CompanyVideo() {
  const { lang, T } = useLang();
  return (
    <section id="company-video" className="scroll-mt-24 bg-secondary/40 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
            {T.video.tag[lang]}
          </span>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            {T.video.title[lang]}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {T.video.desc[lang]}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 overflow-hidden rounded-3xl bg-card shadow-2xl shadow-primary/10 ring-1 ring-border"
        >
          <div className="relative aspect-video w-full bg-black">
            <video
              key={COMPANY_VIDEO_URL}
              className="h-full w-full object-cover"
              controls
              preload="metadata"
              playsInline
              poster={heroBg}
            >
              <source src={COMPANY_VIDEO_URL} type="video/mp4" />
              {lang === "id"
                ? "Browser Anda tidak mendukung pemutaran video."
                : "Your browser does not support video playback."}
            </video>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
