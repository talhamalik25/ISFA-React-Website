import React from 'react'
import { ChevronRight, Phone } from 'lucide-react'
import { motion } from 'framer-motion'

const ProgramSection = () => {

  const programs = [
    {
      id: 'montessori',
      icon: '🎨',
      title: 'Montessori',
      age: '3-5 Years',
      description: 'Early childhood education with hands-on learning and Islamic values.',
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
      description: 'Strong foundation in core subjects integrated with Islamic education.',
      features: [
        'National curriculum standards',
        'Daily Quran recitation',
        'Math & Science labs',
        'Language development',
        'Computer studies'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'secondary',
      icon: '🎓',
      title: 'Secondary Education',
      age: 'Grade 6-10',
      description: 'Complete Matric program preparing students for board exams.',
      features: [
        'Board exam preparation',
        'Advanced Islamic studies',
        'Science & computer labs',
        'Career counseling',
        'Exam guidance'
      ],
      color: 'from-purple-500 to-indigo-500'
    },
    {
      id: 'quran',
      icon: '⭐',
      title: 'Quran Academy',
      age: 'All Ages',
      description: 'Comprehensive Quranic education with Tajweed and translation.',
      features: [
        'Nazra with Tajweed',
        'Quran translation',
        'Daily recitation',
        'Individual attention',
        'Assessments'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'hifz',
      icon: '📖',
      title: 'Hifz-e-Quran',
      age: '6+ Years',
      description: 'Memorization of the Holy Quran with qualified teachers.',
      features: [
        'Complete memorization',
        'Expert instructors',
        'Revision classes',
        'Parallel academics',
        'Individual pace'
      ],
      color: 'from-amber-500 to-orange-500'
    }
  ];

  return (
    <section id="programs" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Our Programs
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Academic Excellence with Islamic Values
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive programs nurturing academic and spiritual growth
          </p>
        </motion.div>

        {/* Programs */}
        <div className="space-y-12">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className={`bg-linear-to-br ${
                index % 2 === 0 ? 'from-gray-50 to-blue-50' : 'from-blue-50 to-gray-50'
              } rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition`}
            >
              <div className={`grid md:grid-cols-2 gap-8 p-8 md:p-12 ${index % 2 !== 0 ? 'md:grid-flow-dense' : ''}`}>

                {/* Content */}
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
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-start"
                      >
                        <ChevronRight className="w-5 h-5 text-blue-600 mr-2 mt-1 shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-md inline-flex items-center self-start group hover:scale-105">
                    <span>Learn More</span>
                    <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>

                {/* Visual */}
                <div className={`flex items-center justify-center ${index % 2 !== 0 ? 'md:col-start-1 md:row-start-1' : ''}`}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className={`w-full h-64 md:h-80 bg-linear-to-br ${program.color} rounded-xl shadow-xl flex items-center justify-center hover:scale-105 hover:rotate-2 transition`}
                  >
                    <span className="text-9xl opacity-20">{program.icon}</span>
                  </motion.div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 text-center bg-linear-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-white"
        >
          <h3 className="text-3xl font-bold mb-4">
            Ready to Join Our Academy?
          </h3>

          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Enroll your child today for quality education with Islamic values
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#admissions" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg inline-flex items-center justify-center hover:scale-105">
              <Phone className="w-5 h-5 mr-2" />
              Apply for Admission
            </a>

            <a href="#contact" className="bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition border-2 border-white inline-flex items-center justify-center hover:scale-105">
              Schedule a Visit
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default ProgramSection
