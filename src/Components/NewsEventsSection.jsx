import React from 'react'
import { useState } from 'react'
import { ArrowRight, Clock, X } from 'lucide-react'

const NewsEventsSection = () => {
    const [activeTab, setActiveTab] = useState('all');
  const [selectedNews, setSelectedNews] = useState(null);

  const newsEvents = [
    {
      id: 1,
      type: 'event',
      title: 'Annual Sports Day 2026',
      date: 'March 15, 2026',
      time: '9:00 AM',
      category: 'Sports',
      icon: '🏆',
      image: '⚽',
      description: 'Join us for our Annual Sports Day featuring track and field events, team sports, and awards ceremony.',
      details: 'All students will participate in various sports activities. Parents are invited to attend.',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50'
    },
    {
      id: 2,
      type: 'news',
      title: 'Outstanding Results in Board Exams',
      date: 'February 5, 2026',
      category: 'Academics',
      icon: '🎓',
      image: '📊',
      description: 'Our students achieved exceptional results with 100% pass rate and multiple distinctions in the recent board examinations.',
      details: '25 students scored above 90%, showcasing the quality of our education.',
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'bg-blue-50'
    },
    {
      id: 3,
      type: 'event',
      title: 'Quran Recitation Competition',
      date: 'March 20, 2026',
      time: '10:00 AM',
      category: 'Islamic',
      icon: '📖',
      image: '🕌',
      description: 'Inter-school Quran recitation competition with participants from various Islamic institutions.',
      details: 'Registration open for all students. Prizes for top 3 positions.',
      color: 'from-purple-500 to-violet-600',
      bgColor: 'bg-purple-50'
    },
    {
      id: 4,
      type: 'news',
      title: 'New Science Lab Inauguration',
      date: 'January 28, 2026',
      category: 'Infrastructure',
      icon: '🔬',
      image: '🧪',
      description: 'State-of-the-art science laboratory with modern equipment inaugurated to enhance practical learning.',
      details: 'Equipped with latest technology for Physics, Chemistry, and Biology experiments.',
      color: 'from-cyan-500 to-blue-600',
      bgColor: 'bg-cyan-50'
    },
    {
      id: 5,
      type: 'event',
      title: 'Parent-Teacher Meeting',
      date: 'March 25, 2026',
      time: '2:00 PM',
      category: 'General',
      icon: '👨‍👩‍👧',
      image: '📋',
      description: 'Quarterly parent-teacher meeting to discuss student progress and academic performance.',
      details: 'All parents are requested to attend. Individual meetings with teachers available.',
      color: 'from-amber-500 to-orange-600',
      bgColor: 'bg-amber-50'
    },
    {
      id: 6,
      type: 'news',
      title: 'Students Win National Hifz Competition',
      date: 'January 15, 2026',
      category: 'Achievement',
      icon: '⭐',
      image: '🏅',
      description: 'Three of our Hifz students won first, second, and third positions in the National Hifz Competition.',
      details: 'Proud moment for Islamic Foundation Academy. Cash prizes awarded to winners.',
      color: 'from-yellow-500 to-amber-600',
      bgColor: 'bg-yellow-50'
    },
    {
      id: 7,
      type: 'event',
      title: 'Science Fair 2026',
      date: 'April 10, 2026',
      time: '11:00 AM',
      category: 'Academics',
      icon: '🔭',
      image: '🚀',
      description: 'Annual Science Fair showcasing innovative projects and experiments by students from all grades.',
      details: 'Students will present their science projects. Open to parents and visitors.',
      color: 'from-indigo-500 to-purple-600',
      bgColor: 'bg-indigo-50'
    },
    {
      id: 8,
      type: 'news',
      title: 'Digital Library Launch',
      date: 'February 1, 2026',
      category: 'Technology',
      icon: '💻',
      image: '📚',
      description: 'New digital library with access to thousands of e-books and online resources now available to all students.',
      details: 'Students can access digital resources from home. Login credentials provided.',
      color: 'from-rose-500 to-pink-600',
      bgColor: 'bg-rose-50'
    }
  ];

  const filteredNews = activeTab === 'all' 
    ? newsEvents 
    : newsEvents.filter(item => item.type === activeTab);

  const categories = [
    { id: 'all', name: 'All Updates', icon: '📰' },
    { id: 'news', name: 'News', icon: '📢' },
    { id: 'event', name: 'Events', icon: '📅' }
  ];
  return (
   <section id="news" className="py-20 bg-gradient-to-br from-blue-50 via-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-down">
          <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Latest Updates
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            News & Events
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest happenings, achievements, and upcoming events at our academy
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center gap-4 mb-12 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          {categories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 animate-scale-in ${
                activeTab === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md hover:shadow-lg'
              }`}
              style={{animationDelay: `${0.3 + index * 0.05}s`}}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.map((item, index) => (
            <div
              key={item.id}
              className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 cursor-pointer animate-fade-in-up`}
              style={{animationDelay: `${0.4 + index * 0.05}s`}}
              onClick={() => setSelectedNews(item)}
            >
              {/* Image/Icon Header */}
              <div className={`relative h-48 bg-gradient-to-br ${item.color} flex items-center justify-center overflow-hidden`}>
                {/* Background Animation */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0 animate-pulse-slow" style={{
                    backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
                    backgroundSize: '30px 30px'
                  }}></div>
                </div>

                {/* Main Icon */}
                <div className="relative z-10 text-8xl transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                  {item.image}
                </div>

                {/* Type Badge */}
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold text-white backdrop-blur-sm ${
                  item.type === 'event' ? 'bg-green-500/80' : 'bg-blue-500/80'
                }`}>
                  {item.type === 'event' ? '📅 Event' : '📢 News'}
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold bg-white/90 text-gray-700">
                  {item.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Date/Time */}
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{item.date}</span>
                  {item.time && (
                    <>
                      <span className="mx-2">•</span>
                      <span>{item.time}</span>
                    </>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Read More */}
                <button className="flex items-center text-blue-600 font-semibold group-hover:gap-2 transition-all duration-300">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Bottom Border Animation */}
              <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredNews.length === 0 && (
          <div className="text-center py-20 animate-fade-in">
            <div className="text-6xl mb-4">📭</div>
            <p className="text-xl text-gray-500">No updates found in this category</p>
          </div>
        )}

        {/* Newsletter Subscription */}
        <div className="mt-20 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden animate-fade-in-up" style={{animationDelay: '0.8s'}}>
          {/* Animated Background */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full animate-gradient" style={{
              background: 'linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent)',
              backgroundSize: '200% 200%'
            }}></div>
          </div>

          <div className="relative z-10 text-center">
            <div className="text-5xl mb-4 animate-bounce-light">📬</div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Stay Updated!
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive latest news, events, and important announcements
            </p>
            
            <form className="max-w-md mx-auto flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-lg text-gray-900 outline-none focus:ring-4 focus:ring-white/30 transition-all"
                required
              />
              <button
                type="submit"
                className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg transform hover:scale-105"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

      </div>

      {/* News Detail Modal */}
      {selectedNews && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fade-in overflow-y-auto"
          onClick={() => setSelectedNews(null)}
        >
          <div 
            className="max-w-3xl w-full bg-white rounded-2xl overflow-hidden my-8 animate-zoom-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className={`bg-gradient-to-br ${selectedNews.color} p-8 text-white relative`}>
              <button 
                onClick={() => setSelectedNews(null)}
                className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
              
              <div className="flex items-center mb-4">
                <span className="text-7xl mr-4">{selectedNews.image}</span>
                <div>
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-2 ${
                    selectedNews.type === 'event' ? 'bg-green-500' : 'bg-blue-500'
                  }`}>
                    {selectedNews.type === 'event' ? '📅 Event' : '📢 News'}
                  </div>
                  <h3 className="text-3xl font-bold">{selectedNews.title}</h3>
                </div>
              </div>
              
              <div className="flex items-center text-white/90">
                <Clock className="w-5 h-5 mr-2" />
                <span>{selectedNews.date}</span>
                {selectedNews.time && (
                  <>
                    <span className="mx-2">•</span>
                    <span>{selectedNews.time}</span>
                  </>
                )}
                <span className="mx-2">•</span>
                <span>{selectedNews.category}</span>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                {selectedNews.description}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {selectedNews.details}
              </p>
              
              {selectedNews.type === 'event' && (
                <div className="mt-8 p-6 bg-blue-50 rounded-xl border-l-4 border-blue-600">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Event Information
                  </h4>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Date:</strong> {selectedNews.date}</p>
                    <p><strong>Time:</strong> {selectedNews.time}</p>
                    <p><strong>Category:</strong> {selectedNews.category}</p>
                  </div>
                </div>
              )}
              
              <div className="mt-8 flex gap-4">
                <button className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg">
                  Register / Learn More
                </button>
                <button 
                  onClick={() => setSelectedNews(null)}
                  className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300"
                >
                  Close
                </button>
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

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  )
}

export default NewsEventsSection
