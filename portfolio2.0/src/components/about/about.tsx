import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import "./about.css"
import Tech from "../technologies/techno"

const about = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,  
  });

  const iconVariants = {
    hidden: { opacity: 0, y: 20 },
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
 

    <div className='flex px-24 max-sm:px-12 flex-wrap py-24 justify-center items-center gap-32  aboutus '>
        <div className='flex flex-col lg:max-w-md gap-9 '> 
        <h1 className="text-4xl font-bold text-center">About Us</h1>
        <p id="tt" className="text-xl max-w-4xl max-md:text-md  text-center "> 
        We are a dynamic duo of experienced  <span className="keyword">software developers</span> , 
        specializing in web development. With expertise in <span className="keyword">React JS,
         TypeScript, and Tailwind CSS </span>, we excel in creating <span className="keyword">responsive landing pages </span> 
         and eye-catching <span className="keyword"> splash pages. </span> 
          Let us bring your web projects to life with our skills and passion for design and functionality.  
             </p>
  
        </div>
        <div> <Tech /> </div>
    </div>
    </motion.div>
  )
}

export default about