import { motion } from "framer-motion";
import Hero from "../components/services-shared/Hero";
import IntroContent from "../components/services-shared/IntroContent";
import Offerings from "../components/services-shared/Offerings";

const Superintendent = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const pageData = {
    title: "Superintendent Services",
    description: "We're here to help you with your project in the DFW area and beyond!",
    subTitle: "Our site supervisors can keep your project on track",
    subTitle2: "We gladly help with projects in the DFW area and nationwide",
    subDescription: "Having an experienced superintendent on your job site can set your project up for success. TRYCON ENTERPRISES can provide you with temporary or start-to-finish construction management services. Our site supervisors have earned the trust of clients in the DFW area and throughout the country.",
    subDescription2: "",
    offeringTitle: "What we offer",
    offeringDescription: "You can feel confident relying on us for constuction mangement services. We take pride in:",
    offeringImage: "/services/construction.webp",
    imageAlt: "Construction",
    offerings: [
      "Being proficient in Procure, Raken and other construction management platforms",
      "Providing temporary site supervisors in case of emergencies, illnesses or other unforeseen issues",
      "Providing stand-in superintendents while recruiting and onboarding a permanent qualified candidate",
      "Providing start-to-finish construction site management, including quality control and site safety",
      "Offering consultations on troubleshooting areas of deficiencies in order to get your project back on track and reach your milestones",
    ],
    callToAction: "",
    callToAction2: "Schedule a free consultation with us today!",
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen flex flex-col"
    >
      <Hero itemVariants={itemVariants} pageData={pageData} />

      <div
        style={{
          backgroundImage: "url('/topo.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          width: "100%",
        }}
      >
        <div className="bg-white/80">
          <IntroContent itemVariants={itemVariants} pageData={pageData} />
        </div>
      </div>

      <Offerings itemVariants={itemVariants} pageData={pageData} />
    </motion.div>
  );
};

export default Superintendent;