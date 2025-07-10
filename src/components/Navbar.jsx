import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import handleSmoothScroll from "../utils/handleSmoothScroll";

import "../styles/navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/residential", label: "Residential" },
    { path: "/commercial", label: "Commercial" },
    { path: "/superintendent-services", label: "Superintendent Services" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-blue-600 backdrop-blur-lg border-b border-blue-500/30 shadow-xl" 
          : "bg-blue-600/95 backdrop-blur-md border-b border-blue-500/20 shadow-lg"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-3 group"
            onClick={() => handleSmoothScroll()}
          >
            <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg transform group-hover:scale-105 transition-all duration-300 group-hover:bg-white/30">
              <img
                src="/logo-small.png"
                alt="Trycon Enterprises"
                className="w-6 h-6 sm:w-7 sm:h-7"
              />
            </div>
            <div>
              <span className="font-bold text-lg sm:text-xl text-white">
                Trycon Enterprises
              </span>
              <p className="slogan text-blue-100 text-sm">Direction Determines Destination</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-3 py-2 rounded-lg font-medium transition-all duration-300 ${
                  location.pathname === item.path
                    ? "text-white bg-white/20 backdrop-blur-sm"
                    : "text-blue-100 hover:text-white hover:bg-white/10"
                }`}
                onClick={() => handleSmoothScroll()}
              >
                {item.label}
                {location.pathname === item.path && (
                  <motion.div
                    className="absolute -bottom-1 left-3 right-3 h-0.5 bg-white rounded-full"
                    layoutId="activeTab"
                    initial={false}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-white hover:bg-white/20 transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden absolute top-full left-0 w-full bg-blue-600/95 backdrop-blur-md border-t border-blue-500/20 shadow-lg"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="py-4 space-y-2 px-4 sm:px-6 lg:px-8">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      className={`block py-3 px-4 rounded-lg font-medium transition-all duration-300 mobile-menu-item ${
                        location.pathname === item.path
                          ? "bg-white/20 text-white backdrop-blur-sm"
                          : "text-blue-100 hover:text-white hover:bg-white/10"
                      }`}
                      onClick={() => handleSmoothScroll()}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
