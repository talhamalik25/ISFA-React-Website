import React from 'react'
import HeroSection from './Components/HeroSection'
import Navbar from './Components/Navbar'
import AboutSection from './Components/AboutSection'
import ProgramSection from './Components/ProgramSection'
import TestimonialsSection from './Components/TestimonialsSection'
import GallerySection from './Components/GallerySection'
import NewsEventsSection from './Components/NewsEventsSection'
import FacilitiesSection from './Components/FacilitiesSection'
import ContactSection from './Components/ContactSection'
import FooterSection from './Components/FooterSection'

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProgramSection />
      <TestimonialsSection />
      <GallerySection />
      <NewsEventsSection />
      <FacilitiesSection />
      <ContactSection />
      <FooterSection />
      
    </div>
  )
}

export default App
