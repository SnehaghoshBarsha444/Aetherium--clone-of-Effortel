
import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const footerLinks = {
    Services: ['Strategy', 'Design', 'Development', 'Consulting'],
    Company: ['About', 'Careers', 'Contact', 'Blog'],
    Resources: ['Case Studies', 'Insights', 'Documentation', 'Support'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR']
  };

  return (
    <footer id="footer" className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">
                Aetherium
              </h3>
              <p className="text-gray-400 text-lg mb-6 max-w-md">
                Transforming digital experiences through innovative design and cutting-edge technology.
              </p>
              <div className="flex space-x-4">
                {['Twitter', 'LinkedIn', 'GitHub', 'Dribbble'].map((social) => (
                  <motion.a
                    key={social}
                    href="#"
                    whileHover={{ scale: 1.1, color: '#3B82F6' }}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-gray-700 transition-colors"
                  >
                    <span className="text-sm font-bold">{social[0]}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h4 className="text-white font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-800 pt-8 mt-12 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-500 text-sm">
            © 2024 Aetherium. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-4 md:mt-0">
            Crafted with precision and passion.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
