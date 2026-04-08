import Link from 'next/link'
import Image from 'next/image'
export const metadata = {
  title: 'Apakah Insulasi Atap Benar-Benar Efektif? Ini Faktanya',
  description: 'Bukti nyata efektivitas insulasi atap dalam menurunkan suhu ruangan dan menghemat listrik di Klaten dan Yogyakarta.',
  keywords: 'insulasi atap efektif, manfaat insulasi atap, apakah insulasi atap worth it',
  alternates: { canonical: 'https://www.insulasiatap.biz.id/blog/apakah-insulasi-efektif' },
}
export default function Page() {
  const stats = [{angka:'5–10°C',label:'Penurunan suhu ruangan'},{angka:'30–40%',label:'Hemat listrik AC'},{angka:'10–20 Thn',label:'Umur pakai insulasi'}]
  return (
    <article>
      <div className="mb-8">
        <div className="flex gap-2 mb-4">
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700">Edukasi</span>
          <span className="text-xs text-stone-400 py-1">5 menit baca</span>
        </div>
        <h1 className="font-display text-3xl md:text-4xl font-bold text-stone-900 leading-tight mb-4">Apakah Insulasi Atap Benar-Benar Efektif? Ini Faktanya</h1>
        <p className="text-stone-500 text-lg leading-relaxed">Banyak orang ragu sebelum membeli. Artikel ini menjawab dengan data dan fakta nyata tentang efektivitas insulasi atap.</p>
      </div>
      <div className="rounded-2xl overflow-hidden bg-stone-100 mb-8 aspect-video relative">
        <Image src="/images/insulasi-atap-efektif.jpg" alt="apakah insulasi efektif" fill className="object-cover" sizes="(max-width: 768px) 100vw, 800px" />
      </div>
      <div className="space-y-6 text-stone-700 leading-relaxed">
        <h2 className="font-display text-2xl font-bold text-stone-900 mt-8 mb-3">Bagaimana Cara Kerja Insulasi Atap?</h2>
        <p>Insulasi atap memantulkan radiasi inframerah (panas) kembali ke luar sebelum masuk ke ruangan. Lapisan aluminium bertindak seperti cermin bagi gelombang panas. Material dengan reflektivitas 95–97% berarti hanya 3–5% panas yang berhasil menembus insulasi.</p>
        <h2 className="font-display text-2xl font-bold text-stone-900 mt-8 mb-3">Penurunan Suhu yang Realistis</h2>
        <div className="grid sm:grid-cols-3 gap-4 my-6">
          {stats.map(i => (
            <div key={i.label} className="bg-amber-50 rounded-2xl p-5 border border-amber-100 text-center">
              <div className="text-3xl font-display font-bold text-amber-700 mb-1">{i.angka}</div>
              <div className="text-xs text-stone-600">{i.label}</div>
            </div>
          ))}
        </div>
        <h2 className="font-display text-2xl font-bold text-stone-900 mt-8 mb-3">Apakah Investasinya Worth It?</h2>
        <p>Dengan harga insulasi mulai Rp 350.000/roll (30 m²), dan penghematan listrik Rp 150.000–250.000/bulan dari AC yang lebih ringan, investasi biasanya balik modal dalam 6–12 bulan. Setelah itu murni penghematan selama bertahun-tahun.</p>
        <h2 className="font-display text-2xl font-bold text-stone-900 mt-8 mb-3">Cocok untuk Jenis Atap Apa?</h2>
        <ul className="list-disc list-inside space-y-2 text-stone-600 ml-2">
          <li>✅ Atap seng / spandek — sangat efektif, seng menyerap panas sangat tinggi</li>
          <li>✅ Atap galvalum — efektif dan pemasangan mudah</li>
          <li>✅ Atap genteng tanah liat — efektif kurangi panas dan suara hujan</li>
          <li>✅ Atap beton / dak — sangat efektif dikombinasi cat anti panas</li>
        </ul>
        <h2 className="font-display text-2xl font-bold text-stone-900 mt-8 mb-3">Kesimpulan</h2>
        <p>Insulasi atap adalah investasi properti dengan ROI terbaik untuk rumah di Klaten dan Yogyakarta. Efeknya terasa langsung sejak hari pertama pemasangan.</p>
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mt-8">
          <h3 className="font-display text-xl font-bold text-amber-900 mb-2">Buktikan Sendiri — Konsultasi Gratis</h3>
          <div className="flex flex-col sm:flex-row gap-3 mt-4">
            <a href="https://wa.me/6208131556592?text=Halo, saya ingin konsultasi insulasi atap." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-all">Chat WhatsApp</a>
            <Link href="/#kalkulator" className="inline-flex items-center justify-center border border-amber-700 text-amber-800 font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-amber-50 transition-all">Hitung Kebutuhan →</Link>
          </div>
        </div>
        <div className="border-t border-stone-100 pt-6 mt-8">
          <p className="text-sm text-stone-500 mb-3 font-medium">Artikel terkait:</p>
          <div className="flex flex-wrap gap-2">
            {[['Perbandingan Jenis Insulasi','/blog/perbandingan-insulasi'],['Insulasi vs AC','/blog/insulasi-vs-ac'],['Cara Mengurangi Panas','/blog/cara-mengurangi-panas-atap']].map(([t,h])=>(
              <Link key={h} href={h} className="text-sm text-amber-700 hover:underline bg-amber-50 px-3 py-1 rounded-full border border-amber-100">{t}</Link>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}
