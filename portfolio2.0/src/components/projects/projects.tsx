import "./Projects.css";
import Nexcent from "../../assets/nexcent.png";
import Notapark from "../../assets/notapark.png";
import Comptoir from "../../assets/Screenshot_4.png";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const projects = [
  {
    img: Nexcent,
    title: "Nexcent",
    subtitle: "Responsive Landing Page",
    description:
      "Responsive Landing Page Design | Website Home Page Design | Agency Website UI Design",
    link: "https://nexcent-pi.vercel.app/",
  },
  {
    img: Notapark,
    title: "Notapark",
    subtitle: "Hoodies Landing Page",
    description:
      "Responsive Landing Page Design | Website Home Page Design | Agency Website UI Design",
    link: "https://notapark.vercel.app/",
  },
  {
    img: Comptoir,
    title: "Le Comptoir Sucré",
    subtitle: " bakery website ",
    description:
      "Responsive Landing  Page  | brand website  |  bakery website   ",
    link: "https://comptoir-sucre.vercel.app",
  },
];

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const [isInView, setIsInView] = useState(inView);

  const iconVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    if (!isInView && inView) {
      setIsInView(true);
    }
  }, [isInView, inView]);
  return (
    <div className="lg:py-[10%]  container mx-auto pt-20 flex items-center justify-center flex-col min-w-full">
      <h1 className="xs:text-[50px] sm:text-[60px] md:text-[66px]">Projects</h1>
      <div
        className="mt-4 line-height-18 word-spacing-4px px-[12%] align-center justify-center text-center"
        id="te"
      >
        <p className="xs:text-[18px] sm:text-[20px] md:text-[20px] te">
          With a wealth of experience in web development, we are a team of
          dedicated creators driven by innovation and technical excellence. Our
          diverse portfolio includes successful collaborations with a wide range
          of clients, from startups to large enterprises. We are committed to
          crafting tailor-made websites that combine aesthetics, functionality,
          and performance. Our cutting-edge technical expertise enables us to
          embrace the latest technologies to meet each client's unique needs. We
          take pride in continuously pushing the boundaries of creativity to
          deliver exceptional online experiences.
        </p>
      </div>
      <div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"} // Use isInView instead of inView
          variants={iconVariants}
          transition={{ duration: 0.5 }}
        >
          <div className="grid md:grid-cols-2 xl:gap-20 gap-20 md:gap-10 md:m-16 p-8 lg:m-24 m-8 ">
            {projects.map((project) => (
              <div className="flex flex-col px-4 md:px-10 py-3 rounded-xl shadow-2xl items-center gap-5 hover:bg-gray-400 cursor-pointer">
                <div>
                  <img src={project.img} alt="" />
                </div>
                <div className="text-center flex flex-col justify-center lg:px-14 items-center h-full gap-2 te">
                  <h1 className="text-2xl font-semibold">{project.title}</h1>
                  <h2 className="text-xl ">{project.subtitle}</h2>
                  <p className="text-sm opacity-80 ">{project.description}</p>
                  <div className="flex flex-row gap-3 py-3">
                    <div className="  text-xs font-semibold bg-amber-400 p-1 px-2 rounded-3xl border-2 pointer-events-none border-black bg-opacity-50">
                      React
                    </div>
                    <div className="  text-xs font-semibold bg-emerald-700  p-1 px-2 rounded-3xl border-2 pointer-events-none border-black bg-opacity-50">
                      Taailwind css
                    </div>
                    <div className="  text-xs font-semibold bg-blue-700   p-1 px-2 rounded-3xl border-2 pointer-events-none border-black bg-opacity-50">
                      Material UI
                    </div>
                  </div>

                  <a
                    className="px-2 py-3 bg-[#f5cc99] rounded w-max hover:bg-[#ebb7b2] "
                    href={project.link}
                    target="-blank"
                  >
                    Live preview
                  </a>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
