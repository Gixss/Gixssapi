# Gixssapi

Portal dokumentasi dan katalog API milik Gixss. Website ini dibuat dengan React + Vite, siap dipush ke repository GitHub lalu di-deploy ke Vercel.

## Menjalankan lokal

```bash
pnpm install
pnpm --filter @workspace/gixssapi run dev
```

## Deploy ke Vercel

1. Push repository ini ke GitHub.
2. Import repository tersebut di Vercel.
3. Gunakan konfigurasi default dari `vercel.json`.
4. Klik Deploy.

Website akan memakai `window.location.origin` sebagai base URL sehingga endpoint yang ditampilkan otomatis mengikuti domain production setelah deploy.

## Isi portal

- Katalog Free Fire Profile, TikTok Downloader, YouTube Downloader, Image to URL, QR Code Generator, dan Text Utilities.
- Dokumentasi endpoint dengan contoh request/response.
- Playground untuk mengubah parameter dan menyalin URL.
- Halaman status layanan dan informasi developer Gixss.

## API katalog internal

API server bersama menyediakan:

- `GET /api/healthz`
- `GET /api/catalog`
- `GET /api/status`

Endpoint produk pada katalog sudah memiliki kontrak dan URL dokumentasi. Provider produksi untuk layanan downloader, game lookup, dan object storage dapat dihubungkan kemudian tanpa mengubah permukaan dokumentasinya.