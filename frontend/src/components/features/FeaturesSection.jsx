import { motion } from 'framer-motion';
import { FaCalendarAlt, FaUsers, FaChartPie, FaBell, FaRobot, FaChartLine, FaMobile } from 'react-icons/fa';

const FeatureCard = ({ icon, title, description, delay, color }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="relative overflow-hidden group"
    >
      <div 
        className="p-8 rounded-2xl h-full flex flex-col relative z-10 backdrop-blur-sm bg-white" 
        style={{ backgroundColor: `rgba(255, 255, 255, 0.95)` }}
      >
        {/* Decorative circle */}
        <div 
          className="absolute -right-10 -top-10 w-40 h-40 rounded-full opacity-20 group-hover:scale-150 transition-all duration-700" 
          style={{ backgroundColor: color }}
        ></div>
        
        {/* Icon */}
        <div 
          className="w-16 h-16 rounded-full flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300"
          style={{ backgroundColor: color }}
        >
          {icon}
        </div>
        
        {/* Content */}
        <h3 className="text-2xl font-bold text-maroon mb-4">{title}</h3>
        <p className="text-maroon leading-relaxed mb-6 flex-grow">{description}</p>
        
        {/* Learn more link */}
        <div className="mt-auto">
          <a href="#" className="text-maroon font-medium inline-flex items-center group-hover:translate-x-2 transition-transform duration-300">
            Learn more
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: <FaCalendarAlt size={28} />,
      title: "Smart Scheduling System",
      description: "Auto-detect and resolve scheduling conflicts with AI suggestions for optimal time slots.",
      id: "scheduling",
      color: "#9e0025" 
    },
    {
      icon: <FaUsers size={28} />,
      title: "AI-Based Team Management",
      description: "Assign tasks intelligently based on skills and workload with role-based task assignments.",
      id: "team-management",
      color: "#b4002c" 
    },
    {
      icon: <FaChartPie size={28} />,
      title: "Budget Management & Tracking",
      description: "Track all finances with expense logging, budget allocation, and visual dashboards.",
      id: "budget",
      color: "#800020" 
    },
    {
      icon: <FaBell size={28} />,
      title: "Communication System",
      description: "Real-time updates for task changes, schedule updates, and automated reminders.",
      id: "communication",
      color: "#a30026"
    },
    {
      icon: <FaRobot size={28} />,
      title: "AI Optimization & Assistant",
      description: "Get recommendations based on past event data and use our AI chatbot for quick answers.",
      id: "ai-assistant",
      color: "#c80032" 
    },
    {
      icon: <FaChartLine size={28} />,
      title: "Analytics & Reporting",
      description: "Gain insights into team performance, timelines, and generate post-fest analysis reports.",
      id: "analytics",
      color: "#9e0025" 
    }
  ];

  return (
    <section id="features" className="py-24 relative overflow-hidden">     
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block bg-white text-maroon px-6 py-3 rounded-full text-3xl font-bold tracking-wide mb-4">POWERFUL FEATURES</span>
          <h2 className="text-md font-bold text-black mb-6">Everything You Need</h2>
          <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
            Our AI-powered platform offers everything you need to plan and manage successful college events.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
              color={feature.color}
            />
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
            className="inline-flex items-center bg-white text-maroon font-bold py-4 px-10 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
          >
            <span>Explore All Features</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
