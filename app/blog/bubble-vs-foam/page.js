import Link from 'next/link'
import Image from 'next/image'
export const metadata = {
  title: 'Bubble Foil vs Foam Foil: Pilih yang Mana untuk Atap Anda?',
  description: 'Bubble Foil vs Foam Foil: Pilih yang Mana untuk Atap Anda? - panduan lengkap untuk insulasi atap di Klaten dan Yogyakarta.',
  keywords: 'bubble foil vs foam foil, perbedaan bubble foil foam foil, pilih insulasi atap terbaik',
  alternates: { canonical: 'https://www.insulasiatap.biz.id/blog/bubble-vs-foam' },
}
export default function Page() {
  return (
    <article>
      <div className="mb-8">
        <div className="flex gap-2 mb-4">
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-purple-50 text-purple-700">Perbandingan</span>
          <span className="text-xs text-stone-400 py-1">5 menit baca</span>
        </div>
        <h1 className="font-display text-3xl md:text-4xl font-bold text-stone-900 leading-tight mb-4">Bubble Foil vs Foam Foil: Pilih yang Mana untuk Atap Anda?</h1>
      </div>
      <div className="rounded-2xl overflow-hidden bg-stone-100 mb-8 aspect-video relative">
        <Image src="/images/bubble-foil-vs-foam-foil.jpg" alt="bubble vs foam" fill className="object-cover" sizes="(max-width: 768px) 100vw, 800px" />
      </div>
      <div className="space-y-6 text-stone-700 leading-relaxed">
        <h2 className="font-display text-2xl font-bold text-stone-900 mt-8 mb-3">Perbedaan Mendasar</h2>
        <div className="grid sm:grid-cols-2 gap-4 my-6">
          <div className="bg-stone-50 rounded-2xl p-5 border border-stone-100">
            <h3 className="font-bold text-stone-900 mb-3">🔵 Bubble Foil</h3>
            <p className="text-xs text-stone-500 mb-3">Metalizing PET Foil + Bubble (FLAB)</p>
            <ul className="text-sm text-stone-600 space-y-1">
              <li>• Reflektivitas: 89%</li>
              <li>• Ketebalan: 4 mm</li>
              <li>• Luas/roll: 30 m² (1.2 × 25 m)</li>
              <li>• Harga: Rp 350.000/roll</li>
              <li>• Ringan, fleksibel</li>
              <li>• Baik untuk redam suara hujan</li>
            </ul>
          </div>
          <div className="bg-stone-50 rounded-2xl p-5 border border-stone-100">
            <h3 className="font-bold text-stone-900 mb-3">🟤 Foam Foil</h3>
            <p className="text-xs text-stone-500 mb-3">Aluminium + Foam Polietilena</p>
            <ul className="text-sm text-stone-600 space-y-1">
              <li>• Reflektivitas: 97%</li>
              <li>• Ketebalan: lebih tebal</li>
              <li>• Luas/roll: 60 m² (1.2 × 50 m)</li>
              <li>• Harga: Rp 520.000/roll</li>
              <li>• Lebih rigid, kuat</li>
              <li>• Insulasi akustik lebih baik</li>
            </ul>
          </div>
        </div>
        <h2 className="font-display text-2xl font-bold text-stone-900 mt-8 mb-3">Kapan Pilih Bubble Foil?</h2>
        <ul className="list-disc list-inside space-y-1 text-stone-600 ml-2">
          <li>Anggaran lebih terbatas</li>
          <li>Atap dengan ruang sempit atau kemiringan rendah</li>
          <li>Ingin kurangi suara hujan di atap seng</li>
          <li>Proyek rumah tinggal skala kecil-menengah</li>
        </ul>
        <h2 className="font-display text-2xl font-bold text-stone-900 mt-8 mb-4">Kapan Pilih Foam Foil?</h2>
        <ul className="list-disc list-inside space-y-1 text-stone-600 ml-2">
          <li>Menginginkan performa termal tertinggi (97%)</li>
          <li>Bangunan komersial, gudang, atau pabrik</li>
          <li>Luas atap besar (lebih ekonomis per m²)</li>
          <li>Membutuhkan insulasi akustik yang lebih kuat</li>
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
            <Link key="/blog/perbandingan-insulasi" href="/blog/perbandingan-insulasi" className="text-sm text-amber-700 hover:underline bg-amber-50 px-3 py-1 rounded-full border border-amber-100">Perbandingan Semua Jenis</Link>
            <Link key="/blog/harga-insulasi-2026" href="/blog/harga-insulasi-2026" className="text-sm text-amber-700 hover:underline bg-amber-50 px-3 py-1 rounded-full border border-amber-100">Harga Insulasi 2026</Link>
            <Link key="/blog/apakah-insulasi-efektif" href="/blog/apakah-insulasi-efektif" className="text-sm text-amber-700 hover:underline bg-amber-50 px-3 py-1 rounded-full border border-amber-100">Apakah Insulasi Efektif?</Link>
          </div>
        </div>
      </div>
    </article>
  )
}
