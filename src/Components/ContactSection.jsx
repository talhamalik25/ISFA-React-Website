import React from 'react'
import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react'

const ContactSection = () => {
      const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+92 XXX XXXXXXX', '+92 XXX XXXXXXX'],
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@islamicfoundationacademy.edu.pk', 'admissions@islamicfoundationacademy.edu.pk'],
      color: 'from-purple-500 to-pink-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['Main Boulevard, Block A', 'City Name, Province, Pakistan'],
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: ['Monday - Friday: 8:00 AM - 4:00 PM', 'Saturday: 9:00 AM - 1:00 PM'],
      color: 'from-amber-500 to-orange-600',
      bgColor: 'bg-amber-50'
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };
  return (
      <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-down">
          <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Contact Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <div
                key={index}
                className={`${info.bgColor} rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 animate-scale-in group`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{info.title}</h3>
                <div className="space-y-2">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 text-sm leading-relaxed">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Main Contact Form + Map */}
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <div className="animate-slide-in-left">
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-xl">
              <h3 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
                <Send className="w-6 h-6 mr-3 text-blue-600" />
                Send us a Message
              </h3>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div className="animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email & Phone */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="animate-fade-in-up" style={{animationDelay: '0.5s'}}>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div className="animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300"
                        placeholder="+92 XXX XXXXXXX"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="animate-fade-in-up" style={{animationDelay: '0.7s'}}>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300"
                    >
                      <option value="">Select a subject</option>
                      <option value="admission">Admission Inquiry</option>
                      <option value="general">General Information</option>
                      <option value="campus">Campus Visit</option>
                      <option value="fee">Fee Structure</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="animate-fade-in-up" style={{animationDelay: '0.8s'}}>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300 resize-none"
                      placeholder="Write your message here..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center group animate-fade-in-up"
                    style={{animationDelay: '0.9s'}}
                  >
                    <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </button>
                </form>
              ) : (
                <div className="py-12 text-center animate-zoom-in">
                  <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-4 animate-bounce" />
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h4>
                  <p className="text-gray-600">Thank you for contacting us. We'll get back to you soon.</p>
                </div>
              )}
            </div>
          </div>

          {/* Map & Additional Info */}
          <div className="animate-slide-in-right">
            {/* Map Placeholder */}
            <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl h-80 mb-6 shadow-xl flex items-center justify-center relative overflow-hidden group">
              {/* Animated Background */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 animate-pulse-slow" style={{
                  backgroundImage: `radial-gradient(circle, white 2px, transparent 2px)`,
                  backgroundSize: '40px 40px'
                }}></div>
              </div>
              
              <div className="relative z-10 text-center text-white">
                <MapPin className="w-20 h-20 mx-auto mb-4 animate-bounce" />
                <h4 className="text-2xl font-bold mb-2">Visit Our Campus</h4>
                <p className="text-blue-100 mb-4">Main Boulevard, City Name</p>
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                  Open in Google Maps
                </button>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
              <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full animate-float-delayed"></div>
            </div>

            {/* Quick Info */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h4 className="text-xl font-bold text-gray-900 mb-6">Why Contact Us?</h4>
              <div className="space-y-4">
                {[
                  { icon: '🎓', text: 'Admission guidance and counseling' },
                  { icon: '🏫', text: 'Schedule a campus tour' },
                  { icon: '📚', text: 'Learn about our programs' },
                  { icon: '💰', text: 'Fee structure and payment plans' },
                  { icon: '📞', text: 'Speak with our admission team' }
                ].map((item, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-center p-3 bg-gradient-to-r from-blue-50 to-gray-50 rounded-lg hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 animate-slide-in-right"
                    style={{animationDelay: `${0.5 + idx * 0.1}s`}}
                  >
                    <span className="text-2xl mr-3">{item.icon}</span>
                    <span className="text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>

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
          animation: zoom-in 0.4s ease-out;
        }
      `}</style>
    </section>
  )
}

export default ContactSection
