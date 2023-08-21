import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import resume_icon from "../assets/resume_icon.png"; 
// import JHH_2023_resume from "../assets/resume_folder/JHH_2023_resume.pdf";
import JHH_resume from "../assets/resume_folder/JHH_resume.pdf"; 


const ResumeCard = () => {

  return (
    <motion.div variants={fadeIn("up", "spring")}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src= {resume_icon}
            alt='resume_image'
            className='w-full h-full object-cover rounded-2xl'
            onClick={() => window.open(JHH_resume, "_blank")}
            />
            </div>

      </Tilt>
    </motion.div>
  );
};

const Resume = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Career Status:</p>
        <h2 className={`${styles.sectionHeadText}`}>My Resume</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          This is my resume that I will be updating as I go along. 
        </motion.p>
      </div>
      <ResumeCard/>
    </>
  );
};

export default SectionWrapper(Resume, "resume");