import meguaz from "@/assets/meguaz.png";
import asmaraloka from "@/assets/asmaraloka.png";
import cococrispyori from "@/assets/coco-crispy-pumkin-ori.png";
import cococrispycoklat from "@/assets/coco-crispy-pumkin-coklat.png";
import cococrispyubi from "@/assets/coco-crispy-pumkin-ubi-ungu.png";
import nutralatterempah from "@/assets/nutralatte-rempah.png";
import vitaluxemadu from "@/assets/vitaluxe-madu-rempah.png";
import nutrabitehard from "@/assets/nutrabite-hard-candy-rempah.png";
import nutrabitemilk from "@/assets/nutrabite-milk-candy-spirulina.png";

import acnelotion from "@/assets/product-acnelotion.jpg";

export type BrandKey = "bioherluxe" | "nutraluxe" | "were";

export type Product = {
  id: string;
  brand: BrandKey;
  image: string;
  name: string;
  category: { id: string; en: string };
  short: { id: string; en: string };
  description: { id: string; en: string };
  benefits: { id: string[]; en: string[] };
  features: { id: string[]; en: string[] };
  ingredients: { id: string; en: string };
  howto: { id: string; en: string };
};

export const BRANDS: {
  key: BrandKey;
  name: string;
  tagline: { id: string; en: string };
  desc: { id: string; en: string };
}[] = [
  {
    key: "bioherluxe",
    name: "Bioherluxe",
    tagline: { id: "Obat Tradisional", en: "Traditional Medicine" },
    desc: {
      id: "Warisan pengobatan tradisional Indonesia yang diformulasikan dengan standar modern.",
      en: "Indonesia's traditional medicine heritage crafted with modern standards.",
    },
  },
  {
    key: "nutraluxe",
    name: "Nutraluxe",
    tagline: { id: "Pangan Fungsional", en: "Functional Food" },
    desc: {
      id: "Rangkaian pangan fungsional untuk gaya hidup sehat dan seimbang.",
      en: "A series of functional foods for a balanced, healthy lifestyle.",
    },
  },
  {
    key: "were",
    name: "Were Cosmetics",
    tagline: { id: "Kosmetik", en: "Cosmetics" },
    desc: {
      id: "Perawatan kulit berbahan alami untuk hasil yang lembut dan nyata.",
      en: "Natural skincare that is gentle on skin and delivers real results.",
    },
  },
];

export const PRODUCTS: Product[] = [
  {
    id: "meguaz",
    brand: "bioherluxe",
    image: meguaz,
    name: "Meguaz",
    category: { id: "Obat Tradisional", en: "Traditional Medicine" },
    short: {
      id: "Meguaz merupakan obat tradisional berbahan alami yang mengombinasikan Gymnema sylvestre (daun gurmar) dan Guazuma ulmifolia (daun jati belanda). Kedua tanaman herbal ini telah lama dimanfaatkan dalam pengobatan tradisional dan diformulasikan secara ilmiah untuk membantu menjaga metabolisme tubuh serta mendukung program hidup sehat. ",
      en: "Meguaz is a natural traditional remedy that combines *Gymnema sylvestre* (Gurmar leaves) and *Guazuma ulmifolia* (Jati Belanda leaves). These two herbs have long been used in traditional medicine and are scientifically formulated to help maintain the body's metabolism and support a healthy lifestyle. ",
    },
    description: {
      id: "Meguaz merupakan obat tradisional berbahan alami yang mengombinasikan Gymnema sylvestre (daun gurmar) dan Guazuma ulmifolia (daun jati belanda). Kedua tanaman herbal ini telah lama dimanfaatkan dalam pengobatan tradisional dan diformulasikan secara ilmiah untuk membantu menjaga metabolisme tubuh serta mendukung program hidup sehat.",
      en: "Meguaz is a natural traditional remedy that combines *Gymnema sylvestre* (Gurmar leaves) and *Guazuma ulmifolia* (Jati Belanda leaves). These two herbs have long been used in traditional medicine and are scientifically formulated to help maintain the body's metabolism and support a healthy lifestyle.",
    },
    benefits: {
      id: ["Membantu memelihara kesehatan metabolisme tubuh.", "Membantu menjaga berat badan ideal bila disertai pola makan sehat dan olahraga.", "Membantu menjaga kesehatan tubuh sebagai bagian dari gaya hidup sehat."],
      en: ["Helps maintain healthy body metabolism.", "Helps maintain an ideal body weight when combined with a healthy diet and exercise.", "Helps support overall health as part of a healthy lifestyle."],
    },
    features: {
      id: ["100% bahan alami", "Diproduksi sesuai standar mutu", "Praktis dalam bentuk kapsul", "Terdaftar di BPOM RI ( No. Izin Edar BPOM RI: TR243062271 )"],
      en: ["100% natural ingredients", "Manufactured according to quality standard", "Convenient capsule form", "Registered with BPOM RI (BPOM RI Distribution Permit No.: TR243062271)"],
    },
    ingredients: { id: "Gymnema sylvestre, Guazuma ulmifolia", en: "gymnema sylvester, Guazuma ulmifolia" },
    howto: {
      id: "Konsumsi sesuai anjuran pada kemasan.",
      en: "Consume as directed on the packaging.",
    },
  },
  {
    id: "asmaraloka",
    brand: "bioherluxe",
    image: asmaraloka,
    name: "Asmaraloka",
    category: { id: "Obat Tradisional", en: "Traditional Medicine" },
    short: {
      id: "Tonik herbal untuk mendukung vitalitas dan keseimbangan.",
      en: "Herbal tonic to support vitality and balance.",
    },
    description: {
      id: "Asmaraloka merupakan obat tradisional berbahan alami yang mengandung ekstrak Ginseng (Panax ginseng). Sejak lama, ginseng dikenal sebagai tanaman herbal yang digunakan secara tradisional untuk membantu memelihara stamina, kebugaran, dan vitalitas tubuh. Kandungan ginsenosida di dalamnya menjadikan ginseng salah satu herbal yang banyak dimanfaatkan sebagai tonik untuk mendukung aktivitas sehari-hari.  ",
      en: "Asmaraloka is a natural traditional remedy containing Ginseng (*Panax ginseng*) extract. Ginseng has long been recognized as an herbal plant traditionally used to help maintain stamina, physical fitness, and vitality. Its ginsenoside content makes ginseng a widely used herb, serving as a tonic to support daily activities.",
    },
    benefits: {
      id: ["Membantu memelihara stamina dan kebugaran tubuh.", "Membantu menjaga vitalitas pria.", "Membantu menjaga daya tahan tubuh untuk menunjang aktivitas sehari-hari."],
      en: ["Helps maintain stamina and physical fitness.", "Helps maintain male vitality.", "Helps support the immune system for daily activities."],
    },
    features: {
      id: ["Mengandung ekstrak Ginseng berkualitas", "100% berbahan herbal alami", "Praktis dalam bentuk kapsul", "Terdaftar di BPOM RI (No. Izin Edar BPOM RI: TR243013401)"],
      en: ["Contains high-quality Ginseng extract", "Made from 100% natural herbs", "Convenient capsule form", "Registered with BPOM RI (BPOM RI Registration No.: TR243013401)"],
    },
    ingredients: { id: "Ekstrak Ginseng (Panax ginseng).", en: "Ginseng Extract (Panax ginseng)." },
    howto: { id: "Ikuti petunjuk pada kemasan.", en: "Follow the instructions on the package." },
  },
  {
    id: "coco-crispy-ori",
    brand: "nutraluxe",
    image: cococrispyori,
    name: "Coco Crispy Pumpkin Seeds Original",
    category: { id: "Pangan Fungsional", en: "Functional Food" },
    short: {
      id: "Coco Crispy Pumpkin Seeds Original adalah camilan renyah yang dibuat dari perpaduan MOCAF (Modified Cassava Flour), kelapa pilihan, gula aren, dan biji labu (pumpkin seeds). Dipanggang hingga renyah tanpa bahan pengawet, Coco Crispy menghadirkan cita rasa gurih-manis alami yang cocok sebagai teman ngemil sehat kapan saja. Diperkaya dengan pumpkin seeds yang kaya protein, lemak tak jenuh, serat, vitamin, dan mineral seperti magnesium serta zinc, Coco Crispy menjadi pilihan camilan yang lezat sekaligus bernutrisi. ",
      en: "Coco Crispy Pumpkin Seeds Original is a crunchy snack crafted from a blend of MOCAF (Modified Cassava Flour), select coconut, palm sugar, and pumpkin seeds. Baked to a crisp without preservatives, Coco Crispy offers a natural savory-sweet flavor, making it a perfect, healthy snack for any time. Enriched with pumpkin seeds—which are packed with protein, unsaturated fats, fiber, vitamins, and minerals such as magnesium and zinc—Coco Crispy is both a delicious and nutritious snack choice.",
    },
    description: {
      id: "Coco Crispy adalah camilan renyah berbahan dasar kelapa pilihan, cocok untuk teman ngemil sehat sepanjang hari.",
      en: "Coco Crispy is a crunchy snack made from selected coconut — perfect for healthy everyday snacking.",
    },
    benefits: {
      id: ["Sumber serat alami", "Ringan namun mengenyangkan", "Tanpa MSG"],
      en: ["Natural fiber source", "Light yet satisfying", "No MSG"],
    },
    features: {
      id: ["Bahan alami", "Kemasan praktis", "Rasa lezat"],
      en: ["Natural ingredients", "Convenient pack", "Delicious taste"],
    },
    ingredients: { id: "Kelapa, gula alami, garam laut.", en: "Coconut, natural sugar, sea salt." },
    howto: { id: "Siap santap kapan saja.", en: "Ready to eat any time." },
  },

   {
    id: "coco-crispy-pumkin-coklat",
    brand: "nutraluxe",
    image: cococrispycoklat,
    name: "Coco Crispy Pumkin Coklat",
    category: { id: "Pangan Fungsional", en: "Functional Food" },
    short: {
      id: "Camilan renyah dari kelapa asli, ringan namun mengenyangkan.",
      en: "Crunchy snack from real coconut — light yet satisfying.",
    },
    description: {
      id: "Coco Crispy adalah camilan renyah berbahan dasar kelapa pilihan, cocok untuk teman ngemil sehat sepanjang hari.",
      en: "Coco Crispy is a crunchy snack made from selected coconut — perfect for healthy everyday snacking.",
    },
    benefits: {
      id: ["Sumber serat alami", "Ringan namun mengenyangkan", "Tanpa MSG"],
      en: ["Natural fiber source", "Light yet satisfying", "No MSG"],
    },
    features: {
      id: ["Bahan alami", "Kemasan praktis", "Rasa lezat"],
      en: ["Natural ingredients", "Convenient pack", "Delicious taste"],
    },
    ingredients: { id: "Kelapa, gula alami, garam laut.", en: "Coconut, natural sugar, sea salt." },
    howto: { id: "Siap santap kapan saja.", en: "Ready to eat any time." },
  },

  {
    id: "coco-crispy-pumkin-ubi-ungu",
    brand: "nutraluxe",
    image: cococrispyubi,
    name: "Coco Crispy Pumkin Coklat",
    category: { id: "Pangan Fungsional", en: "Functional Food" },
    short: {
      id: "Camilan renyah dari kelapa asli, ringan namun mengenyangkan.",
      en: "Crunchy snack from real coconut — light yet satisfying.",
    },
    description: {
      id: "Coco Crispy adalah camilan renyah berbahan dasar kelapa pilihan, cocok untuk teman ngemil sehat sepanjang hari.",
      en: "Coco Crispy is a crunchy snack made from selected coconut — perfect for healthy everyday snacking.",
    },
    benefits: {
      id: ["Sumber serat alami", "Ringan namun mengenyangkan", "Tanpa MSG"],
      en: ["Natural fiber source", "Light yet satisfying", "No MSG"],
    },
    features: {
      id: ["Bahan alami", "Kemasan praktis", "Rasa lezat"],
      en: ["Natural ingredients", "Convenient pack", "Delicious taste"],
    },
    ingredients: { id: "Kelapa, gula alami, garam laut.", en: "Coconut, natural sugar, sea salt." },
    howto: { id: "Siap santap kapan saja.", en: "Ready to eat any time." },
  },
  
  {
    id: "nutralatte",
    brand: "nutraluxe",
    image: nutralatterempah,
    name: "Nutralatte Rempah",
    category: { id: "Pangan Fungsional", en: "Functional Food" },
    short: {
      id: "Latte premium berbasis nabati dengan cita rasa mewah.",
      en: "Premium plant-based latte with a luxurious taste.",
    },
    description: {
      id: "Nutralatte adalah bubuk latte premium berbasis nabati yang mudah disajikan, kaya rasa, dan mendukung gaya hidup sehat modern.",
      en: "Nutralatte is a premium plant-based latte powder — easy to prepare, rich in flavor, and made for a modern healthy lifestyle.",
    },
    benefits: {
      id: ["Sumber energi lembut", "Bebas laktosa", "Cocok untuk vegan"],
      en: ["Gentle energy source", "Lactose-free", "Vegan-friendly"],
    },
    features: {
      id: ["Mudah disajikan", "Cita rasa premium", "Praktis dibawa"],
      en: ["Easy to prepare", "Premium taste", "Convenient to carry"],
    },
    ingredients: { id: "Detail akan diperbarui.", en: "Details will be updated." },
    howto: {
      id: "Seduh 1 sachet dengan air hangat atau susu nabati.",
      en: "Mix 1 sachet with warm water or plant-based milk.",
    },
  },
  {
    id: "vitaluxe",
    brand: "nutraluxe",
    image: vitaluxemadu,
    name: "Vitaluxe Madu Rempah",
    category: { id: "Pangan Fungsional", en: "Functional Food" },
    short: {
      id: "Suplemen fungsional untuk mendukung kesehatan sehari-hari.",
      en: "Functional supplement to support everyday wellness.",
    },
    description: {
      id: "Vitaluxe menghadirkan nutrisi terpilih dalam kemasan praktis untuk membantu memenuhi kebutuhan harian tubuh Anda.",
      en: "Vitaluxe delivers curated nutrients in a practical form to help meet your body's daily needs.",
    },
    benefits: {
      id: ["Mendukung imunitas", "Menjaga vitalitas", "Praktis dikonsumsi"],
      en: ["Supports immunity", "Sustains vitality", "Easy to consume"],
    },
    features: {
      id: ["Formula seimbang", "Aman dikonsumsi rutin", "Terdaftar"],
      en: ["Balanced formula", "Safe for daily use", "Registered"],
    },
    ingredients: { id: "Detail akan diperbarui.", en: "Details will be updated." },
    howto: { id: "Ikuti petunjuk pada kemasan.", en: "Follow the instructions on the package." },
  },
  {
    id: "nutrabite",
    brand: "nutraluxe",
    image: nutrabitehard,
    name: "Nutrabite Hard Candy Rempah",
    category: { id: "Pangan Fungsional", en: "Functional Food" },
    short: {
      id: "Bar nutrisi praktis untuk mendampingi hari sibuk Anda.",
      en: "Practical nutrition bar to power your busy day.",
    },
    description: {
      id: "NutraBite adalah bar nutrisi seimbang yang dibuat dari bahan alami, cocok sebagai camilan sehat di sela aktivitas.",
      en: "NutraBite is a balanced nutrition bar made from natural ingredients — the perfect healthy snack between activities.",
    },
    benefits: {
      id: ["Sumber energi seimbang", "Mudah dibawa", "Rasa lezat"],
      en: ["Balanced energy source", "Easy to carry", "Delicious taste"],
    },
    features: {
      id: ["Bahan alami", "Kemasan praktis", "Ideal untuk perjalanan"],
      en: ["Natural ingredients", "Convenient pack", "Ideal on-the-go"],
    },
    ingredients: { id: "Detail akan diperbarui.", en: "Details will be updated." },
    howto: { id: "Nikmati kapan saja.", en: "Enjoy any time." },
  },
  {
    id: "nutrabite-milk",
    brand: "nutraluxe",
    image: nutrabitemilk,
    name: "Nutrabite Milk Candy Spirulina",
    category: { id: "Pangan Fungsional", en: "Functional Food" },
    short: {
      id: "Bar nutrisi praktis untuk mendampingi hari sibuk Anda.",
      en: "Practical nutrition bar to power your busy day.",
    },
    description: {
      id: "NutraBite adalah bar nutrisi seimbang yang dibuat dari bahan alami, cocok sebagai camilan sehat di sela aktivitas.",
      en: "NutraBite is a balanced nutrition bar made from natural ingredients — the perfect healthy snack between activities.",
    },
    benefits: {
      id: ["Sumber energi seimbang", "Mudah dibawa", "Rasa lezat"],
      en: ["Balanced energy source", "Easy to carry", "Delicious taste"],
    },
    features: {
      id: ["Bahan alami", "Kemasan praktis", "Ideal untuk perjalanan"],
      en: ["Natural ingredients", "Convenient pack", "Ideal on-the-go"],
    },
    ingredients: { id: "Detail akan diperbarui.", en: "Details will be updated." },
    howto: { id: "Nikmati kapan saja.", en: "Enjoy any time." },
  },
  {
    id: "were-acne-lotion",
    brand: "were",
    image: acnelotion,
    name: "Were Acne Lotion",
    category: { id: "Kosmetik", en: "Cosmetics" },
    short: {
      id: "Perawatan wajah lembut untuk kulit rentan berjerawat.",
      en: "Gentle facial care for acne-prone skin.",
    },
    description: {
      id: "Were Acne Lotion diformulasikan untuk membantu menenangkan kulit berjerawat, mengurangi kemerahan, dan menjaga kelembapan alami wajah.",
      en: "Were Acne Lotion is formulated to help calm acne-prone skin, reduce redness, and preserve the skin's natural moisture.",
    },
    benefits: {
      id: ["Membantu meredakan jerawat", "Menenangkan kulit", "Menjaga kelembapan"],
      en: ["Helps calm breakouts", "Soothes the skin", "Maintains hydration"],
    },
    features: {
      id: ["Formula ringan", "Cepat menyerap", "Cocok untuk penggunaan harian"],
      en: ["Lightweight formula", "Fast absorbing", "Suitable for daily use"],
    },
    ingredients: { id: "Detail akan diperbarui.", en: "Details will be updated." },
    howto: {
      id: "Aplikasikan tipis pada area wajah yang bermasalah setelah membersihkan kulit.",
      en: "Apply a thin layer to problem areas after cleansing.",
    },
  },
];
