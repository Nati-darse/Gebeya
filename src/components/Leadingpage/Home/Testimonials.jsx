import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Alemayehu Tadesse",
      role: "Restaurant Owner",
      location: "Addis Ababa",
      rating: 5,
      comment: "Gebeya has transformed how I source ingredients for my restaurant. The quality is exceptional and the direct connection with farmers ensures freshness. My customers can taste the difference!",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1"
    },
    {
      id: 2,
      name: "Sara Bekele",
      role: "Home Chef",
      location: "Bahir Dar",
      rating: 5,
      comment: "As someone who values organic, fresh produce, Gebeya is a game-changer. The variety of products from different regions is amazing, and the delivery is always on time.",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1"
    },
    {
      id: 3,
      name: "Daniel Haile",
      role: "Coffee Shop Owner",
      location: "Hawassa",
      rating: 5,
      comment: "The coffee beans I get from Gebeya are absolutely premium quality. My customers love the authentic Ethiopian coffee experience, and I love supporting local farmers directly.",
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1"
    },
    {
      id: 4,
      name: "Meron Assefa",
      role: "Nutritionist",
      location: "Mekelle",
      rating: 5,
      comment: "I recommend Gebeya to all my clients who want access to fresh, organic produce. The platform makes it easy to find exactly what you need, and the farmer profiles build trust.",
      image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1"
    },
    {
      id: 5,
      name: "Yohannes Girma",
      role: "Hotel Manager",
      location: "Dire Dawa",
      rating: 5,
      comment: "Sourcing quality ingredients for our hotel restaurant was always a challenge until we found Gebeya. The consistency in quality and reliable delivery has made our operations much smoother.",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-primary-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-800">
              {" "}Customers Say
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join thousands of satisfied customers who trust Gebeya for their agricultural product needs
          </p>
        </motion.div>

        {/* Main Testimonial */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl shadow-large p-8 md:p-12 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 left-6 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                <Quote className="w-6 h-6 text-primary-600" />
              </div>

              <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                {/* Customer Image */}
                <div className="flex-shrink-0">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-primary-200"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  {/* Rating */}
                  <div className="flex justify-center md:justify-start items-center space-x-1 mb-4">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Comment */}
                  <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 italic">
                    "{testimonials[currentTestimonial].comment}"
                  </blockquote>

                  {/* Customer Info */}
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className="text-primary-600 font-medium">
                      {testimonials[currentTestimonial].role}
                    </p>
                    <p className="text-gray-500">
                      {testimonials[currentTestimonial].location}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-gray-600 hover:text-primary-600 hover:shadow-xl transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-gray-600 hover:text-primary-600 hover:shadow-xl transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial
                  ? 'bg-primary-600 w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Customer Logos/Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-8">Trusted by businesses across Ethiopia</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-700">500+</div>
              <div className="text-sm text-gray-500">Restaurants</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-700">200+</div>
              <div className="text-sm text-gray-500">Hotels</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-700">1000+</div>
              <div className="text-sm text-gray-500">Families</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-700">50+</div>
              <div className="text-sm text-gray-500">Cafes</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;