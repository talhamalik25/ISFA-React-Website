import React from 'react'
import { Users, Award, Star, TrendingUp, Target, Lightbulb, Shield, Heart, ChevronRight } from 'lucide-react'

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
    <div>
      <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            About Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Building Tomorrow's Leaders Today
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Where faith meets knowledge, and character shapes destiny
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Side - Text Content */}
          <div>
            <h3 className="text-3xl font-bold text-blue-900 mb-6">Our Story</h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                <strong className="text-blue-900">Islamic Foundation Academy</strong> was established with a vision to provide exceptional education that seamlessly integrates modern academic excellence with strong Islamic values and teachings.
              </p>
              <p>
                For over 15 years, we have been dedicated to nurturing young minds, helping them develop into well-rounded individuals who excel not only academically but also spiritually and morally. Our journey began with a small group of passionate educators who believed in the power of combining quality education with Islamic principles.
              </p>
              <p>
                Today, we proudly serve hundreds of students from Montessori through Matriculation, offering specialized programs in Quranic studies and Hifz-e-Quran. Our experienced faculty ensures that each student receives personalized attention and guidance throughout their educational journey.
              </p>
              <p>
                At Islamic Foundation Academy, we believe that true success comes from developing the complete personality of our students - intellectually, morally, spiritually, and socially - preparing them to be responsible citizens and future leaders of our nation.
              </p>
            </div>
          </div>

          {/* Right Side - Visual Stats */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white shadow-2xl">
            <h3 className="text-2xl font-bold mb-8 text-center">Our Achievements</h3>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8" />
                    </div>
                    <div className="text-4xl font-bold mb-2">{stat.number}</div>
                    <div className="text-blue-100 text-sm">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Mission */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900">Our Mission</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To provide quality education that integrates Islamic teachings with modern academic curriculum, nurturing students to become knowledgeable, ethical, and responsible members of society who contribute positively to their communities and uphold Islamic values in all aspects of life.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <Lightbulb className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900">Our Vision</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To be a leading educational institution recognized for excellence in both academic achievement and Islamic character development, producing graduates who are not only academically successful but also spiritually strong, morally upright, and committed to serving humanity.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div>
          <h3 className="text-3xl font-bold text-blue-900 text-center mb-12">Our Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-full flex items-center justify-center mb-4 shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-20 bg-white rounded-2xl p-8 md:p-12 shadow-xl">
          <h3 className="text-3xl font-bold text-blue-900 text-center mb-8">Why Choose Islamic Foundation Academy?</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Experienced and qualified teachers with Islamic knowledge',
              'Modern facilities and safe learning environment',
              'Comprehensive curriculum from Montessori to Matric',
              'Specialized Quran Academy and Hifz programs',
              'Small class sizes for personalized attention',
              'Strong focus on character and moral development',
              'Regular parent-teacher communication',
              'Extracurricular activities and sports programs',
              'Affordable fee structure with flexible payment options',
              'Proven track record of academic excellence'
            ].map((reason, index) => (
              <div key={index} className="flex items-start">
                <ChevronRight className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700 text-lg">{reason}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
    </div>
  )
}

export default AboutSection
