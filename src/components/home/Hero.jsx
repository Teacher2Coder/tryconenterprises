import Transition from "./Transitions";

const Hero = () => {
  return (
    <section
      className="hero"
      style={{ position: "relative", overflow: "hidden" }}
    >
      <Transition />
        <img 
          src="logo.webp" 
          alt="Trycon Enterprises"
          style={{
            width: "100%",
            maxWidth: "600px",
            height: "auto",
            display: "block",
            filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.2))",
            pointerEvents: "none"
          }}
        />
    </section>
  );
};

export default Hero;
