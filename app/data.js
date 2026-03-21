// ============================================================
// DATA PRODUK
// ============================================================
export const products = [
  {
    id: 1,
    name: "Woven Foil",
    tagline: "Sejuk, tenang, nyaman setiap hari",
    description: "Atap panas bukan alasan ruangan jadi gerah. Woven Foil hadir sebagai solusi cerdas yang menolak panas sebelum masuk ke ruangan, sekaligus meredam suara hujan yang mengganggu — tanpa perlu renovasi besar.",
    image: "/images/woven_foil.webp",
    supportingImages: [
      Tambahkan foto pendukung: "/images/woven_foil_pendukung1.jpg"
    ],
    badge: "Terlaris",
    badgeColor: "bg-amber-500",
    price: "Rp 450.000 / roll",
    specs: [
      { label: "Ukuran", value: "1.2 m × 50 m / roll" },
      { label: "Refleksi Panas", value: "Hingga 95%" },
      { label: "Fungsi", value: "Peredam panas & suara" },
      { label: "Ketahanan", value: "Tahan lembab, jamur & sobek" },
      { label: "Aplikasi", value: "Rumah, ruko, gudang, pabrik" },
    ],
    highlights: ["Tolak panas hingga 95%", "Redam suara hujan", "Tahan jamur & lembab"],
    whatsappMessage: "Halo, saya tertarik dengan Woven Foil (Rp 450.000/roll). Bisa info ketersediaan stok dan cara pemesanan?"
  },
  {
    id: 2,
    name: "Bubble Foil Peredam Panas",
    tagline: "Satu produk, dua manfaat: tolak panas & redam suara",
    description: "Tidak perlu dua lapisan insulasi. Bubble Foil menggabungkan kemampuan memantulkan panas dan menyerap suara dalam satu produk yang praktis, ringan, dan mudah dipasang sendiri — cocok untuk atap rumah hingga gudang.",
    image: "/images/bubble-foil.webp",
    supportingImages: [
      // Tambahkan foto pendukung: "/images/bubble_foil_pendukung1.jpg"
    ],
    badge: "Praktis",
    badgeColor: "bg-blue-600",
    price: "Rp 350.000 / roll",
    specs: [
      { label: "Material", value: "Metalizing PET Foil 2 sisi + Bubble (FLAB)" },
      { label: "Foil Reflectivity", value: "89%" },
      { label: "Ukuran", value: "1.2 m × 25 m / roll" },
      { label: "Ketebalan", value: "4 mm" },
      { label: "Dimensi Kemasan", value: "34 × 34 × 120 cm" },
      { label: "Aplikasi", value: "Rumah, gudang, pabrik, komersial" },
    ],
    highlights: ["Foil reflektif 2 sisi", "Tebal 4mm, ringan", "Mudah dipasang sendiri"],
    whatsappMessage: "Halo, saya tertarik dengan Bubble Foil Peredam Panas (Rp 350.000/roll). Bisa info ketersediaan stok dan cara pemesanan?"
  },
  {
    id: 3,
    name: "Aluminium Foam Foil",
    tagline: "Proteksi panas & suara berlapis, performa maksimal",
    description: "Bukan sekadar insulasi biasa. Aluminium Foam Foil menggabungkan lapisan aluminium reflektif dengan foam tebal untuk perlindungan ganda — panas tertolak, suara teredam, dan ruangan Anda tetap nyaman sepanjang hari tanpa AC bekerja keras.",
    image: "/images/alumunium_foam_foil.webp",
    supportingImages: [
      // Tambahkan foto pendukung: "/images/alumunium_foam_foil_pendukung1.jpg"
    ],
    badge: "Premium",
    badgeColor: "bg-stone-700",
    price: "Mulai Rp 520.000 / roll",
    specs: [
      { label: "Ukuran", value: "1.2 m × 40–50 m / roll" },
      { label: "Tolak Panas", value: "Hingga 97%" },
      { label: "Lapisan", value: "Aluminium reflektif + Foam tebal" },
      { label: "Ketahanan", value: "Tahan lembab & kuat" },
      { label: "Fungsi Ganda", value: "Peredam panas & kebisingan" },
      { label: "Aplikasi", value: "Rumah, kantor, ruko, pabrik, gedung" },
    ],
    highlights: ["Tolak panas hingga 97%", "Foam tebal, tahan lembab", "Hemat energi AC"],
    whatsappMessage: "Halo, saya tertarik dengan Aluminium Foam Foil (mulai Rp 520.000/roll). Bisa info ukuran lengkap dan ketersediaan stok?"
  },
]

// ============================================================
// DATA GALERI PROYEK
// Upload foto ke public/images/ lalu uncomment dan isi di bawah
// ============================================================
export const galleryImages = [
  // { id: 1, src: "/images/proyek1.jpg", alt: "Pemasangan insulasi", caption: "Rumah Tinggal - Klaten Kota" },
  // { id: 2, src: "/images/proyek2.jpg", alt: "Insulasi gedung", caption: "Komersial - Prambanan" },
  // { id: 3, src: "/images/proyek3.jpg", alt: "Pemasangan woven foil", caption: "Pemasangan - Delanggu" },
  // { id: 4, src: "/images/proyek4.jpg", alt: "Hasil pemasangan", caption: "Hasil - Ceper" },
  // { id: 5, src: "/images/proyek5.jpg", alt: "Insulasi gudang", caption: "Gudang - KIK" },
  // { id: 6, src: "/images/proyek6.jpg", alt: "Pemasangan bubble foil", caption: "Bubble Foil - Pedan" },
]

// ============================================================
// INFO TOKO — storeInfo.branches[0] = Klaten, [1] = Jogja
// ============================================================
export const storeInfo = {
  name: "Insulasi Atap",
  tagline: "Solusi Nyaman & Hemat Energi untuk Rumah Anda",
  phone: "08131556592",
  whatsappNumber: "6208131556592",
  openHours: "Senin – Sabtu, 08.00 – 17.00 WIB",
  benefits: [
    { icon: "🌡️", title: "Kurangi Panas", desc: "Turunkan suhu ruangan hingga 10°C" },
    { icon: "💰", title: "Hemat Listrik", desc: "Kurangi tagihan AC & kipas angin" },
    { icon: "🔇", title: "Peredam Suara", desc: "Suasana rumah lebih tenang" },
    { icon: "🚚", title: "Antar ke Lokasi", desc: "Pengiriman area Klaten & Jogja" },
  ],
  branches: [
    {
      id: "klaten",
      city: "Klaten",
      label: "Cabang Klaten",
      address: "Klaten, Jawa Tengah",
      googleMapsUrl: "https://share.google/cF2IbK8F2WXHAI9ho",
      googleMapsEmbed: "https://maps.google.com/maps?q=Klaten,+Jawa+Tengah&output=embed&z=13",
      serviceArea: ["Klaten Kota", "Prambanan", "Delanggu", "Ceper", "Pedan", "Trucuk", "Boyolali", "Solo"],
    },
    {
      id: "jogja",
      city: "Yogyakarta",
      label: "Cabang Yogyakarta",
      address: "Yogyakarta, DIY",
      googleMapsUrl: "https://share.google/zOgLfSpzFtnPEEQZL",
      googleMapsEmbed: "https://maps.google.com/maps?q=Yogyakarta,+DIY&output=embed&z=14",
      serviceArea: ["Kota Yogyakarta", "Sleman", "Bantul", "Godean", "Mlati", "Depok", "Kalasan", "Wonosari"],
    },
  ],
}
