 import './hero.css'
 import Links from "../Links/Links"
 import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,  
  });

  const iconVariants = {
    hidden: { opacity: 0, y:  80 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <motion.div
    ref={ref}
    initial="hidden"
    animate={inView ? "visible" : "hidden"}
    variants={iconVariants}
    transition={{ duration: 0.5 }}
   >
    
    <div className='flex flex-col justify-center items-center py-28 hero'>

<div className='flex gap-32 justify-center max-md:flex-col '>
   <div className='flex flex-col justify-center items-center'>
      <p className='font-bold mb-4 text-3xl lg:text-7xl '> 
        <p className='text-[#efefef] text-[50%] flex items-center justify-center hwr  ' >Hello We Are</p>
          <br />
          <span className=" font-serif flex text-center uppercase tracking-[5px] md:tracking-[10px] lg:tracking-[15px] felx justify-center items-center" id="span">
            WebMorphers
          </span><br />
          <p className='mt-8 atowd' >  A Team Of Web Developers</p>
      </p>
   </div>
   <div>
   <span className="scroll-icon flex flex-col justify-center items-center  ">
            <span className="scroll-icon__dot"></span>  
          </span> 
   </div>

</div>

<div> <Links/></div>
      
       </div>
       </motion.div>
  )
}

export default hero