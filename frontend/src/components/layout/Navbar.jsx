import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../assets/logo.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-maroon fixed w-full z-50 transition-all duration-300 shadow-md" style={{backgroundColor: '#800020'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center no-underline">
              <img src={logo} alt="Eventra Logo" className="h-10 w-10 mr-2" />
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-white font-bold text-2xl tracking-wider"
              >
                Eventra
              </motion.div>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center">
            <Link to="/" className="text-white hover:text-gray-200 font-medium transition-colors duration-300 no-underline px-4">
              Home
            </Link>
            <div className="h-5 border-r border-white border-opacity-30 mx-1"></div>
            <Link to="/features" className="text-white hover:text-gray-200 font-medium transition-colors duration-300 no-underline px-4">
              Features
            </Link>
            <div className="h-5 border-r border-white border-opacity-30 mx-1"></div>
            <Link to="/about" className="text-white hover:text-gray-200 font-medium transition-colors duration-300 no-underline px-4">
              About
            </Link>
            <div className="h-5 border-r border-white border-opacity-30 mx-1"></div>
            <Link to="/contact" className="text-white hover:text-gray-200 font-medium transition-colors duration-300 no-underline px-4">
              Contact
            </Link>
            <div className="ml-4"></div>
            <Link to="/login" className="bg-maroon hover:bg-maroon-dark text-white py-2 px-4 rounded-md font-medium transition-colors duration-300 no-underline border border-white">
              Login
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-200 focus:outline-none"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>
            {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-maroon shadow-lg"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-200 hover:bg-maroon-dark no-underline">
              Home
            </Link>
            <div className="border-b border-white border-opacity-20 my-1 mx-3"></div>
            <Link to="/features" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-200 hover:bg-maroon-dark no-underline">
              Features
            </Link>
            <div className="border-b border-white border-opacity-20 my-1 mx-3"></div>
            <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-200 hover:bg-maroon-dark no-underline">
              About
            </Link>
            <div className="border-b border-white border-opacity-20 my-1 mx-3"></div>
            <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-200 hover:bg-maroon-dark no-underline">
              Contact
            </Link>
            <div className="border-b border-white border-opacity-20 my-1 mx-3"></div>
            <Link to="/login" className="block px-3 py-2 rounded-md text-base font-medium bg-maroon text-white hover:bg-maroon-dark no-underline mt-2 border border-white">
              Login
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
