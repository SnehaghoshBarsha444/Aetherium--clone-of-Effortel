
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ProductGrid = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const products = [
    {
      id: 1,
      title: 'AI Dashboard',
      category: 'Analytics Platform',
      image: '/lovable-uploads/72c90b48-d89f-4339-945d-66d64da2ab8d.png',
      video: '/lovable-uploads/72c90b48-d89f-4339-945d-66d64da2ab8d.png'
    },
    {
      id: 2,
      title: 'Mobile Banking',
      category: 'FinTech App',
      image: '/lovable-uploads/72c90b48-d89f-4339-945d-66d64da2ab8d.png',
      video: '/lovable-uploads/72c90b48-d89f-4339-945d-66d64da2ab8d.png'
    },
    {
      id: 3,
      title: 'E-Commerce Suite',
      category: 'Retail Platform',
      image: '/lovable-uploads/72c90b48-d89f-4339-945d-66d64da2ab8d.png',
      video: '/lovable-uploads/72c90b48-d89f-4339-945d-66d64da2ab8d.png'
    },
    {
      id: 4,
      title: 'Healthcare Portal',
      category: 'Medical Platform',
      image: '/lovable-uploads/72c90b48-d89f-4339-945d-66d64da2ab8d.png',
      video: '/lovable-uploads/72c90b48-d89f-4339-945d-66d64da2ab8d.png'
    },
    {
      id: 5,
      title: 'Learning Management',
      category: 'EdTech Solution',
      image: '/lovable-uploads/72c90b48-d89f-4339-945d-66d64da2ab8d.png',
      video: '/lovable-uploads/72c90b48-d89f-4339-945d-66d64da2ab8d.png'
    },
    {
      id: 6,
      title: 'Social Network',
      category: 'Community Platform',
      image: '/lovable-uploads/72c90b48-d89f-4339-945d-66d64da2ab8d.png',
      video: '/lovable-uploads/72c90b48-d89f-4339-945d-66d64da2ab8d.png'
    }
  ];

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
            Featured <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Products</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explore our portfolio of innovative digital products and platforms.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredItem(product.id)}
              onMouseLeave={() => setHoveredItem(null)}
              className="group relative bg-gray-800 rounded-2xl overflow-hidden cursor-pointer"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <motion.img
                  src={hoveredItem === product.id ? product.video : product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  animate={{
                    scale: hoveredItem === product.id ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                />
                
                {/* Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: hoveredItem === product.id ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
                />

                {/* Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: hoveredItem === product.id ? 1 : 0,
                    y: hoveredItem === product.id ? 0 : 20,
                  }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="absolute bottom-6 left-6"
                >
                  <button className="px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-100 transition-colors">
                    Explore
                  </button>
                </motion.div>
              </div>

              <div className="p-6">
                <span className="text-blue-400 text-sm font-medium">
                  {product.category}
                </span>
                <h3 className="text-xl font-bold text-white mt-2 group-hover:text-blue-400 transition-colors">
                  {product.title}
                </h3>
              </div>

              {/* Hover Glow Effect */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: hoveredItem === product.id ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                  background: 'linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))',
                  boxShadow: '0 0 40px rgba(59, 130, 246, 0.3)',
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
