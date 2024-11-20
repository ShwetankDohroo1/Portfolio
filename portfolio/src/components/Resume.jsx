import React, { useEffect, useRef } from 'react';
import ShwetankResumeCanvas from './Canvas/resume.jsx';
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Resume = () => {
    const resumeRef = useRef(null);

    const handleModelClick = () => {
        const userConfirmed = window.confirm("Do you want to download my resume?");

        if (userConfirmed) {
            const link = document.createElement('a');
            link.href = 'portfolio/src/assets/Shwetank_Dohroo_Resume.jpg';
            link.download = 'ShwetankResume.pdf';
            link.click();
        }
    };

    useEffect(() => {
        if(resumeRef.current){
            gsap.fromTo(
                resumeRef.current,
                {x: -100,opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    scrollTrigger:{
                        trigger: resumeRef.current,
                        start: "top bottom",
                        end:"bottom bottom",
                        // markers:true,
                        scrub:true,
                        toggleActions: "play none none none",
                    },
                }
            );
        }
    }, []);

    return (
        <>
            <motion.div variants={textVariant()}>
                <h2 className={styles.sectionHeadText}>My Resume.</h2>
                <p className="text-[#2dc196] text-3xl font-semibold">Click below to download my resume.</p>
            </motion.div>
            <div ref={resumeRef} onClick={handleModelClick} className="resumediv h-full w-full">
                <ShwetankResumeCanvas />
            </div>
        </>
    );
};

export default SectionWrapper(Resume, "resume");
