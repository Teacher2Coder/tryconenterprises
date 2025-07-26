import { motion } from "framer-motion";
import ContactUsButton from "../ContactUsButton";

const Offerings = ({ itemVariants, pageData }) => {
  return (
    <motion.div
      variants={itemVariants}
      className="container mx-auto container-padding section-padding"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Image Section - Left Side */}
          <motion.div
            variants={itemVariants}
            className="order-2 lg:order-1"
          >
            <img
              src={pageData.offeringImage}
              alt={pageData.imageAlt}
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </motion.div>

          {/* Content Section - Right Side */}
          <motion.div
            variants={itemVariants}
            className="order-1 lg:order-2 space-y-6"
          >
            <motion.h2
              variants={itemVariants}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-600 mb-4 source-serif-4-bold"
            >
              {pageData.offeringTitle}
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="text-base sm:text-lg leading-relaxed text-white mb-6 source-serif-4"
            >
              {pageData.offeringDescription}
            </motion.p>
            
            <motion.ul 
              variants={itemVariants} 
              className="space-y-3"
            >
              {pageData.offerings.map((offering, index) => (
                <motion.li 
                  key={index} 
                  variants={itemVariants}
                  className="flex items-start space-x-3 source-serif-4"
                >
                  <span className="flex-shrink-0 w-2 h-2 bg-primary-600 rounded-full mt-2"></span>
                  <span className="text-white leading-relaxed">{offering}</span>
                </motion.li>
              ))}
            </motion.ul>
            
            {pageData.callToAction && (
              <motion.p 
                variants={itemVariants}
                className="text-base sm:text-lg leading-relaxed text-white font-medium mt-6 source-serif-4"
              >
                {pageData.callToAction}
              </motion.p>
            )}
            
            {pageData.callToAction2 && (
              <motion.p 
                variants={itemVariants}
                className="text-base sm:text-lg leading-relaxed text-primary-600 font-semibold source-serif-4"
              >
                {pageData.callToAction2}
              </motion.p>
            )}
            <ContactUsButton itemVariants={itemVariants}/>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Offerings;
