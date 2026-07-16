import meguaz from "@/assets/meguaz.png";
import asmaraloka from "@/assets/asmaraloka.png";
import cococrispyori from "@/assets/coco-crispy-pumkin-ori.png";
import cococrispycoklat from "@/assets/coco-crispy-pumkin-coklat.png";
import cococrispyubi from "@/assets/coco-crispy-pumkin-ubi-ungu.png";
import nutralatterempah from "@/assets/nutralatte-rempah.png";
import vitaluxemadu from "@/assets/vitaluxe-madu-rempah.png";
import nutrabitehard from "@/assets/nutrabite-hard-candy-rempah.png";
import nutrabitemilk from "@/assets/nutrabite-milk-candy-spirulina.png";
import nutrabitemilkrempah from "@/assets/nutrabite-milk-candy-rempah.png";
import ichigum from "@/assets/ichigum.png";

import acnelotion from "@/assets/were-acne.jpg";

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
    name: "Coco Crispy Pumpkin Seeds Cokelat",
    category: { id: "Pangan Fungsional", en: "Functional Food" },
    short: {
      id: "Camilan renyah rasa cokelat dengan MOCAF, kelapa, gula aren, dan biji labu.",
      en: "Crunchy chocolate snack made with MOCAF, coconut, palm sugar, and pumpkin seeds.",
    },
    description: {
      id: "Coco Crispy Pumpkin Seeds Cokelat adalah camilan renyah yang memadukan tepung MOCAF, bubuk cokelat pilihan, kelapa parut, gula aren, dan biji labu (pumpkin seeds). Dipanggang hingga renyah tanpa bahan pengawet, varian ini menghadirkan perpaduan rasa cokelat yang kaya dengan sentuhan gurih alami dari kelapa dan pumpkin seeds. Diperkaya pumpkin seeds yang mengandung protein, serat, lemak tak jenuh, vitamin, dan mineral.",
      en: "Coco Crispy Pumpkin Seeds Chocolate is a crunchy snack blending MOCAF (Modified Cassava Flour), premium cocoa powder, grated coconut, palm sugar, and pumpkin seeds. Baked crisp without preservatives, this variant pairs rich chocolate with the natural savoriness of coconut and pumpkin seeds — enriched with protein, fiber, unsaturated fats, vitamins and minerals from pumpkin seeds.",
    },
    benefits: {
      id: [
        "Sumber serat untuk melengkapi pola makan sehari-hari.",
        "Diperkaya pumpkin seeds sebagai sumber nutrisi alami.",
        "Dipanggang hingga renyah tanpa bahan pengawet.",
        "Cita rasa cokelat yang lezat untuk menemani aktivitas sehari-hari.",
      ],
      en: [
        "A source of fiber to complement daily meals.",
        "Enriched with pumpkin seeds as a natural source of nutrition.",
        "Baked crisp with no preservatives.",
        "Delicious chocolate flavor for everyday activities.",
      ],
    },
    features: {
      id: [
        "Terbuat dari tepung MOCAF",
        "Menggunakan bubuk cokelat pilihan",
        "Diperkaya pumpkin seeds",
        "Menggunakan gula aren sebagai pemanis",
        "Tanpa bahan pengawet",
        "Dipanggang, bukan digoreng",
      ],
      en: [
        "Made with MOCAF flour",
        "Uses premium cocoa powder",
        "Enriched with pumpkin seeds",
        "Sweetened with palm sugar",
        "No preservatives",
        "Baked, not fried",
      ],
    },
    ingredients: {
      id: "Tepung MOCAF, bubuk cokelat, kelapa parut, gula aren, biji labu (Pumpkin Seeds).",
      en: "MOCAF flour, cocoa powder, grated coconut, palm sugar, pumpkin seeds.",
    },
    howto: {
      id: "Siap disantap langsung sebagai camilan sehat. Nikmati bersama teh, kopi, atau susu. Simpan di tempat sejuk dan kering; tutup rapat kembali setelah dibuka.",
      en: "Ready to eat as a healthy snack. Enjoy with tea, coffee, or milk. Store in a cool, dry place and reseal after opening.",
    },
  },

  {
    id: "coco-crispy-pumkin-ubi-ungu",
    brand: "nutraluxe",
    image: cococrispyubi,
    name: "Coco Crispy Pumpkin Seeds Ubi Ungu",
    category: { id: "Pangan Fungsional", en: "Functional Food" },
    short: {
      id: "Camilan renyah dengan ubi ungu, MOCAF, kelapa, gula aren, dan biji labu.",
      en: "Crunchy snack with purple sweet potato, MOCAF, coconut, palm sugar, and pumpkin seeds.",
    },
    description: {
      id: "Coco Crispy Pumpkin Seeds Ubi Ungu adalah camilan renyah berbasis MOCAF (Modified Cassava Flour), kelapa parut, gula aren, ubi ungu, dan biji labu (pumpkin seeds). Dipanggang hingga renyah tanpa bahan pengawet dengan cita rasa manis alami dan warna ungu khas ubi.",
      en: "Coco Crispy Pumpkin Seeds Purple Sweet Potato is a crunchy snack based on MOCAF, grated coconut, palm sugar, purple sweet potato, and pumpkin seeds. Baked crisp with no preservatives, with a natural sweetness and the signature purple hue.",
    },
    benefits: {
      id: [
        "Sumber serat untuk melengkapi pola makan sehari-hari.",
        "Diperkaya pumpkin seeds sebagai sumber nutrisi alami.",
        "Dipanggang hingga renyah tanpa bahan pengawet.",
        "Cita rasa manis alami dari ubi ungu.",
      ],
      en: [
        "A source of fiber to complement daily meals.",
        "Enriched with pumpkin seeds as a natural source of nutrition.",
        "Baked crisp with no preservatives.",
        "Naturally sweet flavor from purple sweet potato.",
      ],
    },
    features: {
      id: [
        "Terbuat dari tepung MOCAF",
        "Menggunakan ubi ungu",
        "Diperkaya pumpkin seeds",
        "Menggunakan gula aren sebagai pemanis",
        "Tanpa bahan pengawet",
        "Dipanggang, bukan digoreng",
      ],
      en: [
        "Made with MOCAF flour",
        "With purple sweet potato",
        "Enriched with pumpkin seeds",
        "Sweetened with palm sugar",
        "No preservatives",
        "Baked, not fried",
      ],
    },
    ingredients: {
      id: "Tepung MOCAF, kelapa parut, gula aren, ubi ungu, biji labu (Pumpkin Seeds).",
      en: "MOCAF flour, grated coconut, palm sugar, purple sweet potato, pumpkin seeds.",
    },
    howto: {
      id: "Siap disantap langsung sebagai camilan sehat. Simpan di tempat sejuk dan kering; tutup rapat kembali setelah dibuka.",
      en: "Ready to eat as a healthy snack. Store in a cool, dry place and reseal after opening.",
    },
  },
  
  {
    id: "nutralatte",
    brand: "nutraluxe",
    image: nutralatterempah,
    name: "Nutralatte Rempah",
    category: { id: "Pangan Fungsional", en: "Functional Food" },
    short: {
      id: "Minuman serbuk herbal jahe, kunyit, dan lada hitam dengan gula aren.",
      en: "Herbal drink powder of ginger, turmeric, and black pepper with palm sugar.",
    },
    description: {
      id: "Nutralatte merupakan minuman serbuk herbal yang memadukan ekstrak jahe, kunyit, dan lada hitam dengan cita rasa hangat dan nikmat. Diperkaya gula aren dan krimer nabati, Nutralatte menjadi pilihan minuman praktis untuk menemani aktivitas sehari-hari. Jahe memberikan sensasi hangat, kunyit dikenal sebagai sumber kurkuminoid, dan lada hitam mengandung piperin yang melengkapi kombinasi rempah dalam setiap sajian.",
      en: "Nutralatte is a herbal drink powder combining ginger, turmeric, and black pepper extracts with a warm, delightful taste. Enriched with palm sugar and plant-based creamer, it's a practical companion for daily activities. Ginger warms the body, turmeric is known for curcuminoids, and black pepper contributes piperine to the spice blend.",
    },
    benefits: {
      id: [
        "Membantu menghangatkan tubuh.",
        "Membantu menjaga kebugaran tubuh.",
        "Cocok dikonsumsi untuk menemani aktivitas sehari-hari.",
        "Praktis disajikan kapan saja.",
      ],
      en: [
        "Helps warm the body.",
        "Helps maintain fitness.",
        "Great as a daily companion drink.",
        "Practical to prepare any time.",
      ],
    },
    features: {
      id: [
        "Mengandung ekstrak jahe, kunyit, dan lada hitam",
        "Menggunakan gula aren sebagai pemanis",
        "Mudah diseduh",
        "Rasa hangat dan nikmat",
        "Praktis dalam kemasan sachet",
      ],
      en: [
        "Contains ginger, turmeric, and black pepper extracts",
        "Sweetened with palm sugar",
        "Easy to brew",
        "Warm and delightful taste",
        "Convenient sachet packaging",
      ],
    },
    ingredients: {
      id: "Gula aren, krimer nabati, ekstrak jahe (Zingiber officinale), ekstrak kunyit (Curcuma longa), ekstrak lada hitam (Piper nigrum).",
      en: "Palm sugar, plant-based creamer, ginger extract (Zingiber officinale), turmeric extract (Curcuma longa), black pepper extract (Piper nigrum).",
    },
    howto: {
      id: "Tuangkan 1 sachet Nutralatte ke dalam cangkir, tambahkan 100–150 ml air panas, aduk hingga larut. Sajikan selagi hangat.",
      en: "Pour 1 sachet into a cup, add 100–150 ml of hot water, and stir until dissolved. Serve warm.",
    },
  },
  {
    id: "vitaluxe",
    brand: "nutraluxe",
    image: vitaluxemadu,
    name: "Vitaluxe Madu Rempah",
    category: { id: "Pangan Fungsional", en: "Functional Food" },
    short: {
      id: "Minuman herbal madu dengan jahe, kunyit, dan lada hitam.",
      en: "Honey herbal drink with ginger, turmeric, and black pepper.",
    },
    description: {
      id: "Vitaluxe merupakan minuman herbal yang memadukan ekstrak jahe, kunyit, lada hitam, dan madu dalam satu sajian praktis. Diracik dari bahan alami pilihan dengan cita rasa hangat, segar, dan nikmat. Jahe memberikan sensasi hangat, kunyit sebagai sumber kurkuminoid, lada hitam mengandung piperin, dan madu memberikan rasa manis alami.",
      en: "Vitaluxe is a herbal drink combining ginger, turmeric, black pepper extracts and honey in one practical serving. Crafted from selected natural ingredients with a warm, refreshing taste. Ginger warms, turmeric provides curcuminoids, black pepper offers piperine, and honey adds natural sweetness.",
    },
    benefits: {
      id: [
        "Membantu menghangatkan tubuh.",
        "Membantu menjaga stamina dan kebugaran tubuh.",
        "Membantu menjaga daya tahan tubuh sebagai bagian dari pola hidup sehat.",
        "Cocok dikonsumsi setiap hari.",
      ],
      en: [
        "Helps warm the body.",
        "Helps maintain stamina and fitness.",
        "Helps support the immune system as part of a healthy lifestyle.",
        "Suitable for daily consumption.",
      ],
    },
    features: {
      id: [
        "Mengandung ekstrak jahe, kunyit, dan lada hitam",
        "Dipadukan dengan madu alami",
        "Tanpa pewarna buatan",
        "Praktis dan siap dikonsumsi",
        "Cita rasa hangat dan menyegarkan",
      ],
      en: [
        "Contains ginger, turmeric, and black pepper extracts",
        "Combined with natural honey",
        "No artificial coloring",
        "Practical and ready to consume",
        "Warm and refreshing taste",
      ],
    },
    ingredients: {
      id: "Madu, ekstrak jahe (Zingiber officinale), ekstrak kunyit (Curcuma longa), ekstrak lada hitam (Piper nigrum).",
      en: "Honey, ginger extract (Zingiber officinale), turmeric extract (Curcuma longa), black pepper extract (Piper nigrum).",
    },
    howto: {
      id: "Kocok terlebih dahulu sebelum dikonsumsi. Dapat diminum langsung atau disajikan hangat sesuai selera.",
      en: "Shake well before consuming. Drink directly or serve warm to taste.",
    },
  },
  {
    id: "nutrabite",
    brand: "nutraluxe",
    image: nutrabitehard,
    name: "Nutrabite Hard Candy Rempah",
    category: { id: "Pangan Fungsional", en: "Functional Food" },
    short: {
      id: "Permen herbal jahe, kunyit, lada hitam, dan madu.",
      en: "Herbal hard candy with ginger, turmeric, black pepper, and honey.",
    },
    description: {
      id: "NutraBite Hard Candy Rempah adalah permen herbal yang memadukan ekstrak jahe, kunyit, lada hitam, dan madu dalam bentuk hard candy yang praktis. Menghadirkan sensasi hangat dengan rasa manis alami, cocok menemani aktivitas kapan saja.",
      en: "NutraBite Hard Candy Spice is a herbal hard candy blending ginger, turmeric, black pepper extracts, and honey. It offers a warm sensation with natural sweetness — a perfect companion for daily activities.",
    },
    benefits: {
      id: [
        "Memberikan sensasi hangat pada tenggorokan.",
        "Membantu menyegarkan mulut dan tenggorokan.",
        "Praktis dikonsumsi kapan saja saat beraktivitas.",
        "Cocok sebagai teman perjalanan, bekerja, maupun bersantai.",
      ],
      en: [
        "Gives a warm sensation to the throat.",
        "Helps refresh the mouth and throat.",
        "Practical to enjoy any time.",
        "Great for travel, work, or relaxation.",
      ],
    },
    features: {
      id: [
        "Mengandung ekstrak jahe, kunyit, dan lada hitam",
        "Dipadukan dengan madu sebagai pemanis alami",
        "Rasa rempah yang hangat dan menyegarkan",
        "Praktis dalam bentuk hard candy",
      ],
      en: [
        "Contains ginger, turmeric, and black pepper extracts",
        "Combined with honey as a natural sweetener",
        "Warm and refreshing spice flavor",
        "Convenient hard candy form",
      ],
    },
    ingredients: {
      id: "Madu, ekstrak jahe (Zingiber officinale), ekstrak kunyit (Curcuma longa), ekstrak lada hitam (Piper nigrum), isomalt, maltitol, perisa alami.",
      en: "Honey, ginger extract (Zingiber officinale), turmeric extract (Curcuma longa), black pepper extract (Piper nigrum), isomalt, maltitol, natural flavoring.",
    },
    howto: {
      id: "Hisap 1 butir NutraBite hingga larut di dalam mulut. Nikmati kapan saja untuk sensasi hangat rempah.",
      en: "Suck one NutraBite until it dissolves. Enjoy any time for a warm spice sensation.",
    },
  },
  {
    id: "nutrabite-milk-rempah",
    brand: "nutraluxe",
    image: nutrabitemilkrempah,
    name: "NutraBite Permen Susu Rempah",
    category: { id: "Pangan Fungsional", en: "Functional Food" },
    short: {
      id: "Permen susu chewy dengan jahe, kunyit, lada hitam, dan madu.",
      en: "Chewy milk candy with ginger, turmeric, black pepper, and honey.",
    },
    description: {
      id: "NutraBite Permen Susu Rempah adalah permen susu bertekstur chewy (lembut dan kenyal) yang memadukan ekstrak jahe, kunyit, lada hitam, dan madu. Menghadirkan kehangatan rempah tanpa mengurangi kelembutan rasa susu — camilan praktis yang dapat dinikmati kapan saja.",
      en: "NutraBite Milk Candy Spice is a chewy milk candy blending ginger, turmeric, black pepper extracts, and honey. Warm spice notes meet a soft, creamy milk flavor — a practical treat to enjoy any time.",
    },
    benefits: {
      id: [
        "Memberikan sensasi hangat dari rempah-rempah alami.",
        "Membantu menyegarkan mulut dan tenggorokan.",
        "Praktis dinikmati sebagai camilan di sela aktivitas.",
        "Tekstur chewy yang lembut dan disukai berbagai kalangan.",
      ],
      en: [
        "Delivers warm notes from natural spices.",
        "Helps refresh the mouth and throat.",
        "A practical snack between activities.",
        "Soft chewy texture loved across ages.",
      ],
    },
    features: {
      id: [
        "Mengandung ekstrak jahe, kunyit, dan lada hitam",
        "Dipadukan dengan madu sebagai pemanis alami",
        "Dibuat dengan susu berkualitas",
        "Tekstur chewy yang lembut dan kenyal",
        "Rasa creamy dengan sentuhan hangat rempah",
        "Praktis dibawa dan dinikmati kapan saja",
      ],
      en: [
        "Contains ginger, turmeric, and black pepper extracts",
        "With honey as a natural sweetener",
        "Made with quality milk",
        "Soft, chewy texture",
        "Creamy flavor with a warm spice touch",
        "Convenient to carry and enjoy any time",
      ],
    },
    ingredients: {
      id: "Susu bubuk, madu, ekstrak jahe (Zingiber officinale), ekstrak kunyit (Curcuma longa), ekstrak lada hitam (Piper nigrum).",
      en: "Milk powder, honey, ginger extract (Zingiber officinale), turmeric extract (Curcuma longa), black pepper extract (Piper nigrum).",
    },
    howto: {
      id: "Nikmati 1–2 butir NutraBite kapan saja. Simpan di tempat sejuk dan kering, hindari sinar matahari langsung.",
      en: "Enjoy 1–2 NutraBite candies any time. Store in a cool, dry place, away from direct sunlight.",
    },
  },
  {
    id: "nutrabite-milk",
    brand: "nutraluxe",
    image: nutrabitemilk,
    name: "NutraBite Permen Susu Spirulina",
    category: { id: "Pangan Fungsional", en: "Functional Food" },
    short: {
      id: "Permen susu chewy diperkaya spirulina dan madu.",
      en: "Chewy milk candy enriched with spirulina and honey.",
    },
    description: {
      id: "NutraBite Permen Susu Spirulina adalah permen susu bertekstur chewy yang diperkaya Spirulina — mikroalga alami yang kaya protein, vitamin, mineral, dan pigmen alami seperti fikosianin. Dipadukan madu sebagai pemanis alami, menghadirkan camilan lezat yang memadukan rasa creamy susu dengan kebaikan nutrisi spirulina.",
      en: "NutraBite Milk Candy Spirulina is a chewy milk candy enriched with Spirulina — a natural microalgae rich in protein, vitamins, minerals, and natural pigments like phycocyanin. Combined with honey for natural sweetness, it pairs creamy milk flavor with the goodness of spirulina.",
    },
    benefits: {
      id: [
        "Mengandung Spirulina sebagai sumber nutrisi alami.",
        "Mengandung protein, vitamin, dan mineral dari Spirulina.",
        "Dipadukan dengan madu untuk rasa manis yang lezat.",
        "Tekstur chewy yang lembut dan nyaman dinikmati kapan saja.",
      ],
      en: [
        "Contains Spirulina as a natural source of nutrition.",
        "Provides protein, vitamins, and minerals from Spirulina.",
        "Combined with honey for a delicious sweetness.",
        "Soft chewy texture, enjoyable any time.",
      ],
    },
    features: {
      id: [
        "Diperkaya Spirulina berkualitas",
        "Menggunakan madu sebagai pemanis alami",
        "Dibuat dengan susu berkualitas",
        "Tekstur chewy yang lembut dan kenyal",
        "Rasa creamy yang disukai anak hingga dewasa",
        "Praktis dibawa dan dinikmati kapan saja",
      ],
      en: [
        "Enriched with quality Spirulina",
        "Sweetened with natural honey",
        "Made with quality milk",
        "Soft, chewy texture",
        "Creamy flavor loved by children and adults",
        "Convenient to carry any time",
      ],
    },
    ingredients: {
      id: "Susu bubuk, Spirulina (Arthrospira platensis), madu.",
      en: "Milk powder, Spirulina (Arthrospira platensis), honey.",
    },
    howto: {
      id: "Nikmati 1–2 butir NutraBite kapan saja. Simpan di tempat sejuk dan kering.",
      en: "Enjoy 1–2 NutraBite candies any time. Store in a cool, dry place.",
    },
  },
  {
    id: "ichibite-hard-candy",
    brand: "nutraluxe",
    image: ichigum,
    name: "IchiBite Hard Candy",
    category: { id: "Pangan Fungsional", en: "Functional Food" },
    short: {
      id: "Permen keras dengan isian cokelat dan kacang Sacha Inchi.",
      en: "Hard candy filled with chocolate and Sacha Inchi nuts.",
    },
    description: {
      id: "IchiBite Hard Candy Rempah merupakan inovasi permen keras yang menghadirkan perpaduan cita rasa rempah dengan kejutan isian cokelat dan kacang Sacha Inchi di bagian tengah. Diperkaya dengan madu sebagai pemanis, IchiBite memberikan sensasi manis yang seimbang, hangat dari rempah, serta kelezatan cokelat dan kacang dalam setiap gigitan. Kacang Sacha Inchi (Plukenetia volubilis) dikenal sebagai sumber alami protein nabati serta lemak tak jenuh, termasuk omega-3, omega-6, dan omega-9.",
      en: "IchiBite Hard Candy Spice is an innovative hard candy that blends warm spice flavors with a surprise chocolate and Sacha Inchi nut filling at its center. Enriched with honey as a sweetener, IchiBite delivers balanced sweetness, warm spice notes, and the delight of chocolate and nuts in every bite. Sacha Inchi nuts (Plukenetia volubilis) are known as a natural source of plant protein and unsaturated fats, including omega-3, omega-6, and omega-9.",
    },
    benefits: {
      id: [
        "Mengandung kacang Sacha Inchi sebagai sumber nutrisi alami.",
        "Dipadukan dengan madu untuk rasa manis yang lebih alami.",
        "Memberikan sensasi hangat dengan isian cokelat yang lezat.",
        "Praktis dinikmati kapan saja sebagai camilan atau teman beraktivitas.",
      ],
      en: [
        "Contains Sacha Inchi nuts as a natural source of nutrition.",
        "Combined with honey for a more natural sweetness.",
        "Delivers a warm sensation with a delicious chocolate filling.",
        "Convenient to enjoy any time as a snack or activity companion.",
      ],
    },
    features: {
      id: [
        "Hard candy dengan isian cokelat dan kacang Sacha Inchi",
        "Menggunakan madu sebagai pemanis",
        "Perpaduan rasa rempah, cokelat, dan kacang yang unik",
        "Tekstur renyah di luar, lembut di dalam",
        "Praktis dibawa dan dinikmati kapan saja",
      ],
      en: [
        "Hard candy filled with chocolate and Sacha Inchi nuts",
        "Sweetened with honey",
        "A unique blend of spice, chocolate, and nut flavors",
        "Crunchy outside, soft inside",
        "Convenient to carry and enjoy any time",
      ],
    },
    ingredients: {
      id: "Madu, cokelat, kacang Sacha Inchi (Plukenetia volubilis).",
      en: "Honey, chocolate, Sacha Inchi nuts (Plukenetia volubilis).",
    },
    howto: {
      id: "Hisap IchiBite hingga lapisan hard candy perlahan larut, lalu nikmati kejutan isian cokelat dan kacang Sacha Inchi di bagian tengah. Simpan di tempat sejuk dan kering, hindari sinar matahari langsung.",
      en: "Suck IchiBite until the hard candy shell slowly dissolves, then enjoy the surprise chocolate and Sacha Inchi filling at the center. Store in a cool, dry place, away from direct sunlight.",
    },
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
