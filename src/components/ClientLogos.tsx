
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const ClientLogos = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const logos = [
    { name: 'OpenAI', logo: 'OpenAI' },
    { name: 'Brex', logo: 'Brex' },
    { name: 'Cash App', logo: 'Cash App' },
    { name: 'Stripe', logo: 'Stripe' },
    { name: 'Vercel', logo: 'Vercel' },
    { name: 'Linear', logo: 'Linear' }
  ];

  return (
    <section className="py-16 bg-gray-950 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-gray-400 text-lg">Trusted by industry leaders</p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {logos.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, filter: 'blur(10px)' }}
              animate={isInView ? { opacity: 1, filter: 'blur(0px)' } : { opacity: 0, filter: 'blur(10px)' }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="flex items-center justify-center"
            >
              <div className="text-gray-500 hover:text-white transition-colors duration-300 text-xl font-semibold">
                {company.logo}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
