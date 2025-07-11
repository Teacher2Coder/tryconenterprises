import { motion } from "framer-motion";

const SidePanel = ({ itemVariants }) => {
  return (
    <motion.div variants={itemVariants} className="space-y-8">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
        <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-gray-100">
          TRYCON ENTERPRISES
        </h3>
        <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
          Located
        </h4>
        <p className="text-gray-600 dark:text-gray-400">Alvarado, Texas</p>
        <p className="text-gray-600 dark:text-gray-400">76009</p>

        <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mt-1">
          Call us
        </h4>
        <a className="text-gray-600 dark:text-gray-400" href="tel:1234567890">
          123-456-7890
        </a>
      </div>

      <div className="bg-gradient-to-r from-primary-600 to-accent-600 p-8 rounded-2xl text-white">
        <h3 className="text-xl font-bold mb-4">Our hours</h3>
        <ul className="space-y-2">
          <li className="flex justify-between">
            <span>Monday - Friday</span>
            <span>8:00 AM - 6:00 PM</span>
          </li>
          <li className="flex justify-between">
            <span>Saturday</span>
            <span>Appointment Only</span>
          </li>
          <li className="flex justify-between">
            <span>Sunday</span>
            <span>Closed</span>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default SidePanel;
