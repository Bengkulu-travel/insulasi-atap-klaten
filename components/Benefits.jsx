import { storeInfo } from '../app/data'

export default function Benefits() {
  const reasons = [
    {
      icon: "🎯",
      title: "Produk Tepat Sasaran",
      desc: "Kami membantu Anda memilih jenis insulasi yang paling sesuai dengan kondisi atap, budget, dan kebutuhan Anda."
    },
    {
      icon: "🤝",
      title: "Konsultasi Gratis",
      desc: "Tim kami siap memberikan rekomendasi terbaik tanpa biaya tambahan, langsung via WhatsApp atau kunjungan."
    },
    {
      icon: "📦",
      title: "Stok Selalu Tersedia",
      desc: "Stok produk lengkap dan selalu siap. Tidak perlu menunggu lama — order hari ini, terima segera."
    },
    {
      icon: "🚚",
      title: "Pengiriman Area Klaten",
      desc: "Layanan antar langsung ke lokasi proyek Anda di Klaten dan kota-kota sekitarnya."
    },
    {
      icon: "💯",
      title: "Garansi Kualitas",
      desc: "Semua produk bergaransi dan sesuai standar SNI / ASTM. Kualitas terjamin, tidak asal murah."
    },
    {
      icon: "⚡",
      title: "Respon Cepat",
      desc: "Pesan via WhatsApp dan dapatkan respon dalam menit. Tidak ada pertanyaan yang dibiarkan tergantung."
    },
  ]

  return (
    <section id="keunggulan" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-800 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            ⭐ Mengapa Pilih Kami?
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-stone-900 mb-4">
            Keunggulan Kami
          </h2>
          <div className="section-divider mx-auto mb-4"></div>
          <p className="text-stone-600 max-w-xl mx-auto">
            Kami bukan sekadar penjual. Kami adalah mitra Anda dalam menciptakan 
            hunian yang nyaman dan hemat energi.
          </p>
        </div>

        {/* Grid Reasons */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {reasons.map((r) => (
            <div 
              key={r.title} 
              className="group p-6 rounded-2xl border border-stone-100 hover:border-amber-200 hover:bg-amber-50/30 transition-all duration-300"
            >
              <div className="text-3xl mb-3">{r.icon}</div>
              <h3 className="font-display text-lg font-bold text-stone-900 mb-2 group-hover:text-amber-800 transition-colors">
                {r.title}
              </h3>
              <p className="text-stone-500 text-sm leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>

        {/* Service Area Banner */}
        <div className="bg-gradient-to-r from-amber-800 to-amber-900 rounded-3xl p-8 md:p-10 text-white roof-texture">
          <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
            <div className="flex-1">
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-2">
                Area Layanan Kami
              </h3>
              <p className="text-amber-200 text-sm mb-4">
                Pengiriman & konsultasi langsung ke lokasi Anda
              </p>
              <div className="flex flex-wrap gap-2">
                {storeInfo.serviceArea.map(area => (
                  <span key={area} className="bg-white/15 text-white text-xs font-medium px-3 py-1 rounded-full border border-white/20">
                    📍 {area}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex-shrink-0">
              <div className="bg-white/15 rounded-2xl p-6 text-center backdrop-blur">
                <div className="text-3xl mb-1">🕐</div>
                <div className="text-sm font-semibold">Jam Operasional</div>
                <div className="text-amber-200 text-xs mt-1">{storeInfo.openHours}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
