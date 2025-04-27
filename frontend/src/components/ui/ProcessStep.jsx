import React from 'react';
import { motion } from 'framer-motion';

const ProcessStep = ({ number, title, description }) => {
  return (
    <motion.div 
      className="bg-white rounded-xl shadow-lg p-6 h-full border-t-4 border-maroon"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center mb-3">
          <div className="bg-maroon text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold">
            {number}
          </div>
          <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        </div>
        <p className="text-gray-600 flex-grow">{description}</p>
      </div>
    </motion.div>
  );
};

export default ProcessStep;
