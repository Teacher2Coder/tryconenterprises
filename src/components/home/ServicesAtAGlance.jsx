import { motion } from "framer-motion";
import { Check } from "lucide-react";
import "../../styles/home.css";

const ServicesAtAGlance = ({ itemVariants }) => {
  return (
    <section 
      className="relative py-12 sm:py-16 lg:py-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={itemVariants}
          className="max-w-6xl mx-auto"
        >
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
            {/* Info Section */}
            <motion.div 
              className="flex-1 text-center lg:text-right"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4 lg:mb-6 source-serif-4-bold">
                Services at a glance
              </h1>
              <h2 className="text-lg sm:text-xl lg:text-2xl text-black leading-relaxed source-serif-4">
                We have the knowledge and expertise needed to handle a wide range of
                projects from residential to commercial.
              </h2>
            </motion.div>

            {/* Divider */}
            <div className="hidden lg:block w-px bg-black self-stretch min-h-[200px]"></div>
            <div className="block lg:hidden w-full h-px bg-black my-4"></div>

            {/* Services List */}
            <motion.div 
              className="flex-1 text-center lg:text-left"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h4 className="text-xl sm:text-2xl font-semibold text-black mb-6 lg:mb-8 source-serif-4-bold">
                You can count on us for...
              </h4>
              <ul className="space-y-3 sm:space-y-4">
                <motion.li 
                  className="flex items-start gap-3 text-black text-base sm:text-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <Check className="text-green-600 mt-1 flex-shrink-0" size={20} />
                  <span className="source-serif-4">Residential new construction services</span>
                </motion.li>
                <motion.li 
                  className="flex items-start gap-3 text-black text-base sm:text-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <Check className="text-green-600 mt-1 flex-shrink-0" size={20} />
                  <span className="source-serif-4">Residential remodeling services</span>
                </motion.li>
                <motion.li 
                  className="flex items-start gap-3 text-black text-base sm:text-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <Check className="text-green-600 mt-1 flex-shrink-0" size={20} />
                  <span className="source-serif-4">Commercial renovation services</span>
                </motion.li>
                <motion.li 
                  className="flex items-start gap-3 text-black text-base sm:text-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                >
                  <Check className="text-green-600 mt-1 flex-shrink-0" size={20} />
                  <span className="source-serif-4">Commercial new construction services</span>
                </motion.li>
                <motion.li 
                  className="flex items-start gap-3 text-black text-base sm:text-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                >
                  <Check className="text-green-600 mt-1 flex-shrink-0" size={20} />
                  <span className="source-serif-4">Project Superintendent services</span>
                </motion.li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesAtAGlance;
