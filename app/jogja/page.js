import Navbar from '../../components/Navbar'
import HeroJogja from '../../components/HeroJogja'
import Products from '../../components/Products'
import Benefits from '../../components/Benefits'
import Gallery from '../../components/Gallery'
import Location from '../../components/Location'
import Footer from '../../components/Footer'
import WhatsAppFloat from '../../components/WhatsAppFloat'

export const metadata = {
  title: 'Insulasi Atap Yogyakarta | Solusi Nyaman & Hemat Energi',
  description: 'Toko insulasi atap terpercaya di Yogyakarta. Woven Foil, Bubble Foil, Aluminium Foam. Konsultasi gratis, harga terbaik, pengiriman area Jogja, Sleman, Bantul dan sekitarnya.',
  keywords: 'insulasi atap jogja, insulasi atap yogyakarta, peredam panas atap yogyakarta, woven foil jogja, bubble foil yogyakarta',
}

export default function JogjaPage() {
  return (
    <main>
      <Navbar />
      <HeroJogja />
      <Products />
      <Benefits />
      <Gallery />
      <Location branchId="jogja" />
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
