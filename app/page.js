import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Products from '../components/Products'
import Benefits from '../components/Benefits'
import Gallery from '../components/Gallery'
import Location from '../components/Location'
import Footer from '../components/Footer'
import WhatsAppFloat from '../components/WhatsAppFloat'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Products />
      <Benefits />
      <Gallery />
      <Location />
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
