 
 import "./about.css"
import Tech from "../technologies/techno"

const about = () => {
  return (
    <div className='flex flex-row justify-center items-center gap-32'>
        <div className='flex flex-col'> 
        <p id="tt" className="text-2xl max-w-2xl"> 
        We are a dynamic duo of experienced  <span className="keyword">software developers</span> , 
        specializing in web development. With expertise in <span className="keyword">React JS,
         TypeScript, and Tailwind CSS </span>, we excel in creating <span className="keyword">responsive landing pages</span> 
         and eye-catching <span className="keyword"> splash pages.</span> 
          Let us bring your web projects to life with our skills and passion for design and functionality.  
             </p>
  
        </div>
        <div> <Tech /> </div>
    </div>
  )
}

export default about