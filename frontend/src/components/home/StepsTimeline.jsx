import React from 'react';
import { motion } from 'framer-motion';

const StepsTimeline = () => {
  const steps = [
    {
      number: '1',
      title: 'Sign Up & Create Event',
      description: 'Create an account and set up your college event with basic details like name, date, and venue.',
      color: '#800020', // maroon
    },
    {
      number: '2',
      title: 'Add Teams & Tasks',
      description: 'Define your organizational structure, add team members, and create tasks for each team.',
      color: '#9a0026', // slightly different maroon
    },
    {
      number: '3',
      title: 'Let AI Optimize',
      description: 'Our AI will suggest optimal schedules, task assignments, and budget allocations based on your inputs.',
      color: '#b4002d', // another maroon variant
    },
    {
      number: '4',
      title: 'Monitor & Adjust',
      description: 'Track progress in real-time, receive alerts for potential issues, and make adjustments as needed.',
      color: '#ce0033', // final maroon variant
    }
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">How Eventra Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our streamlined process gets your event up and running in four simple steps
          </p>
        </motion.div>
        
        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className="mb-12 relative"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col md:flex-row items-stretch bg-white rounded-2xl shadow-xl overflow-hidden">
                {/* Number column */}
                <div 
                  className="w-full md:w-1/4 p-8 flex items-center justify-center"
                  style={{ backgroundColor: step.color }}
                >
                  <span className="text-8xl font-bold text-white opacity-90">{step.number}</span>
                </div>
                
                {/* Content column */}
                <div className="w-full md:w-3/4 p-8">
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-gray-600 text-lg">{step.description}</p>
                  
                  <div className="mt-6">
                    <a 
                      href="#" 
                      className="inline-flex items-center text-maroon font-medium hover:underline"
                    >
                      Learn more
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute left-1/2 bottom-0 transform translate-x(-50%) translate-y(100%) h-12 w-1 bg-gray-300"></div>
              )}
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <a 
            href="#" 
            className="inline-block bg-maroon text-white font-bold py-4 px-10 rounded-full shadow-lg hover:bg-maroon-dark transition-all duration-300 transform hover:scale-105"
          >
            Start Planning Your Event
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default StepsTimeline;
