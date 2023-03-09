import React from 'react'
import Tilt from "react-tilt";
import { MotionConfigContext, motion } from 'framer-motion'; 
import { styles } from '../styles'; 
import { services } from '../constants'; 
import { fadeIn, textVariant} from '../utils/motion'; 
// here is the HOC in action: 
import {SectionWrapper} from '../hoc'; 


const ServiceCard = ({icon, title, index}) => { 
  return (
   <Tilt classname = "xs:w-[250px] w-full">
    <motion.div 
      variants = {fadeIn("right", "spring", 0.5*index, 0.75)}
      className = "w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
       >
        {/* creating the cards */}
        <div 
          options = {{
            max: 45,
            scale: 1, 
            speed: 450

          }}
          className = "bg-tetriary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
          >
            <img src= {icon} alt = {title}
            className = "w-16 h-16 object-contain" /> 
            <h3 className = "text-white text-[20px] font-bond text-center"> {title} </h3> 
            </div >
       </motion.div>
   </Tilt>
  )
}


const About = () => {
  return (
  <>
    <motion.div variants = {textVariant()}> 
      <p className = {styles.sectionSubText}
      >Introduction </p>
      <h2 className = {styles.sectionHeadText}
      >Overview</h2> 
    </motion.div>
    <motion.p 
    // 1. direction, 2. type, 3. delay, 4. duration 
    variants = {fadeIn("","", 0.1,1)}
    className= "mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
    >
      I'm an aspiring software engineer with adaquate knowledge of the MERN stack. 
      I am experienced with Python, Java, C, C++, Javascript, Go, SQL and NoSQL databases
      and comfortable with framworks such as React, Node.js, Three.js, Flask. 
      I enjoy learning new technologies and frameworks and am always looking for new opportunities to learn
      and create new projects that are applicable to real world problems. 
      Send me a message and let's work together (´｡• ᵕ •｡`) ! 

    </motion.p>
    {/* creating the cards */}

    <div className = "mt-20 flex flex-wrap gap-10"> 
    {services.map((service,index) => (
      <ServiceCard key = {service.title} index = {index}
      {...service}/> 
    ))}
    </div>
  </>
  )
}
// exporting the component, and the id of the component
export default SectionWrapper(About, "about")