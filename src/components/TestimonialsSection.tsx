
import React from 'react';
import { motion } from 'framer-motion';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Aetherium transformed our digital presence completely. Their innovative approach and technical expertise exceeded all expectations.",
      author: "Sarah Chen",
      role: "CEO, TechFlow",
      avatar: "SC"
    },
    {
      quote: "The team's attention to detail and commitment to excellence is unmatched. They delivered beyond what we thought was possible.",
      author: "Marcus Rodriguez",
      role: "CTO, InnovateLabs",
      avatar: "MR"
    },
    {
      quote: "Working with Aetherium was a game-changer for our business. Their strategic insights drove remarkable growth.",
      author: "Emily Thompson",
      role: "Founder, GrowthCo",
      avatar: "ET"
    },
    {
      quote: "The level of creativity and technical skill they bring to every project is simply outstanding. Highly recommended.",
      author: "David Park",
      role: "VP Product, FutureStart",
      avatar: "DP"
    },
    {
      quote: "Aetherium's innovative solutions helped us stay ahead of the competition. Their expertise is truly world-class.",
      author: "Lisa Wang",
      role: "CMO, NextGen",
      avatar: "LW"
    },
    {
      quote: "The results speak for themselves. Our engagement metrics improved by 300% after working with their team.",
      author: "Alex Johnson",
      role: "Director, TechVision",
      avatar: "AJ"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            background: [
              'linear-gradient(45deg, #1e1b4b, #312e81, #4c1d95, #6b21a8)',
              'linear-gradient(45deg, #312e81, #4c1d95, #6b21a8, #1e1b4b)',
              'linear-gradient(45deg, #4c1d95, #6b21a8, #1e1b4b, #312e81)',
              'linear-gradient(45deg, #6b21a8, #1e1b4b, #312e81, #4c1d95)',
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
          className="w-full h-full"
        />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            What Our <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Hear from the visionaries we've helped transform their digital presence.
          </p>
        </motion.div>

        {/* Scrolling Testimonials */}
        <div className="relative">
          {/* First Row - Moving Right */}
          <motion.div
            animate={{ x: ['-100%', '0%'] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
            className="flex space-x-8 mb-8"
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={`row1-${index}`}
                className="flex-shrink-0 w-80 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
              >
                <p className="text-white/90 text-lg mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.author}</h4>
                    <p className="text-white/70 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Second Row - Moving Left */}
          <motion.div
            animate={{ x: ['0%', '-100%'] }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="flex space-x-8"
          >
            {[...testimonials.slice(3), ...testimonials.slice(3)].map((testimonial, index) => (
              <div
                key={`row2-${index}`}
                className="flex-shrink-0 w-80 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
              >
                <p className="text-white/90 text-lg mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-cyan-400 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.author}</h4>
                    <p className="text-white/70 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
