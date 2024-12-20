import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { techies } from "../constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import '../tech.css';

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
      ease: "power2.inOut",
      animation: animation,
      scrub: true,
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  useEffect(() => {
    const details = gsap.utils.toArray(".details");

    details.forEach((detail, i) => {
      gsap.fromTo(
        detail,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: detail,
            start: "top bottom",
            end: "bottom bottom",
            toggleActions: "play reverse play reverse",
            // markers:true,
            scrub: true,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <div>
        <h2 className={`text-4xl font-bold text-[#f0dc82]`}>Techs.</h2>
        <p className="text-[#ffeccc] text-3xl font-semibold">
          Technologies or Languages I am Intermediate in and their sub-topics I use.
        </p>
      </div>
      <motion.div className="flex flex-col w-full">
        <div className="techcontent flex w-full h-full">
          <div className="left w-1/2">
            <div className="detailsWrapper mx-auto w-4/5">
              {techies.map((tech, i) => (
                <div className="details flex flex-col justify-center h-screen" key={i}>
                  <h3 className="headline bg-[#6366F1] rounded-md h-auto w-full p-5 text-5xl font-semibold">
                    {tech.title}
                  </h3>
                  <ul className="text-1xl mt-3 p-5 bg-[#008aee] rounded-md h-auto w-full list-none">
                    {tech.about.map((point, i) => (
                      <li className="text-[#FEF3C7] m-3 text-xl font-semibold" key={i}>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="right w-1/2 h-screen flex flex-col justify-center items-center">
            <div className="photos relative w-[30vw] h-[30vw]">
              {techies.map((tech, i) => (
                <div key={i} className={`photo tech-photo absolute w-full h-full rounded-md ${i === 0 ? "opacity-100 scale-100" : "opacity-0 scale-50"} bg-[#0a0a0a] font-bold`}>
                  <TechCard tech={tech} index={i} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="techcontent2 flex justify-center items-center w-full h-full bg-black bg-opacity-25 rounded-2xl text-white">
          <div className="left2 w-full max-w-5xl mx-4">
            <div className="container1 p-4">
              <div className="cards1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {techies.map((tech, i) => (
                  <div className={`card1 card-${i + 1} bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300`}
                    key={i}>
                    <h2 className="card-title1 text-2xl font-bold mb-2">
                      {tech.title}
                    </h2>
                    <div className="description">
                      <ul className="text-base space-y-2">
                        {tech.about.map((point, i) => (
                          <li className="points text-lg font-medium flex items-center space-x-2" key={i}>
                            <span className=" bg-purple-600 w-2 h-2 rounded-full m-1"></span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </motion.div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
