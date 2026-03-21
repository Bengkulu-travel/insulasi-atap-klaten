'use client'
import { useState } from 'react'
import Image from 'next/image'
import { products, storeInfo } from '../app/data'

function ProductCard({ product }) {
  const [showSpecs, setShowSpecs] = useState(false)
  const [activeImg, setActiveImg] = useState(product.image)

  const allImages = [product.image, ...(product.supportingImages || [])]
  const waUrl = `https://wa.me/${storeInfo.whatsappNumber}?text=${encodeURIComponent(product.whatsappMessage)}`

  return (
    <div className="product-card bg-white rounded-3xl overflow-hidden border border-stone-100 shadow-sm flex flex-col">
      {/* Product Image */}
      <div className="relative h-60 bg-stone-100 overflow-hidden">
        <Image
          src={activeImg}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className={`absolute top-3 left-3 ${product.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full shadow`}>
          {product.badge}
        </div>
      </div>

      {/* Thumbnail strip */}
      {allImages.length > 1 && (
        <div className="flex gap-2 px-4 pt-3">
          {allImages.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveImg(img)}
              className={`relative w-12 h-12 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 ${
                activeImg === img ? 'border-amber-600' : 'border-stone-200 hover:border-amber-300'
              }`}
            >
              <Image src={img} alt={`${product.name} ${i + 1}`} fill className="object-cover" sizes="48px" />
            </button>
          ))}
        </div>
      )}

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-display text-xl font-bold text-stone-900 mb-1">{product.name}</h3>
        <p className="text-amber-600 text-sm font-medium mb-3">{product.tagline}</p>
        <p className="text-stone-600 text-sm leading-relaxed mb-3">{product.description}</p>

        {/* Highlight chips */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {product.highlights.map(h => (
            <span key={h} className="text-xs bg-amber-50 text-amber-800 border border-amber-100 px-2 py-0.5 rounded-full font-medium">
              ✓ {h}
            </span>
          ))}
        </div>

        {/* Specs Toggle */}
        <button
          onClick={() => setShowSpecs(!showSpecs)}
          className="flex items-center gap-2 text-amber-700 text-sm font-semibold hover:text-amber-800 mb-3 transition-colors"
        >
          <svg className={`w-4 h-4 transition-transform ${showSpecs ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
          {showSpecs ? 'Sembunyikan Spesifikasi' : 'Lihat Spesifikasi Lengkap'}
        </button>

        {showSpecs && (
          <div className="mb-4 rounded-xl overflow-hidden border border-stone-100">
            <table className="w-full text-sm">
              <tbody>
                {product.specs.map((spec, i) => (
                  <tr key={spec.label} className={i % 2 === 0 ? 'bg-amber-50/50' : 'bg-white'}>
                    <td className="py-2 px-3 text-stone-500 font-medium w-2/5">{spec.label}</td>
                    <td className="py-2 px-3 text-stone-800 font-semibold">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Price & CTA */}
        <div className="flex items-center justify-between pt-3 border-t border-stone-100 mt-auto">
          <div>
            <div className="text-xs text-stone-400">Harga</div>
            <div className="text-amber-700 font-bold text-sm">{product.price}</div>
          </div>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-bold px-4 py-2.5 rounded-xl transition-all hover:shadow-lg hover:shadow-green-500/30"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Pesan Sekarang
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Products() {
  return (
    <section id="produk" className="py-20 bg-stone-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            🏪 Katalog Produk
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-stone-900 mb-4">
            Produk Insulasi Pilihan
          </h2>
          <div className="section-divider mx-auto mb-4"></div>
          <p className="text-stone-600 max-w-xl mx-auto">
            Semua produk telah teruji kualitasnya. Konsultasikan kebutuhan insulasi atap Anda 
            langsung dengan kami untuk mendapatkan rekomendasi terbaik.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-stone-500 mb-4">Tidak menemukan produk yang Anda cari?</p>
          <a
            href={`https://wa.me/${storeInfo.whatsappNumber}?text=${encodeURIComponent('Halo, saya ingin bertanya tentang produk insulasi yang sesuai untuk kebutuhan saya.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-green-500 text-green-600 hover:bg-green-500 hover:text-white font-bold px-6 py-3 rounded-full transition-all"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Tanya Produk Lainnya
          </a>
        </div>
      </div>
    </section>
  )
}
