import Link from 'next/link'

export const metadata = {
  title: 'Cara Mengurangi Panas Atap Tanpa AC | Tips Hemat Energi',
  description: 'Cara efektif mengurangi panas atap rumah tanpa bergantung pada AC. Solusi hemat biaya untuk rumah lebih sejuk di Klaten dan Yogyakarta.',
  keywords: 'cara mengurangi panas atap, rumah sejuk tanpa ac, insulasi atap jogja, tips hemat energi rumah',
  alternates: { canonical: 'https://www.insulasiatap.biz.id/blog/cara-mengurangi-panas-atap' },
}

export default function Page() {
  return (
    <article>
      <div className="mb-8">
        <div className="flex gap-2 mb-4">
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700">Edukasi</span>
          <span className="text-xs text-stone-400 py-1">6 menit baca</span>
        </div>
        <h1 className="font-display text-3xl md:text-4xl font-bold text-stone-900 leading-tight mb-4">
          Cara Mengurangi Panas Atap Tanpa AC: 7 Solusi Efektif
        </h1>
        <p className="text-stone-500 text-lg leading-relaxed">
          AC bukan satu-satunya jawaban. Ada cara lebih hemat dan permanen untuk membuat rumah Anda sejuk sepanjang tahun — bahkan saat listrik mati sekalipun.
        </p>
      </div>

      <div className="rounded-2xl overflow-hidden bg-stone-100 mb-8 aspect-video relative">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-stone-400 gap-1">
          <span className="text-3xl">🏠</span>
          <p className="font-medium text-sm">Gambar: cara-mengurangi-panas-atap.jpg</p>
          <p className="text-xs">Ukuran: 1200 × 675px | Ilustrasi rumah sejuk dengan insulasi</p>
        </div>
      </div>

      <div className="space-y-6 text-stone-700 leading-relaxed">

        <p>
          Menurut data Kementerian ESDM, rata-rata 60% konsumsi listrik rumah tangga di Indonesia digunakan untuk pendinginan udara. Ini bukan masalah kenyamanan semata — ini masalah finansial. Kabar baiknya, ada berbagai cara mengurangi panas yang jauh lebih hemat dari sekadar menambah AC.
        </p>

        <h2 className="font-display text-2xl font-bold text-stone-900 mt-8 mb-3">1. Pasang Insulasi Atap (Paling Efektif)</h2>
        <p>
          Ini adalah solusi paling fundamental dan paling efektif. Insulasi atap bekerja dengan memantulkan radiasi panas matahari sebelum masuk ke ruangan. Berbeda dengan solusi lain yang bersifat reaktif, insulasi atap bersifat <strong>preventif</strong> — menghentikan panas di sumbernya.
        </p>
        <p>
          Ada beberapa jenis insulasi yang bisa dipilih sesuai kebutuhan dan anggaran. Pelajari <Link href="/blog/perbandingan-insulasi" className="text-amber-700 hover:underline font-medium">perbedaan jenis insulasi atap</Link> untuk memilih yang paling tepat.
        </p>

        <div className="bg-stone-50 rounded-2xl p-5 border border-stone-100">
          <p className="font-semibold text-stone-800 mb-3">Perbandingan penurunan suhu dengan insulasi:</p>
          <div className="space-y-2">
            {[
              { label: 'Tanpa insulasi', suhu: '35–42°C', bar: 100, color: 'bg-red-400' },
              { label: 'Dengan Bubble Foil', suhu: '28–32°C', bar: 65, color: 'bg-amber-400' },
              { label: 'Dengan Woven Foil', suhu: '27–31°C', bar: 60, color: 'bg-yellow-400' },
              { label: 'Dengan Foam Foil', suhu: '26–30°C', bar: 55, color: 'bg-green-400' },
            ].map(item => (
              <div key={item.label} className="flex items-center gap-3 text-sm">
                <span className="w-36 flex-shrink-0 text-stone-600">{item.label}</span>
                <div className="flex-1 bg-stone-200 rounded-full h-3">
                  <div className={`${item.color} h-3 rounded-full`} style={{ width: `${item.bar}%` }}></div>
                </div>
                <span className="w-24 text-right font-semibold text-stone-700">{item.suhu}</span>
              </div>
            ))}
          </div>
        </div>

        <h2 className="font-display text-2xl font-bold text-stone-900 mt-8 mb-3">2. Cat Atap Warna Terang atau Cat Anti Panas</h2>
        <p>
          Warna gelap menyerap panas, warna terang memantulkannya. Mengganti cat atap menjadi putih atau silver bisa menurunkan suhu permukaan atap hingga 10–15°C. Namun efektivitasnya jauh di bawah insulasi — cat hanya mengurangi penyerapan, bukan memantulkan radiasi panas secara aktif. Baca perbandingan lengkapnya di <Link href="/blog/insulasi-vs-ac" className="text-amber-700 hover:underline font-medium">insulasi atap vs solusi lainnya</Link>.
        </p>

        <h2 className="font-display text-2xl font-bold text-stone-900 mt-8 mb-3">3. Tanam Pohon atau Pergola di Sekitar Rumah</h2>
        <p>
          Peneduh alami dari pohon bisa menurunkan suhu sekitar rumah secara signifikan. Pohon yang rindang di sisi barat rumah sangat efektif karena memblokir sinar matahari sore yang paling terik. Kombinasi pohon peneduh dan insulasi atap memberikan hasil terbaik.
        </p>

        <h2 className="font-display text-2xl font-bold text-stone-900 mt-8 mb-3">4. Optimasi Ventilasi Atap</h2>
        <p>
          Udara panas perlu jalan keluar. Menambahkan ventilasi di bubungan atap atau menggunakan roof ventilator memungkinkan udara panas di ruang atap mengalir keluar secara alami. Ini sangat efektif dikombinasikan dengan insulasi untuk hasil optimal.
        </p>

        <h2 className="font-display text-2xl font-bold text-stone-900 mt-8 mb-3">5. Plafon Tambahan dengan Rongga Udara</h2>
        <p>
          Menambahkan lapisan plafon dengan rongga udara di antara atap dan plafon utama menciptakan ruang penyangga yang memperlambat transfer panas. Namun solusi ini membutuhkan renovasi dan biaya lebih tinggi dibanding insulasi yang bisa dipasang langsung di bawah atap.
        </p>

        <h2 className="font-display text-2xl font-bold text-stone-900 mt-8 mb-3">6. Tirai dan Korden Tebal di Sisi Barat</h2>
        <p>
          Sinar matahari sore dari arah barat adalah yang paling intens. Menggunakan tirai blackout atau korden tebal di jendela sisi barat bisa mengurangi heat gain dari jendela secara signifikan. Ini solusi paling terjangkau meski tidak mengatasi masalah dari atap.
        </p>

        <h2 className="font-display text-2xl font-bold text-stone-900 mt-8 mb-3">7. Gunakan AC dengan Bijak (Sebagai Pelengkap)</h2>
        <p>
          Jika tetap menggunakan AC, kombinasikan dengan insulasi atap. Dengan insulasi yang baik, AC tidak perlu bekerja keras untuk mencapai suhu yang diinginkan. Penghematan listrik bisa mencapai 30–40% dibanding rumah tanpa insulasi.
        </p>

        <h2 className="font-display text-2xl font-bold text-stone-900 mt-8 mb-3">Mana yang Harus Dipilih Pertama?</h2>
        <p>
          Urutan prioritas berdasarkan efektivitas dan nilai investasi jangka panjang:
        </p>
        <ol className="list-decimal list-inside space-y-2 text-stone-600 ml-2">
          <li><strong>Insulasi atap</strong> — solusi paling fundamental, investasi sekali pakai, bertahan 10–20 tahun</li>
          <li>Optimasi ventilasi atap — pelengkap insulasi yang sangat efektif</li>
          <li>Peneduh alami (pohon) — baik untuk jangka panjang</li>
          <li>Cat atap warna terang — mudah dilakukan sendiri</li>
          <li>Korden tebal — solusi cepat untuk jendela barat</li>
        </ol>

        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mt-8">
          <h3 className="font-display text-xl font-bold text-amber-900 mb-2">Hitung Kebutuhan Insulasi Anda</h3>
          <p className="text-amber-800 text-sm mb-4">
            Gunakan kalkulator kami untuk mengetahui berapa roll insulasi yang Anda butuhkan dan estimasi biayanya.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/#kalkulator"
              className="inline-flex items-center justify-center gap-2 bg-amber-700 hover:bg-amber-800 text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-all">
              Buka Kalkulator
            </Link>
            <a href="https://wa.me/6208131556592?text=Halo, saya ingin tanya cara mengurangi panas atap rumah saya."
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-all">
              Konsultasi Gratis
            </a>
          </div>
        </div>

        <div className="border-t border-stone-100 pt-6 mt-8">
          <p className="text-sm text-stone-500 mb-3 font-medium">Artikel terkait:</p>
          <div className="flex flex-wrap gap-2">
            {[
              ['Kenapa Rumah di Klaten & Jogja Panas?', '/blog/kenapa-rumah-panas'],
              ['Insulasi Atap vs AC: Mana Lebih Hemat?', '/blog/insulasi-vs-ac'],
              ['Perbandingan Jenis Insulasi', '/blog/perbandingan-insulasi'],
            ].map(([title, href]) => (
              <Link key={href} href={href} className="text-sm text-amber-700 hover:underline bg-amber-50 px-3 py-1 rounded-full border border-amber-100">{title}</Link>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}
