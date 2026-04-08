import Link from 'next/link'
import Image from 'next/image'
export const metadata = {
  title: 'Atap Seng Panas? Ini Solusi Paling Efektif di Jogja & Klaten',
  description: 'Atap Seng Panas? Ini Solusi Paling Efektif di Jogja & Klaten - panduan lengkap untuk insulasi atap di Klaten dan Yogyakarta.',
  keywords: 'atap seng panas jogja, atap seng panas klaten, solusi atap seng panas, insulasi atap seng',
  alternates: { canonical: 'https://www.insulasiatap.biz.id/blog/atap-seng-panas' },
}
export default function Page() {
  return (
    <article>
      <div className="mb-8">
        <div className="flex gap-2 mb-4">
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-green-50 text-green-700">Solusi</span>
          <span className="text-xs text-stone-400 py-1">5 menit baca</span>
        </div>
        <h1 className="font-display text-3xl md:text-4xl font-bold text-stone-900 leading-tight mb-4">Atap Seng Panas? Ini Solusi Paling Efektif di Jogja & Klaten</h1>
      </div>
      <div className="rounded-2xl overflow-hidden bg-stone-100 mb-8 aspect-video relative">
        <Image src="/images/atap-seng-panas-solusi.jpg" alt="atap seng panas" fill className="object-cover" sizes="(max-width: 768px) 100vw, 800px" />
      </div>
      <div className="space-y-6 text-stone-700 leading-relaxed">
        <h2 className="font-display text-2xl font-bold text-stone-900 mt-8 mb-3">Mengapa Atap Seng Sangat Panas?</h2>
        <p>Atap seng memiliki konduktivitas termal sangat tinggi. Suhu permukaan atap seng bisa mencapai 70-80°C di siang hari terik - hampir dua kali lipat suhu udara luar. Tanpa insulasi, panas ini langsung mengalir ke ruangan di bawahnya dalam hitungan menit.</p>
        <h2 className="font-display text-2xl font-bold text-stone-900 mt-8 mb-3">Dampak Nyata Atap Seng Tanpa Insulasi</h2>
        <ul className="list-disc list-inside space-y-2 text-stone-600 ml-2">
          <li>Suhu ruangan bisa mencapai 38-42°C di siang hari</li>
          <li>AC bekerja sangat keras, tagihan listrik membengkak</li>
          <li>Suara hujan sangat keras dan mengganggu</li>
          <li>Kondensasi menyebabkan karat dan kerusakan barang</li>
        </ul>
        <h2 className="font-display text-2xl font-bold text-stone-900 mt-8 mb-3">Solusi Terbukti: Insulasi di Bawah Atap Seng</h2>
        <p>Memasang insulasi langsung di bawah atap seng adalah solusi paling efektif dan ekonomis. Insulasi dipasang menempel di bawah reng atau gording, menciptakan barrier antara seng yang panas dan ruangan. Suhu ruangan bisa turun 8-12°C.</p>
        <div className="bg-stone-50 rounded-2xl p-5 border border-stone-100 my-6">
          <p className="font-semibold text-stone-800 mb-3">Rekomendasi produk untuk atap seng:</p>
          <ul className="space-y-2 text-sm text-stone-600">
            <li>🥇 <strong>Woven Foil</strong> - coverage luas (60 m²/roll), tahan sobek saat pemasangan, ekonomis</li>
            <li>🥈 <strong>Bubble Foil</strong> - bonus meredam suara hujan yang keras di atap seng</li>
            <li>🥉 <strong>Foam Foil</strong> - performa termal tertinggi untuk gudang/pabrik beratap seng</li>
          </ul>
        </div>
        <p>Untuk rumah 60 m², cukup 1 roll Woven Foil seharga Rp 450.000. Gunakan <Link href="/#kalkulator" className="text-amber-700 hover:underline font-medium">kalkulator kami</Link> untuk perhitungan akurat.</p>
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
            <Link key="/blog/kenapa-rumah-panas" href="/blog/kenapa-rumah-panas" className="text-sm text-amber-700 hover:underline bg-amber-50 px-3 py-1 rounded-full border border-amber-100">Kenapa Rumah Panas?</Link>
            <Link key="/blog/cara-mengurangi-panas-atap" href="/blog/cara-mengurangi-panas-atap" className="text-sm text-amber-700 hover:underline bg-amber-50 px-3 py-1 rounded-full border border-amber-100">Cara Mengurangi Panas Atap</Link>
            <Link key="/blog/harga-insulasi-2026" href="/blog/harga-insulasi-2026" className="text-sm text-amber-700 hover:underline bg-amber-50 px-3 py-1 rounded-full border border-amber-100">Harga Insulasi 2026</Link>
          </div>
        </div>
      </div>
    </article>
  )
}
