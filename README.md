# Arofah Taste — Landing Page

Landing page untuk **Arofah Taste**, UMKM kue kering & salt bread. Dibangun sebagai project komersial (Tide Flow), fokus ke kecepatan order tanpa perlu chat manual — customer pilih menu, atur jumlah, dan checkout langsung ke WhatsApp dengan rincian order otomatis.

🔗 **Live:** [arofah-taste.netlify.app](https://arofah-taste.netlify.app/)

## Fitur

- **Menu interaktif** — stepper qty per produk (+/-), carousel (Swiper) untuk menu utama, grup terpisah untuk Salt Bread Season
- **Floating cart** — muncul otomatis begitu ada item ditambahkan, nampilin jumlah item & total harga real-time
- **Checkout via WhatsApp** — generate pesan order otomatis (nama customer + rincian item + total), lengkap dengan validasi nama wajib diisi
- **Mobile responsive** — hamburger menu, layout adaptif tiap section
- **Scroll animation** — AOS (Animate On Scroll) di beberapa section

## Tech Stack

- HTML5, CSS3 (custom properties/variables, Flexbox, Grid)
- Vanilla JavaScript (DOM manipulation, event handling, state management sederhana pake object)
- [Swiper](https://swiperjs.com/) — carousel menu
- [AOS](https://michalsnik.github.io/aos/) — scroll animation
- [Remix Icon](https://remixicon.com/) — icon set

## Struktur Project

```
├── index.html
├── style.css
├── app.js
└── assets/
    ├── logo.png
    ├── hero-img-1.png, hero-img-2.png
    ├── nastar.png, putri-salju.png, kastangel.png, ...
    ├── salt-bread-left.png, salt-bread-right.png
    └── about-img.png
```

## Cara Kerja Cart System

State disimpan di object `cart` (key = nama produk). Tiap perubahan qty (+/-) memicu `updateFloatingCart()`, yang:
1. Hitung ulang total item & total harga
2. Update tampilan floating cart bar
3. Render ulang order summary di section checkout
4. Generate ulang link WhatsApp dengan pesan terbaru

Checkout diblokir (border merah + pesan error) kalau nama customer belum diisi.

## Status

✅ Selesai — struktur, styling, cart/checkout logic, mobile responsive, dan animasi sudah live di production.

## Kredit

- **Bisnis:** Arofah Taste — kue kering & salt bread
- **Developer:** Lyant ([Tide Flow](https://github.com/Lyant-Dev)) — [@Lyant-Dev](https://github.com/Lyant-Dev)
