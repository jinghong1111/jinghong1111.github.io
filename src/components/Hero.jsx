import React from 'react'
import {motion} from 'framer-motion' 
import { ShibaCanvas} from './canvas'; 
import { styles } from '../styles'; 

const Hero = () => {
  return (
    <section className = "relative w-full h-screen mx-auto">
      {/* add the div on the right side too  */}
      <div className = {`${styles.paddingX} absolute inset-0 top-[100px] 
      max-w-7x1 mx-auto flex flex-row items-start gap-5`}> 

      {/* add the div on the left side */}
      <div className = "flex flex-col justify-center items-center mt-5">
        <div className = "w-3 sm:h-80 h-40 yellow-gradient"/>
      </div>
      
        {/* text */}
      <div> 
        <h2 className= {`${styles.heroHeadText}text-white`}> Hi, I'm <span className = "text-[#add8e6]" > JingHong Huang
          </span> 
          </h2> 
          <p className = {`${styles.heroSubText}`}>
          <span className = "text-[#D3D3D3]"> 
            I'm a software engineer based in Boston, MA. I'm passionate about building software that improves people's lives.
            [P.S. you can play around with the 3D Shiba Inu below whenever you get tired of scrolling!]
          </span>

          </p>
      </div >

      {/* add the div on the right side and same height as the left one */}
      <div className = "flex flex-col justify-end mt-3">
        <div className = "w-3 sm:h-80 h-40 yellow-gradient"/>
      </div>
        </div> 

    {/* add the cute canvas here */}
    <ShibaCanvas />
    <div className='absolute xs:bottom-0 bottom-32 w-full flex justify-center items-center'>
  <a href='#about'>
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className='w-[95px] h-[55px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'
    >
    <span className= "text-[#CF9FFF]" > Click Me! </span>
    </motion.button>
  </a>
</div>
  </section>
  );
};

export default Hero;