# 🏠 Insulasi Atap Klaten — Website Next.js

Website penjualan insulasi atap untuk wilayah Klaten, Jawa Tengah.

---

## 🚀 Cara Menjalankan

### 1. Clone dari GitHub
```bash
git clone https://github.com/USERNAME/insulasi-atap-klaten.git
cd insulasi-atap-klaten
```

### 2. Install dependencies
```bash
npm install
```

### 3. Jalankan di lokal
```bash
npm run dev
```
Buka browser di `http://localhost:3000`

---

## ✏️ Cara Mengganti Konten

### Ganti Data Produk & Info Toko
Edit file: `app/data.js`

**Untuk produk:**
- Ganti `name`, `description`, `tagline` sesuai produk asli
- Update `specs` dengan spesifikasi yang benar
- Ubah `whatsappMessage` untuk pesan otomatis WA tiap produk

**Untuk galeri:**
- Edit array `galleryImages` dengan caption proyek asli Anda

**Untuk info toko:**
- Update `address`, `openHours`, `serviceArea` sesuai kenyataan

---

## 🖼️ Cara Menambahkan Foto

### Foto Produk
1. Simpan foto di folder `public/images/`
2. Nama file: `produk-1.jpg`, `produk-2.jpg`, dst.
3. Buka `components/Products.jsx`
4. Ganti bagian placeholder dengan kode ini:

```jsx
import Image from 'next/image'

// Dalam ProductCard, ganti div placeholder dengan:
<Image 
  src={product.image}
  alt={product.name}
  fill
  className="object-cover"
/>
```

### Foto Galeri
1. Simpan foto di folder `public/images/`
2. Nama file: `galeri-1.jpg`, `galeri-2.jpg`, dst.
3. Buka `components/Gallery.jsx`
4. Ganti div placeholder dengan:

```jsx
import Image from 'next/image'

// Dalam Gallery, ganti div placeholder dengan:
<Image
  src={img.src}
  alt={img.alt}
  fill
  className="object-cover group-hover:scale-105 transition-transform duration-300"
/>
```

---

## 🗺️ Update Google Maps

Di file `components/Location.jsx`, ganti URL iframe dengan Google Maps Embed Anda:

1. Buka [Google Maps](https://maps.google.com)
2. Cari lokasi toko Anda
3. Klik Share → Embed a map
4. Copy URL dari `src="..."` dalam kode iframe
5. Paste di `components/Location.jsx`

---

## 🌐 Deploy ke Vercel

```bash
# Install Vercel CLI (jika belum)
npm i -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

Atau push ke GitHub lalu connect repo di [vercel.com](https://vercel.com)

---

## 📁 Struktur Folder

```
insulasi-atap-klaten/
├── app/
│   ├── data.js          ← ✏️ Edit ini untuk ubah konten
│   ├── globals.css      ← Style global & animasi
│   ├── layout.js        ← Meta tags SEO
│   └── page.js          ← Halaman utama
├── components/
│   ├── Navbar.jsx       ← Menu navigasi
│   ├── Hero.jsx         ← Banner utama
│   ├── Products.jsx     ← Katalog produk
│   ├── Benefits.jsx     ← Keunggulan toko
│   ├── Gallery.jsx      ← Galeri foto proyek
│   ├── Location.jsx     ← Lokasi & kontak
│   ├── Footer.jsx       ← Footer
│   └── WhatsAppFloat.jsx ← Tombol WA melayang
├── public/
│   └── images/          ← ✏️ Taruh foto di sini
└── README.md
```

---

## 📞 Kontak

**WhatsApp:** 0813-1556-592  
**Lokasi:** Klaten, Jawa Tengah
