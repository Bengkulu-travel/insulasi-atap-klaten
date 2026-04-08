import Link from 'next/link'
import Image from 'next/image'
export const metadata = {
  title: 'Distributor Insulasi Atap Klaten & Yogyakarta Terpercaya',
  description: 'Distributor Insulasi Atap Klaten & Yogyakarta Terpercaya - panduan lengkap untuk insulasi atap di Klaten dan Yogyakarta.',
  keywords: 'distributor insulasi atap klaten, toko insulasi jogja, jual insulasi atap klaten, insulasi atap yogyakarta',
  alternates: { canonical: 'https://www.insulasiatap.biz.id/blog/distributor-klaten' },
}
export default function Page() {
  return (
    <article>
      <div className="mb-8">
        <div className="flex gap-2 mb-4">
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-orange-50 text-orange-700">Lokal</span>
          <span className="text-xs text-stone-400 py-1">5 menit baca</span>
        </div>
        <h1 className="font-display text-3xl md:text-4xl font-bold text-stone-900 leading-tight mb-4">Distributor Insulasi Atap Klaten & Yogyakarta Terpercaya</h1>
      </div>
      <div className="rounded-2xl overflow-hidden bg-stone-100 mb-8 aspect-video relative">
        <Image src="/images/toko-insulasi-klaten.jpg" alt="distributor klaten" fill className="object-cover" sizes="(max-width: 768px) 100vw, 800px" />
      </div>
      <div className="space-y-6 text-stone-700 leading-relaxed">
        <h2 className="font-display text-2xl font-bold text-stone-900 mt-8 mb-3">Toko Insulasi Atap Klaten & Yogyakarta</h2>
        <p>Kami adalah distributor insulasi atap yang melayani Klaten, Yogyakarta, dan seluruh Jawa Tengah bagian selatan. Dengan pengalaman lebih dari 5 tahun dan ratusan proyek selesai, kami menyediakan produk berkualitas dengan harga kompetitif.</p>
        <div className="grid sm:grid-cols-2 gap-4 my-6">
          <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100">
            <h3 className="font-bold text-amber-900 mb-3">📍 Cabang Klaten</h3>
            <p className="text-sm text-stone-600 mb-1">Klaten, Jawa Tengah</p>
            <p className="text-sm text-stone-600 mb-3">Senin-Sabtu, 08.00-17.00 WIB</p>
            <a href="https://share.google/cF2IbK8F2WXHAI9ho" target="_blank" rel="noopener noreferrer" className="text-amber-700 text-sm font-semibold hover:underline">Lihat di Google Maps →</a>
          </div>
          <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
            <h3 className="font-bold text-blue-900 mb-3">📍 Cabang Yogyakarta</h3>
            <p className="text-sm text-stone-600 mb-1">JL Stadion Maguwoharjo Km.1, Wedomartani, Sleman</p>
            <p className="text-sm text-stone-600 mb-3">Senin-Sabtu, 08.00-17.00 WIB</p>
            <a href="https://share.google/t4GACCe0lr9rEBa3X" target="_blank" rel="noopener noreferrer" className="text-blue-700 text-sm font-semibold hover:underline">Lihat di Google Maps →</a>
          </div>
        </div>
        <h2 className="font-display text-2xl font-bold text-stone-900 mt-8 mb-3">Keunggulan Berbelanja di Sini</h2>
        <ul className="list-disc list-inside space-y-2 text-stone-600 ml-2">
          <li>✅ Stok selalu tersedia, tidak perlu indent</li>
          <li>✅ Bisa beli satuan, tidak ada minimum order</li>
          <li>✅ Konsultasi gratis pemilihan produk</li>
          <li>✅ Pengiriman langsung ke lokasi proyek</li>
          <li>✅ Harga transparan, tidak ada biaya tersembunyi</li>
        </ul>
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
            <Link key="/blog/cara-menghitung-kebutuhan" href="/blog/cara-menghitung-kebutuhan" className="text-sm text-amber-700 hover:underline bg-amber-50 px-3 py-1 rounded-full border border-amber-100">Cara Menghitung Kebutuhan</Link>
            <Link key="/blog/faq-insulasi" href="/blog/faq-insulasi" className="text-sm text-amber-700 hover:underline bg-amber-50 px-3 py-1 rounded-full border border-amber-100">FAQ Insulasi</Link>
          </div>
        </div>
      </div>
    </article>
  )
}
