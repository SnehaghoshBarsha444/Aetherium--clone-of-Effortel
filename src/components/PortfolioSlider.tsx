
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PortfolioSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      id: 1,
      title: 'FinTech Revolution',
      category: 'Financial Technology',
      description: 'A comprehensive banking platform that revolutionizes digital finance with AI-powered insights.',
      color: 'from-blue-600 to-cyan-500',
      image: '/lovable-uploads/72c90b48-d89f-4339-945d-66d64da2ab8d.png'
    },
    {
      id: 2,
      title: 'E-Commerce Excellence',
      category: 'Retail Technology',
      description: 'Next-generation shopping experience with personalized recommendations and seamless checkout.',
      color: 'from-purple-600 to-pink-500',
      image: '/lovable-uploads/72c90b48-d89f-4339-945d-66d64da2ab8d.png'
    },
    {
      id: 3,
      title: 'Healthcare Innovation',
      category: 'Medical Technology',
      description: 'Telemedicine platform connecting patients with healthcare providers through intelligent matching.',
      color: 'from-green-600 to-emerald-500',
      image: '/lovable-uploads/72c90b48-d89f-4339-945d-66d64da2ab8d.png'
    },
    {
      id: 4,
      title: 'EdTech Platform',
      category: 'Education Technology',
      description: 'Interactive learning management system with gamification and progress tracking.',
      color: 'from-orange-600 to-red-500',
      image: '/lovable-uploads/72c90b48-d89f-4339-945d-66d64da2ab8d.png'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="portfolio" className="relative h-screen overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ clipPath: 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)' }}
          animate={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
          exit={{ clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)' }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="absolute inset-0"
        >
          {/* Background */}
          <div className={`absolute inset-0 bg-gradient-to-br ${projects[currentSlide].color} opacity-90`} />
          
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: `url(${projects[currentSlide].image})` }}
          />

          {/* Content */}
          <div className="relative z-10 h-full flex items-center">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="mb-8"
                >
                  <span className="text-8xl md:text-9xl font-bold text-white/20 block leading-none">
                    0{currentSlide + 1}
                  </span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                >
                  <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white text-sm font-medium mb-6">
                    {projects[currentSlide].category}
                  </span>
                  
                  <h2 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight">
                    {projects[currentSlide].title}
                  </h2>
                  
                  <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
                    {projects[currentSlide].description}
                  </p>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-gray-100 transition-colors"
                  >
                    View Case Study
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
        <motion.button
          onClick={prevSlide}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-colors"
        >
          <ChevronLeft size={24} />
        </motion.button>
        
        <div className="flex space-x-2 items-center">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white' : 'bg-white/40'
              }`}
            />
          ))}
        </div>
        
        <motion.button
          onClick={nextSlide}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-colors"
        >
          <ChevronRight size={24} />
        </motion.button>
      </div>
    </section>
  );
};

export default PortfolioSlider;
