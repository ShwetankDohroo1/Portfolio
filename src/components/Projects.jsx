import React, { useEffect, useRef } from "react";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion"
import { projects } from "../constants";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { styles } from "../styles";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  //horizontal scroll
  useEffect(() => {
    const projectsContainer = document.querySelector(".projects");
    const gsapAnimationContainer = document.querySelector(".gsapanimation");

    if (!projectsContainer || !gsapAnimationContainer) return;

    const calculateScrollWidth = () =>
      projectsContainer.scrollWidth - window.innerWidth;

    const createAnimation = () => {
      const horizontalScrollWidth = calculateScrollWidth();
      const horizontalTween = gsap.to(projectsContainer, {
        x: -horizontalScrollWidth,
        ease: "power2.inOut",
        duration: 1,
        overwrite: "auto",
        immediateRender: false,
      });

      const startColor = [34, 50, 68];
      const endColor = [16, 24, 32];
      let lastProgress = null;

      ScrollTrigger.create({
        trigger: ".gsapanimation",
        start: "top top",
        end: `+=${horizontalScrollWidth}`,
        scrub: true,
        pin: true,
        fastScrollEnd: true,
        animation: horizontalTween,
        invalidateOnRefresh: true,
        onUpdateDebounced: (self) => {
          const progress = Math.round(self.progress * 100);
          if (progress !== lastProgress) {
            lastProgress = progress;
            const currentColor = startColor.map((start, i) =>
              Math.round(gsap.utils.interpolate(start, endColor[i], progress / 100))
            );
            gsap.set(gsapAnimationContainer, {
              backgroundColor: `rgb(${currentColor.join(",")})`,
            });
          }
        },
        onEnter: () => {
          gsap.to(gsapAnimationContainer, {
            backgroundColor: "rgb(34, 50, 68)",
            overwrite: "auto",
          });
        },
        onLeave: () => {
          gsap.to(gsapAnimationContainer, {
            backgroundColor: "transparent",
            overwrite: "auto",
          });
        },
        onEnterBack: () => {
          gsap.to(gsapAnimationContainer, {
            backgroundColor: "rgb(34, 50, 68)",
            overwrite: "auto",
          });
        },
        onLeaveBack: () => {
          gsap.to(gsapAnimationContainer, {
            backgroundColor: "transparent",
            overwrite: "auto",
          });
        },
      });
    };

    createAnimation();

    const handleResize = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      gsap.globalTimeline.clear();
    };
  }, []);//empty dependency array ensures this effect runs once on mount

  const containerRef = useRef();//create a ref for DOM element access

  //cards animation
  useEffect(() => {
    const cardsWrappers = gsap.utils.toArray(".card-wrapper");
    const cards = gsap.utils.toArray(".card");

    cardsWrappers.forEach((wrapper, i) => {
      const card = cards[i];//get the corresponding card
      let scale = 1,
        rotation = 0; //initialize scale and rotation
      if (i !== cards.length - 1) {
        scale = 0.9 + 0.025 * i; //scale cards based on index
        rotation = -10;//rotate cards slightly
      }
      gsap.to(card, {
        scale: scale,//animate scale
        rotationX: rotation,//animate rotation
        transformOrigin: "top center",//set transform origin
        ease: "none",
        scrollTrigger: {
          trigger: wrapper,
          start: "top " + (60 + 10 * i),//start position
          end: "bottom 1000",//end position
          endTrigger: ".wrapper",//end trigger element
          scrub: true,
          pin: wrapper,
          pinSpacing: false,
          id: i + 1,
        },
      });
    });
  }, []);//empty dependency array ensures this effect runs once on mount

  return (
    <>
      <div>
        <div className="flex flex-col">
          <p className="Heading text-[#f0dc82] text-4xl font-semibold">Work</p>
          <h2 className={`${styles.sectionHeadText} HeadingText`}>My Projects.</h2>
          <p className="Heading-desc mt-4 text-[#FFFFF0] text-2xl font-semibold">
            Below are the projects that I have created or worked on since 2023. I have provided the
            deployment links for deployed projects and GitHub links for the source code.
          </p>
        </div>
      </div>
      {/* scroll */}
      <div className="gsapanimation rounded-2xl mt-10">
        <div className="projects flex h-full">
          {projects.map((project, index) => (
            <div className="project-item flex h-full flex-col relative justify-center items-center" key={index}>
              <img src={project.icon} alt="" loading="lazy" className="absolute inset-0 opacity-30 blur-md -z-10 w-full h-full p-4" />
              <div className="prj h-full w-full flex flex-col justify-center items-center">
                <h2 className={`projecttitle text-7xl font-bold`} style={{ color: project.color }}>{project.title}</h2>
                <p className="text-lg text-gray-100 mt-2">{project.date}</p>
                <div className="projectinfo text-start text-[#f5fffa] mt-4 w-6/12 p-5 rounded-lg">
                  <ul className="list-disc">
                    {project.points.map((point, i) => (
                      <li className="projectpoints text-2xl font-semibold m-4" key={i}>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="linkscol flex gap-4 text-red-300">
                  <p className="text-lg font-semibold mt-4">
                    <a href={project.deployment}>
                      Deployment{" "}
                    </a>
                  </p>
                  <p className="text-lg font-semibold mt-4">
                    <a href={project.github}>
                      GitHub
                    </a>
                  </p>
                </div>
              </div>
            </div>
          ))}
          <div className="arrowdown h-full flex items-center"><span className="text-9xl">&#8628;</span></div>
        </div>
      </div>
      {/* card animation */}
      <div className="noanimation w-full h-full rounded-2xl mt-10">
        <div ref={containerRef} className="flex flex-col h-full wrapper light">
          <div className="cards">
            {projects.map((project, index) => (
              <div className="card-wrapper flex h-full flex-col relative justify-center items-center border-b-2" key={index}>
                <div className={`card h-full w-full flex flex-col justify-center items-center bg-[#223244] mb-2 p-5 rounded-lg gradient-${index % 4}`}>
                  <h2 className={`projecttitle text-7xl font-bold text-center`} style={{ color: project.color }}>
                    {project.title}
                  </h2>
                  <p className="text-lg text-gray-100 mt-2">{project.date}</p>
                  <div className="text-start text-white mt-4 w-full p-5 rounded-lg">
                    <ul className="list-disc">
                      {project.points.map((point, i) => (
                        <li className="pointtext text-2xl font-semibold m-4" key={i}>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-lg font-semibold mt-4">
                    Deployment{" "}
                    <a href={project.deployment} target="_blank" rel="noopener noreferrer">
                      <span className="text-blue-500">{project.deployment}</span>
                    </a>
                  </p>
                  <p className="text-lg font-semibold mt-4">
                    GitHub{" "}
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <span className="text-blue-500">{project.github}</span>
                    </a>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* mobile */}
      <div className="animation w-full h-full flex flex-col rounded-2xl mt-10">
        {projects.map((project, index) => (
          <motion.div key={index} className="project-card p-6 mb-6 rounded-lg shadow-lg bg-[#4b4a54] flex flex-col gap-4" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.8, delay: index * 0.2 }}>
            <div className="flex items-center gap-4">
              <div className="icon w-16 h-16 rounded-full flex-shrink-0" style={{ backgroundColor: project.iconBg }}>
                <img src={project.icon} alt={project.title} className="w-full h-full object-cover rounded-full" />
              </div>
              <div className="flex flex-col">
                <h3 className="projecttitle text-3xl font-bold text-white" style={{ color: project.color }}>{project.title}</h3>
                <p className="text-sm text-white">{project.company_name}</p>
              </div>
            </div>
            <div className="text-gray-300 text-sm">
              <span className="font-semibold">Date:</span> {project.date}
            </div>
            <ul className="list-disc list-inside text-white">
              {project.points.map((point, i) => (
                <li key={i} className="projectpoints text-md">
                  {point}
                </li>
              ))}
            </ul>
            <div className="flex gap-4 mt-4">
              <a href={project.deployment} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm font-semibold">
                Deployment
              </a>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm font-semibold">
                GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "work");