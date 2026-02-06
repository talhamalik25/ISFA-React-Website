import React, { useState } from "react";
import { Play, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const GallerySection = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = [
    { id: "all", name: "All", icon: "🏫" },
    { id: "campus", name: "Campus", icon: "🏢" },
    { id: "classroom", name: "Classrooms", icon: "📚" },
    { id: "activities", name: "Activities", icon: "🎨" },
    { id: "events", name: "Events", icon: "🎉" },
    { id: "facilities", name: "Facilities", icon: "⚡" },
  ];

  const galleryItems = [
    { id: 1, category: "campus", title: "Main Building", color: "from-blue-400 to-blue-600", icon: "🏛️" },
    { id: 2, category: "classroom", title: "Smart Classroom", color: "from-green-400 to-green-600", icon: "💻" },
    { id: 3, category: "activities", title: "Art Class", color: "from-pink-400 to-pink-600", icon: "🎨" },
    { id: 4, category: "campus", title: "School Garden", color: "from-emerald-400 to-emerald-600", icon: "🌳" },
    { id: 5, category: "events", title: "Annual Day", color: "from-purple-400 to-purple-600", icon: "🎭" },
    { id: 6, category: "facilities", title: "Library", color: "from-amber-400 to-amber-600", icon: "📖" },
    { id: 7, category: "classroom", title: "Science Lab", color: "from-cyan-400 to-cyan-600", icon: "🔬" },
    { id: 8, category: "activities", title: "Sports Day", color: "from-orange-400 to-orange-600", icon: "⚽" },
    { id: 9, category: "campus", title: "Prayer Hall", color: "from-teal-400 to-teal-600", icon: "🕌" },
    { id: 10, category: "facilities", title: "Computer Lab", color: "from-indigo-400 to-indigo-600", icon: "💾" },
    { id: 11, category: "events", title: "Quran Competition", color: "from-rose-400 to-rose-600", icon: "📿" },
    { id: 12, category: "activities", title: "Field Trip", color: "from-violet-400 to-violet-600", icon: "🚌" },
  ];

  const filteredItems =
    selectedCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <section
      id="gallery"
      className="py-20 bg-linear-to-br from-gray-50 to-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Gallery
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Explore Our Campus
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a visual journey through our facilities and moments
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition transform hover:scale-105 ${
                selectedCategory === category.id
                  ? "bg-linear-to-r from-blue-600 to-blue-700 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-100 shadow-md"
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedImage(item)}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-3 cursor-pointer"
              >
                <div
                  className={`relative h-64 bg-linear-to-br ${item.color} flex items-center justify-center overflow-hidden`}
                >
                  <div className="text-8xl group-hover:scale-125 group-hover:rotate-12 transition-transform duration-500">
                    {item.icon}
                  </div>

                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-xl font-bold mb-2">
                        View Full Image
                      </div>
                      <div className="w-12 h-0.5 bg-white mx-auto"></div>
                    </div>
                  </div>

                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-xs font-semibold">
                    {
                      categories.find((c) => c.id === item.category)
                        ?.name
                    }
                  </div>
                </div>

                <div className="p-4 bg-white">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-20 bg-linear-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white text-center"
        >
          <div className="text-5xl mb-4">🎥</div>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Want to See More?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Schedule a campus tour or request a virtual walkthrough.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition transform hover:scale-105"
            >
              Schedule Campus Tour
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-800 transition border-2 border-white/30 transform hover:scale-105"
            >
              <Play className="w-5 h-5 mr-2" />
              Virtual Tour
            </a>
          </div>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          >
            <button
              className="absolute top-4 right-4 text-white"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl w-full"
            >
              <div
                className={`bg-linear-to-br ${selectedImage.color} rounded-2xl p-12 md:p-20 flex flex-col items-center justify-center shadow-2xl`}
              >
                <div className="text-9xl mb-8">
                  {selectedImage.icon}
                </div>
                <h3 className="text-4xl font-bold text-white mb-4">
                  {selectedImage.title}
                </h3>
                <p className="text-white/80 text-lg">
                  {
                    categories.find(
                      (c) => c.id === selectedImage.category
                    )?.name
                  }
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
