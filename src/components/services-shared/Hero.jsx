import { motion } from "framer-motion";

const Hero = ({ itemVariants, pageData }) => {
  return (
    <motion.div
      variants={itemVariants}
      className="flex flex-col items-center justify-center section-padding"
      style={{
        backgroundColor: "rgba(17, 134, 255, 0.95)",
      }}
    >
      <div className="container mx-auto container-padding text-center">
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 source-serif-4-bold"
          style={{
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
          }}
        >
          {pageData.title}
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto source-serif-4"
          style={{
            textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)",
          }}
        >
          {pageData.description}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Hero;
