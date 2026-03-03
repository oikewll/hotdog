import { useState } from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import Screenshots from './components/Screenshots'
import Download from './components/Download'
import Tutorial from './components/Tutorial'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      <Hero />
      <Features />
      <Screenshots />
      <Download />
      <Tutorial />
      <Footer />
    </div>
  )
}

export default App
