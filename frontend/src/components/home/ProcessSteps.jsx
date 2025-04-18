import React from 'react';
import ProcessStep from '../ui/ProcessStep';
import { motion } from 'framer-motion';

const ProcessSteps = () => {
  const steps = [
    {
      number: 1,
      title: 'Sign Up & Create Event',
      description: 'Create an account and set up your college event with basic details like name, date, and venue.'
    },
    {
      number: 2,
      title: 'Add Teams & Tasks',
      description: 'Define your organizational structure, add team members, and create tasks for each team.'
    },
    {
      number: 3,
      title: 'Let AI Optimize',
      description: 'Our AI will suggest optimal schedules, task assignments, and budget allocations based on your inputs.'
    },
    {
      number: 4,
      title: 'Monitor & Adjust',
      description: 'Track progress in real-time, receive alerts for potential issues, and make adjustments as needed.'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get your event up and running in four simple steps
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProcessStep 
                number={step.number}
                title={step.title}
                description={step.description}
              />
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <a 
            href="#" 
            className="inline-block bg-maroon text-white font-bold py-3 px-8 rounded-full shadow-md hover:bg-maroon-dark transition-colors duration-300"
          >
            Start Your Journey
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSteps;
