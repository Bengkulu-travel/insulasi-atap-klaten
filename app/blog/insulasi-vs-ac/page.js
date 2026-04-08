import Link from 'next/link'
export const metadata = {
  title: 'Insulasi Atap vs AC: Mana Lebih Hemat untuk Rumah Anda?',
  description: 'Insulasi Atap vs AC: Mana Lebih Hemat untuk Rumah Anda? - panduan lengkap untuk insulasi atap di Klaten dan Yogyakarta.',
  keywords: 'insulasi atap vs ac, hemat listrik rumah, insulasi atau ac lebih hemat, biaya insulasi vs ac',
  alternates: { canonical: 'https://www.insulasiatap.biz.id/blog/insulasi-vs-ac' },
}
export default function Page() {
  return (
    <article>
      <div className="mb-8">
        <div className="flex gap-2 mb-4">
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-purple-50 text-purple-700">Perbandingan</span>
          <span className="text-xs text-stone-400 py-1">5 menit baca</span>
        </div>
        <h1 className="font-display text-3xl md:text-4xl font-bold text-stone-900 leading-tight mb-4">Insulasi Atap vs AC: Mana Lebih Hemat untuk Rumah Anda?</h1>
      </div>
      <div className="rounded-2xl overflow-hidden bg-stone-100 mb-8 aspect-video relative">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-stone-400 gap-1">
          <span className="text-3xl">📸</span>
          <p className="font-medium text-sm">Gambar: insulasi-vs-ac.jpg</p>
          <p className="text-xs">Ukuran: 1200 x 675px | Ilustrasi perbandingan insulasi atap dan unit AC</p>
        </div>
      </div>
      <div className="space-y-6 text-stone-700 leading-relaxed">
        <h2 className="font-display text-2xl font-bold text-stone-900 mt-8 mb-3">Perbandingan Biaya</h2>
        <div className="grid sm:grid-cols-2 gap-4 my-6">
          <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
            <h3 className="font-bold text-blue-900 mb-3">❄️ AC 1 PK</h3>
            <div className="space-y-1 text-sm text-stone-700">
              <p>Harga unit: <strong>Rp 3-5 juta</strong></p>
              <p>Instalasi: <strong>Rp 300-500 ribu</strong></p>
              <p>Listrik/bulan: <strong>Rp 200-400 ribu</strong></p>
              <p>Service/tahun: <strong>Rp 150-300 ribu</strong></p>
              <p className="font-bold text-blue-800 pt-2 border-t border-blue-200">Total 5 tahun: ±Rp 18-27 juta</p>
            </div>
          </div>
          <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100">
            <h3 className="font-bold text-amber-900 mb-3">🏠 Insulasi Atap (60 m²)</h3>
            <div className="space-y-1 text-sm text-stone-700">
              <p>Material: <strong>Rp 450-520 ribu</strong></p>
              <p>Pasang: <strong>Rp 0 (DIY) / Rp 300-600 ribu jasa</strong></p>
              <p>Hemat listrik: <strong>Rp 100-200 ribu/bulan</strong></p>
              <p>Perawatan: <strong>Tidak ada</strong></p>
              <p className="font-bold text-amber-800 pt-2 border-t border-amber-200">Balik modal: 3-6 bulan</p>
            </div>
          </div>
        </div>
        <h2 className="font-display text-2xl font-bold text-stone-900 mt-8 mb-3">Kesimpulan</h2>
        <p>Insulasi atap dan AC tidak harus dibandingkan - keduanya bisa dikombinasikan untuk hasil terbaik. Namun utamakan insulasi atap terlebih dahulu karena mengatasi sumber masalah. Setelah insulasi terpasang, AC yang ada bisa bekerja 30-40% lebih ringan dan hemat.</p>
        <p className="mt-4">Pelajari lebih lanjut tentang <Link href="/blog/apakah-insulasi-efektif" className="text-amber-700 hover:underline font-medium">efektivitas insulasi atap</Link> dan <Link href="/blog/cara-mengurangi-panas-atap" className="text-amber-700 hover:underline font-medium">cara mengurangi panas tanpa AC</Link>.</p>
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mt-8">
          <h3 className="font-display text-xl font-bold text-amber-900 mb-2">Siap Mulai? Konsultasi Gratis</h3>
          <div className="flex flex-col sm:flex-row gap-3 mt-4">
            <a href="https://wa.me/6208131556592?text=Halo, saya ingin konsultasi insulasi atap." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-all">Chat WhatsApp</a>
            <Link href="/#kalkulator" className="inline-flex items-center justify-center border border-amber-700 text-amber-800 font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-amber-50 transition-all">Hitung Kebutuhan</Link>
          </div>
        </div>
        <div className="border-t border-stone-100 pt-6 mt-8">
          <p className="text-sm text-stone-500 mb-3 font-medium">Artikel terkait:</p>
          <div className="flex flex-wrap gap-2">
            <Link key="/blog/apakah-insulasi-efektif" href="/blog/apakah-insulasi-efektif" className="text-sm text-amber-700 hover:underline bg-amber-50 px-3 py-1 rounded-full border border-amber-100">Apakah Insulasi Efektif?</Link>
            <Link key="/blog/cara-mengurangi-panas-atap" href="/blog/cara-mengurangi-panas-atap" className="text-sm text-amber-700 hover:underline bg-amber-50 px-3 py-1 rounded-full border border-amber-100">Cara Mengurangi Panas</Link>
            <Link key="/blog/harga-insulasi-2026" href="/blog/harga-insulasi-2026" className="text-sm text-amber-700 hover:underline bg-amber-50 px-3 py-1 rounded-full border border-amber-100">Harga Insulasi 2026</Link>
          </div>
        </div>
      </div>
    </article>
  )
}
