import React from 'react';
import { 
  FaUserPlus, 
  FaTasks, 
  FaRobot, 
  FaChartLine 
} from 'react-icons/fa';

const HowItWorksExact = () => {
  const steps = [
    {
      id: "01",
      icon: <FaUserPlus className="text-white text-2xl" />,
      title: "Sign Up & Create Event",
      description: "Create an account and set up your college event with basic details like name, date, and venue."
    },
    {
      id: "02",
      icon: <FaTasks className="text-white text-2xl" />,
      title: "Add Teams & Tasks",
      description: "Define your organizational structure, add team members, and create tasks for each team."
    },
    {
      id: "03",
      icon: <FaRobot className="text-white text-2xl" />,
      title: "Let AI Optimize",
      description: "Our AI will suggest optimal schedules, task assignments, and budget allocations based on your inputs."
    },
    {
      id: "04",
      icon: <FaChartLine className="text-white text-2xl" />,
      title: "Monitor & Adjust",
      description: "Track progress in real-time, receive alerts for potential issues, and make adjustments as needed."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get your event planning process streamlined in just a few simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div 
              key={step.id} 
              className="flex flex-col"
            >
              {/* Number and Icon */}
              <div className="flex items-center mb-6">
                <div 
                  className="flex items-center justify-center w-14 h-14 rounded-full" 
                  style={{ backgroundColor: '#008A90' }} // Exact teal color from image
                >
                  {step.icon}
                </div>
                <span className="text-5xl font-bold ml-4 text-gray-200">{step.id}</span>
              </div>
              
              {/* Content */}
              <div 
                className="flex-1 p-6 rounded-lg" 
                style={{ backgroundColor: '#A1F0F2' }} // Exact light cyan color from image
              >
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#008A90' }}>
                  {step.title}
                </h3>
                <p className="text-gray-700">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button 
            className="px-8 py-3 text-white font-medium rounded-lg transition-colors shadow-md"
            style={{ backgroundColor: '#008A90' }} // Exact teal color from image
          >
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksExact;
