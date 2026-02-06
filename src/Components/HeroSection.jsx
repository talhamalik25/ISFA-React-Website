import React from 'react'
import { BookOpen, Award, Users } from 'lucide-react'

const HeroSection = () => {
  return (
    <div>
    <section id="home" className="relative overflow-hidden absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/Images/building.png')" }}>
  {/* Background Image */}
  <div
    className=""
    
  ></div>

  {/* Blur Overlay */}
  <div className="absolute inset-0 bg-blue-200/35 backdrop-blur-sm"></div>

  {/* Light Blue Transparent Overlay */}
<div className="absolute inset-0 bg-blue-900/10 backdrop-blur-[1px]"></div>

{/* Soft Blue Gradient */}
<div className="absolute inset-0 bg-linear-to-br from-blue-500/5 via-transparent to-blue-300/5"></div>

{/* Background Decorative Elements */}
<div className="absolute top-20 right-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-blob"></div>
<div className="absolute top-40 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-blob animation-delay-2000"></div>
<div className="absolute bottom-20 left-1/2 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-blob animation-delay-4000"></div>

    {/* Main Content */}
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
    <div className="text-center">
      
      {/* Main Heading */}
      <div className="mb-8">
        <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
          🎓 Admissions Open for 2026
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-blue-900 mb-6 leading-tight">
          Welcome to
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 mt-2">
            Islamic Foundation Academy
          </span>
        </h1>
      </div>

      {/* Tagline */}
      <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 mb-4 font-medium max-w-4xl mx-auto">
        Nurturing Young Minds with Knowledge & Faith
      </p>

      {/* Description */}
      <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
        Providing quality education from Montessori to Matric with
        specialized Quran Academy and Hifz-e-Quran programs
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
        <a
          href="#admissions"
          className="group bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center"
        >
          <span>Apply for Admission</span>
          <svg
            className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </a>

        <a
          href="#programs"
          className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300 border-2 border-blue-600 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center"
        >
          <BookOpen className="w-5 h-5 mr-2" />
          <span>Explore Programs</span>
        </a>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <BookOpen className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Islamic Education
          </h3>
          <p className="text-gray-600">
            Quran, Hadith & Islamic Studies integrated with modern
            curriculum
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Award className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Quality Education
          </h3>
          <p className="text-gray-600">
            Experienced faculty & comprehensive curriculum from Montessori
            to Matric
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Users className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Character Building
          </h3>
          <p className="text-gray-600">
            Holistic development focusing on ethics, morals & values
          </p>
        </div>
      </div>
    </div>
  </div>

  {/* Wave Divider */}
  <div className="absolute bottom-0 left-0 right-0">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 120"
      className="w-full"
    >
      <path
        fill="#ffffff"
        fillOpacity="1"
        d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
      ></path>
    </svg>
  </div>
</section>

    </div>
  )
}

export default HeroSection
