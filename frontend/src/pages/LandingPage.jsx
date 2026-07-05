import Hero from '../components/landing/Hero.jsx'
import Footer from '../components/landing/Footer.jsx'
import TechDecor from '../components/landing/TechDecor.jsx'

export default function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950">
      <TechDecor />
      <div className="relative z-10">
        <Hero />
        <Footer />
      </div>
    </div>
  )
}
