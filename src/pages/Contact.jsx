import { motion } from 'framer-motion'
import ContactForm from '../components/contact/ContactForm'

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
                Send Me a Message
              </h2>
              
              <ContactForm />

            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-gray-100">
                Let's Connect
              </h3>
              
              
              
              <p className="text-gray-600 dark:text-gray-400 mt-6">
                Follow me for updates on my latest projects and tech insights.
              </p>
            </div>

            <div className="bg-gradient-to-r from-primary-600 to-accent-600 p-8 rounded-2xl text-white">
              <h3 className="text-xl font-bold mb-4">
                Available for Projects
              </h3>
              <p className="mb-4 opacity-90">
                I'm currently available for freelance projects and full-time opportunities. 
                Let's discuss how we can work together!
              </p>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm">Available for work</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default Contact 