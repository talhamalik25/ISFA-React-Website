import React, { useState, useEffect } from "react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("right");

  const testimonials = [
    {
      id: 1,
      name: "Fatima Khan",
      role: "Parent - Grade 5 Student",
      image: "👩",
      rating: 5,
      text:
        "Islamic Foundation Academy has been a blessing for our family. The balance between academic excellence and Islamic education is exactly what we were looking for. My daughter loves going to school every day and her Quran recitation has improved tremendously.",
      highlight: "Perfect balance of academics and Islamic values",
    },
    {
      id: 2,
      name: "Ahmed Ali",
      role: "Parent - Hifz Student",
      text:
        "Our son joined the Hifz program two years ago, and the progress has been remarkable. The teachers are patient, knowledgeable, and truly care about each student. The academy has created an environment where our children can thrive both spiritually and academically.",
      image: "👨",
      rating: 5,
      highlight: "Excellent Hifz program with caring teachers",
    },
    {
      id: 3,
      name: "Sarah Mahmood",
      role: "Parent - Montessori Student",
      text:
        "As a parent of a Montessori student, I'm impressed by the nurturing environment and creative teaching methods. My child has developed confidence, good manners, and a love for learning. The Islamic values taught here complement what we teach at home.",
      image: "👩",
      rating: 5,
      highlight: "Nurturing environment for young learners",
    },
    {
      id: 4,
      name: "Hassan Raza",
      role: "Parent - Grade 8 Student",
      text:
        "The faculty at Islamic Foundation Academy goes above and beyond. They don't just teach subjects; they mentor and guide our children. The focus on character building alongside academics is what sets this school apart from others.",
      image: "👨",
      rating: 5,
      highlight: "Dedicated teachers who truly care",
    },
    {
      id: 5,
      name: "Ayesha Siddiqui",
      role: "Parent - Primary Student",
      text:
        "We moved our daughter here from another school, and it was the best decision we made. The small class sizes mean she gets individual attention, and the Islamic environment gives us peace of mind. Highly recommend to all parents!",
      image: "👩",
      rating: 5,
      highlight: "Individual attention and Islamic environment",
    },
    {
      id: 6,
      name: "Usman Tariq",
      role: "Parent - Matric Student",
      text:
        "The academy's preparation for board exams is outstanding. My son not only scored excellent marks but also maintained his Islamic studies. The teachers are experienced and the support system is excellent.",
      image: "👨",
      rating: 5,
      highlight: "Excellent board exam preparation",
    },
  ];

  const nextTestimonial = () => {
    setDirection("right");
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setDirection("left");
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const goToTestimonial = (index) => {
    setDirection(index > currentIndex ? "right" : "left");
    setCurrentIndex(index);
  };

  // Auto play
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  const slideVariants = {
    enter: (direction) => ({
      x: direction === "right" ? 80 : -80,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (direction) => ({
      x: direction === "right" ? -80 : 80,
      opacity: 0,
    }),
  };

  return (
    <section
      id="testimonials"
      className="py-20 bg-linear-to-br from-blue-50 to-gray-50 overflow-hidden"
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
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            What Parents Say About Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our community of satisfied parents who trust us with
            their children's education
          </p>
        </motion.div>

        {/* Main Card */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
            <Quote className="absolute top-0 right-0 w-32 h-32 text-blue-100 translate-x-4 -translate-y-4" />

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5 }}
              >
                {/* Stars */}
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map(
                    (_, i) => (
                      <Star
                        key={i}
                        className="w-6 h-6 text-yellow-400 fill-current"
                      />
                    )
                  )}
                </div>

                {/* Text */}
                <p className="text-xl md:text-2xl text-gray-700 text-center mb-6 leading-relaxed italic">
                  "{testimonials[currentIndex].text}"
                </p>

                {/* Highlight */}
                <div className="flex justify-center mb-8">
                  <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                    💙 {testimonials[currentIndex].highlight}
                  </span>
                </div>

                {/* Author */}
                <div className="flex items-center justify-center">
                  <div className="w-16 h-16 bg-linear-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-3xl mr-4 shadow-lg">
                    {testimonials[currentIndex].image}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-gray-600">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="flex justify-between items-center mt-8 pt-8 border-t">
              <button
                onClick={prevTestimonial}
                className="p-3 rounded-full bg-blue-100 hover:bg-blue-200 text-blue-600 transition hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={`h-3 rounded-full transition ${
                      index === currentIndex
                        ? "bg-blue-600 w-8"
                        : "bg-gray-300 w-3"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-blue-100 hover:bg-blue-200 text-blue-600 transition hover:scale-110"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => goToTestimonial(index)}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition hover:-translate-y-2 cursor-pointer"
            >
              <div className="flex mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              <p className="text-gray-700 mb-4 italic text-sm line-clamp-3">
                "{t.text}"
              </p>

              <div className="flex items-center pt-4 border-t">
                <div className="w-12 h-12 bg-linear-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-2xl mr-3">
                  {t.image}
                </div>
                <div>
                  <h5 className="font-bold text-gray-900 text-sm">
                    {t.name}
                  </h5>
                  <p className="text-gray-600 text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
