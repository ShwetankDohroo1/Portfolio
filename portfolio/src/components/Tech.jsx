import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { techies } from "../constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TechCard = ({ tech, index }) => {
  const cardRef = useRef(null);

  return (
    <motion.div ref={cardRef} className="flex flex-col items-center justify-center border-dashed rounded-xl p-5">
      <div className="flex justify-center items-center">
        <div className="text-center">
          <h1 className="text-5xl ">{tech.title}</h1>
        </div>
      </div>
    </motion.div>
  );
};

const Tech = () => {
  useEffect(() => {
    gsap.set(".tech-photo:not(:first-child)", { opacity: 0, scale: 0.5 });

    const animation = gsap.to(".tech-photo:not(:first-child)", {
      opacity: 1,
      scale: 1,
      duration: 1,
      stagger: 1,
      transformOrigin: "center",
      immediateRender: false,
    });

    ScrollTrigger.create({
      trigger: ".techcontent",
      start: "top top",
      end: "bottom bottom",
      pin: ".right",
      animation: animation,
      scrub: true,
    });
    
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <div>
        <h2 className={`text-4xl font-bold text-[#e49d22]`}>Techs.</h2>
        <p className="text-[#ffeccc] text-3xl font-semibold">
          Technologies or Languages I am Intermediate in
        </p>
      </div>
      <motion.div className="flex flex-col w-full">
        <div className="techcontent flex w-full h-full">
          <div className="left w-1/2">
            <div className="detailsWrapper mx-auto w-4/5">
              {techies.map((tech, i) => (
                <div className="details flex flex-col justify-center h-screen" key={i}>
                  <h3 className="headline bg-[#2d4e86] rounded-md h-auto w-full p-5">
                    {tech.title}
                  </h3>
                  <p className="text mt-3 p-5 bg-[#2d4e86] rounded-md h-auto w-full">
                    {tech.about}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="right w-1/2 h-screen flex flex-col justify-center items-center">
            <div className="photos relative w-[30vw] h-[30vw]">
              {techies.map((tech, i) => (
                <div key={i} className={`photo tech-photo absolute w-full h-full rounded-md ${ i === 0 ? "opacity-100 scale-100" : "opacity-0 scale-50" } bg-black`}>
                  <TechCard tech={tech} index={i} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
