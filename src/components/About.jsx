import React from 'react'
import Tilt from "react-tilt";
import { MotionConfigContext, motion } from 'framer-motion'; 
import { styles } from '../styles'; 
import { services } from '../constants'; 
import { fadeIn, textVariant} from '../utils/motion'; 
import { useState} from 'react'; 
// here is the HOC in action: 
import {SectionWrapper} from '../hoc'; 


const ServiceCard = ({icon, title, description, index}) => { 
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  const frontVariant = {
    visible: { opacity: 1, rotateY: 0, rotateX : 0},
    hidden: { opacity: 0, rotateY: 180, rotateX : 180},
  };

  const backVariant = {
    visible: { opacity: 1, rotateY: 0, rotateX : 0 },
    hidden: { opacity: 0, rotateY: 0, rotateX : 0  },
    // size of the card is 250px, so the text should fit inside the card 
  };

  return (
    <Tilt classname="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        onClick={handleCardClick}
      >
        {isFlipped ? (
          <motion.div
            variants={backVariant}
            initial="hidden"
            animate="visible"
            exit="hidden"
            // adjusted the size of the width of the card to fit the text 
            className="bg-tetriary rounded-[20px] py-5 px-12 max-w-[500px] min-h-[280px] flex justify-evenly items-center flex-col"
          >

            <p className="text-white text-[18px] font-bond text-fit ">
              {description}
            </p>
          </motion.div>
        ) : (
          <motion.div
            variants={frontVariant}
            initial="visible"
            animate="visible"
            exit="hidden"
            className="bg-tetriary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
          >
            <img
              src={icon}
              alt={title}
              className="w-16 h-16 object-contain"
            />
            <h3 className="text-white text-[20px] font-bond text-center">
              {title}
            </h3>
          </motion.div>
        )}
      </motion.div>
    </Tilt>
  );
};


const About = () => {
  return (
  <>
    <motion.div variants = {textVariant()}> 
      <p className = {styles.sectionSubText}
      >Introduction </p>
      <h2 className = {styles.sectionHeadText}
      >Who am I</h2> 
    </motion.div>
    <motion.p 
    // 1. direction, 2. type, 3. delay, 4. duration 
    variants = {fadeIn("","", 0.1,1)}
    className= "mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
    >
      My name is JingHong Huang and I am an aspiring software engineer who is proficient with the MERN stack and AI Model training. 
      I am experienced with Python, Java, C, C++, Javascript, Go, SQL and NoSQL databases
      and comfortable with technologies such as React, Node.js, Three.js, Flask. 
      I enjoy learning new technologies and I am always looking for new opportunities to learn
      by creating new projects that are applicable to real world problems. 
      Send me a message and let's work together (´｡• ᵕ •｡`) ! 
      email: jinghong@bu.edu

    </motion.p>
    {/* creating the cards */}
    {/* make the card the same size */} 
 
    <div className = "mt-20 flex flex-wrap gap-10"> 
    {services.map((service,index) => (
      <ServiceCard key = {service.description} index = {index}
      {...service}/> 
    ))}
    </div>
  </>
  )
}
// exporting the component, and the id of the component
export default SectionWrapper(About, "about")