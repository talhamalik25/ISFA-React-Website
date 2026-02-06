import React, { useState } from 'react'
import { Phone, GraduationCap, ChevronDown, Menu, X } from 'lucide-react'

const Navbar = () => {
  const [programsDropdown, setProgramsDropdown] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      {/* Top Info Bar */}
      <div className="hidden md:block bg-blue-900 text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center">
              <Phone className="w-3 h-3 mr-2" />
              +92 XXX XXXXXXX
            </span>
            <span>📧 info@islamicfoundationacademy.edu.pk</span>
          </div>
          <div>
            <span>⏰ Mon-Fri: 8:00 AM - 4:00 PM</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white/95 backdrop-blur-sm shadow-lg fixed top-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo & School Name */}
            <div className="flex items-center space-x-3">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center shadow-lg">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-blue-900 leading-tight">
                  Islamic Foundation Academy
                </h1>
                <p className="text-xs text-gray-600 hidden sm:block">Excellence in Education & Faith</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
                Home
              </a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
                About Us
              </a>
              
              {/* Programs Dropdown */}
              <div className="relative group">
                <button 
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 flex items-center"
                  onMouseEnter={() => setProgramsDropdown(true)}
                  onMouseLeave={() => setProgramsDropdown(false)}
                >
                  Programs <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                {programsDropdown && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-2"
                    onMouseEnter={() => setProgramsDropdown(true)}
                    onMouseLeave={() => setProgramsDropdown(false)}
                  >
                    <a href="#montessori" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition">
                      Montessori
                    </a>
                    <a href="#primary" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition">
                      Primary (Grade 1-5)
                    </a>
                    <a href="#secondary" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition">
                      Secondary (Grade 6-10)
                    </a>
                    <a href="#quran" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition">
                      Quran Academy
                    </a>
                    <a href="#hifz" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition">
                      Hifz-e-Quran
                    </a>
                  </div>
                )}
              </div>

              <a href="#admissions" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
                Admissions
              </a>
              <a href="#gallery" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
                Gallery
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
                Contact
              </a>

              {/* CTA Button */}
              <a 
                href="#apply" 
                className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg flex items-center space-x-2"
              >
                <Phone className="w-4 h-4" />
                <span>Apply Now</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-gray-700 hover:text-blue-600 transition"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden pb-4 border-t border-gray-100 mt-2">
              <div className="space-y-1 pt-4">
                <a 
                  href="#home" 
                  className="block py-3 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </a>
                <a 
                  href="#about" 
                  className="block py-3 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About Us
                </a>
                
                {/* Mobile Programs Section */}
                <div className="px-4 py-2">
                  <p className="text-sm font-semibold text-gray-500 mb-2">Programs</p>
                  <div className="space-y-1 pl-4">
                    <a href="#montessori" className="block py-2 text-gray-600 hover:text-blue-600 transition">
                      Montessori
                    </a>
                    <a href="#primary" className="block py-2 text-gray-600 hover:text-blue-600 transition">
                      Primary (Grade 1-5)
                    </a>
                    <a href="#secondary" className="block py-2 text-gray-600 hover:text-blue-600 transition">
                      Secondary (Grade 6-10)
                    </a>
                    <a href="#quran" className="block py-2 text-gray-600 hover:text-blue-600 transition">
                      Quran Academy
                    </a>
                    <a href="#hifz" className="block py-2 text-gray-600 hover:text-blue-600 transition">
                      Hifz-e-Quran
                    </a>
                  </div>
                </div>

                <a 
                  href="#admissions" 
                  className="block py-3 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Admissions
                </a>
                <a 
                  href="#gallery" 
                  className="block py-3 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Gallery
                </a>
                <a 
                  href="#contact" 
                  className="block py-3 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </a>

                {/* Mobile CTA */}
                <div className="px-4 pt-4">
                  <a 
                    href="#apply" 
                    className="block text-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-md"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}

export default Navbar
