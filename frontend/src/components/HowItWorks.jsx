import React from 'react';
import { 
  FaUserPlus, 
  FaTasks, 
  FaRobot, 
  FaChartLine 
} from 'react-icons/fa';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      icon: <FaUserPlus className="text-gray-700 text-3xl" />,
      title: "Sign Up & Create Event",
      description: "Create an account and set up your college event with basic details like name, date, and venue.",
      bgColor: "bg-pastel-1"
    },
    {
      id: 2,
      icon: <FaTasks className="text-gray-700 text-3xl" />,
      title: "Add Teams & Tasks",
      description: "Define your organizational structure, add team members, and create tasks for each team.",
      bgColor: "bg-pastel-3"
    },
    {
      id: 3,
      icon: <FaRobot className="text-gray-700 text-3xl" />,
      title: "Let AI Optimize",
      description: "Our AI will suggest optimal schedules, task assignments, and budget allocations based on your inputs.",
      bgColor: "bg-pastel-5"
    },
    {
      id: 4,
      icon: <FaChartLine className="text-gray-700 text-3xl" />,
      title: "Monitor & Adjust",
      description: "Track progress in real-time, receive alerts for potential issues, and make adjustments as needed.",
      bgColor: "bg-pastel-6"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-pastel-1 via-pastel-3 to-pastel-6">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">How It Works</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Get your event planning process streamlined in just a few simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div 
              key={step.id} 
              className="bg-white rounded-xl shadow-card p-6 transition-all duration-300 hover:shadow-lg border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <div className={`flex items-center justify-center w-12 h-12 rounded-full ${step.bgColor} mr-4`}>
                  {step.icon}
                </div>
                <span className="text-5xl font-bold text-gray-200">{step.id}</span>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{step.title}</h3>
              
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="px-6 py-3 bg-gradient-to-r from-pastel-2 to-pastel-3 text-gray-700 font-medium rounded-lg hover:shadow-md transition-all duration-300 shadow-sm">
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
