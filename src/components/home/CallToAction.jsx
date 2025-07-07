import { motion } from "framer-motion";
import ContactUsButton from "../ContactUsButton";

const CallToAction = ({ itemVariants }) => {
  return (
    <section>
      <motion.div variants={itemVariants}>
        <div
          style={{
            position: "relative",
            width: "100%",
            display: "inline-block",
          }}
        >
          <img
            src="/home/home1.webp"
            alt=""
            style={{
              width: "100%",
              maxHeight: "100vh",
              display: "block",
              zIndex: 0,
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1,
              color: "#fff", // Adjust for contrast
              textShadow: "0 2px 8px rgba(0,0,0,0.7)", // Optional for readability
              pointerEvents: "none", // Allows clicks to pass through if needed
            }}
          >
            <h3 
              style={{ pointerEvents: "auto" }}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center mb-4"
            >
              Transform Your Property From Top to Bottom
            </h3>
            <h2 
              style={{ pointerEvents: "auto" }}
              className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-center mb-6"
            >
              Hire us for your residential or commercial renovation project
            </h2>
            <div style={{ pointerEvents: "auto" }}>
              <ContactUsButton itemVariants={itemVariants}/>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CallToAction;
