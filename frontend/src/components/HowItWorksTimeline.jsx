import React from 'react';
import { 
  FaUserPlus, 
  FaTasks, 
  FaRobot, 
  FaChartLine,
  FaLongArrowAltRight
} from 'react-icons/fa';

const HowItWorksTimeline = () => {
  const steps = [
    {
      id: 1,
      icon: <FaUserPlus className="text-gray-700 text-xl" />,
      title: "Sign Up & Create Event",
      description: "Create an account and set up your college event with basic details like name, date, and venue.",
      bgColor: "bg-pastel-1"
    },
    {
      id: 2,
      icon: <FaTasks className="text-gray-700 text-xl" />,
      title: "Add Teams & Tasks",
      description: "Define your organizational structure, add team members, and create tasks for each team.",
      bgColor: "bg-pastel-2"
    },
    {
      id: 3,
      icon: <FaRobot className="text-gray-700 text-xl" />,
      title: "Let AI Optimize",
      description: "Our AI will suggest optimal schedules, task assignments, and budget allocations based on your inputs.",
      bgColor: "bg-pastel-4"
    },
    {
      id: 4,
      icon: <FaChartLine className="text-gray-700 text-xl" />,
      title: "Monitor & Adjust",
      description: "Track progress in real-time, receive alerts for potential issues, and make adjustments as needed.",
      bgColor: "bg-pastel-6"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-pastel-1 via-pastel-3 to-pastel-6">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">How It Works</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Get your event planning process streamlined in just a few simple steps
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-pastel-1 via-pastel-3 to-pastel-6 -translate-y-1/2"></div>
          
          <div className="grid grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div key={step.id} className="relative">
                <div className="flex flex-col items-center">
                  {/* Step Number with Icon */}
                  <div className={`flex items-center justify-center w-16 h-16 rounded-full ${step.bgColor} mb-6 z-10 shadow-md`}>
                    {step.icon}
                  </div>
                  
                  {/* Content */}
                  <div className="text-center px-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                  
                  {/* Arrow between steps (except last) */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-8 -right-3 text-gray-400">
                      <FaLongArrowAltRight size={24} />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-12">
          {steps.map((step, index) => (
            <div key={step.id} className="relative flex">
              {/* Left side - number and line */}
              <div className="mr-6 flex flex-col items-center">
                <div className={`flex items-center justify-center w-12 h-12 rounded-full ${step.bgColor} shadow-md`}>
                  {step.icon}
                </div>
                {index < steps.length - 1 && (
                  <div className="w-0.5 bg-gradient-to-b from-pastel-1 via-pastel-3 to-pastel-6 h-full mt-4"></div>
                )}
              </div>
              
              {/* Right side - content */}
              <div className="pt-2">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="px-8 py-4 bg-gradient-to-r from-pastel-2 to-pastel-3 text-gray-700 font-medium rounded-lg hover:shadow-lg transition-all duration-300 shadow-md">
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksTimeline;
