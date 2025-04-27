import React from 'react';
import { motion } from 'framer-motion';

const FeatureCard = ({ icon, title, description }) => {
  return (
    <motion.div 
      className="bg-white rounded-xl shadow-lg p-6 h-full border border-gray-100 overflow-hidden relative group"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      {/* Background decoration */}
      <div className="absolute -right-6 -top-6 w-20 h-20 rounded-full bg-maroon opacity-10 group-hover:scale-150 transition-transform duration-500"></div>
      
      <div className="flex flex-col h-full relative z-10">
        {/* Icon with circular background */}
        <div className="w-14 h-14 rounded-full bg-maroon bg-opacity-10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
          <div className="text-maroon">
            {icon}
          </div>
        </div>
        
        {/* Title with animated underline */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-800 inline-block">{title}</h3>
          <div className="h-0.5 w-0 bg-maroon mt-1 group-hover:w-full transition-all duration-300 ease-in-out"></div>
        </div>
        
        {/* Description */}
        <p className="text-gray-600 flex-grow leading-relaxed">{description}</p>
        
        {/* Learn more link */}
        <div className="mt-4 pt-2 border-t border-gray-100">
          <a href="#" className="text-maroon font-medium flex items-center text-sm group-hover:translate-x-2 transition-transform duration-300">
            Learn more
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
