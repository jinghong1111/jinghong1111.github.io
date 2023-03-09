import React from 'react'
import Tilt from 'react-tilt' 
import { MotionConfigContext, motion } from 'framer-motion'; 
import { styles } from '../styles'; 
import { services } from '../constants'; 
import { fadeIn, textVariant} from '../utils/motion'; 

const About = () => {
  return (
    <Motion.div>
      <p>Introduction</p> 
      <p>Introduction</p> 
    </Motion.div>
  )
}

export default About