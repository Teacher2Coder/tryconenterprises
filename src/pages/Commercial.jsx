import { motion } from "framer-motion";
import Hero from "../components/services-shared/Hero";
import IntroContent from "../components/services-shared/IntroContent";
import Offerings from "../components/services-shared/Offerings";

const Commercial = () => {
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
    title: "Commercial Services",
    description: "Transform your business into a space that fits your needs with our comprehensive commercial construction services.",
    subTitle: "From commercial buildouts to apartment remodeling, we do it all",
    subTitle2: "Tell us about your project in Burleson, Alvarado, TX or nationwide",
    subDescription: "Whether you’re interested in remodeling a retail space or building a house from the ground up, TRYCON ENTERPRISES will bring your needs to life. Our unique skill set comes from 20+ years of big-box retail project management and 30+ years of construction management experience. Contact us today for help with your project in the DFW area or nationwide.",
    subDescription2: "",
    offeringTitle: "Offering services for any type of business",
    offeringImage: "/services/business.webp",
    imageAlt: "Business",
    offeringDescription: "You won't regret hiring Trycon Enterprises. We offer:",
    offerings: [
      "New construction building",
      "Commercial buildouts/built-to-suit",
      "Hospitality remodeling",
      "Detail remodeling",
      "Fixture installation",
      "Retail reset and brand rollout",
      "Rental property and apartment remodeling",
      "Tenant move-out/in",
      "New home move-out/in",
    ],
    callToAction: "It doesn’t matter if you need help completing punch list work or remodeling an apartment building. As your general contractor, TRYCON ENTERPRISES will handle all aspects of the project. We take pride in doing high-quality work on time and within budget.",
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

export default Commercial;