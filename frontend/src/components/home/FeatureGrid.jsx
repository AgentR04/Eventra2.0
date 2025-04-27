import React from 'react';
import { FaCalendarAlt, FaUsers, FaChartPie, FaBell, FaRobot, FaMobileAlt } from 'react-icons/fa';
import FeatureCard from '../ui/FeatureCard';
import { motion } from 'framer-motion';

const FeatureGrid = () => {
  const features = [
    {
      icon: <FaCalendarAlt size={24} />,
      title: 'Smart Scheduling System',
      description: 'Auto-detect and resolve scheduling conflicts with AI suggestions for optimal time slots.'
    },
    {
      icon: <FaUsers size={24} />,
      title: 'AI-Based Team Management',
      description: 'Assign tasks intelligently based on skills and workload with role-based task assignments.'
    },
    {
      icon: <FaChartPie size={24} />,
      title: 'Budget Management & Tracking',
      description: 'Track all finances with expense logging, budget allocation, and visual dashboards.'
    },
    {
      icon: <FaBell size={24} />,
      title: 'Communication System',
      description: 'Real-time updates for task changes, schedule updates, and automated reminders.'
    },
    {
      icon: <FaRobot size={24} />,
      title: 'AI Optimization & Assistant',
      description: 'Get recommendations based on past event data and use our AI chatbot for quick answers.'
    },
    {
      icon: <FaMobileAlt size={24} />,
      title: 'Mobile-Friendly Access',
      description: 'Access from any device with responsive design and role-based logins for all team members.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-50">
        <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-maroon opacity-5"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-maroon opacity-5"></div>
        <div className="absolute bottom-0 left-1/3 w-80 h-80 rounded-full bg-maroon opacity-5"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-block mb-3">
            <span className="bg-maroon bg-opacity-10 text-maroon px-4 py-2 rounded-full text-sm font-semibold tracking-wide">POWERFUL FEATURES</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Everything You Need for Event Planning</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI-powered platform simplifies every aspect of college event planning
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <FeatureCard 
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <a 
            href="#" 
            className="inline-flex items-center bg-maroon text-white font-bold py-3 px-8 rounded-full shadow-md hover:bg-maroon-dark transition-colors duration-300 group"
          >
            <span>Explore All Features</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureGrid;
