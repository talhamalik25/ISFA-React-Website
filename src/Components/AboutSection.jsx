import React from 'react'
import {
  Users, Award, Star, TrendingUp,
  Target, Lightbulb, Shield, Heart, ChevronRight
} from 'lucide-react'
import { motion } from 'framer-motion'

const AboutSection = () => {

  const stats = [
    { number: '500+', label: 'Students Enrolled', icon: Users },
    { number: '50+', label: 'Qualified Teachers', icon: Award },
    { number: '15+', label: 'Years of Excellence', icon: Star },
    { number: '100%', label: 'Success Rate', icon: TrendingUp }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Islamic Values',
      description: 'Instilling strong Islamic principles and ethics in every aspect of education',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Lightbulb,
      title: 'Academic Excellence',
      description: 'Committed to providing top-quality education with modern teaching methods',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Shield,
      title: 'Safe Environment',
      description: 'Creating a secure, nurturing space where students can thrive and grow',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Target,
      title: 'Holistic Development',
      description: 'Focusing on intellectual, spiritual, physical and emotional growth',
      color: 'from-purple-500 to-indigo-500'
    }
  ];

  return (
    <section id="about" className="py-20 bg-linear-to-br from-gray-50 to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            About Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Building Tomorrow's Leaders Today
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Where faith meets knowledge, and character shapes destiny
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">

          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-blue-900 mb-6">Our Story</h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                <strong className="text-blue-900">Islamic Foundation Academy</strong> was established with a vision to provide exceptional education integrating modern academics with strong Islamic values.
              </p>
              <p>
                For over 15 years, we have nurtured students into well-rounded individuals excelling academically and morally.
              </p>
              <p>
                Today, we serve students from Montessori to Matric with specialized Quranic programs.
              </p>
              <p>
                We prepare students to become responsible citizens and future leaders.
              </p>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-linear-to-br from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white shadow-2xl"
          >
            <h3 className="text-2xl font-bold mb-8 text-center">Our Achievements</h3>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.15 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8" />
                    </div>
                    <div className="text-4xl font-bold mb-2">{stat.number}</div>
                    <div className="text-blue-100 text-sm">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {[{
            title: "Our Mission",
            text: "To provide quality education integrating Islamic teachings with modern curriculum.",
            icon: Target
          }, {
            title: "Our Vision",
            text: "To be recognized for excellence in academic and Islamic character development.",
            icon: Lightbulb
          }].map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900">{item.title}</h3>
                </div>
                <p className="text-gray-700">{item.text}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Values */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ show: { transition: { staggerChildren: 0.15 } } }}
        >
          <h3 className="text-3xl font-bold text-blue-900 text-center mb-12">
            Our Core Values
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    show: { opacity: 1, y: 0 }
                  }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition hover:-translate-y-3"
                >
                  <div className={`w-16 h-16 bg-linear-to-br ${value.color} rounded-full flex items-center justify-center mb-4 shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-3">{value.title}</h4>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-white rounded-2xl p-8 md:p-12 shadow-xl"
        >
          <h3 className="text-3xl font-bold text-blue-900 text-center mb-8">
            Why Choose Islamic Foundation Academy?
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Experienced and qualified teachers',
              'Modern facilities and safe environment',
              'Comprehensive curriculum',
              'Specialized Quran & Hifz programs',
              'Personalized student attention',
              'Character development focus',
              'Parent-teacher communication',
              'Extracurricular activities',
              'Affordable fee structure',
              'Proven academic success'
            ].map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-start"
              >
                <ChevronRight className="w-6 h-6 text-blue-600 mr-3 mt-1 shrink-0" />
                <span className="text-gray-700 text-lg">{reason}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default AboutSection
