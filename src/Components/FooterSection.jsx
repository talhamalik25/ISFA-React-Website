import React from 'react'
import { ChevronRight, GraduationCap, Facebook, Twitter, Instagram, Youtube, Linkedin, Phone, Mail, MapPin, Clock, Send, Heart } from 'lucide-react'

const FooterSection = () => {
    const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Admissions', href: '#admissions' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'News & Events', href: '#news' },
    { name: 'Contact', href: '#contact' }
  ];

  const programs = [
    { name: 'Montessori (3-5 Years)', href: '#montessori' },
    { name: 'Primary (Grade 1-5)', href: '#primary' },
    { name: 'Secondary (Grade 6-10)', href: '#secondary' },
    { name: 'Quran Academy', href: '#quran' },
    { name: 'Hifz-e-Quran', href: '#hifz' }
  ];

  const contactDetails = [
    { icon: Phone, text: '+92 XXX XXXXXXX' },
    { icon: Mail, text: 'info@islamicfoundationacademy.edu.pk' },
    { icon: MapPin, text: 'Main Boulevard, City Name, Pakistan' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:bg-blue-600', name: 'Facebook' },
    { icon: Twitter, href: '#', color: 'hover:bg-sky-500', name: 'Twitter' },
    { icon: Instagram, href: '#', color: 'hover:bg-pink-600', name: 'Instagram' },
    { icon: Youtube, href: '#', color: 'hover:bg-red-600', name: 'YouTube' },
    { icon: Linkedin, href: '#', color: 'hover:bg-blue-700', name: 'LinkedIn' }
  ];
  return (
     <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full animate-float-delayed"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* About Section */}
          <div className="lg:col-span-1 animate-fade-in-up">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mr-3 shadow-lg animate-pulse-slow">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Islamic Foundation Academy</h3>
                <p className="text-xs text-blue-200">Excellence in Education & Faith</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Nurturing young minds with quality education from Montessori to Matric, integrated with strong Islamic values and teachings.
            </p>
            
            {/* Social Links */}
            <div>
              <h4 className="text-sm font-semibold mb-4 text-blue-200">Follow Us</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className={`w-10 h-10 bg-white/10 rounded-full flex items-center justify-center ${social.color} transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 animate-scale-in`}
                      style={{animationDelay: `${index * 0.1}s`}}
                      aria-label={social.name}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <ChevronRight className="w-5 h-5 mr-2 text-blue-400" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white hover:translate-x-2 inline-flex items-center transition-all duration-300 group"
                  >
                    <ChevronRight className="w-4 h-4 mr-2 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Programs */}
          <div className="animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <ChevronRight className="w-5 h-5 mr-2 text-blue-400" />
              Our Programs
            </h3>
            <ul className="space-y-3">
              {programs.map((program, index) => (
                <li key={index}>
                  <a
                    href={program.href}
                    className="text-gray-300 hover:text-white hover:translate-x-2 inline-flex items-center transition-all duration-300 group"
                  >
                    <ChevronRight className="w-4 h-4 mr-2 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {program.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <ChevronRight className="w-5 h-5 mr-2 text-blue-400" />
              Contact Info
            </h3>
            <div className="space-y-4">
              {contactDetails.map((detail, index) => {
                const Icon = detail.icon;
                return (
                  <div key={index} className="flex items-start group">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center mr-3 flex-shrink-0 group-hover:bg-blue-500/30 transition-colors">
                      <Icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed pt-2">
                      {detail.text}
                    </p>
                  </div>
                );
              })}

              {/* Office Hours */}
              <div className="flex items-start group">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center mr-3 flex-shrink-0 group-hover:bg-blue-500/30 transition-colors">
                  <Clock className="w-5 h-5 text-blue-400" />
                </div>
                <div className="pt-2">
                  <p className="text-gray-300 text-sm">Mon-Fri: 8:00 AM - 4:00 PM</p>
                  <p className="text-gray-300 text-sm">Sat: 9:00 AM - 1:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-white/10 pt-10 mb-10 animate-fade-in-up" style={{animationDelay: '0.5s'}}>
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl font-bold mb-3 flex items-center justify-center">
                <Send className="w-6 h-6 mr-3" />
                Subscribe to Our Newsletter
              </h3>
              <p className="text-gray-300 mb-6">
                Get the latest updates about admissions, events, and news delivered to your inbox
              </p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/50 transition-all"
                  required
                />
                <button
                  type="submit"
                  className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg transform hover:scale-105"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 pt-8 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © {currentYear} Islamic Foundation Academy. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Designed & Developed with <Heart className="w-3 h-3 inline text-red-500 animate-pulse" /> for Education
              </p>
            </div>

            {/* Footer Links */}
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <span className="text-gray-600">|</span>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <span className="text-gray-600">|</span>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 group z-40 animate-bounce-light"
        aria-label="Scroll to top"
      >
        <svg className="w-6 h-6 text-white group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  )
}

export default FooterSection
