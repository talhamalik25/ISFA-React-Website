import React from 'react'
import HeroSection from './Components/HeroSection'
import Navbar from './Components/Navbar'
import AboutSection from './Components/AboutSection'
import ProgramSection from './Components/ProgramSection'
import TestimonialsSection from './Components/TestimonialsSection'
import GallerySection from './Components/GallerySection'

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProgramSection />
      <TestimonialsSection />
      <GallerySection />
      
    </div>
  )
}

export default App
