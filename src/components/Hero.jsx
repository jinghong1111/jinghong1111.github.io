import React from 'react'
import {motion} from 'framer-motion' 
import { ComputersCanvas} from './canvas'; 
import { styles } from '../styles'; 

const Hero = () => {
  return (
    <section className = "relative w-full h-screen mx-auto">
      <div className = {`${styles.paddingX} absolute inset-0 top-[100px] 
      max-w-7x1 mx-auto flex flex-row items-start gap-5`}> 
      <div className = "flex flex-col justify-center items-center mt-5">
         {/* the yellow DOT, idk if i want to keep using it */} 
        <div className = "w-5 h-5 rounded-full bg-[#FFD700]"/>
        <div className = "w-1 sm:h-80 h-40 yellow-gradient"/>
      </div>

        <div> 
          <h1 className= {`${styles.heroHeadText}text-white`}> Greetings, I'm <span className = "text-[#add8e6]" > JingHong Huang 
          </span> 
          </h1> 
          <p className = {`${styles.heroSubText}`}>
            I'm a software engineer based in Boston, MA. I'm passionate about building software that improves people's lives.
          </p>

        </div> 
      </div> 

      <div> 
        <ComputersCanvas /> 
      </div> 
    </section>
  )
}

export default Hero