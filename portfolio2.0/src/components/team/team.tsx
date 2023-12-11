import moncef from "../../assets/WhatsApp Image 2023-10-09 at 22.14.21 (1).png";
import othman from "../../assets/Screenshot_1.png";
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
          <div className="mx-auto grid  max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
            <div className="max-w-2xl col text-center" id="tt" >
              <h2 className="text-3xl font-bold tracking-tight grey900 sm:text-4xl ">
                Meet our leadership
              </h2>
              <p className="mt-6 text-lg leading-8 grey600">
                Webmorphers, a dynamic duo of passionate computer science
                engineering students, specialize in crafting cutting-edge
                websites using React and Tailwind CSS . With a shared commitment
                to excellence,
              </p>
            </div>
            <div className="flex items-center col-span-2">
            <ul
              role="list"
              className="grid w-full lg:px-9 gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
            >
              <a
                href="https://www.linkedin.com/in/monsif-souri-1b9a2a206/"
                target="_blank"
              >
                <li>
                  <div className="flex items-center justify-center gap-x-6">
                    <img
                      className="h-16 w-16 rounded-full"
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
                </li>
              </a>
              <a
                href="https://www.linkedin.com/in/othman-sohab/"
                target="_blank"
              >
                <li>
                  <div className="flex items-center gap-x-6">
                    <img
                      className="h-16 w-16 rounded-full"
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
              </a>
            </ul>
          </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};
export default team;
