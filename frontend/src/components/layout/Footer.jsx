import { Link } from 'react-router-dom';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <>
      {/* Call to action section */}
      <section className="bg-maroon text-white py-12">
        <div className="w-full max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <motion.div 
              className="mb-4 md:mb-0 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Ready to Transform Your Event Planning?</h2>
              <p className="text-black text-opacity-100 text-lg">
                Join thousands of college event organizers who are saving time and reducing stress with Eventra.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Link 
                to="/signup" 
                className="bg-white text-maroon hover:bg-gray-100 font-bold py-3 px-8 rounded-full shadow-md inline-block transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
              >
                Get Started Free
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="w-full max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Company info */}
            <div>
              <Link to="/" className="text-2xl font-bold text-white flex items-center">
                <div className="w-8 h-8 rounded-full bg-maroon flex items-center justify-center mr-2">
                
                </div>
                Eventra
              </Link>
              <p className="mt-4 text-white leading-relaxed">
                AI-powered event planning assistant for college fests. Simplify scheduling, team management, and budgeting.
              </p>
              <div className="flex mt-4 space-x-3" >
                <a href="#" className="text-white hover:text-white transition-colors duration-300">
                  <FaTwitter size={20} />
                </a>
                <a href="#" className="text-white hover:text-white transition-colors duration-300">
                  <FaFacebook size={20} />
                </a>
                <a href="#" className="text-white hover:text-white transition-colors duration-300">
                  <FaInstagram size={20} />
                </a>
                <a href="#" className="text-white hover:text-white transition-colors duration-300">
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>
            
            {/* Quick links */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-white relative pl-3 border-l-2 border-white">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="text-white hover:text-white transition-colors duration-300">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/features" className="text-white hover:text-white transition-colors duration-300">
                    Features
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-white hover:text-white transition-colors duration-300">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-white hover:text-white transition-colors duration-300">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Features */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-white relative pl-3 border-l-2 border-white">Features</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/features#scheduling" className="text-white hover:text-white transition-colors duration-300">
                    Smart Scheduling
                  </Link>
                </li>
                <li>
                  <Link to="/features#team-management" className="text-white hover:text-white transition-colors duration-300">
                    Team Management
                  </Link>
                </li>
                <li>
                  <Link to="/features#budget" className="text-white hover:text-white transition-colors duration-300">
                    Budget Tracking
                  </Link>
                </li>
                <li>
                  <Link to="/features#ai-assistant" className="text-white hover:text-white transition-colors duration-300">
                    AI Assistant
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Contact */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-white relative pl-3 border-l-2 border-white">Contact Us</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center mr-3">
                    <FaMapMarkerAlt className="text-white" />
                  </div>
                  <span className="text-white">Andheri East, Mumbai</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center mr-3">
                    <FaEnvelope className="text-white" />
                  </div>
                  <a href="mailto:info@eventra.com" className="text-white hover:text-white transition-colors duration-300">
                    info@eventra.com
                  </a>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center mr-3">
                    <FaPhone className="text-white" />
                  </div>
                  <a href="tel:+1234567890" className="text-white hover:text-white transition-colors duration-300">
                    +91 7021665369
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="bg-gray-950 text-white py-6 border-t border-gray-800">
          <div className="w-full max-w-7xl mx-auto px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-white">&copy; {new Date().getFullYear()} Eventra. All rights reserved.</p>
              <div className="mt-4 md:mt-0">
                <ul className="flex space-x-6">
                  <li><a href="#" className="text-white hover:text-white text-sm">Privacy Policy</a></li>
                  <li><a href="#" className="text-white hover:text-white text-sm">Terms of Service</a></li>
                  <li><a href="#" className="text-white hover:text-white text-sm">Cookie Policy</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
