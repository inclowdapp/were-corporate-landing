export const WHATSAPP_PHONE = "6281234593249";
export const WHATSAPP_DISPLAY = "081234593249";
export const EMAIL = "weresulapaeppa@gmail.com";
export const MAPS_URL = "https://maps.app.goo.gl/iqzzrrcucec1zTq68?g_st=ic";
export const MAPS_EMBED =
  "https://www.google.com/maps?q=Ngijo+Srimulyo+Piyungan+Bantul&output=embed";

export const SOCIALS = [
  { name: "Instagram", handle: "@nutraluxeofficial", url: "https://instagram.com/nutraluxeofficial" },
  { name: "Threads", handle: "@nutraluxeofficial", url: "https://www.threads.net/@nutraluxeofficial" },
  { name: "TikTok", handle: "@bioherluxe", url: "https://www.tiktok.com/@bioherluxe" },
  { name: "Shopee", handle: "bioherluxe", url: "https://shopee.co.id/bioherluxe" },
];

export function waLink(productName?: string, lang: "id" | "en" = "id") {
  const msg = productName
    ? lang === "id"
      ? `Halo, saya tertarik dengan produk berikut:\n\n${productName}\n\nMohon informasi lebih lanjut.`
      : `Hello, I am interested in the following product:\n\n${productName}\n\nPlease send me more information.`
    : lang === "id"
      ? "Halo, saya ingin bertanya tentang produk Were."
      : "Hello, I would like to ask about Were products.";
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(msg)}`;
}