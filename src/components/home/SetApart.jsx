import { motion } from "framer-motion";
import { Check } from "lucide-react";

const SetApart = ({ itemVariants }) => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-blue-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={itemVariants}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-8 sm:mb-12">
            <motion.h2 
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 source-serif-4-bold"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              What sets us apart?
            </motion.h2>
            <motion.p 
              className="text-base sm:text-lg text-gray-100 leading-relaxed max-w-3xl mx-auto source-serif-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              When homeowners and business owners in the Burleson and Alvarado, TX
              areas need a dependable local remodeling company, they turn to us.
              TRYCON ENTERPRISES brings a unique skill set to each project. With 20+
              years in retail project management and 30+ years in residential and
              commercial construction, there is no project we have not done.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {[
              "We treat every customer as we want to be treated",
              "We keep you informed every step of the way through daily reporting",
              "Unbeatable work ethic",
              "Project sites are kept neat, and safety is a top priority",
              "We dream big and aim high to deliver a top-notch experience for our clients"
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-3 sm:gap-4 text-white p-3 sm:p-4 rounded-lg source-serif-4
                           bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Check className="text-green-400 mt-1 flex-shrink-0" size={20} />
                <span className="text-sm sm:text-base leading-relaxed">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SetApart;
