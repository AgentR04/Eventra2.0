import React from 'react';
import { motion } from 'framer-motion';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Sign Up & Create Event',
      description: 'Create an account and set up your college event with basic details like name, date, and venue.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
        </svg>
      )
    },
    {
      number: '02',
      title: 'Add Teams & Tasks',
      description: 'Define your organizational structure, add team members, and create tasks for each team.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    {
      number: '03',
      title: 'Let AI Optimize',
      description: 'Our AI will suggest optimal schedules, task assignments, and budget allocations based on your inputs.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      number: '04',
      title: 'Monitor & Adjust',
      description: 'Track progress in real-time, receive alerts for potential issues, and make adjustments as needed.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-block bg-maroon px-4 py-1 rounded-full text-sm font-semibold tracking-wide mb-3">HOW IT WORKS</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Four Simple Steps</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get your event up and running quickly with our streamlined process
          </p>
        </motion.div>
        
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-maroon hidden md:block" style={{ transform: 'translateX(-50%)' }}></div>
          
          <div className="space-y-24 relative">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
                  {/* Step number with icon */}
                  <div className="flex-shrink-0 relative z-10">
                    <div className="w-24 h-24 rounded-full bg-maroon flex items-center justify-center shadow-xl">
                      <div className="text-white">
                        {step.icon}
                      </div>
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white text-maroon font-bold flex items-center justify-center shadow-md">
                      {step.number.split('').pop()}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className={`mt-8 md:mt-0 ${index % 2 === 0 ? 'md:ml-12' : 'md:mr-12'} bg-gray-800 p-8 rounded-xl shadow-xl md:w-1/2`}>
                    <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <a 
            href="#" 
            className="inline-block bg-white text-maroon font-bold py-4 px-10 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105"
          >
            Get Started Now
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
