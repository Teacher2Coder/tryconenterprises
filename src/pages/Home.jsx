import { motion } from 'framer-motion';

import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import About from '../components/home/About';
import CallToAction from '../components/home/CallToAction';
import ServicesAtAGlance from '../components/home/ServicesAtAGlance';
import SetApart from '../components/home/SetApart';

import "../styles/home.css";

const Home = () => {
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
        ease: "easeOut"
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.7,
        ease: "easeOut"
      }
    }
  }
  
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className="w-full"
      >
        <motion.div variants={itemVariants}>
          <Hero />
        </motion.div>

        <motion.div variants={itemVariants}>
          <Services itemVariants={itemVariants} />
        </motion.div>

        <div
          style={{
            backgroundImage: "url('/topo.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            width: "100%",
          }}
        >
          <div className="bg-white/90">
            <motion.div variants={itemVariants}>
              <About itemVariants={itemVariants}/>
            </motion.div>
          </div>
        </div>

        <motion.div variants={itemVariants}>
          <CallToAction itemVariants={itemVariants}/>
        </motion.div>

        <div
          style={{
            backgroundImage: "url('/topo.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            width: "100%",
          }}
        >
          <div className="bg-white/90">
            <motion.div variants={itemVariants}>
              <ServicesAtAGlance itemVariants={itemVariants}/>
            </motion.div>
          </div>
        </div>

        <motion.div variants={itemVariants}>
          <SetApart itemVariants={itemVariants}/>
        </motion.div>

      </motion.div>
    </div>
  );
};

export default Home;
