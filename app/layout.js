import './globals.css'

export const metadata = {
  title: 'Insulasi Atap Klaten & Yogyakarta | Solusi Nyaman & Hemat Energi',
  description: 'Toko insulasi atap terpercaya di Klaten dan Yogyakarta. Woven Foil, Bubble Foil, Aluminium Foam. Konsultasi gratis, harga terbaik, pengiriman ke lokasi Anda.',
  keywords: 'insulasi atap klaten, insulasi atap jogja, insulasi atap yogyakarta, peredam panas atap, woven foil, bubble foil, aluminium foam foil',
  alternates: {
    canonical: 'https://www.insulasiatap.biz.id',
  },
  metadataBase: new URL('https://www.insulasiatap.biz.id'),
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon.ico', sizes: '48x48' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { url: '/favicon-192x192.png', sizes: '192x192', type: 'image/png', rel: 'icon' },
      { url: '/favicon-512x512.png', sizes: '512x512', type: 'image/png', rel: 'icon' },
    ],
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  )
}
