import React, { useEffect, useRef } from "react";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion"
import { projects } from "../constants";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { styles } from "../styles";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  useEffect(() => {
    //side effect: set up animations and event listeners
    const projectsContainer = document.querySelector(".projects");//select the container for projects
    const gsapAnimationContainer = document.querySelector(".gsapanimation");//select the container for animations

    if (!projectsContainer || !gsapAnimationContainer) return;//exit early if elements are not found

    const createAnimation = () => {//function to create scroll-triggered animations

      const horizontalScrollWidth = projectsContainer.scrollWidth - window.innerWidth;//calculate total scrollable width

      const horizontalTween = gsap.to(projectsContainer, {
        x: -horizontalScrollWidth,//move container horizontally
        ease: "power1.inOut",//easing for smooth animation
        duration: 1,//animation duration
        overwrite: "auto",//prevent overlapping animations
        immediateRender: false,//delay rendering to avoid flickers
      });
      const startColor = [34, 50, 68];//starting RGB color
      const endColor = [16, 24, 32];//ending RGB color
      let lastProgress = null;//track last animation progress to prevent redundant updates

      ScrollTrigger.create({//create ScrollTrigger for horizontal scroll animation
        trigger: ".gsapanimation",//target animation container
        start: "top top",
        end: `+=${horizontalScrollWidth}`,
        scrub: 1,//smooth scrubbing
        pin: true,
        animation: horizontalTween,
        invalidateOnRefresh: true,
        onUpdate: (self) => {//callback on scroll update
          const progress = Math.round(self.progress * 100);//get scroll progress as a percentage
          if (progress !== lastProgress) {
            lastProgress = progress;//update the progress tracker
            const currentColor = startColor.map((start, i) =>
              Math.round(gsap.utils.interpolate(start, endColor[i], progress / 100))
            );
            gsap.to(gsapAnimationContainer, {
              backgroundColor: `rgb(${currentColor.join(",")})`,//update background color dynamically
              overwrite: "auto",//prevent conflicting animations
            });
          }
        },
        onEnter: () => {//callback when scroll enters
          gsap.to(gsapAnimationContainer, {
            backgroundColor: "rgb(34, 50, 68)",//reset to start color
            overwrite: "auto",
          });
        },
        onLeave: () => {//callback when scroll leaves
          gsap.to(gsapAnimationContainer, {
            backgroundColor: "transparent",//make background transparent
            overwrite: "auto",
          });
        },
        onEnterBack: () => {//callback when scrolling back into view
          gsap.to(gsapAnimationContainer, {
            backgroundColor: "rgb(34, 50, 68)",//reset to start color
            overwrite: "auto",
          });
        },
        onLeaveBack: () => {//callback when scrolling back out of view
          gsap.to(gsapAnimationContainer, {
            backgroundColor: "transparent",//make background transparent
            overwrite: "auto",
          });
        },
      });
    };

    createAnimation();

    const handleResize = () => {//function to handle screen resize
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());//kill existing triggers
      createAnimation();//recreate animations for new dimensions
      ScrollTrigger.refresh();//refresh ScrollTrigger
    };

    window.addEventListener("resize", handleResize);//add event listener for window resize

    return () => {//cleanup function when component unmounts or dependencies change
      window.removeEventListener("resize", handleResize);//remove resize listener
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());//clean up ScrollTrigger instances
    };
  }, []);//empty dependency array ensures this effect runs once on mount

  const containerRef = useRef();//create a ref for DOM element access

  useEffect(() => {//det up card animations
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
                <div className="linkscol flex flex-col gap-4 text-red-300">
                  <p className="text-lg font-semibold mt-4">
                    <a href={project.deployment}>
                      DeploymentGitHub:{" "}
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
                    Deployment:{" "}
                    <a href={project.deployment} target="_blank" rel="noopener noreferrer">
                      <span className="text-blue-500">{project.deployment}</span>
                    </a>
                  </p>
                  <p className="text-lg font-semibold mt-4">
                    GitHub:{" "}
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
      <div className="animation w-full h-full flex flex-col rounded-2xl mt-10">
        {projects.map((project, index) => (
          <div key={index} className="project-card p-6 mb-6 rounded-lg shadow-lg bg-white flex flex-col gap-4 border border-gray-200">
            <div className="flex items-center gap-4">
              <div
                className="icon w-16 h-16 rounded-full flex-shrink-0"
                style={{ backgroundColor: project.iconBg }}
              >
                <img
                  src={project.icon}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                <p className="text-sm text-gray-500">{project.company_name}</p>
              </div>
            </div>
            <div className="text-gray-500 text-sm">
              <span className="font-semibold">Date:</span> {project.date}
            </div>
            <ul className="list-disc list-inside text-gray-700">
              {project.points.map((point, i) => (
                <li key={i} className="text-sm">
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
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "work");