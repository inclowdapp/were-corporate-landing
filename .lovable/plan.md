## Perubahan yang akan dilakukan

### 1. Ganti gambar produk Meguaz
- Upload `user-uploads://Meguaz.png` ke Lovable Assets CDN via `lovable-assets create` → hasilkan `src/assets/product-meguaz.png.asset.json`.
- Hapus file lama `src/assets/product-meguaz.jpg` (asset pointer JSON lama, jika ada).
- Update `src/data/products.ts`: ubah import `meguaz` untuk membaca `.asset.json` baru, dan gunakan `meguaz.url` pada field `image` produk Meguaz.
- Produk lain tidak diubah (masih pakai gambar existing).

### 2. Tambah section Video Company Profile
- Buat komponen baru `src/components/site/CompanyVideo.tsx`:
  - Section full-width dengan judul bilingual (ID/EN via `useLang`) — mis. "Company Profile" / "Profil Perusahaan".
  - Player HTML5 `<video>` responsif (aspect 16:9, rounded, shadow, poster fallback pakai `hero-bg.jpg`) dengan `controls`, `preload="metadata"`, `playsInline`.
  - Sumber video pakai URL placeholder yang mudah diganti nanti — konstanta `COMPANY_VIDEO_URL` di atas komponen, default ke sample publik (`https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4`). Komentar jelas: "Ganti URL ini dengan video company profile Anda".
  - Animasi masuk halus pakai `motion/react` (fade + slide up), konsisten dengan komponen lain.
- Sisipkan `<CompanyVideo />` di `src/routes/index.tsx` di posisi yang natural (antara section About dan Products, atau sebelum Footer — akan diletakkan setelah Hero/About agar terlihat prominent).
- Tambah string i18n bila diperlukan di `src/i18n/translations.ts` (judul & subjudul section video).

### Catatan
- Tidak mengubah logic bisnis lain, styling global, atau data produk selain Meguaz.
- Video di-embed sebagai URL eksternal (bukan file di repo) supaya ringan dan mudah diganti — user cukup ubah 1 konstanta URL nanti.
