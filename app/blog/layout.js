import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import WhatsAppFloat from '../../components/WhatsAppFloat'

export default function BlogLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          {children}
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
