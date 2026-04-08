import Link from 'next/link'

export const metadata = {
  title: 'Artikel & Tips Insulasi Atap | Insulasi Atap Klaten & Yogyakarta',
  description: 'Kumpulan artikel edukatif tentang insulasi atap, cara mengurangi panas, perbandingan produk, dan tips hemat energi untuk rumah di Klaten dan Yogyakarta.',
  alternates: { canonical: 'https://www.insulasiatap.biz.id/blog' },
}

const articles = [
  { slug: 'kenapa-rumah-panas', title: 'Kenapa Rumah di Klaten & Jogja Terasa Panas? Ini Penyebabnya', cat: 'Edukasi', desc: 'Pahami penyebab utama rumah terasa seperti oven di siang hari dan cara mengatasinya.' },
  { slug: 'cara-mengurangi-panas-atap', title: 'Cara Mengurangi Panas Atap Tanpa AC', cat: 'Edukasi', desc: 'Solusi hemat dan efektif untuk rumah lebih sejuk tanpa bergantung pada AC.' },
  { slug: 'perbandingan-insulasi', title: 'Perbedaan Aluminium Foil vs Bubble Foil vs Foam Foil', cat: 'Edukasi', desc: 'Panduan memilih jenis insulasi yang paling sesuai untuk kebutuhan Anda.' },
  { slug: 'apakah-insulasi-efektif', title: 'Apakah Insulasi Atap Benar-Benar Efektif?', cat: 'Edukasi', desc: 'Fakta dan data nyata tentang efektivitas insulasi atap untuk rumah tinggal.' },
  { slug: 'atap-seng-panas', title: 'Atap Seng Panas? Ini Solusi Paling Efektif di Jogja & Klaten', cat: 'Solusi', desc: 'Cara mengatasi panas ekstrem dari atap seng dengan insulasi yang tepat.' },
  { slug: 'gudang-panas', title: 'Gudang Panas? Cara Mengatasi Suhu Tinggi Tanpa Boros Listrik', cat: 'Solusi', desc: 'Solusi insulasi untuk gudang, pabrik, dan bangunan komersial di Jawa Tengah & DIY.' },
  { slug: 'harga-insulasi-2026', title: 'Harga Insulasi Atap Klaten & Jogja Terbaru 2026', cat: 'Harga', desc: 'Daftar harga lengkap produk insulasi atap beserta estimasi biaya pemasangan.' },
  { slug: 'cara-menghitung-kebutuhan', title: 'Cara Menghitung Kebutuhan Aluminium Foil untuk Atap', cat: 'Harga', desc: 'Panduan praktis menghitung jumlah roll insulasi agar tidak kurang atau kelebihan.' },
  { slug: 'distributor-klaten', title: 'Distributor & Toko Insulasi Atap Klaten & Yogyakarta Terpercaya', cat: 'Lokal', desc: 'Informasi lengkap toko insulasi atap terdekat di Klaten dan Yogyakarta.' },
  { slug: 'insulasi-vs-ac', title: 'Insulasi Atap vs AC: Mana Lebih Hemat untuk Rumah Anda?', cat: 'Perbandingan', desc: 'Kalkulasi biaya dan efisiensi antara insulasi atap dan penggunaan AC.' },
  { slug: 'bubble-vs-foam', title: 'Bubble Foil vs Foam Foil: Pilih yang Mana?', cat: 'Perbandingan', desc: 'Perbandingan mendalam dua jenis insulasi terpopuler untuk membantu Anda memilih.' },
  { slug: 'faq-insulasi', title: 'FAQ Insulasi Atap: Jawaban Pertanyaan yang Sering Ditanyakan', cat: 'FAQ', desc: 'Kumpulan jawaban lengkap atas pertanyaan umum seputar insulasi atap.' },
]

const catColor = {
  'Edukasi': 'bg-blue-50 text-blue-700',
  'Solusi': 'bg-green-50 text-green-700',
  'Harga': 'bg-amber-50 text-amber-700',
  'Lokal': 'bg-orange-50 text-orange-700',
  'Perbandingan': 'bg-purple-50 text-purple-700',
  'FAQ': 'bg-stone-100 text-stone-600',
}

export default function BlogIndex() {
  return (
    <div>
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
          📚 Artikel & Tips
        </div>
        <h1 className="font-display text-4xl font-bold text-stone-900 mb-3">
          Panduan Lengkap Insulasi Atap
        </h1>
        <p className="text-stone-500 max-w-xl">
          Kumpulan artikel edukatif, tips hemat energi, dan panduan memilih insulasi atap yang tepat untuk rumah dan bangunan Anda di Klaten dan Yogyakarta.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        {articles.map(a => (
          <Link key={a.slug} href={`/blog/${a.slug}`}
            className="group p-5 border border-stone-100 rounded-2xl hover:border-amber-200 hover:shadow-md transition-all bg-white">
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${catColor[a.cat]}`}>{a.cat}</span>
            <h2 className="font-display text-lg font-bold text-stone-900 mt-3 mb-2 group-hover:text-amber-800 transition-colors leading-snug">
              {a.title}
            </h2>
            <p className="text-stone-500 text-sm leading-relaxed">{a.desc}</p>
            <div className="mt-3 text-amber-700 text-sm font-semibold">Baca selengkapnya →</div>
          </Link>
        ))}
      </div>
    </div>
  )
}
