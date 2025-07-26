import { motion } from "framer-motion";

const SidePanel = ({ itemVariants }) => {
  return (
    <motion.div variants={itemVariants} className="space-y-8">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
        <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-gray-100 source-serif-4-bold">
          TRYCON ENTERPRISES
        </h3>
        <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 source-serif-4">
          Located
        </h4>
        <p className="text-gray-600 dark:text-gray-400 source-serif-4">Alvarado, Texas</p>
        <p className="text-gray-600 dark:text-gray-400 source-serif-4">76009</p>

        <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mt-1 source-serif-4">
          Call us
        </h4>
        <a className="text-gray-600 dark:text-gray-400 source-serif-4" href="tel:1234567890">
          123-456-7890
        </a>
      </div>

      <div className="bg-gradient-to-r from-primary-600 to-accent-600 p-8 rounded-2xl text-white">
        <h3 className="text-xl font-bold mb-4 source-serif-4-bold">Our hours</h3>
        <ul className="space-y-2">
          <li className="flex justify-between">
            <span className="source-serif-4">Monday - Friday</span>
            <span className="source-serif-4">8:00 AM - 6:00 PM</span>
          </li>
          <li className="flex justify-between">
            <span className="source-serif-4">Saturday</span>
            <span className="source-serif-4">Appointment Only</span>
          </li>
          <li className="flex justify-between">
            <span className="source-serif-4">Sunday</span>
            <span className="source-serif-4">Closed</span>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default SidePanel;
