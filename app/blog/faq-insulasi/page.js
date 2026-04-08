import Link from 'next/link'
import Image from 'next/image'
export const metadata = {
  title: 'FAQ Insulasi Atap: Jawaban Pertanyaan yang Sering Ditanyakan',
  description: 'FAQ Insulasi Atap: Jawaban Pertanyaan yang Sering Ditanyakan - panduan lengkap untuk insulasi atap di Klaten dan Yogyakarta.',
  keywords: 'faq insulasi atap, pertanyaan insulasi atap, insulasi atap bisa dipasang sendiri, aluminium foil berapa lama tahan',
  alternates: { canonical: 'https://www.insulasiatap.biz.id/blog/faq-insulasi' },
}
export default function Page() {
  return (
    <article>
      <div className="mb-8">
        <div className="flex gap-2 mb-4">
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-stone-100 text-stone-600">FAQ</span>
          <span className="text-xs text-stone-400 py-1">5 menit baca</span>
        </div>
        <h1 className="font-display text-3xl md:text-4xl font-bold text-stone-900 leading-tight mb-4">FAQ Insulasi Atap: Jawaban Pertanyaan yang Sering Ditanyakan</h1>
      </div>
      <div className="rounded-2xl overflow-hidden bg-stone-100 mb-8 aspect-video relative">
        <Image src="/images/faq-insulasi-atap.jpg" alt="faq insulasi" fill className="object-cover" sizes="(max-width: 768px) 100vw, 800px" />
      </div>
      <div className="space-y-6 text-stone-700 leading-relaxed">
        <p className="mb-6">Kumpulan jawaban dari pertanyaan yang paling sering diajukan pelanggan kami.</p>
        {[
          {q:'Apakah insulasi atap bisa dipasang tanpa bongkar atap?', a:'Ya, sepenuhnya bisa. Insulasi dipasang dari dalam - di bawah reng atau di atas plafon - tanpa membongkar atap. Proses pemasangan umumnya selesai dalam 1-3 hari untuk rumah standar.'},
          {q:'Berapa lama aluminium foil insulasi tahan?', a:'Produk berkualitas baik memiliki umur pakai 10-20 tahun. Material tidak mudah terurai, tahan korosi, dan tidak perlu perawatan khusus. Pastikan tidak terkena paparan air atau kondensasi langsung.'},
          {q:'Apakah aman untuk rumah tinggal?', a:'Sangat aman. Material insulasi aluminium foil dan foam tidak mengandung bahan berbahaya, tidak mudah terbakar dalam kondisi normal, dan tidak memancarkan gas berbahaya.'},
          {q:'Apakah bisa dipasang di atap seng dan galvalum?', a:'Ya, ini justru aplikasi paling umum dan paling efektif. Insulasi dipasang di bawah seng atau galvalum, menempel langsung di bawah reng. Hasilnya sangat signifikan karena seng adalah material paling cepat panas.'},
          {q:'Apakah bisa dipasang sendiri (DIY)?', a:'Ya. Produk kami cukup mudah dipasang sendiri dengan gunting, staple gun, dan tangga. Untuk atap tinggi atau luas besar, disarankan menggunakan tenaga profesional demi keamanan.'},
          {q:'Berapa minimum pembelian?', a:'Tidak ada minimum pembelian. Anda bisa membeli 1 roll saja sesuai kebutuhan. Kami juga melayani pembelian volume besar untuk proyek komersial dengan harga kompetitif.'},
          {q:'Apakah ada garansi produk?', a:'Ya, semua produk kami bergaransi untuk defect atau masalah kualitas. Hubungi kami via WhatsApp untuk informasi garansi.'},
          {q:'Apakah insulasi atap mengurangi suara hujan?', a:'Ya, terutama untuk Bubble Foil dan Foam Foil yang memiliki lapisan peredam suara. Sangat efektif untuk mengurangi kebisingan hujan di atap seng yang biasanya sangat keras.'},
        ].map((item, i) => (
          <div key={i} className="border border-stone-100 rounded-2xl overflow-hidden mb-3">
            <div className="bg-stone-50 p-4 border-b border-stone-100">
              <h3 className="font-semibold text-stone-900 text-base">{item.q}</h3>
            </div>
            <div className="p-4">
              <p className="text-stone-600 text-sm leading-relaxed">{item.a}</p>
            </div>
          </div>
        ))}
        <p className="mt-6">Masih ada pertanyaan? <a href="https://wa.me/6208131556592?text=Halo, saya punya pertanyaan tentang insulasi atap." target="_blank" rel="noopener noreferrer" className="text-amber-700 hover:underline font-medium">Tanya langsung via WhatsApp</a> - tim kami siap membantu.</p>
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
            <Link key="/blog/perbandingan-insulasi" href="/blog/perbandingan-insulasi" className="text-sm text-amber-700 hover:underline bg-amber-50 px-3 py-1 rounded-full border border-amber-100">Perbandingan Jenis Insulasi</Link>
            <Link key="/blog/cara-menghitung-kebutuhan" href="/blog/cara-menghitung-kebutuhan" className="text-sm text-amber-700 hover:underline bg-amber-50 px-3 py-1 rounded-full border border-amber-100">Cara Menghitung Kebutuhan</Link>
            <Link key="/blog/harga-insulasi-2026" href="/blog/harga-insulasi-2026" className="text-sm text-amber-700 hover:underline bg-amber-50 px-3 py-1 rounded-full border border-amber-100">Harga Insulasi 2026</Link>
          </div>
        </div>
      </div>
    </article>
  )
}
