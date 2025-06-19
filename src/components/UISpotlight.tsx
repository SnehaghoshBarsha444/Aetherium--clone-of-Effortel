
import React from 'react';
import { motion } from 'framer-motion';

const UISpotlight = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Brand <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Kits</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive design systems that ensure consistency across all touchpoints.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative bg-gray-800 rounded-3xl p-8 border border-gray-700 overflow-hidden"
          >
            {/* Aurora Glow Effect */}
            <div className="absolute inset-0 opacity-30">
              <motion.div
                animate={{
                  background: [
                    'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)',
                    'radial-gradient(circle at 80% 50%, rgba(147, 51, 234, 0.3) 0%, transparent 50%)',
                    'radial-gradient(circle at 50% 20%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)',
                    'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)',
                  ]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="w-full h-full rounded-3xl"
              />
            </div>

            <div className="relative z-10">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-6">
                    Design System Configuration
                  </h3>
                  <p className="text-gray-300 mb-8">
                    Our comprehensive brand kits include everything you need to maintain consistency across all digital touchpoints.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full" />
                      <span className="text-gray-300">Typography Scale & Hierarchy</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full" />
                      <span className="text-gray-300">Color Palette & Variables</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-pink-500 rounded-full" />
                      <span className="text-gray-300">Component Library</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full" />
                      <span className="text-gray-300">Spacing & Layout Systems</span>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  {/* Mock UI Panel */}
                  <div className="bg-black/50 rounded-2xl p-6 backdrop-blur-sm border border-gray-600">
                    <div className="flex items-center justify-between mb-6">
                      <h4 className="text-white font-semibold">Brand Kit Settings</h4>
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                      </div>
                    </div>

                    {/* Color Swatches */}
                    <div className="mb-6">
                      <h5 className="text-gray-300 text-sm mb-3">Primary Colors</h5>
                      <div className="flex space-x-3">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="w-12 h-12 rounded-lg bg-blue-500 cursor-pointer shadow-lg"
                        />
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="w-12 h-12 rounded-lg bg-purple-500 cursor-pointer shadow-lg"
                        />
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="w-12 h-12 rounded-lg bg-pink-500 cursor-pointer shadow-lg"
                        />
                      </div>
                    </div>

                    {/* Typography */}
                    <div className="mb-6">
                      <h5 className="text-gray-300 text-sm mb-3">Typography</h5>
                      <div className="space-y-2">
                        <div className="text-white text-lg font-bold">Heading 1</div>
                        <div className="text-white text-base font-semibold">Heading 2</div>
                        <div className="text-gray-300 text-sm">Body Text</div>
                      </div>
                    </div>

                    {/* Components Preview */}
                    <div>
                      <h5 className="text-gray-300 text-sm mb-3">Components</h5>
                      <div className="space-y-3">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          className="w-full py-2 bg-blue-500 text-white rounded-lg font-medium"
                        >
                          Primary Button
                        </motion.button>
                        <div className="w-full p-3 bg-gray-700 rounded-lg">
                          <div className="h-2 bg-gray-600 rounded w-3/4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default UISpotlight;
