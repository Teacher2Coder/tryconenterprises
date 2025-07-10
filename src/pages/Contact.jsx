import { motion } from 'framer-motion'
import ContactForm from '../components/contact/ContactForm'
import SidePanel from '../components/contact/SidePanel'

const Contact = () => {
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
      className="min-h-screen section-padding"
    >
      <div className="max-w-7xl mx-auto container-padding">
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Contact Us</span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div variants={itemVariants}>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
                Send us a message!
              </h2>
              
              <ContactForm />

            </div>
          </motion.div>

          <SidePanel itemVariants={itemVariants} />
        </div>
      </div>
    </motion.div>
  )
}

export default Contact 