import { motion } from "framer-motion";
import { Check } from "lucide-react";

const SetApart = ({ itemVariants }) => {
  return (
    <section className="py-16 bg-blue-800">
      <motion.div
        variants={itemVariants}
        className="max-w-2xl mx-auto px-8 py-10 flex flex-col items-center"
      >
        <h2 className="text-3xl font-bold text-white mb-4 text-center">
          What sets us apart?
        </h2>
        <p className="text-white mb-8 text-center">
          When homeowners and business owners in the Burleson and Alvarado, TX
          areas need a dependable local remodeling company, they turn to us.
          TRYCON ENTERPRISES brings a unique skill set to each project. With 20+
          years in retail project management and 30+ years in residential and
          commercial construction, there is no project we have not done.
        </p>
        <ul className="space-y-4 w-full">
          <li className="flex items-start gap-3 text-white">
            <Check className="text-white mt-1" size={22} /> We treat every
            customer as we want to be treated
          </li>
          <li className="flex items-start gap-3 text-white">
            <Check className="text-white mt-1" size={22} /> We keep you informed
            every step of the way through daily reporting
          </li>
          <li className="flex items-start gap-3 text-white">
            <Check className="text-white mt-1" size={22} /> Unbeatable work
            ethic
          </li>
          <li className="flex items-start gap-3 text-white">
            <Check className="text-white mt-1" size={22} /> Project sites are
            kept neat, and safety is a top priority
          </li>
          <li className="flex items-start gap-3 text-white">
            <Check className="text-white mt-1" size={22} /> We dream big and aim
            high to deliver a top-notch experience for our clients
          </li>
        </ul>
      </motion.div>
    </section>
  );
};

export default SetApart;
