import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div variants={fadeIn("up", "spring", index * 0.1, 0.75)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.5 }} className='w-full p-[1px] rounded-[20px] shadow-card'>
      <div className="bg-[#F9F6EE] bg-opacity-80 rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col shadow-lg">
        <img src={icon} alt={title} className='w-18 h-18 object-contain' />
        <h3 className='text-[#3a434c] text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="Heading text-[#f0dc82] text-4xl font-semibold">Introduction</p>
        <h2 className={`${styles.sectionHeadText} HeadingText text-[#fdb555]`}>Overview.</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)} className="Heading-desc xmt-4 text-[#FFFFF0] text-2xl font-semibold">
        I'm a skilled software developer with experience in
        JavaScript, frameworks like React, Node.js, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      <div className="marquee w-full mt-40" style={{ height: '7vh' }}>
        <div className="flex justify-center items-center w-full h-full text-5xl">
          <span> ~ React.js ~ Node.js ~ Express ~ MongoDB ~ Gsap ~ Mongoose ~</span>
          <span> ~ FrameMotion ~ TailwindCSS ~ Mongoose ~ JavaScript ~ Redis ~ MySQL ~</span>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");