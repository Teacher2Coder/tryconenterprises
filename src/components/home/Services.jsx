import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import handleSmoothScroll from "../../utils/handleSmoothScroll";
import "../../styles/home.css";

const Services = ({ itemVariants }) => {
  const services = [
    {
      key: 1,
      title: "Residential",
      description:
        "30+ years experience in home renovations. We specialize in remodeling/refreshing your home.",
      link: "/residential",
    },
    {
      key: 2,
      title: "Commercial",
      description:
        "We handle all aspects of your commercial building, from new construction to remodels and more.",
      link: "/commercial",
    },
    {
      key: 3,
      title: "Superintendent Services",
      description:
        "Our experienced and knowledgeable superintendents are ready to fill in temporarily or long term for any project nationwide.",
      link: "/superintendent-services",
    },
  ];

  return (
    <section className="section-padding bg-white dark:bg-[#000000]">
      <div className="max-w-7xl mx-auto container-padding">
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 source-serif-4-bold">
            Featured <span className="gradient-text">Services</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.key}
              whileHover={{ y: -10 }}
              className="bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg card-hover"
            >
              <div className="h-48 bg-gradient-to-br from-primary-400 to-accent-400 relative">
                <div className="absolute inset-0 bg-black/20"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300 cursor-pointer source-serif-4-bold">
                  {service.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 source-serif-4">
                  {service.description}
                </p>
              </div>
              <motion.div variants={itemVariants} className="text-center m-4">
                <Link
                  to={service.link}
                  className="btn-primary inline-flex items-center gap-2 source-serif-4"
                  onClick={() => handleSmoothScroll()}
                >
                  Learn more
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
