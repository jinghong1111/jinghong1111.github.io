// Higher order component: used to wrap all the components SO THAT not left align, but near center

import {motion} from 'framer-motion' 
import { styles } from '../styles'; 
import {staggerContainer} from '../utils/motion'; 


const SectionWrapper = (Component, idName) => 
    // function returning ANOTHER function, thus making it higher order

    function HOC () {
        return (
            <motion.section
            variants = {staggerContainer()}
            initial = "hidden"
            whileInView = "show"
            viewport= {{once:true, amount: 0.25}}
            className = {`${styles.padding} max-w-7xl mx-auto relative z-0`}
            >   
            {/*  this is the scroll gif, making it clickable */}
                <span classname = "hash-span" id = {idName}> </span> 
            <Component />
            </motion.section>
        )
    }

    export default SectionWrapper 