import moncef from "../../assets/22.png";
import othman from "../../assets/othman.jpg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import '../about/about.css'

const team = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  const iconVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={iconVariants}
        transition={{ duration: 0.5 }}
      >
        <div className="  py-24 sm:py-32 team">
        <h1 className="text-4xl max-md:text-3xl text-center">Meet our leadership
          </h1>
          <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-2 py-10">
            <div className="flex items-center col-span-2">
            <ul
              role="list"
              className="grid w-full lg:px-9 gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2 text"
            >
              
                <li><a href="https://www.linkedin.com/in/monsif-souri-1b9a2a206/" target="blank-_self">
                  <div className="flex items-center justify-center gap-x-6">
                    <img
                      className="h-20 w-20 rounded-full object-cover"
                      src={moncef}
                      alt=""
                    />
                    <div>
                      <h3 className="text-base font-semibold leading-7 tracking-tight grey900">
                        Monsif Souri
                      </h3>
                      <p className="text-sm font-semibold leading-6 fc">
                        Founder
                      </p>
                    </div>
                  </div>
                  </a>
                </li>
              
                <li>
                  <div className="flex items-center justify-center gap-x-6">
                    <img
                      className="h-20 w-20 rounded-full object-cover" 
                      src={othman}
                      alt=""
                    />
                    <div>
                      <h3 className="text-base font-semibold leading-7 tracking-tight grey900">
                        Othman Sohab
                      </h3>
                      <p className="text-sm font-semibold leading-6 fc">
                        Co-Founder / CEO
                      </p>
                    </div>
                  </div>
                </li>
            </ul>
          </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};
export default team;
