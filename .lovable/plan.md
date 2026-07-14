## Konteks

Semua file gambar & video dari repo GitHub (`inclowdapp/were-corporate-landing`) sebenarnya sudah tersinkron ke `src/assets/`:

- `meguaz.png`, `asmaraloka.png`, `coco-crispy-pumkin-*.png` (3 varian), `nutralatte-rempah.png`, `vitaluxe-madu-rempah.png`, `nutrabite-hard-candy-rempah.png`, `nutrabite-milk-candy-spirulina.png`, `product-acnelotion.jpg`
- `video-company.mp4` (17 MB) — sudah ada, tapi belum dipakai oleh komponen video

Masalah saat ini: **build gagal** dan gambar/video tidak muncul karena tiga bug di kode, bukan karena file gambarnya kurang.

## Bug yang perlu diperbaiki

### 1. `src/data/products.ts` — parse error (build fail)

File punya beberapa blok "were-acne-lotion" duplikat yang ditulis **di dalam** objek produk sebelumnya (tanda `//awal tambahan produk` … `//akhir tambahan produk`), sehingga kurung kurawal tidak seimbang dan Vite gagal parse di baris 331. Hasilnya seluruh halaman produk crash.

Perbaikan: hapus semua blok duplikat itu; sisakan satu entri `were-acne-lotion` yang valid. Tutup array `PRODUCTS` dengan benar (`}]`).

### 2. `src/data/products.ts` — import Meguaz salah bentuk

Sekarang:
```ts
import meguazAsset from "@/assets/meguaz.png";
const meguaz = meguazAsset.url;
```
`meguaz.png` adalah file biner asli (bukan `.asset.json`), jadi Vite mengembalikan **string URL** langsung, bukan objek dengan `.url`. Akibatnya `meguaz` = `undefined` dan gambar Meguaz kosong.

Perbaikan: ubah menjadi `import meguaz from "@/assets/meguaz.png";` seperti produk lain, lalu hapus baris `const meguaz = meguazAsset.url;`. Sekaligus hapus pointer usang `src/assets/product-meguaz.png.asset.json` (menunjuk asset lama & tidak dipakai lagi).

### 3. `src/components/site/CompanyVideo.tsx` — URL video hanya string alias

Sekarang:
```ts
const COMPANY_VIDEO_URL = "@/assets/video-company.mp4";
```
Ini string literal biasa; alias `@/` tidak diresolusi di runtime, browser akan minta URL harfiah `@/assets/video-company.mp4` → 404, video tidak jalan.

Perbaikan: impor sebagai modul Vite supaya jadi URL asli:
```ts
import companyVideo from "@/assets/video-company.mp4";
```
lalu pakai `companyVideo` di `<source src={...}>` dan pada `key`. Poster tetap `hero-bg.jpg`.

## Yang **tidak** diubah

- Struktur komponen, styling, i18n, dan section lain tetap.
- Data produk lain (nama, deskripsi, benefit) tidak disentuh — hanya blok duplikat sampah yang dibuang.
- Tidak menambah/menghapus produk selain merapikan duplikat "Were Acne Lotion".

## Verifikasi setelah build

- `bun run build` sukses.
- Halaman `/` menampilkan gambar Meguaz + semua produk lain, section Company Video memutar `video-company.mp4` dengan poster hero.
