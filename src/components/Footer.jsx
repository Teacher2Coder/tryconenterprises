import { PhoneOutgoing, Mail, Send } from 'lucide-react'
import { Link } from 'react-router-dom'
import handleSmoothScroll from '../utils/handleSmoothScroll'
import '../styles/footer.css'

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-accent-900 border-t border-gray-200 dark:border-accent-700">
      <div className="max-w-7xl mx-auto container-padding py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold gradient-text mb-4">
              Trycon Enterprises
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-md">
              Alvarado, TX
            </p>
          </div>

          <div className="text-center">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Quick Links
            </h4>
            <div className="space-y-2">
              <Link
                to="/residential" 
                className="block text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300" 
                onClick={() => handleSmoothScroll()}
              >
                Residential
              </Link>
              <Link
                to="/commercial" 
                className="block text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300" 
                onClick={() => handleSmoothScroll()}
              >
                Commercial
              </Link>
              <Link 
                to="/superintendent-services"
                className="block text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
                onClick={() => handleSmoothScroll()}
              >
                Superintendent Services
              </Link>
              <Link
                to="/contact"
                className="block text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
                onClick={() => handleSmoothScroll()}
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Connect With us!
            </h4>
            <div className="contact-icons">
              <div className="flex flex-row items-center">
                <span className="text-sm mb-1">Call us now!</span>
                <Link
                  className="p-1 bg-gradient-to-r from-primary-600 to-accent-600 rounded-lg transition-transform duration-300 hover:scale-105 flex items-center justify-center contact-icon"
                  to="tel:+18175678900"
                  onClick={() => handleSmoothScroll()}
                  aria-label="Call us"
                >
                  <PhoneOutgoing className="w-5 h-5 text-white" />
                </Link>
              </div>
              <div className="flex flex-row items-center">
                <span className="text-sm mb-1">Email us!</span>
                <Link
                  className="p-1 bg-gradient-to-r from-primary-600 to-accent-600 rounded-lg transition-transform duration-300 hover:scale-105 flex items-center justify-center contact-icon"
                  to="mailto:ethan.owens4@gmail.com"
                  onClick={() => handleSmoothScroll()}
                  aria-label="Email us"
                >
                  <Mail className="w-5 h-5 text-white" />
                </Link>
              </div>
              <div className="flex flex-row items-center">
                <span className="text-sm mb-1">Send us a message!</span>
                <Link
                  className="p-1 bg-gradient-to-r from-primary-600 to-accent-600 rounded-lg transition-transform duration-300 hover:scale-105 flex items-center justify-center contact-icon"
                  to="/contact"
                  onClick={() => handleSmoothScroll()}
                  aria-label="Contact form"
                >
                  <Send className="w-5 h-5 text-white" />
                </Link>
              </div>
            </div>   
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-accent-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Trycon Enterprises. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer