import React, { useEffect, useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { techies } from "../constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = ({ tech, children, title, Tcolor }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xSpring = useSpring(x);
  const ySpring = useSpring(y);
  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return [0, 0];
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;
    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;
    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transformStyle: "preserve-3d", transform }}
      className="flex rounded-xl h-96 w-80 bg-[#0093bd] shadow-2xl shadow-[#2f4858]"
    >
      <div
        style={{ transform: "translateZ(75px)", transformStyle: "preserve-3d" }}
        className="absolute inset-4 grid place-content-center rounded-xl text-transparent hover:text-white hover:bg-black hover:bg-opacity-15 hover:shadow-2xl duration-500"
      >
        <div
          style={{ transform: "translateZ(50px)" }}
          className="text-center font-bold"
        >
          <div className="flex flex-col h-12/12">
            <h1 className="text-5xl">{title}</h1>
            <ul className="list-disc text-start">
              {tech.about.map((point, i) => (
                <li className="text-xl" key={i}>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {children}
    </motion.div>
  );
};

const TechCard = ({ tech, index, side, Tcolor }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const element = cardRef.current;
  
    gsap.fromTo(
      element,
      { opacity: 0, y: side === "up" ? -100 : 100 },
      {
        opacity: 1,
        y:0,
        duration: 1,
        scrollTrigger: {
          trigger: element,
          start: "top 70%",
          end: "top 40%",
          scrub: true,
        },
      }
    );
  }, [side]);
    
  return (
    <motion.div ref={cardRef} className="flex flex-col items-center justify-center border-dashed rounded-xl p-5">
      <div className="flex justify-center items-center">
        <TiltCard tech={tech} title={tech.title} Tcolor={Tcolor}>
          {tech.canvasComponent && React.createElement(tech.canvasComponent)}
        </TiltCard>
      </div>
    </motion.div>
  );
};

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-[#e49d22]`}>Techs.</h2>
        <p className="text-[#ffeccc] text-3xl font-semibold">
          Technologies or Languages I am Intermediate in
        </p>
      </motion.div>
      <motion.div className="grid grid-cols-3 w-full h-12/12">
        {techies.map((tech, i) => (
          <TechCard
            tech={tech}
            key={i}
            index={i}
            side={i % 2 === 0 ? "up" : "down"}
            title={tech.title}
            canvasComponent={tech.canvasComponent}
          />
        ))}
      </motion.div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
