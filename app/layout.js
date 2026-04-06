import './globals.css'

export const metadata = {
  title: 'Insulasi Atap Klaten & Yogyakarta | Solusi Nyaman & Hemat Energi',
  description: 'Toko insulasi atap terpercaya di Klaten dan Yogyakarta. Woven Foil, Bubble Foil, Aluminium Foam. Konsultasi gratis, harga terbaik, pengiriman ke lokasi Anda.',
  keywords: 'insulasi atap klaten, insulasi atap jogja, insulasi atap yogyakarta, peredam panas atap, woven foil, bubble foil, aluminium foam foil',
  alternates: {
    canonical: 'https://www.insulasiatap.biz.id',
  },
  metadataBase: new URL('https://www.insulasiatap.biz.id'),
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  )
}
