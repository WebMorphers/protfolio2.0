 import './hero.css'
 import Links from "../Links/Links"


const hero = () => {
  return (
    <div className='flex flex-col justify-center items-center py-14'>

<div className='flex flex-row gap-32 justify-center '>
   <div className='flex flex-col justify-center items-center'>
      <p className='font-bold mb-4 text-3xl lg:text-7xl '> 
        <p className='text-[#909090] text-[50%] flex items-center justify-center' >Hello We Are</p>
          <br />
          <span className=" font-serif uppercase tracking-[5px] md:tracking-[10px] lg:tracking-[15px] felx justify-center items-center" id="span">
            WebMorphers
          </span><br />
          <p className='mt-8' >  A Team Of Web Developers</p>
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
  )
}

export default hero