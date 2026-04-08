import Link from 'next/link'

export const metadata = {
  title: 'Perbedaan Aluminium Foil vs Bubble Foil vs Foam Foil: Panduan Lengkap',
  description: 'Perbandingan lengkap jenis insulasi atap: Aluminium Woven Foil, Bubble Foil, dan Aluminium Foam Foil. Mana yang terbaik untuk rumah Anda?',
  keywords: 'perbedaan insulasi atap, aluminium foil vs bubble foil, foam foil atap, jenis insulasi atap terbaik',
  alternates: { canonical: 'https://www.insulasiatap.biz.id/blog/perbandingan-insulasi' },
}

const tabel = [
  { aspek: 'Harga per roll', woven: 'Rp 450.000', bubble: 'Rp 350.000', foam: 'Rp 520.000' },
  { aspek: 'Luas per roll', woven: '1.2 × 50 m = 60 m²', bubble: '1.2 × 25 m = 30 m²', foam: '1.2 × 40–50 m' },
  { aspek: 'Reflektivitas panas', woven: '95%', bubble: '89%', foam: '97%' },
  { aspek: 'Kemampuan akustik', woven: '⭐⭐⭐', bubble: '⭐⭐⭐⭐', foam: '⭐⭐⭐⭐⭐' },
  { aspek: 'Ketebalan', woven: 'Tipis, fleksibel', bubble: '4 mm', foam: 'Tebal, rigid' },
  { aspek: 'Kemudahan pasang', woven: '⭐⭐⭐⭐⭐', bubble: '⭐⭐⭐⭐⭐', foam: '⭐⭐⭐⭐' },
  { aspek: 'Tahan lembab', woven: 'Sangat baik', bubble: 'Baik', foam: 'Sangat baik' },
  { aspek: 'Cocok untuk', woven: 'Rumah, gudang, ruko', bubble: 'Rumah, atap rendah', foam: 'Pabrik, komersial' },
]

export default function Page() {
  return (
    <article>
      <div className="mb-8">
        <div className="flex gap-2 mb-4">
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700">Edukasi</span>
          <span className="text-xs text-stone-400 py-1">7 menit baca</span>
        </div>
        <h1 className="font-display text-3xl md:text-4xl font-bold text-stone-900 leading-tight mb-4">
          Perbedaan Aluminium Foil vs Bubble Foil vs Foam Foil: Mana yang Terbaik?
        </h1>
        <p className="text-stone-500 text-lg leading-relaxed">
          Bingung memilih jenis insulasi atap? Panduan lengkap ini akan membantu Anda membandingkan ketiga jenis insulasi terpopuler berdasarkan harga, performa, dan kecocokan penggunaan.
        </p>
      </div>

      <div className="rounded-2xl overflow-hidden bg-stone-100 mb-8 aspect-video relative">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-stone-400 gap-1">
          <span className="text-3xl">📊</span>
          <p className="font-medium text-sm">Gambar: perbandingan-jenis-insulasi.jpg</p>
          <p className="text-xs">Ukuran: 1200 × 675px | Foto 3 produk berdampingan</p>
        </div>
      </div>

      <div className="space-y-6 text-stone-700 leading-relaxed">

        <h2 className="font-display text-2xl font-bold text-stone-900 mt-8 mb-3">Apa Itu Insulasi Atap?</h2>
        <p>
          Insulasi atap adalah lapisan material yang dipasang di bawah atap untuk mencegah panas masuk ke dalam ruangan. Cara kerjanya adalah memantulkan radiasi inframerah (panas) dari matahari sebelum mencapai plafon dan ruangan di bawahnya. Hasilnya: ruangan lebih sejuk, AC bekerja lebih ringan, dan tagihan listrik turun drastis.
        </p>

        <h2 className="font-display text-2xl font-bold text-stone-900 mt-8 mb-3">1. Aluminium Woven Foil</h2>
        <div className="rounded-2xl overflow-hidden bg-stone-100 mb-4 h-48 relative">
          <div className="absolute inset-0 flex flex-col items-center justify-center text-stone-400 gap-1">
            <span className="text-2xl">🔷</span>
            <p className="font-medium text-sm">Gambar: woven-foil-detail.jpg</p>
            <p className="text-xs">Ukuran: 800 × 450px | Close-up tekstur woven foil</p>
          </div>
        </div>
        <p>
          Woven Foil terbuat dari anyaman serat polipropilena yang dilapisi aluminium di kedua sisi. Material ini sangat ringan, kuat, dan tidak mudah robek — cocok untuk berbagai kondisi atap. Dengan reflektivitas 95%, Woven Foil memantulkan sebagian besar radiasi panas matahari.
        </p>
        <div className="grid grid-cols-2 gap-3 my-4">
          <div className="bg-green-50 rounded-xl p-4 border border-green-100">
            <p className="font-semibold text-green-800 text-sm mb-2">✅ Kelebihan</p>
            <ul className="text-green-700 text-sm space-y-1">
              <li>• Luas per roll besar (60 m²)</li>
              <li>• Harga per m² paling ekonomis</li>
              <li>• Tahan sobek & lembab</li>
              <li>• Sangat mudah dipasang</li>
            </ul>
          </div>
          <div className="bg-red-50 rounded-xl p-4 border border-red-100">
            <p className="font-semibold text-red-800 text-sm mb-2">⚠️ Kekurangan</p>
            <ul className="text-red-700 text-sm space-y-1">
              <li>• Kurang efektif untuk akustik</li>
              <li>• Tidak sekuat foam untuk beban berat</li>
            </ul>
          </div>
        </div>
        <p><strong>Rekomendasi untuk:</strong> Rumah tinggal, ruko, gudang dengan anggaran terbatas yang mengutamakan luas coverage.</p>

        <h2 className="font-display text-2xl font-bold text-stone-900 mt-8 mb-3">2. Bubble Foil (FLAB)</h2>
        <div className="rounded-2xl overflow-hidden bg-stone-100 mb-4 h-48 relative">
          <div className="absolute inset-0 flex flex-col items-center justify-center text-stone-400 gap-1">
            <span className="text-2xl">🔵</span>
            <p className="font-medium text-sm">Gambar: bubble-foil-detail.jpg</p>
            <p className="text-xs">Ukuran: 800 × 450px | Close-up tekstur bubble foil</p>
          </div>
        </div>
        <p>
          Bubble Foil menggabungkan lapisan aluminium reflektif dengan lapisan gelembung udara (bubble) di tengah. Lapisan udara ini bukan hanya memantulkan panas, tetapi juga menyerap getaran suara — menjadikannya insulasi ganda: termal sekaligus akustik.
        </p>
        <div className="grid grid-cols-2 gap-3 my-4">
          <div className="bg-green-50 rounded-xl p-4 border border-green-100">
            <p className="font-semibold text-green-800 text-sm mb-2">✅ Kelebihan</p>
            <ul className="text-green-700 text-sm space-y-1">
              <li>• Dua fungsi: panas + suara</li>
              <li>• Harga paling terjangkau</li>
              <li>• Ringan dan fleksibel</li>
              <li>• Mudah dipasang sendiri</li>
            </ul>
          </div>
          <div className="bg-red-50 rounded-xl p-4 border border-red-100">
            <p className="font-semibold text-red-800 text-sm mb-2">⚠️ Kekurangan</p>
            <ul className="text-red-700 text-sm space-y-1">
              <li>• Luas per roll lebih kecil (30 m²)</li>
              <li>• Reflektivitas sedikit lebih rendah</li>
            </ul>
          </div>
        </div>
        <p><strong>Rekomendasi untuk:</strong> Rumah tinggal yang ingin mengurangi suara hujan sekaligus panas, atau atap dengan kemiringan rendah.</p>

        <h2 className="font-display text-2xl font-bold text-stone-900 mt-8 mb-3">3. Aluminium Foam Foil</h2>
        <p>
          Foam Foil adalah insulasi premium dengan lapisan aluminium di luar dan foam tebal di dalam. Foam memberikan ketebalan fisik yang menjadi barrier termal paling efektif di antara ketiganya — reflektivitas mencapai 97%.
        </p>
        <div className="grid grid-cols-2 gap-3 my-4">
          <div className="bg-green-50 rounded-xl p-4 border border-green-100">
            <p className="font-semibold text-green-800 text-sm mb-2">✅ Kelebihan</p>
            <ul className="text-green-700 text-sm space-y-1">
              <li>• Reflektivitas tertinggi (97%)</li>
              <li>• Insulasi akustik terbaik</li>
              <li>• Sangat tahan lembab</li>
              <li>• Cocok untuk beban berat</li>
            </ul>
          </div>
          <div className="bg-red-50 rounded-xl p-4 border border-red-100">
            <p className="font-semibold text-red-800 text-sm mb-2">⚠️ Kekurangan</p>
            <ul className="text-red-700 text-sm space-y-1">
              <li>• Harga lebih tinggi</li>
              <li>• Sedikit lebih berat</li>
            </ul>
          </div>
        </div>
        <p><strong>Rekomendasi untuk:</strong> Pabrik, gudang besar, bangunan komersial, atau rumah premium yang menginginkan performa maksimal.</p>

        <h2 className="font-display text-2xl font-bold text-stone-900 mt-8 mb-3">Tabel Perbandingan Lengkap</h2>
        <div className="overflow-x-auto rounded-2xl border border-stone-100">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-amber-700 text-white">
                <th className="text-left p-3 font-semibold">Aspek</th>
                <th className="text-center p-3 font-semibold">Woven Foil</th>
                <th className="text-center p-3 font-semibold">Bubble Foil</th>
                <th className="text-center p-3 font-semibold">Foam Foil</th>
              </tr>
            </thead>
            <tbody>
              {tabel.map((row, i) => (
                <tr key={row.aspek} className={i % 2 === 0 ? 'bg-white' : 'bg-stone-50'}>
                  <td className="p-3 text-stone-600 font-medium">{row.aspek}</td>
                  <td className="p-3 text-center text-stone-800">{row.woven}</td>
                  <td className="p-3 text-center text-stone-800">{row.bubble}</td>
                  <td className="p-3 text-center text-stone-800">{row.foam}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="font-display text-2xl font-bold text-stone-900 mt-8 mb-3">Kesimpulan: Mana yang Harus Dipilih?</h2>
        <ul className="space-y-2 text-stone-600">
          <li>🏠 <strong>Rumah tinggal dengan anggaran terbatas</strong> → Bubble Foil atau Woven Foil</li>
          <li>🌧️ <strong>Ingin kurangi suara hujan juga</strong> → Bubble Foil atau Foam Foil</li>
          <li>🏭 <strong>Gudang, pabrik, komersial</strong> → Aluminium Foam Foil</li>
          <li>💰 <strong>Coverage luas dengan harga efisien</strong> → Woven Foil</li>
        </ul>

        <p className="mt-4">
          Tidak yakin mana yang cocok? <a href="https://wa.me/6208131556592?text=Halo, saya ingin konsultasi memilih jenis insulasi yang tepat." target="_blank" rel="noopener noreferrer" className="text-amber-700 hover:underline font-medium">Konsultasikan langsung dengan kami</a> — gratis, tanpa komitmen.
        </p>

        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mt-8">
          <h3 className="font-display text-xl font-bold text-amber-900 mb-2">Lihat Produk Kami</h3>
          <p className="text-amber-800 text-sm mb-4">Semua produk tersedia di toko kami di Klaten dan Yogyakarta.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/#produk" className="inline-flex items-center justify-center gap-2 bg-amber-700 hover:bg-amber-800 text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-all">
              Lihat Semua Produk
            </Link>
            <Link href="/#kalkulator" className="inline-flex items-center justify-center gap-2 border border-amber-700 text-amber-800 font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-amber-50 transition-all">
              Hitung Kebutuhan →
            </Link>
          </div>
        </div>

        <div className="border-t border-stone-100 pt-6 mt-8">
          <p className="text-sm text-stone-500 mb-3 font-medium">Artikel terkait:</p>
          <div className="flex flex-wrap gap-2">
            {[
              ['Bubble Foil vs Foam Foil: Pilih Mana?', '/blog/bubble-vs-foam'],
              ['Harga Insulasi Atap 2026', '/blog/harga-insulasi-2026'],
              ['Apakah Insulasi Atap Efektif?', '/blog/apakah-insulasi-efektif'],
            ].map(([title, href]) => (
              <Link key={href} href={href} className="text-sm text-amber-700 hover:underline bg-amber-50 px-3 py-1 rounded-full border border-amber-100">{title}</Link>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}
