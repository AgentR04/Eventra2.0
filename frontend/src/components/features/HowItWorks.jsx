import { motion } from 'framer-motion';

const steps = [
  {
    number: "01",
    title: "Sign Up & Create Event",
    description: "Create an account and set up your college event with basic details like name, date, and venue.",
    icon: "📝"
  },
  {
    number: "02",
    title: "Add Teams & Tasks",
    description: "Define your organizational structure, add team members, and create tasks for each team.",
    icon: "👥"
  },
  {
    number: "03",
    title: "Let AI Optimize",
    description: "Our AI will suggest optimal schedules, task assignments, and budget allocations based on your inputs.",
    icon: "🤖"
  },
  {
    number: "04",
    title: "Monitor & Adjust",
    description: "Track progress in real-time, receive alerts for potential issues, and make adjustments as needed.",
    icon: "📊"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-0 bg-maroon text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">How Eventra Works</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Transform your event planning in four easy steps
          </p>
        </motion.div>

        {/* Timeline container */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 h-full w-1 bg-white/20 hidden md:block" style={{transform: 'translateX(-50%)'}}></div>
          
          <div className="space-y-12 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-start md:items-center`}>
                  {/* Step number with icon */}
                  <div className="flex-shrink-0 relative z-10 mb-4 md:mb-0">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center shadow-xl">
                      <span className="text-4xl">{step.icon}</span>
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-maroon border-2 border-white text-white font-bold flex items-center justify-center">
                      {index + 1}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className={`${index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'} bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-xl md:w-1/2 border border-white/20`}>
                    <h3 className="text-2xl font-bold mb-3 flex items-center">
                      <span className="text-white/50 mr-2 font-light">{step.number}</span>
                      {step.title}
                    </h3>
                    <p className="text-white/80 leading-relaxed">{step.description}</p>
                    <a href="#" className="inline-flex items-center mt-4 text-white font-medium hover:text-white/80 transition-colors">
                      Learn more
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
            className="inline-block bg-white text-maroon font-bold py-4 px-10 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
          >
            Get Started Now
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
