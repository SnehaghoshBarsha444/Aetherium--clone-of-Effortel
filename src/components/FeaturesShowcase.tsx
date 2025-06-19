
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FeaturesShowcase = () => {
  const [activeTab, setActiveTab] = useState(0);

  const features = [
    {
      id: 'strategy',
      title: 'Strategy',
      headline: 'Data-Driven Digital Strategy',
      description: 'We combine market insights with cutting-edge analytics to craft strategies that drive measurable growth and sustainable competitive advantage.',
      mockup: (
        <div className="bg-gray-800 rounded-lg p-6 h-64 relative overflow-hidden">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-white font-semibold">Strategy Dashboard</h4>
            <div className="flex space-x-2">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="w-3 h-3 rounded-full bg-gray-600" />
              ))}
            </div>
          </div>
          <div className="space-y-3">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded bg-blue-500/20 flex items-center justify-center">
                  <div className="w-4 h-4 rounded bg-blue-500" />
                </div>
                <div className="flex-1">
                  <div className="h-3 bg-gray-700 rounded mb-1" style={{ width: `${80 - i * 10}%` }} />
                  <div className="h-2 bg-gray-600 rounded" style={{ width: `${60 - i * 5}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'branding',
      title: 'Branding',
      headline: 'Identity That Resonates',
      description: 'From logo design to comprehensive brand systems, we create visual identities that capture your essence and connect with your audience.',
      mockup: (
        <div className="bg-gray-800 rounded-lg p-6 h-64 flex items-center justify-center">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <span className="text-white font-bold text-2xl">A</span>
            </div>
            <h3 className="text-white text-xl font-bold mb-2">Aetherium</h3>
            <div className="flex space-x-2 justify-center">
              {['#6366F1', '#8B5CF6', '#EC4899'].map((color, i) => (
                <div key={i} className="w-8 h-8 rounded" style={{ backgroundColor: color }} />
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'development',
      title: 'Development',
      headline: 'Cutting-Edge Technology',
      description: 'We build scalable, performant applications using the latest technologies and best practices in modern web development.',
      mockup: (
        <div className="bg-gray-900 rounded-lg p-4 h-64 font-mono text-sm overflow-hidden">
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <div className="text-green-400">
            <div>$ npm run build</div>
            <div className="text-gray-500 mt-2">
              ✓ Building for production...
            </div>
            <div className="text-blue-400 mt-1">
              ✓ Optimizing bundle size
            </div>
            <div className="text-purple-400 mt-1">
              ✓ Generating static files
            </div>
            <div className="text-green-400 mt-1">
              ✓ Build completed successfully
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'ai',
      title: 'AI Integration',
      headline: 'Intelligent Automation',
      description: 'Harness the power of artificial intelligence to automate processes, enhance user experiences, and unlock new possibilities.',
      mockup: (
        <div className="bg-gray-800 rounded-lg p-6 h-64 relative">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
              <span className="text-white text-sm font-bold">AI</span>
            </div>
            <div>
              <h4 className="text-white font-semibold">AI Assistant</h4>
              <p className="text-gray-400 text-sm">Processing request...</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="bg-blue-500/20 rounded-lg p-3">
              <p className="text-blue-300 text-sm">Analyzing user behavior patterns...</p>
            </div>
            <div className="bg-purple-500/20 rounded-lg p-3">
              <p className="text-purple-300 text-sm">Generating personalized recommendations...</p>
            </div>
            <div className="bg-green-500/20 rounded-lg p-3">
              <p className="text-green-300 text-sm">Task completed successfully!</p>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="features" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Capabilities</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive solutions that transform your digital presence and drive business growth.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Tabs */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <motion.button
                key={feature.id}
                onClick={() => setActiveTab(index)}
                className={`w-full text-left p-6 rounded-xl border transition-all duration-300 relative overflow-hidden ${
                  activeTab === index 
                    ? 'border-blue-500 bg-blue-500/10' 
                    : 'border-gray-700 bg-gray-800/50 hover:border-gray-600'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {activeTab === index && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-xl"
                    transition={{ duration: 0.3 }}
                  />
                )}
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">
                    {feature.description.substring(0, 80)}...
                  </p>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Content */}
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <h3 className="text-3xl font-bold text-white">
                  {features[activeTab].headline}
                </h3>
                <p className="text-lg text-gray-300">
                  {features[activeTab].description}
                </p>
                <div className="mt-8">
                  {features[activeTab].mockup}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesShowcase;
