import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Star, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import images
import img1 from '../../../assets/aaa.jpeg';
import img2 from '../../../assets/aaaa.jpeg';
import img3 from '../../../assets/aa.jpeg';
import img4 from '../../../assets/a.jpeg';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      image: img1,
      title: "Fresh from Farm to Table",
      subtitle: "Premium Quality Agricultural Products",
      description: "Connect directly with local farmers and get the freshest produce delivered to your doorstep",
      cta: "Shop Now",
      ctaLink: "/products",
      stats: { farmers: "500+", products: "1000+", regions: "8" }
    },
    {
      id: 2,
      image: img2,
      title: "Supporting Local Farmers",
      subtitle: "Empowering Ethiopian Agriculture",
      description: "Join our mission to strengthen the agricultural economy by connecting farmers with urban markets",
      cta: "Learn More",
      ctaLink: "/about",
      stats: { farmers: "500+", products: "1000+", regions: "8" }
    },
    {
      id: 3,
      image: img3,
      title: "Nationwide Delivery",
      subtitle: "From Every Region to Your Door",
      description: "Access agricultural products from all corners of Ethiopia with our reliable delivery network",
      cta: "Explore Regions",
      ctaLink: "/products",
      stats: { farmers: "500+", products: "1000+", regions: "8" }
    },
    {
      id: 4,
      image: img4,
      title: "Quality Guaranteed",
      subtitle: "Certified Fresh & Organic",
      description: "Every product is carefully selected and quality-checked to ensure you get the best value",
      cta: "View Products",
      ctaLink: "/products",
      stats: { farmers: "500+", products: "1000+", regions: "8" }
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative h-screen overflow-hidden bg-gray-900">
      {/* Background Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-white"
              >
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                  className="inline-flex items-center space-x-2 bg-primary-600/20 backdrop-blur-sm border border-primary-400/30 rounded-full px-4 py-2 mb-6"
                >
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium">Trusted by 10,000+ customers</span>
                </motion.div>

                {/* Main Content */}
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-5xl md:text-7xl font-bold mb-4 leading-tight"
                >
                  {slides[currentSlide].title}
                </motion.h1>

                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-xl md:text-2xl text-primary-300 font-semibold mb-6"
                >
                  {slides[currentSlide].subtitle}
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed"
                >
                  {slides[currentSlide].description}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="flex flex-col sm:flex-row gap-4 mb-12"
                >
                  <Link to={slides[currentSlide].ctaLink}>
                    <button className="group bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                      {slides[currentSlide].cta}
                      <TrendingUp className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                  
                  <button className="group flex items-center space-x-3 text-white hover:text-primary-300 transition-colors">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                      <Play className="w-5 h-5 ml-1" />
                    </div>
                    <span className="font-medium">Watch Our Story</span>
                  </button>
                </motion.div>

                {/* Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  className="grid grid-cols-3 gap-8 max-w-md"
                >
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-primary-400">
                      {slides[currentSlide].stats.farmers}
                    </div>
                    <div className="text-sm text-gray-300">Farmers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-primary-400">
                      {slides[currentSlide].stats.products}
                    </div>
                    <div className="text-sm text-gray-300">Products</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-primary-400">
                      {slides[currentSlide].stats.regions}
                    </div>
                    <div className="text-sm text-gray-300">Regions</div>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center space-x-4">
          {/* Dots */}
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-primary-500 w-8'
                    : 'bg-white/50 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Arrow Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Auto-play control */}
      <button
        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        className="absolute top-4 right-4 z-20 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm hover:bg-white/30 transition-colors"
      >
        {isAutoPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  );
};

export default Hero;