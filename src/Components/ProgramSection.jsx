import React from 'react'
import { ChevronRight, Phone } from 'lucide-react'

const ProgramSection = () => {
    const programs = [
    {
      id: 'montessori',
      icon: '🎨',
      title: 'Montessori',
      age: '3-5 Years',
      description: 'Early childhood education with a focus on hands-on learning, creativity, and Islamic values. Our Montessori program provides a nurturing environment where children develop essential skills through play and exploration.',
      features: [
        'Play-based learning approach',
        'Basic Quran & Islamic etiquette',
        'Creative arts & crafts',
        'Social & emotional development',
        'Safe & stimulating environment'
      ],
      color: 'from-pink-500 to-rose-500'
    },
    {
      id: 'primary',
      icon: '📚',
      title: 'Primary Education',
      age: 'Grade 1-5',
      description: 'Strong foundation in core subjects including Mathematics, Science, English, and Urdu, integrated with comprehensive Islamic studies and Quran education.',
      features: [
        'National curriculum standards',
        'Daily Quran recitation & translation',
        'Mathematics & Science labs',
        'English & Urdu language skills',
        'Computer studies & arts'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'secondary',
      icon: '🎓',
      title: 'Secondary Education',
      age: 'Grade 6-10',
      description: 'Complete Matriculation program preparing students for board examinations while maintaining strong Islamic education and character development.',
      features: [
        'Matric board preparation',
        'Advanced Islamic studies',
        'Science & Computer labs',
        'Career counseling',
        'Exam techniques & guidance'
      ],
      color: 'from-purple-500 to-indigo-500'
    },
    {
      id: 'quran',
      icon: '📖',
      title: 'Quran Academy',
      age: 'All Ages',
      description: 'Comprehensive Quranic education including Nazra, Tajweed, and translation. Our qualified teachers ensure proper pronunciation and understanding of the Holy Quran.',
      features: [
        'Nazra with proper Tajweed',
        'Quran translation & Tafseer',
        'Daily recitation practice',
        'Individual attention',
        'Regular assessments'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'hifz',
      icon: '⭐',
      title: 'Hifz-e-Quran',
      age: '6+ Years',
      description: 'Dedicated Hifz program with experienced Huffaz teachers. Students memorize the Holy Quran with proper Tajweed while continuing their academic education.',
      features: [
        'Complete Quran memorization',
        'Expert Huffaz instructors',
        'Regular revision classes',
        'Parallel academic education',
        'Individual learning pace'
      ],
      color: 'from-amber-500 to-orange-500'
    }
  ];
  return (
    <div>
        <section id="programs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Our Programs
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Academic Excellence with Islamic Values
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive education programs designed to nurture academic excellence, spiritual growth, and moral character from early years to Matriculation
          </p>
        </div>

        {/* Programs Grid */}
        <div className="space-y-12">
          {programs.map((program, index) => (
            <div 
              key={program.id}
              className={`bg-gradient-to-br ${index % 2 === 0 ? 'from-gray-50 to-blue-50' : 'from-blue-50 to-gray-50'} rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300`}
            >
              <div className={`grid md:grid-cols-2 gap-8 p-8 md:p-12 ${index % 2 !== 0 ? 'md:grid-flow-dense' : ''}`}>
                {/* Content Side */}
                <div className={`flex flex-col justify-center ${index % 2 !== 0 ? 'md:col-start-2' : ''}`}>
                  <div className="flex items-center mb-4">
                    <span className="text-6xl mr-4">{program.icon}</span>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900">{program.title}</h3>
                      <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold mt-2">
                        {program.age}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                    {program.description}
                  </p>

                  <div className="space-y-3">
                    {program.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <ChevronRight className="w-5 h-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg inline-flex items-center self-start group">
                    <span>Learn More</span>
                    <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Visual Side */}
                <div className={`flex items-center justify-center ${index % 2 !== 0 ? 'md:col-start-1 md:row-start-1' : ''}`}>
                  <div className={`w-full h-64 md:h-80 bg-gradient-to-br ${program.color} rounded-xl shadow-xl flex items-center justify-center transform hover:scale-105 transition-transform duration-300`}>
                    <span className="text-9xl opacity-20">{program.icon}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Join Our Academy?</h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Enroll your child today and give them the gift of quality education combined with strong Islamic values
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#admissions" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg inline-flex items-center justify-center">
              <Phone className="w-5 h-5 mr-2" />
              Apply for Admission
            </a>
            <a href="#contact" className="bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-all duration-200 border-2 border-white inline-flex items-center justify-center">
              Schedule a Visit
            </a>
          </div>
        </div>
      </div>
    </section>
      
    </div>
  )
}

export default ProgramSection
