import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CTASection = ({ title, subtitle, buttonText, buttonLink }) => {
  return (
    <div className="bg-maroon text-white py-12 px-4 sm:px-6 lg:px-8 rounded-lg shadow-xl">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          className="text-3xl font-extrabold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {title}
        </motion.h2>
        <motion.p 
          className="text-lg mb-8 text-white text-opacity-90"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {subtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Link 
            to={buttonLink} 
            className="inline-block bg-white text-maroon font-bold py-3 px-8 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-300 no-underline"
          >
            {buttonText}
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default CTASection;
