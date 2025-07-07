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
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }
  
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      {/* Hero section */}
      <Hero itemVariants={itemVariants}/>

      {/* Services section */}
      <Services itemVariants={itemVariants} />

      {/* About section */}
      <About itemVariants={itemVariants}/>

      {/* Call to action */}
      <CallToAction itemVariants={itemVariants}/>

      {/* Services at a glance */}
      <ServicesAtAGlance itemVariants={itemVariants}/>

      {/* What sets us apart? */}
      <SetApart itemVariants={itemVariants}/>

    </motion.div>
  );
};

export default Home;
