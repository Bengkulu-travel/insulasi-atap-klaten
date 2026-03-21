'use client'
import { useState } from 'react'
import Image from 'next/image'
import { galleryImages, storeInfo } from '../app/data'

export default function Gallery() {
  const [selected, setSelected] = useState(null)
  const waUrl = `https://wa.me/${storeInfo.whatsappNumber}?text=${encodeURIComponent('Halo, saya ingin konsultasi mengenai proyek insulasi atap.')}`
  const hasImages = galleryImages.length > 0

  return (
    <section id="galeri" className="py-20 bg-stone-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-stone-200 text-stone-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            📸 Portofolio Kami
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-stone-900 mb-4">
            Galeri Proyek
          </h2>
          <div className="section-divider mx-auto mb-4"></div>
          <p className="text-stone-600 max-w-xl mx-auto">
            Dokumentasi pemasangan insulasi atap yang telah kami kerjakan di berbagai 
            lokasi di Klaten dan sekitarnya.
          </p>
        </div>

        {hasImages ? (
          <>
            {/* Gallery Grid */}
            <div className="gallery-grid mb-10">
              {galleryImages.map((img) => (
                <div
                  key={img.id}
                  onClick={() => setSelected(img)}
                  className="group relative rounded-2xl overflow-hidden cursor-pointer aspect-[4/3] border border-stone-100 hover:shadow-xl transition-all duration-300"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-amber-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white text-sm font-semibold">{img.caption}</span>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          /* Placeholder sementara foto belum ditambahkan */
          <div className="text-center py-16 bg-white rounded-3xl border border-dashed border-stone-300 mb-10">
            <div className="text-5xl mb-4">🏗️</div>
            <h3 className="font-display text-xl font-bold text-stone-700 mb-2">Foto Proyek Segera Hadir</h3>
            <p className="text-stone-400 text-sm max-w-sm mx-auto">
              Kami sedang menyiapkan dokumentasi proyek terbaik kami. 
              Hubungi kami langsung untuk melihat portofolio lengkap.
            </p>
          </div>
        )}

        {/* CTA */}
        <div className="text-center">
          <p className="text-stone-500 mb-4 text-sm">
            Ingin diskusi proyek insulasi atap Anda?
          </p>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-amber-700 hover:bg-amber-800 text-white font-bold px-6 py-3 rounded-full transition-all hover:shadow-lg"
          >
            💬 Konsultasi Proyek Anda
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white rounded-2xl overflow-hidden max-w-lg w-full shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <div className="relative h-72">
              <Image src={selected.src} alt={selected.alt} fill className="object-cover" sizes="512px" />
            </div>
            <div className="p-4 flex items-center justify-between">
              <p className="font-semibold text-stone-800">{selected.caption}</p>
              <button onClick={() => setSelected(null)} className="text-stone-400 hover:text-stone-700">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
