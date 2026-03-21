import { storeInfo } from '../app/data'

const branches = storeInfo.branches || []

export default function Branches() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            🏪 Dua Lokasi, Satu Kepercayaan
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-stone-900 mb-3">Cabang Kami</h2>
          <div className="section-divider mx-auto mb-4"></div>
          <p className="text-stone-500 max-w-lg mx-auto text-sm">
            Hadir di dua kota untuk melayani Anda lebih dekat — Klaten dan Yogyakarta.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {branches.map((branch, i) => {
            const serviceArea = branch.serviceArea || []
            return (
              <div key={branch.id}
                className={`rounded-3xl p-7 border transition-all ${
                  i === 0
                    ? 'bg-gradient-to-br from-amber-800 to-amber-900 text-white border-amber-700 shadow-xl shadow-amber-900/20'
                    : 'bg-stone-50 border-stone-200 hover:border-amber-200 hover:shadow-lg'
                }`}
              >
                <div className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full mb-4 ${
                  i === 0 ? 'bg-white/20 text-white' : 'bg-amber-100 text-amber-800'
                }`}>
                  {i === 0 ? '⭐ Cabang Utama' : '📍 Cabang'}
                </div>
                <h3 className={`font-display text-2xl font-bold mb-1 ${i === 0 ? 'text-white' : 'text-stone-900'}`}>
                  {branch.label}
                </h3>
                <p className={`text-sm mb-4 ${i === 0 ? 'text-amber-200' : 'text-stone-500'}`}>
                  {branch.address}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {serviceArea.slice(0, 4).map(area => (
                    <span key={area} className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${
                      i === 0 ? 'bg-white/15 text-white border border-white/20' : 'bg-white border border-stone-200 text-stone-600'
                    }`}>
                      {area}
                    </span>
                  ))}
                  {serviceArea.length > 4 && (
                    <span className={`text-xs px-2.5 py-0.5 rounded-full ${i === 0 ? 'text-amber-200' : 'text-stone-400'}`}>
                      +{serviceArea.length - 4} lainnya
                    </span>
                  )}
                </div>
                <div className="flex gap-3">
                  <a href={branch.googleMapsUrl} target="_blank" rel="noopener noreferrer"
                    className={`flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-xl transition-all ${
                      i === 0
                        ? 'bg-white/15 hover:bg-white/25 text-white border border-white/20'
                        : 'bg-white border border-stone-200 text-stone-700 hover:border-amber-300'
                    }`}>
                    🗺️ Lihat Peta
                  </a>
                  {i === 1 && (
                    <a href="/jogja" className="flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-xl bg-amber-700 hover:bg-amber-800 text-white transition-all">
                      Halaman Jogja →
                    </a>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
