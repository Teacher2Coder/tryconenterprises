import { motion } from "framer-motion";
import "../../styles/home.css";

const About = ({ itemVariants }) => {
  return (
    <section style={{ borderBottom: "5px solid black" }}>
      <motion.div
        variants={itemVariants}
        className="text-center pb-16"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          backgroundImage: "url('/topo.webp')",
          backgroundSize: "cover",
          filter: "brightness(1.3)",
        }}
      >
        <img src="/home/about1.jpg" className="img-first" />
        <div className="flex flex-col justify-center items-center text-center p-2 max-w-2xl ml-2 mr-2">
          <img src="/home/about2.jpeg" className="img-second" />
          <h2 className="text-3xl font-bold mb-4 text-blue-600">
            Invest in Detailed Construction Work
          </h2>
          <h3 className="text-xl font-semibold mb-4">
            Choose our general contracting company serving the DFW area
          </h3>
          <p className="text-black" style={{ marginBottom: "1rem" }}>
            You have a unique vision for how you want your home or business to
            look and function, so it’s important to choose a general contractor
            that you can trust to execute your ideas. For everything from minor
            updates to top-to-bottom renovations, rely on TRYCON ENTERPRISES. We
            take pride in creating comfortable and appealing homes and
            commercial spaces in DFW and the surrounding areas.
          </p>
          <span className="text-black">
            Call 
            <a className="text-blue-600 ml-1" href="tel:1234567890">
              123-456-7890
            </a>{" "}
            now to schedule a consultation
          </span>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
