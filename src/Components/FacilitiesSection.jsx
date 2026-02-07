import React from 'react'
import { useState } from 'react'
import { ArrowRight, ChevronRight, Star, X } from 'lucide-react'

const FacilitiesSection = () => {
    const [selectedFacility, setSelectedFacility] = useState(null);

  const facilities = [
    {
      id: 1,
      icon: '🔬',
      title: 'Science Laboratory',
      description: 'Fully equipped modern science labs for Physics, Chemistry, and Biology with latest equipment and safety measures.',
      features: ['Modern Equipment', 'Safety Standards', 'Practical Learning', 'Expert Supervision'],
      color: 'from-cyan-500 to-blue-600',
      bgColor: 'from-cyan-50 to-blue-50'
    },
    {
      id: 2,
      icon: '💻',
      title: 'Computer Lab',
      description: 'State-of-the-art computer lab with high-speed internet, latest software, and one-on-one student computer ratio.',
      features: ['Latest Systems', 'High-Speed Internet', 'Modern Software', 'Coding Classes'],
      color: 'from-purple-500 to-indigo-600',
      bgColor: 'from-purple-50 to-indigo-50'
    },
    {
      id: 3,
      icon: '📚',
      title: 'Library',
      description: 'Extensive collection of books, digital resources, and quiet study areas. Over 10,000 books including Islamic literature.',
      features: ['10,000+ Books', 'Digital Resources', 'Reading Areas', 'Islamic Literature'],
      color: 'from-amber-500 to-orange-600',
      bgColor: 'from-amber-50 to-orange-50'
    },
    {
      id: 4,
      icon: '⚽',
      title: 'Sports Facilities',
      description: 'Indoor and outdoor sports facilities including cricket ground, basketball court, and indoor games area.',
      features: ['Cricket Ground', 'Basketball Court', 'Indoor Games', 'Sports Equipment'],
      color: 'from-green-500 to-emerald-600',
      bgColor: 'from-green-50 to-emerald-50'
    },
    {
      id: 5,
      icon: '🕌',
      title: 'Prayer Hall',
      description: 'Spacious prayer hall with separate areas for boys and girls, promoting daily prayers and Islamic practices.',
      features: ['Spacious Hall', 'Separate Areas', 'Daily Prayers', 'Wudu Facilities'],
      color: 'from-teal-500 to-cyan-600',
      bgColor: 'from-teal-50 to-cyan-50'
    },
    {
      id: 6,
      icon: '🎨',
      title: 'Art & Craft Room',
      description: 'Creative space for art, craft, and creative activities with all necessary materials and equipment.',
      features: ['Art Supplies', 'Craft Materials', 'Creative Space', 'Exhibition Area'],
      color: 'from-pink-500 to-rose-600',
      bgColor: 'from-pink-50 to-rose-50'
    },
    {
      id: 7,
      icon: '🎭',
      title: 'Auditorium',
      description: 'Modern auditorium with seating capacity of 500+ for events, functions, and presentations.',
      features: ['500+ Capacity', 'Sound System', 'Stage & Lighting', 'AC Hall'],
      color: 'from-violet-500 to-purple-600',
      bgColor: 'from-violet-50 to-purple-50'
    },
    {
      id: 8,
      icon: '🚌',
      title: 'Transport',
      description: 'Safe and comfortable transport facility covering all major areas of the city with trained drivers.',
      features: ['Safe Transport', 'Trained Drivers', 'GPS Tracking', 'City-wide Coverage'],
      color: 'from-blue-500 to-sky-600',
      bgColor: 'from-blue-50 to-sky-50'
    },
    {
      id: 9,
      icon: '🍽️',
      title: 'Cafeteria',
      description: 'Hygienic cafeteria serving healthy and nutritious meals with halal food options.',
      features: ['Halal Food', 'Hygienic', 'Nutritious Meals', 'Variety Menu'],
      color: 'from-red-500 to-orange-600',
      bgColor: 'from-red-50 to-orange-50'
    },
    {
      id: 10,
      icon: '🏥',
      title: 'Medical Room',
      description: 'First-aid facility with qualified nurse available during school hours for immediate medical assistance.',
      features: ['Qualified Nurse', 'First Aid', 'Emergency Care', 'Health Records'],
      color: 'from-emerald-500 to-green-600',
      bgColor: 'from-emerald-50 to-green-50'
    },
    {
      id: 11,
      icon: '🌳',
      title: 'School Garden',
      description: 'Beautiful green spaces and garden areas for outdoor activities and environmental learning.',
      features: ['Green Spaces', 'Play Areas', 'Nature Learning', 'Fresh Environment'],
      color: 'from-lime-500 to-green-600',
      bgColor: 'from-lime-50 to-green-50'
    },
    {
      id: 12,
      icon: '🔐',
      title: 'Security',
      description: '24/7 security with CCTV surveillance, trained guards, and secure entry/exit points.',
      features: ['24/7 Security', 'CCTV Cameras', 'Trained Guards', 'Visitor Management'],
      color: 'from-slate-500 to-gray-600',
      bgColor: 'from-slate-50 to-gray-50'
    }
  ];
  return (
    <section id="facilities" className="py-20 bg-gradient-to-br from-white via-gray-50 to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-down">
          <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Our Facilities
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            World-Class Infrastructure
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            State-of-the-art facilities designed to provide the best learning environment for our students
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <div
              key={facility.id}
              className={`group relative bg-gradient-to-br ${facility.bgColor} rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 cursor-pointer animate-scale-in overflow-hidden`}
              style={{animationDelay: `${index * 0.05}s`}}
              onClick={() => setSelectedFacility(facility)}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
                  backgroundSize: '20px 20px'
                }}></div>
              </div>

              {/* Icon */}
              <div className={`relative w-20 h-20 bg-gradient-to-br ${facility.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                <span className="text-4xl">{facility.icon}</span>
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {facility.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {facility.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {facility.features.map((feature, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-center text-sm text-gray-700 animate-slide-in-right"
                      style={{animationDelay: `${index * 0.05 + idx * 0.1}s`}}
                    >
                      <ChevronRight className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Learn More Button */}
                <button className="mt-6 flex items-center text-blue-600 font-semibold group-hover:gap-2 transition-all duration-300">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Hover Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${facility.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-white text-center relative overflow-hidden animate-fade-in-up" style={{animationDelay: '0.8s'}}>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32 animate-float"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24 animate-float-delayed"></div>
          
          <div className="relative z-10">
            <div className="text-5xl mb-4 animate-bounce-light">🏫</div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Experience Our Campus
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Schedule a campus tour to see all our facilities in person and meet our team
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg transform hover:scale-105 hover:-translate-y-1"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Schedule Campus Tour
            </a>
          </div>
        </div>

      </div>

      {/* Modal for Facility Details */}
      {selectedFacility && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedFacility(null)}
        >
          <div 
            className="max-w-2xl w-full bg-white rounded-2xl overflow-hidden animate-zoom-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`bg-gradient-to-br ${selectedFacility.color} p-8 text-white`}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <span className="text-6xl mr-4">{selectedFacility.icon}</span>
                  <h3 className="text-3xl font-bold">{selectedFacility.title}</h3>
                </div>
                <button 
                  onClick={() => setSelectedFacility(null)}
                  className="text-white hover:text-gray-200 transition-colors"
                >
                  <X className="w-8 h-8" />
                </button>
              </div>
            </div>
            <div className="p-8">
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                {selectedFacility.description}
              </p>
              <h4 className="font-bold text-gray-900 mb-4">Key Features:</h4>
              <div className="grid grid-cols-2 gap-4">
                {selectedFacility.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center bg-gray-50 p-3 rounded-lg">
                    <Star className="w-5 h-5 text-yellow-500 mr-2" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes zoom-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-zoom-in {
          animation: zoom-in 0.3s ease-out;
        }
      `}</style>
    </section>
  )
}

export default FacilitiesSection
