import Navbar from '../../components/Navbar'
import HeroJogja from '../../components/HeroJogja'
import Products from '../../components/Products'
import Benefits from '../../components/Benefits'
import Gallery from '../../components/Gallery'
import LocationJogja from '../../components/LocationJogja'
import Footer from '../../components/Footer'
import WhatsAppFloat from '../../components/WhatsAppFloat'

export const metadata = {
  title: 'Insulasi Atap Yogyakarta | Solusi Nyaman & Hemat Energi',
  description: 'Toko insulasi atap terpercaya di Yogyakarta. Produk berkualitas untuk hunian dan komersial. Konsultasi gratis, harga terbaik, pengiriman area Jogja, Sleman, Bantul dan sekitarnya.',
  keywords: 'insulasi atap jogja, insulasi atap yogyakarta, bahan insulasi jogja, peredam panas atap yogyakarta, aluminium foil jogja, woven foil jogja',
  openGraph: {
    title: 'Insulasi Atap Yogyakarta',
    description: 'Solusi insulasi atap terbaik di Yogyakarta & sekitarnya',
    locale: 'id_ID',
    type: 'website',
  },
}

export default function JogjaPage() {
  return (
    <main>
      <Navbar />
      <HeroJogja />
      <Products />
      <Benefits />
      <Gallery />
      <LocationJogja />
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
