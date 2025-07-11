import { motion } from 'framer-motion';
import Transition from "./Transitions";

const Hero = () => {
  return (
    <section className="relative h-screen flex justify-center items-center overflow-hidden">
      <Transition />
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 flex justify-center items-center px-4 sm:px-6 lg:px-8"
      >
        <img
          src="logo.webp"
          alt="TRYCON ENTERPRISES"
          className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 
                     h-auto drop-shadow-2xl pointer-events-none
                     transform transition-transform duration-300 hover:scale-105"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
