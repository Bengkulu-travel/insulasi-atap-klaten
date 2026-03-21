import { storeInfo } from '../app/data'

export default function HeroJogja() {
  const branch = (storeInfo.branches || []).find(b => b.id === 'jogja') || {}
  const serviceArea = branch.serviceArea || []
  const benefits = storeInfo.benefits || []
  const waUrl = `https://wa.me/${storeInfo.whatsappNumber}?text=${encodeURIComponent('Halo, saya dari Yogyakarta dan ingin konsultasi mengenai insulasi atap.')}`

  return (
    <section className="relative min-h-screen flex items-center hero-pattern overflow-hidden pt-20">
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <defs>
            <pattern id="roof-pattern-jog" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <polygon points="20,0 40,20 20,40 0,20" fill="none" stroke="#B45309" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="400" height="400" fill="url(#roof-pattern-jog)"/>
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center w-full">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 bg-amber-100 border border-amber-200 text-amber-800 text-sm font-medium px-4 py-1.5 rounded-full animate-fade-in">
            <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></span>
            Melayani Area Yogyakarta & Sekitarnya
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 leading-tight animate-fade-up">
            Insulasi Atap{' '}
            <span className="text-amber-700">Terbaik di Yogyakarta</span>
          </h1>
          <p className="text-stone-600 text-lg leading-relaxed animate-fade-up delay-100">
            Atap panas bukan alasan ruangan tidak nyaman. Kami hadir di Yogyakarta dengan 
            produk insulasi berkualitas — kurangi panas, hemat listrik, dan buat hunian Anda 
            lebih nyaman setiap hari.
          </p>
          <div className="flex flex-wrap gap-2 animate-fade-up delay-200">
            {serviceArea.slice(0, 5).map(area => (
              <span key={area} className="text-sm bg-stone-100 text-stone-700 px-3 py-1 rounded-full font-medium">
                📍 {area}
              </span>
            ))}
            {serviceArea.length > 5 && (
              <span className="text-sm bg-stone-100 text-stone-500 px-3 py-1 rounded-full">& lainnya</span>
            )}
          </div>
          <div className="flex flex-col sm:flex-row gap-3 pt-2 animate-fade-up delay-300">
            <a href={waUrl} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-4 rounded-2xl transition-all hover:shadow-xl hover:shadow-green-500/30 text-base">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat WhatsApp Sekarang
            </a>
            <a href="#produk"
              className="flex items-center justify-center gap-2 bg-white border-2 border-amber-700 text-amber-800 font-bold px-6 py-4 rounded-2xl hover:bg-amber-50 transition-all text-base">
              Lihat Produk
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
          <div className="flex gap-8 pt-4 border-t border-stone-200 animate-fade-up delay-400">
            {[{ num: '500+', label: 'Proyek Selesai' }, { num: '2 Lokasi', label: 'Klaten & Jogja' }, { num: '4.9★', label: 'Rating Pelanggan' }].map(stat => (
              <div key={stat.label}>
                <div className="text-2xl font-display font-bold text-amber-700">{stat.num}</div>
                <div className="text-xs text-stone-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative animate-fade-up delay-200">
          <div className="bg-gradient-to-br from-amber-800 to-amber-900 rounded-3xl p-8 text-white shadow-2xl shadow-amber-900/30 roof-texture">
            <div className="text-6xl mb-4">🏠</div>
            <h3 className="font-display text-2xl font-bold mb-1">Cabang Yogyakarta</h3>
            <p className="text-amber-200 text-sm mb-6">Insulasi Atap Klaten & Yogyakarta</p>
            <div className="grid grid-cols-2 gap-3">
              {benefits.map(b => (
                <div key={b.title} className="bg-white/10 backdrop-blur rounded-xl p-3">
                  <div className="text-2xl mb-1">{b.icon}</div>
                  <div className="text-sm font-semibold">{b.title}</div>
                  <div className="text-xs text-amber-200">{b.desc}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-amber-700 flex items-center gap-3">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </div>
              <div>
                <div className="text-xs text-amber-200">Hubungi langsung</div>
                <div className="font-bold">{storeInfo.phone}</div>
              </div>
            </div>
          </div>
          <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-3 border border-amber-100">
            <div className="text-center">
              <div className="text-2xl">⚡</div>
              <div className="text-xs font-bold text-stone-800">Respon</div>
              <div className="text-xs text-amber-600 font-semibold">Cepat!</div>
            </div>
          </div>
          <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl px-4 py-2 border border-amber-100">
            <div className="text-xs text-stone-500 font-medium mb-1">Juga tersedia di</div>
            <a href="/" className="text-amber-700 text-xs font-bold hover:underline flex items-center gap-1">
              📍 Cabang Klaten →
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-50">
        <span className="text-xs text-stone-500 font-medium">Scroll</span>
        <div className="w-5 h-8 border-2 border-stone-400 rounded-full flex justify-center pt-1">
          <div className="w-1 h-2 bg-stone-400 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  )
}
