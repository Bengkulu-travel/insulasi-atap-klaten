import Link from 'next/link'
export const metadata = {
  title: 'Harga Insulasi Atap Klaten & Jogja Terbaru 2026',
  description: 'Daftar harga lengkap produk insulasi atap terbaru 2026 di Klaten dan Yogyakarta beserta estimasi biaya total per luas atap.',
  keywords: 'harga insulasi atap 2026, harga woven foil klaten, harga bubble foil jogja, biaya insulasi atap',
  alternates: { canonical: 'https://www.insulasiatap.biz.id/blog/harga-insulasi-2026' },
}
export default function Page() {
  const produk = [
    {nama:'Bubble Foil Peredam Panas', uk:'1.2 × 25 m', luas:'30 m²', harga:'Rp 350.000', perm:'Rp 11.667'},
    {nama:'Woven Foil', uk:'1.2 × 50 m', luas:'60 m²', harga:'Rp 450.000', perm:'Rp 7.500'},
    {nama:'Aluminium Foam Foil', uk:'1.2 × 40–50 m', luas:'48–60 m²', harga:'Rp 520.000', perm:'Rp 8.667+'},
  ]
  const estimasi = [
    {luas:'30 m²', bubble:'1 roll = Rp 350K', woven:'1 roll = Rp 450K', foam:'1 roll = Rp 520K'},
    {luas:'60 m²', bubble:'2 roll = Rp 700K', woven:'1 roll = Rp 450K', foam:'1 roll = Rp 520K'},
    {luas:'90 m²', bubble:'3 roll = Rp 1,05Jt', woven:'2 roll = Rp 900K', foam:'2 roll = Rp 1,04Jt'},
    {luas:'120 m²', bubble:'4 roll = Rp 1,4Jt', woven:'2 roll = Rp 900K', foam:'2 roll = Rp 1,04Jt'},
  ]
  return (
    <article>
      <div className="mb-8">
        <div className="flex gap-2 mb-4">
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-50 text-amber-700">Harga</span>
          <span className="text-xs text-stone-400 py-1">4 menit baca</span>
        </div>
        <h1 className="font-display text-3xl md:text-4xl font-bold text-stone-900 leading-tight mb-4">Harga Insulasi Atap Klaten & Jogja Terbaru 2026</h1>
        <p className="text-stone-500 text-lg leading-relaxed">Daftar harga lengkap produk insulasi atap yang tersedia di toko kami, valid per April 2026.</p>
      </div>
      <div className="rounded-2xl overflow-hidden bg-stone-100 mb-8 aspect-video relative">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-stone-400 gap-1">
          <span className="text-3xl">💰</span>
          <p className="font-medium text-sm">Gambar: harga-insulasi-atap-2026.jpg</p>
          <p className="text-xs">Ukuran: 1200 × 675px | Foto produk dengan label harga</p>
        </div>
      </div>
      <div className="space-y-6 text-stone-700 leading-relaxed">
        <h2 className="font-display text-2xl font-bold text-stone-900 mt-8 mb-3">Daftar Harga Insulasi Atap 2026</h2>
        <div className="overflow-x-auto rounded-2xl border border-stone-100">
          <table className="w-full text-sm">
            <thead><tr className="bg-amber-700 text-white">
              <th className="text-left p-3 font-semibold">Produk</th>
              <th className="text-center p-3 font-semibold">Ukuran/Roll</th>
              <th className="text-center p-3 font-semibold">Luas/Roll</th>
              <th className="text-center p-3 font-semibold">Harga/Roll</th>
              <th className="text-center p-3 font-semibold">Harga/m²</th>
            </tr></thead>
            <tbody>
              {produk.map((r,i) => (
                <tr key={r.nama} className={i%2===0?'bg-white':'bg-stone-50'}>
                  <td className="p-3 font-medium text-stone-800">{r.nama}</td>
                  <td className="p-3 text-center text-stone-600">{r.uk}</td>
                  <td className="p-3 text-center text-stone-600">{r.luas}</td>
                  <td className="p-3 text-center font-bold text-amber-700">{r.harga}</td>
                  <td className="p-3 text-center text-stone-600">{r.perm}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h2 className="font-display text-2xl font-bold text-stone-900 mt-8 mb-3">Estimasi Total Biaya Berdasarkan Luas Atap</h2>
        <div className="overflow-x-auto rounded-2xl border border-stone-100">
          <table className="w-full text-sm">
            <thead><tr className="bg-stone-800 text-white">
              <th className="text-left p-3">Luas Atap</th>
              <th className="text-center p-3">Bubble Foil</th>
              <th className="text-center p-3">Woven Foil</th>
              <th className="text-center p-3">Foam Foil</th>
            </tr></thead>
            <tbody>
              {estimasi.map((r,i) => (
                <tr key={r.luas} className={i%2===0?'bg-white':'bg-stone-50'}>
                  <td className="p-3 font-medium text-stone-800">{r.luas}</td>
                  <td className="p-3 text-center text-stone-600 text-xs">{r.bubble}</td>
                  <td className="p-3 text-center text-stone-600 text-xs">{r.woven}</td>
                  <td className="p-3 text-center text-stone-600 text-xs">{r.foam}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-stone-400">*Harga per April 2026. Belum termasuk biaya pemasangan jika menggunakan jasa.</p>
        <h2 className="font-display text-2xl font-bold text-stone-900 mt-8 mb-3">Cara Pesan</h2>
        <p>Pesan langsung via WhatsApp atau kunjungi toko kami di <Link href="/#lokasi" className="text-amber-700 hover:underline font-medium">Klaten dan Yogyakarta</Link>. Bisa beli satuan, tidak ada minimum order. Tersedia pengiriman ke lokasi.</p>
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mt-8">
          <h3 className="font-display text-xl font-bold text-amber-900 mb-2">Hitung Kebutuhan & Pesan Sekarang</h3>
          <div className="flex flex-col sm:flex-row gap-3 mt-4">
            <Link href="/#kalkulator" className="inline-flex items-center justify-center bg-amber-700 hover:bg-amber-800 text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-all">Buka Kalkulator</Link>
            <a href="https://wa.me/6208131556592?text=Halo, saya ingin tanya harga insulasi atap." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-all">Chat WhatsApp</a>
          </div>
        </div>
        <div className="border-t border-stone-100 pt-6 mt-8">
          <p className="text-sm text-stone-500 mb-3 font-medium">Artikel terkait:</p>
          <div className="flex flex-wrap gap-2">
            {[['Cara Menghitung Kebutuhan','/blog/cara-menghitung-kebutuhan'],['Perbandingan Jenis Insulasi','/blog/perbandingan-insulasi'],['Distributor Klaten & Jogja','/blog/distributor-klaten']].map(([t,h])=>(
              <Link key={h} href={h} className="text-sm text-amber-700 hover:underline bg-amber-50 px-3 py-1 rounded-full border border-amber-100">{t}</Link>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}
