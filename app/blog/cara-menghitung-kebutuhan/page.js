import Link from 'next/link'
export const metadata = {
  title: 'Cara Menghitung Kebutuhan Insulasi Atap dengan Tepat',
  description: 'Cara Menghitung Kebutuhan Insulasi Atap dengan Tepat - panduan lengkap untuk insulasi atap di Klaten dan Yogyakarta.',
  keywords: 'cara menghitung kebutuhan insulasi, berapa roll insulasi atap, perhitungan insulasi atap',
  alternates: { canonical: 'https://www.insulasiatap.biz.id/blog/cara-menghitung-kebutuhan' },
}
export default function Page() {
  return (
    <article>
      <div className="mb-8">
        <div className="flex gap-2 mb-4">
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-50 text-amber-700">Harga</span>
          <span className="text-xs text-stone-400 py-1">5 menit baca</span>
        </div>
        <h1 className="font-display text-3xl md:text-4xl font-bold text-stone-900 leading-tight mb-4">Cara Menghitung Kebutuhan Insulasi Atap dengan Tepat</h1>
      </div>
      <div className="rounded-2xl overflow-hidden bg-stone-100 mb-8 aspect-video relative">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-stone-400 gap-1">
          <span className="text-3xl">📸</span>
          <p className="font-medium text-sm">Gambar: cara-hitung-insulasi.jpg</p>
          <p className="text-xs">Ukuran: 1200 x 675px | Ilustrasi pengukuran luas atap dengan meteran</p>
        </div>
      </div>
      <div className="space-y-6 text-stone-700 leading-relaxed">
        <h2 className="font-display text-2xl font-bold text-stone-900 mt-8 mb-3">Rumus Dasar Perhitungan</h2>
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 my-6 text-center">
          <p className="text-stone-600 text-sm mb-2">Rumus menghitung jumlah roll:</p>
          <p className="font-display text-xl font-bold text-amber-900">⌈ (Panjang × Lebar) ÷ Luas per Roll ⌉</p>
          <p className="text-xs text-stone-500 mt-2">⌈ ⌉ = dibulatkan ke atas (ceiling)</p>
        </div>
        <h2 className="font-display text-2xl font-bold text-stone-900 mt-8 mb-3">Luas per Roll Setiap Produk</h2>
        <div className="grid sm:grid-cols-3 gap-3 my-4">
          {[{nama:'Bubble Foil',luas:'30 m²',uk:'1.2 × 25 m'},{nama:'Woven Foil',luas:'60 m²',uk:'1.2 × 50 m'},{nama:'Foam Foil',luas:'60 m²',uk:'1.2 × 50 m'}].map(p=>(
            <div key={p.nama} className="bg-stone-50 rounded-xl p-4 border border-stone-100 text-center">
              <p className="font-semibold text-stone-800 text-sm">{p.nama}</p>
              <p className="text-2xl font-bold text-amber-700">{p.luas}</p>
              <p className="text-xs text-stone-500">{p.uk}</p>
            </div>
          ))}
        </div>
        <h2 className="font-display text-2xl font-bold text-stone-900 mt-8 mb-3">Contoh Perhitungan</h2>
        <div className="bg-stone-50 rounded-2xl p-5 border border-stone-100 space-y-2 text-sm text-stone-700">
          <p><strong>Contoh:</strong> Atap 10 × 8 meter pakai Woven Foil</p>
          <p>1. Luas = 10 × 8 = <strong>80 m²</strong></p>
          <p>2. Luas per roll Woven Foil = 60 m²</p>
          <p>3. Roll = 80 ÷ 60 = 1,33 → dibulatkan = <strong>2 roll</strong></p>
          <p>4. Biaya = 2 × Rp 450.000 = <strong>Rp 900.000</strong></p>
        </div>
        <h2 className="font-display text-2xl font-bold text-stone-900 mt-8 mb-3">Tambahkan Waste 10%</h2>
        <p>Selalu tambahkan 10% untuk cadangan potongan dan sambungan. Aktifkan toggle waste di <Link href="/#kalkulator" className="text-amber-700 hover:underline font-medium">kalkulator kami</Link> untuk perhitungan otomatis.</p>
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
            <Link key="/blog/harga-insulasi-2026" href="/blog/harga-insulasi-2026" className="text-sm text-amber-700 hover:underline bg-amber-50 px-3 py-1 rounded-full border border-amber-100">Harga Insulasi 2026</Link>
            <Link key="/blog/perbandingan-insulasi" href="/blog/perbandingan-insulasi" className="text-sm text-amber-700 hover:underline bg-amber-50 px-3 py-1 rounded-full border border-amber-100">Perbandingan Jenis Insulasi</Link>
            <Link key="/blog/faq-insulasi" href="/blog/faq-insulasi" className="text-sm text-amber-700 hover:underline bg-amber-50 px-3 py-1 rounded-full border border-amber-100">FAQ Insulasi</Link>
          </div>
        </div>
      </div>
    </article>
  )
}
