import React from 'react'
import { BookOpen, Award, Users } from 'lucide-react'
import { motion } from 'framer-motion'

const HeroSection = () => {
  return (
    <div>
      <section
        id="home"
        className="relative overflow-hidden bg-center bg-no-repeat bg-cover md:bg-cover sm:bg-contain"
        style={{ backgroundImage: "url('/Images/building.png')" }}
      >
        {/* Overlays */}
        <div className="absolute inset-0 bg-[#0a285f]/25 backdrop-blur-sm"></div>
        <div className="absolute inset-0 bg-blue-900/10 backdrop-blur-[1px]"></div>
        <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 via-transparent to-blue-300/5"></div>

        {/* Decorative blobs */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply blur-3xl opacity-20 animate-blob delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply blur-3xl opacity-20 animate-blob delay-4000"></div>

        {/* Main Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="text-center">

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8 mt-8"
            >
              <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                🎓 Admissions Open for 2026
              </span>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-blue-900 mb-6 leading-tight">
                Welcome to
                <span className="block text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-blue-800 mt-2">
                  Islamic Foundation Academy
                </span>
              </h1>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-xl sm:text-2xl md:text-3xl text-white mb-4 font-medium max-w-4xl mx-auto"
            >
              Nurturing Young Minds with Knowledge & Faith
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-base sm:text-lg md:text-xl text-white mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Providing quality education from Montessori to Matric with
              specialized Quran Academy and Hifz-e-Quran programs
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            >
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
            </motion.div>

            {/* Cards */}
            <motion.div
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.2 } }
              }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            >
              {[ 
                {
                  icon: <BookOpen className="w-8 h-8 text-white" />,
                  title: "Islamic Education",
                  desc: "Quran, Hadith & Islamic Studies integrated with modern curriculum"
                },
                {
                  icon: <Award className="w-8 h-8 text-white" />,
                  title: "Quality Education",
                  desc: "Experienced faculty & comprehensive curriculum from Montessori to Matric"
                },
                {
                  icon: <Users className="w-8 h-8 text-white" />,
                  title: "Character Building",
                  desc: "Holistic development focusing on ethics, morals & values"
                }
              ].map((card, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    show: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.6 }}
                  className="group bg-white/80 backdrop-blur-md border border-white/40 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:bg-white"
                >
                  <div className="w-16 h-16 bg-linear-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mx-auto mb-5 shadow-md group-hover:scale-110 transition">
                    {card.icon}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {card.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {card.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L0,120Z"
            ></path>
          </svg>
        </div>

      </section>
    </div>
  )
}

export default HeroSection
