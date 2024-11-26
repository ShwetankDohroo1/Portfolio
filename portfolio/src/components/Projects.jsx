import React, { useState, useEffect } from "react";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { styles } from "../styles";

const Projects = () => {
  const [active, setActive] = useState(0);

  const loadShow = () => {
    const slides = document.querySelectorAll(".slider .item");
    slides.forEach((item, index) => {
      const stt = index - active;
      if(stt === 0){
        item.style.transform = `none`;
        item.style.zIndex = 1;
        item.style.filter = "none";
        item.style.opacity = 1;
      } 
      else{
        const absStt = Math.abs(stt);
        item.style.transform = `translateX(${stt > 0 ? 120 * absStt : -120 * absStt
          }px) scale(${1 - 0.2 * absStt}) perspective(100px) rotateY(${stt > 0 ? -1 : 1
          }deg)`;
        item.style.zIndex = -absStt;
        item.style.filter = "blur(5px)";
        item.style.display = absStt > 2 ? "none" : "block";
      }
    });
  };

  useEffect(() => {
    loadShow();
  }, [active]);

  const nextSlide = () => {
    setActive((prev) => (prev + 1 < projects.length ? prev + 1 : prev));
  };

  const prevSlide = () => {
    setActive((prev) => (prev - 1 >= 0 ? prev - 1 : prev));
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="text-[#6cc4e2] text-5xl font-semibold">Work</p>
        <h2 className={styles.sectionHeadText}>My Projects.</h2>
        <p className="mt-4 text-[#6cc4e2] text-2xl font-semibold">Below are the projects that I have created or worked on since 2023, I have given the deployment link for those i have deployed and a github link where the code of the Project is present.</p>
      </motion.div>
      <div className="h-full w-full flex justify-center items-center">
        <div className="slider flex items-center h-full p-10">
          {projects.map((project, index) => (
            <div className="item lg:w-8/12 md:w-6/12 sm:w-4/12 lg:left-56 md:left-56 sm:left-56 shadow-2xl p-10" key={index}>
              <img src={project.icon} alt={project.title} className="w-4/12 rounded-full" />
              <h1 className="lg:text-7xl md:text-5xl sm:text-3xl font-bold">{project.title}</h1>
              <p className="font-thin text-black">{project.date}</p>
              <ul className="list-disc pl-5 space-y-">
                {project.points.map((point, i) => (
                  <li className="lg:text-xl md:text-lg sm:text-sm" key={i}>{point}</li>
                ))}
              </ul>
              <br />
              <p>
                <strong className="text-xl">Deployment Status:</strong>{" "}
                {project.deployment.startsWith("https") ? (
                  <a href={project.deployment} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                    {project.deployment}
                  </a>
                ) : (
                  project.deployment
                )}
              </p>
            </div>
          ))}
          <button id="prev" onClick={prevSlide}>
            &lt;
          </button>
          <button id="next" onClick={nextSlide}>
            &gt;
          </button>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "work");
