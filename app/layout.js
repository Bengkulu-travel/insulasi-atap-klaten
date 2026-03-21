import './globals.css'

export const metadata = {
  title: 'Insulasi Atap Klaten | Solusi Nyaman & Hemat Energi',
  description: 'Toko insulasi atap terpercaya di Klaten. Produk berkualitas untuk hunian dan komersial. Konsultasi gratis, harga terbaik, pengiriman area Klaten dan sekitarnya.',
  keywords: 'insulasi atap klaten, bahan insulasi, peredam panas atap, aluminium foil klaten, rockwool klaten',
  openGraph: {
    title: 'Insulasi Atap Klaten',
    description: 'Solusi insulasi atap terbaik di Klaten',
    locale: 'id_ID',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  )
}
