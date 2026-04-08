import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Kenapa Rumah di Klaten & Jogja Terasa Panas? Ini Penyebabnya',
  description: 'Penyebab utama rumah terasa panas di Klaten dan Yogyakarta serta solusi efektif menggunakan insulasi atap untuk menurunkan suhu ruangan.',
  keywords: 'rumah panas klaten, rumah panas jogja, penyebab rumah panas, cara mengatasi rumah panas',
  alternates: { canonical: 'https://www.insulasiatap.biz.id/blog/kenapa-rumah-panas' },
}

export default function Page() {
  return (
    <article>
      <div className="mb-8">
        <div className="flex gap-2 mb-4">
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700">Edukasi</span>
          <span className="text-xs text-stone-400 py-1">5 menit baca</span>
        </div>
        <h1 className="font-display text-3xl md:text-4xl font-bold text-stone-900 leading-tight mb-4">
          Kenapa Rumah di Klaten & Jogja Terasa Panas? Ini Penyebabnya
        </h1>
        <p className="text-stone-500 text-lg leading-relaxed">
          Banyak warga Klaten dan Yogyakarta mengeluhkan hal yang sama: ruangan terasa seperti oven di siang hari meski jendela dibuka lebar. Apa sebenarnya yang terjadi?
        </p>
      </div>

      <div className="rounded-2xl overflow-hidden bg-stone-100 mb-8 aspect-video relative">
        <Image src="/images/rumah-panas-klaten-jogja.jpg" alt="kenapa rumah panas" fill className="object-cover" sizes="(max-width: 768px) 100vw, 800px" />
      </div>

      <div className="prose-content space-y-6 text-stone-700 leading-relaxed">

        <h2 className="font-display text-2xl font-bold text-stone-900 mt-8 mb-3">Mengapa Klaten dan Jogja Lebih Panas?</h2>
        <p>
          Klaten dan Yogyakarta berada di dataran rendah dengan suhu rata-rata harian antara 28–35°C, terutama pada musim kemarau. Posisi geografis ini membuat paparan sinar matahari langsung sangat tinggi sepanjang hari. Namun bukan hanya cuaca — ada faktor lain yang justru lebih besar pengaruhnya.
        </p>

        <h2 className="font-display text-2xl font-bold text-stone-900 mt-8 mb-3">1. Atap Menyerap dan Memancarkan Panas</h2>
        <p>
          Ini adalah penyebab nomor satu. Atap bangunan — terutama yang terbuat dari seng, spandek, atau genteng tanah liat — menyerap radiasi panas matahari sepanjang hari. Material atap ini kemudian memancarkan ulang panas tersebut ke dalam ruangan melalui proses yang disebut <strong>konduksi dan radiasi termal</strong>.
        </p>
        <p>
          Atap seng atau spandek dapat mencapai suhu permukaan hingga 70–80°C di siang hari. Tanpa lapisan pelindung, panas ini langsung masuk ke ruangan di bawahnya.
        </p>

        {/* Gambar infografis */}
        <div className="rounded-xl overflow-hidden bg-amber-50 border border-amber-100 p-4 my-6">
          <div className="flex flex-col items-center text-center text-stone-400 gap-1 py-4">
            <span className="text-2xl">📊</span>
            <p className="font-medium text-sm">Gambar: infografis-panas-atap.jpg</p>
            <p className="text-xs">Ukuran: 800 × 500px | Infografis alur panas masuk melalui atap</p>
          </div>
        </div>

        <h2 className="font-display text-2xl font-bold text-stone-900 mt-8 mb-3">2. Tidak Ada Lapisan Insulasi</h2>
        <p>
          Kebanyakan rumah di Klaten dan Yogyakarta dibangun tanpa lapisan insulasi antara atap dan plafon. Akibatnya, panas dari atap langsung mengalir ke ruangan tanpa hambatan apapun. Ini berbeda dengan bangunan modern yang sudah menggunakan <Link href="/blog/perbandingan-insulasi" className="text-amber-700 hover:underline font-medium">berbagai jenis insulasi atap</Link> sebagai standar konstruksi.
        </p>

        <h2 className="font-display text-2xl font-bold text-stone-900 mt-8 mb-3">3. Ventilasi yang Tidak Memadai</h2>
        <p>
          Sirkulasi udara yang buruk memperparah kondisi. Udara panas yang terperangkap di dalam ruang antara atap dan plafon tidak bisa keluar, sehingga terus menumpuk dan meningkatkan suhu ruangan secara keseluruhan.
        </p>

        <h2 className="font-display text-2xl font-bold text-stone-900 mt-8 mb-3">4. Material Bangunan yang Menyimpan Panas</h2>
        <p>
          Bata merah dan beton, yang umum digunakan di Jawa, memiliki kapasitas penyimpanan panas yang tinggi. Material ini menyerap panas di siang hari dan melepaskannya secara perlahan di malam hari — itulah mengapa rumah tetap terasa panas bahkan setelah matahari terbenam.
        </p>

        <h2 className="font-display text-2xl font-bold text-stone-900 mt-8 mb-3">Dampak Rumah yang Terlalu Panas</h2>
        <ul className="list-disc list-inside space-y-2 text-stone-600">
          <li>Tagihan listrik membengkak karena AC bekerja lebih keras</li>
          <li>Kualitas tidur menurun, produktivitas berkurang</li>
          <li>Risiko dehidrasi dan heat stroke meningkat</li>
          <li>Material furnitur dan elektronik lebih cepat rusak</li>
          <li>Anak-anak dan lansia rentan mengalami masalah kesehatan</li>
        </ul>

        <h2 className="font-display text-2xl font-bold text-stone-900 mt-8 mb-3">Solusi yang Paling Efektif</h2>
        <p>
          Solusi paling efektif dan hemat biaya adalah memasang insulasi atap. Berbeda dengan AC yang hanya mendinginkan udara setelah panas masuk, insulasi atap <strong>mencegah panas masuk sejak awal</strong>. Produk seperti <Link href="/#produk" className="text-amber-700 hover:underline font-medium">Woven Foil dan Aluminium Foam Foil</Link> mampu memantulkan hingga 95–97% radiasi panas matahari sebelum mencapai ruangan.
        </p>
        <p>
          Hasilnya, suhu ruangan bisa turun 5–10°C tanpa AC sama sekali. Beban kerja AC juga berkurang drastis, artinya tagihan listrik lebih hemat. Baca lebih lanjut tentang <Link href="/blog/cara-mengurangi-panas-atap" className="text-amber-700 hover:underline font-medium">cara mengurangi panas atap tanpa AC</Link>.
        </p>

        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mt-8">
          <h3 className="font-display text-xl font-bold text-amber-900 mb-2">Konsultasi Gratis untuk Rumah Anda</h3>
          <p className="text-amber-800 text-sm mb-4">
            Kami melayani pemasangan insulasi atap di seluruh area Klaten dan Yogyakarta. Konsultasikan kebutuhan Anda sekarang.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="https://wa.me/6208131556592?text=Halo, saya ingin konsultasi tentang insulasi atap untuk rumah saya."
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-all">
              Chat WhatsApp Sekarang
            </a>
            <Link href="/#kalkulator"
              className="inline-flex items-center justify-center gap-2 border border-amber-700 text-amber-800 font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-amber-50 transition-all">
              Hitung Kebutuhan →
            </Link>
          </div>
        </div>

        <div className="border-t border-stone-100 pt-6 mt-8">
          <p className="text-sm text-stone-500 mb-3 font-medium">Artikel terkait:</p>
          <div className="flex flex-wrap gap-2">
            {[
              ['Cara Mengurangi Panas Atap Tanpa AC', '/blog/cara-mengurangi-panas-atap'],
              ['Apakah Insulasi Atap Efektif?', '/blog/apakah-insulasi-efektif'],
              ['Harga Insulasi Atap 2026', '/blog/harga-insulasi-2026'],
            ].map(([title, href]) => (
              <Link key={href} href={href} className="text-sm text-amber-700 hover:underline bg-amber-50 px-3 py-1 rounded-full border border-amber-100">
                {title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}
