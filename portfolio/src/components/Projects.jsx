import React, { useEffect } from "react";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { styles } from "../styles";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  useEffect(() => {
    const projectsContainer = document.querySelector(".projects");
    const gsapAnimationContainer = document.querySelector(".gsapanimation");
    if (!projectsContainer || !gsapAnimationContainer)
      return;
    const createAnimation = () => {
      const horizontalScrollWidth = projectsContainer.scrollWidth - window.innerWidth;
      const horizontalTween = gsap.to(projectsContainer, {
        x: -horizontalScrollWidth,
        ease: "power1.inOut",
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
        scrub: 1,
        pin: true,
        animation: horizontalTween,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const progress = Math.round(self.progress * 100);
          if (progress !== lastProgress) {
            lastProgress = progress;
            const currentColor = startColor.map((start, i) =>
              Math.round(gsap.utils.interpolate(start, endColor[i], progress / 100))
            );
            gsap.to(gsapAnimationContainer, {
              backgroundColor: `rgb(${currentColor.join(",")})`,
              overwrite: "auto",
            });
          }
        },
      });
    };
    createAnimation();
    const handleResize = () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      createAnimation();
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <div>
        <div className="flex flex-col">
          <p className="Heading text-[#6cc4e2] text-5xl font-semibold">Work</p>
          <h2 className={`${styles.sectionHeadText} HeadingText`}>My Projects.</h2>
          <p className="Heading-desc mt-4 text-[#6cc4e2] text-2xl font-semibold">
            Below are the projects that I have created or worked on since 2023. I have provided the
            deployment links for deployed projects and GitHub links for the source code.
          </p>
        </div>
      </div>
      <div className="gsapanimation bg-[#223244] rounded-2xl mt-10">
        <div className="projects flex">
          {projects.map((project, index) => (
            <div className="project-item flex flex-col justify-center items-center" key={index}>
              <div className={`projecticon card-${index} absolute w-2/12`}>
                <img src={project.icon} loading="lazy" alt="" className="rounded-2xl" />
              </div>
              <h2 className="text-7xl font-bold text-white">{project.title}</h2>
              <p className="text-lg text-gray-400 mt-2">{project.date}</p>
              <div className="text-start text-lg text-white mt-4 border-2 w-6/12 p-5 rounded-2xl">
                <ul className="list-disc list-inside ">
                  {project.points.map((point, i) => (
                    <li className="text-xl font-semibold m-1" key={i}>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-lg font-semibold mt-4">
                Deployment:{" "}
                <span className="text-blue-500">{project.deployment}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
      <section className="outro">
        <h1>That's all with my projects, hope you found them interesting!</h1>
      </section>
    </>
  );
};

export default SectionWrapper(Projects, "work");