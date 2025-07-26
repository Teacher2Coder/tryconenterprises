import { motion } from "framer-motion";
import "../../styles/home.css";

const About = ({ itemVariants }) => {
  return (
    <section className="border-b-4 border-black">
      <motion.div
        variants={itemVariants}
        className="relative py-12 sm:py-16 lg:py-20"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Content Section */}
            <motion.div 
              className="flex-1 lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="space-y-4"
                >
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 
                                 leading-tight source-serif-4-bold">
                    Invest in Detailed Construction Work
                  </h2>
                  
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-black source-serif-4-bold">
                    Choose our general contracting company serving the DFW area
                  </h3>
                  
                  <p className="text-base sm:text-lg text-black leading-relaxed source-serif-4">
                    You have a unique vision for how you want your home or business to
                    look and function, so it's important to choose a general contractor
                    that you can trust to execute your ideas. For everything from minor
                    updates to top-to-bottom renovations, rely on TRYCON ENTERPRISES. We
                    take pride in creating comfortable and appealing homes and
                    commercial spaces in DFW and the surrounding areas.
                  </p>
                  
                  <div className="pt-2">
                    <span className="text-base sm:text-lg text-black source-serif-4">
                      Call
                      <a 
                        className="text-blue-600 ml-1 hover:text-blue-800 transition-colors 
                                   duration-200 font-medium" 
                        href="tel:1234567890"
                      >
                        123-456-7890
                      </a>{" "}
                      now to schedule a consultation
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Image Section */}
            <motion.div 
              className="flex-1 lg:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <img 
                src="/home/about1.jpg" 
                alt="Construction work showcasing our expertise" 
                className="w-full max-w-lg mx-auto rounded-lg border-2 border-black shadow-lg 
                           transform transition-transform duration-300 hover:scale-105"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;