import React, { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import ReactCanvas from './Canvas/react.jsx';
import NodeCanvas from './Canvas/nodejs.jsx';
import JSCanvas from './Canvas/js.jsx';
import BootCanvas from './Canvas/bootstrap.jsx';
import FramerCanvas from './Canvas/framer.jsx';
import MongoCanvas from './Canvas/mongo.jsx';
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = ({ children, title, Tcolor }) => {
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
    <motion.div ref={ref} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}
      style={{ transformStyle: "preserve-3d", transform, }}className="relative h-96 w-72 rounded-xl bg-[#0093bd] shadow-2xl shadow-[#2f4858]">
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 grid place-content-center rounded-xl text-transparent hover:text-white hover:shadow-2xl duration-500">
        <div style={{ transform: "translateZ(50px)",}} className="text-center text-2xl font-bold">
          <h2 className={`text-5xl font-bold`}>{title}</h2>
        </div>
      </div>
      {children}
    </motion.div>
  );
};
const TechCard = ({ index, title, canvasComponent, side, Tcolor }) => (
  <motion.div variants={fadeIn(side, "spring", index * 0.5, 0.75)} className={`flex flex-col items-center justify-center h-6/12 border-dashed rounded-xl p-4 `}>
    <div className="flex justify-center items-center">
      <TiltCard title={title} Tcolor = {Tcolor}>{canvasComponent}</TiltCard>
    </div>
  </motion.div>
);
const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Techs.</h2>
        <p className="text-[#009d9f] text-3xl font-semibold">Technologies or Languages I am Intermediate in</p>
      </motion.div>
      <motion.div className="grid grid-cols-3 p-3 gap-4 w-full h-full">
        <TechCard index={0} title="React" canvasComponent={<ReactCanvas />} side="right" Tcolor="text-[#2f4858]" />
        <TechCard index={1} title="Java Script" canvasComponent={<JSCanvas />} side="left" Tcolor="text-[#46686f]" />
        <TechCard index={2} title="Node Js" canvasComponent={<NodeCanvas />} side="down" Tcolor="text-[#688983]" />
        <TechCard index={3} title="BootStrap" canvasComponent={<BootCanvas />} side="right" Tcolor="text-[#688983]" />
        <TechCard index={4} title="MongoDB" canvasComponent={<FramerCanvas />} side="left" Tcolor="text-[#c4c8b1]" />
        <TechCard index={5} title="Framer Motion" canvasComponent={<MongoCanvas />} side="up" Tcolor="text-[#d1ccb0]" />
      </motion.div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
