import React from "react";
import { styles } from '../styles'; 
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div> 
      <p className = {styles.sectionSubText}
      > My Tech Stack </p>
      <h2 className = {styles.sectionHeadText}
    > Tech</h2> 
    <div className='flex 
    flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <img src={technology.icon} alt={technology.name} />
        </div>
      ))}
    </div>
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
