'use client'
import { useState } from 'react'
import { storeInfo } from '../app/data'

const produk = [
  { id: 'bubble', nama: 'Bubble Foil Peredam Panas', luasPerRoll: 30, harga: 350000, badge: 'Praktis' },
  { id: 'woven', nama: 'Woven Foil', luasPerRoll: 60, harga: 450000, badge: 'Terlaris' },
  { id: 'foam', nama: 'Aluminium Foam Foil', luasPerRoll: 60, harga: 520000, badge: 'Premium' },
]

function fmtRp(n) {
  return 'Rp ' + Math.round(n).toLocaleString('id-ID')
}

export default function Kalkulator() {
  const [selected, setSelected] = useState(0)
  const [panjang, setPanjang] = useState('')
  const [lebar, setLebar] = useState('')
  const [waste, setWaste] = useState(false)
  const [result, setResult] = useState(null)
  const [error, setError] = useState('')

  const hitung = () => {
    const p = parseFloat(panjang)
    const l = parseFloat(lebar)
    if (!p || !l || p <= 0 || l <= 0) {
      setError('Masukkan panjang dan lebar yang valid.')
      setResult(null)
      return
    }
    setError('')
    const prod = produk[selected]
    const luas = p * l
    const luasHitung = waste ? luas * 1.1 : luas
    const roll = Math.ceil(luasHitung / prod.luasPerRoll)
    const total = roll * prod.harga
    setResult({ luas, luasHitung, roll, total, prod, waste })
  }

  const orderWA = () => {
    if (!result) return
    const msg = `Halo, saya ingin pesan ${result.prod.nama}.\n\nHasil perhitungan kalkulator:\n- Luas area: ${result.luas.toFixed(1)} m²${result.waste ? ' (+ waste 10%)' : ''}\n- Kebutuhan: ${result.roll} roll\n- Estimasi biaya: ${fmtRp(result.total)}\n\nMohon info ketersediaan stok dan cara pemesanan.`
    window.open(`https://wa.me/${storeInfo.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank')
  }

  return (
    <section id="kalkulator" className="py-20 bg-stone-50">
      <div className="max-w-2xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            🧮 Alat Bantu
          </div>
          <h2 className="font-display text-4xl font-bold text-stone-900 mb-3">
            Kalkulator Kebutuhan Insulasi
          </h2>
          <div className="section-divider mx-auto mb-4"></div>
          <p className="text-stone-500 text-sm">
            Masukkan ukuran area atap Anda, kami hitung otomatis jumlah roll dan estimasi biayanya.
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-stone-100 shadow-sm p-6 md:p-8">
          {/* Pilih produk */}
          <div className="mb-6">
            <p className="text-xs text-stone-400 uppercase tracking-wider font-semibold mb-3">Pilih Produk</p>
            <div className="grid grid-cols-3 gap-2">
              {produk.map((p, i) => (
                <button
                  key={p.id}
                  onClick={() => { setSelected(i); setResult(null) }}
                  className={`p-3 rounded-2xl border text-left transition-all text-sm ${
                    selected === i
                      ? 'border-amber-600 bg-amber-50'
                      : 'border-stone-200 hover:border-amber-300 bg-white'
                  }`}
                >
                  <div className={`text-xs font-bold mb-1 ${selected === i ? 'text-amber-700' : 'text-stone-500'}`}>
                    {p.badge}
                  </div>
                  <div className={`font-semibold leading-tight text-xs mb-1.5 ${selected === i ? 'text-amber-900' : 'text-stone-700'}`}>
                    {p.nama}
                  </div>
                  <div className="text-amber-700 font-bold text-xs">{fmtRp(p.harga)}/roll</div>
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="mb-5">
            <p className="text-xs text-stone-400 uppercase tracking-wider font-semibold mb-3">Ukuran Area</p>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-sm text-stone-500 block mb-1.5">Panjang (meter)</label>
                <input
                  type="number" min="0" step="0.1"
                  value={panjang}
                  onChange={e => { setPanjang(e.target.value); setResult(null) }}
                  placeholder="cth: 10"
                  className="w-full h-11 px-4 border border-stone-200 rounded-xl text-stone-900 text-sm focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100 bg-stone-50"
                />
              </div>
              <div>
                <label className="text-sm text-stone-500 block mb-1.5">Lebar (meter)</label>
                <input
                  type="number" min="0" step="0.1"
                  value={lebar}
                  onChange={e => { setLebar(e.target.value); setResult(null) }}
                  placeholder="cth: 8"
                  className="w-full h-11 px-4 border border-stone-200 rounded-xl text-stone-900 text-sm focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100 bg-stone-50"
                />
              </div>
            </div>
          </div>

          {/* Waste toggle */}
          <div className="flex items-center gap-3 bg-stone-50 rounded-xl px-4 py-3 mb-5 border border-stone-100">
            <div className="flex-1">
              <div className="text-sm font-medium text-stone-700">Tambah waste 10%</div>
              <div className="text-xs text-stone-400 mt-0.5">Cadangan untuk potongan & sambungan material</div>
            </div>
            <button
              onClick={() => { setWaste(!waste); setResult(null) }}
              className={`relative w-11 h-6 rounded-full transition-colors flex-shrink-0 ${waste ? 'bg-amber-600' : 'bg-stone-300'}`}
            >
              <span className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-all ${waste ? 'left-5' : 'left-0.5'}`}></span>
            </button>
          </div>

          {/* Hitung button */}
          <button
            onClick={hitung}
            className="w-full h-12 bg-amber-700 hover:bg-amber-800 text-white font-bold rounded-2xl transition-all hover:shadow-lg text-base mb-4"
          >
            Hitung Kebutuhan
          </button>

          {/* Error */}
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          {/* Result */}
          {result && (
            <div className="border border-stone-100 rounded-2xl overflow-hidden">
              <div className="bg-amber-700 px-5 py-3">
                <div className="text-white font-semibold text-sm">{result.prod.nama}</div>
                <div className="text-amber-200 text-xs mt-0.5">{result.waste ? 'Sudah termasuk waste 10%' : 'Tanpa tambahan waste'}</div>
              </div>

              <div className="grid grid-cols-3 divide-x divide-stone-100">
                {[
                  { label: 'Luas area', val: result.luas.toFixed(1), unit: 'm²' },
                  { label: 'Jumlah roll', val: result.roll, unit: 'roll' },
                  { label: 'Estimasi biaya', val: fmtRp(result.total), unit: 'total' },
                ].map(item => (
                  <div key={item.label} className="p-4 text-center">
                    <div className="text-xs text-stone-400 mb-1">{item.label}</div>
                    <div className="font-bold text-stone-900 text-lg leading-tight">{item.val}</div>
                    <div className="text-xs text-stone-400">{item.unit}</div>
                  </div>
                ))}
              </div>

              {result.waste && (
                <div className="bg-amber-50 border-t border-amber-100 px-5 py-3">
                  <p className="text-xs text-amber-800 leading-relaxed">
                    Luas efektif dihitung {result.luasHitung.toFixed(1)} m² (area × 110%) — cadangan ini mencegah kekurangan material saat pemasangan.
                  </p>
                </div>
              )}

              <div className="p-4 border-t border-stone-100">
                <button
                  onClick={orderWA}
                  className="w-full h-11 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all text-sm"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Konsultasi & Pesan via WhatsApp
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
