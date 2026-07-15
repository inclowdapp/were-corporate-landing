# Sinkronisasi Produk dengan Product_Were.docx

Semua perubahan hanya di `src/data/products.ts`. Foto produk yang sudah ada tidak diubah.

## Produk yang di-update (nama + deskripsi + manfaat + fitur + komposisi + cara pakai, ID & EN)

1. **Meguaz** — refresh teks (sudah cukup sesuai, penyesuaian minor).
2. **Asmaraloka** — refresh teks (sudah sesuai).
3. **Coco Crispy Pumpkin Seeds Original** — sesuaikan deskripsi lengkap dari doc (MOCAF, gula aren, pumpkin seeds, dipanggang tanpa pengawet).
4. **Coco Crispy Pumkin Coklat** → rename **"Coco Crispy Pumpkin Seeds Cokelat"**, isi deskripsi/komposisi/cara pakai sesuai doc.
5. **coco-crispy-pumkin-ubi-ungu** — TIDAK ada di doc. Rename dari duplikat "Coco Crispy Pumkin Coklat" menjadi **"Coco Crispy Pumpkin Seeds Ubi Ungu"** agar tidak bentrok nama; deskripsi dibiarkan mendekati varian original (tidak dihapus, foto tetap).
6. **Nutralatte** → **"Nutralatte Rempah"** sebagai Minuman Serbuk Herbal (jahe, kunyit, lada hitam, gula aren, krimer nabati). Ganti kategori tetap "Pangan Fungsional".
7. **Vitaluxe** → **"Vitaluxe Madu Rempah"** — Minuman Herbal (madu + jahe + kunyit + lada hitam), deskripsi & manfaat sesuai doc.
8. **Nutrabite Hard Candy Rempah** → nama tetap, isi deskripsi/manfaat/komposisi/cara pakai sesuai doc.
9. **nutrabite-milk (Spirulina)** → nama **"NutraBite Permen Susu Spirulina"**, deskripsi permen susu chewy + spirulina + madu, sesuai doc.

## Produk baru (belum ada di data)

10. **NutraBite Permen Susu Rempah** — permen susu chewy dengan jahe/kunyit/lada hitam/madu. Tambah entry baru `id: "nutrabite-milk-rempah"`, brand `nutraluxe`. **Foto**: gunakan foto placeholder sementara dengan me-reuse asset yang sudah ada `@/assets/nutrabite-hard-candy-rempah.png` (foto "random" sementara sampai user memberi foto asli).

## Yang tidak diubah

- Semua path `image` produk existing tetap.
- Produk **Were Acne Lotion** tidak ada di doc → dibiarkan apa adanya.
- Brand list, i18n, dan komponen lain tidak disentuh.

## Catatan teknis

- Semua field bilingual (`id` / `en`) diisi. Bahasa Inggris diterjemahkan dari teks doc.
- Nomor izin BPOM Meguaz & Asmaraloka tetap dicantumkan di `features`.
