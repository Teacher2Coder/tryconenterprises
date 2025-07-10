import { motion } from "framer-motion";
import ContactUsButton from "../ContactUsButton";

const CallToAction = ({ itemVariants }) => {
  return (
    <section className="relative">
      <motion.div variants={itemVariants}>
        <div className="relative w-full">
          {/* Background Image */}
          <div className="relative w-full h-screen sm:h-[70vh] md:h-[80vh] lg:h-screen overflow-hidden">
            <img
              src="/home/home1.webp"
              alt="Construction renovation project"
              className="w-full h-full object-cover"
            />
            {/* Overlay for better text contrast */}
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          </div>
          
          {/* Content Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center 
                          px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-4xl mx-auto space-y-4 sm:space-y-6"
            >
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 
                             font-bold text-white leading-tight
                             drop-shadow-lg">
                Transform Your Property From Top to Bottom
              </h3>
              
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 
                             font-semibold text-white leading-tight
                             drop-shadow-lg max-w-3xl mx-auto">
                Hire us for your residential or commercial renovation project
              </h2>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="pt-4 sm:pt-6"
              >
                <ContactUsButton itemVariants={itemVariants} />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CallToAction;
