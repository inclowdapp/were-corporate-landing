import meguazAsset from "@/assets/meguaz.png";
import asmaraloka from "@/assets/asmaraloka.png";
import cococrispy from "@/assets/product-cococrispy.jpg";
import nutralatte from "@/assets/product-nutralatte.jpg";
import vitaluxe from "@/assets/product-vitaluxe.jpg";
import nutrabite from "@/assets/product-nutrabite.jpg";
import acnelotion from "@/assets/product-acnelotion.jpg";

const meguaz = meguazAsset.url;

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
      id: "Ramuan herbal untuk menjaga stamina dan kebugaran harian.",
      en: "Herbal blend to maintain daily stamina and wellness.",
    },
    description: {
      id: "Meguaz adalah ramuan warisan yang diformulasikan ulang secara ilmiah untuk membantu menjaga stamina, daya tahan tubuh, dan kebugaran harian.",
      en: "Meguaz is a heritage herbal formula reformulated scientifically to help maintain stamina, immunity, and everyday wellness.",
    },
    benefits: {
      id: ["Menjaga stamina", "Mendukung imunitas", "Membantu pemulihan energi"],
      en: ["Maintains stamina", "Supports immunity", "Helps energy recovery"],
    },
    features: {
      id: ["100% bahan alami", "Tanpa pengawet buatan", "Terdaftar dan aman"],
      en: ["100% natural ingredients", "No artificial preservatives", "Registered and safe"],
    },
    ingredients: { id: "Ekstrak herbal pilihan (rincian menyusul).", en: "Selected herbal extracts (details coming soon)." },
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
      id: "Asmaraloka menghadirkan racikan tanaman Indonesia untuk mendukung vitalitas, keseimbangan, dan kesejahteraan tubuh secara menyeluruh.",
      en: "Asmaraloka blends Indonesian botanicals to support vitality, balance, and overall well-being.",
    },
    benefits: {
      id: ["Mendukung vitalitas", "Membantu keseimbangan tubuh", "Meningkatkan rasa nyaman"],
      en: ["Supports vitality", "Helps body balance", "Enhances comfort"],
    },
    features: {
      id: ["Formulasi herbal", "Aman dikonsumsi rutin", "Cita rasa khas"],
      en: ["Herbal formulation", "Safe for daily use", "Distinctive taste"],
    },
    ingredients: { id: "Rincian bahan akan diperbarui.", en: "Ingredient details will be updated." },
    howto: { id: "Ikuti petunjuk pada kemasan.", en: "Follow the instructions on the package." },
  },
  {
    id: "coco-crispy",
    brand: "nutraluxe",
    image: cococrispy,
    name: "Coco Crispy",
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
    image: nutralatte,
    name: "Nutralatte",
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
    image: vitaluxe,
    name: "Vitaluxe",
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
    image: nutrabite,
    name: "NutraBite",
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

  
      //awal tambahan produk
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
          //akhir tambahan produk
  },
];
