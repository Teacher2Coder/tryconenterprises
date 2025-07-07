import { motion } from "framer-motion";
import { Check } from "lucide-react";
import "../../styles/home.css";

const ServicesAtAGlance = ({ itemVariants }) => {
  return (
    <section>
      <motion.div
        variants={itemVariants}
        className="services-at-a-glance-container"
      >
        <div className="services-at-a-glance-info">
          <h1 className="services-at-a-glance-title">Services at a glance</h1>
          <h2 className="services-at-a-glance-subtitle">
            We have the knowledge and expertise needed to handle a wide range of
            projects from residential to commercial.
          </h2>
        </div>
        <div className="services-at-a-glance-divider"></div>
        <div className="services-at-a-glance-list">
          <h4 className="services-at-a-glance-list-title">You can count on us for:</h4>
          <ul className="services-list">
            <li><Check /> Residential new construction services</li>
            <li><Check /> Residential remodeling services</li>
            <li><Check /> Commercial renovation services</li>
            <li><Check /> Commercial new construction services</li>
            <li><Check /> Project Superintendent services</li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default ServicesAtAGlance;
