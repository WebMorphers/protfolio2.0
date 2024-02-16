import "./Projects.css";
import Nexcent from "../../assets/nexcent.png";
import Notapark from "../../assets/notapark.png";
import Comptoir from "../../assets/Screenshot_4.png";
import smokey from "../../assets/smokeybrgr.png";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const projects = [
  {
    img: smokey,
    title: "Smoky Burgers",
    subtitle: "Burgers website ",
    description:
      "Responsive Landing  Page  | brand website  |  Burgers website   ",
    link: "https://smoky-burgers.vercel.app",
  },
  {
    img: Comptoir,
    title: "Le Comptoir Sucré",
    subtitle: " bakery website ",
    description:
      "Responsive Landing  Page  | brand website  |  bakery website   ",
    link: "https://comptoir-sucre.vercel.app",
  },
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
];

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
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
    <div
      className="lg:py-[10%] container mx-auto projectscls pt-20 flex items-center justify-center flex-col min-w-full"
      id="projects"
    >
<h1 className="max-sm:text-[50px] sm:text-[80px] md:text-[66px] max-md:text-3xl text-center">        Projects
      </h1>
      <div
        className="mt-4 line-height-18 word-spacing-4px px-[12%] align-center justify-center text-center"
        id="te"
      >
        <p className="max-sm:text-[18px] sm:text-[20px] md:text-[20px] te">
          We're an experienced web development team focused on innovation and
          technical excellence. Our portfolio spans startups to enterprises,
          crafting custom websites that excel in aesthetics and performance. We
          leverage cutting-edge technology for outstanding online experiences
        </p>
      </div>
      <div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={iconVariants}
          transition={{ duration: 0.5 }}
        >
          <div className="grid md:grid-cols-2 xl:gap-20 gap-20 md:gap-10 md:m-16 px-8 lg:m-24 m-8 ">
            {projects.map((project) => (
              <div className="flex flex-col px-4 md:px-10 py-3 rounded-xl shadow-2xl items-center gap-5   cursor-pointer cardss">
                <div>
                  <img src={project.img} alt="" />
                </div>
                <div className="text-center flex flex-col justify-center lg:px-14 items-center h-full gap-2 te">
                  <h1 className="text-2xl font-semibold">{project.title}</h1>
                  <h2 className="text-xl ">{project.subtitle}</h2>
                  <p className="text-sm opacity-80 ">{project.description}</p>
                  <div className="flex flex-row gap-3 py-3">
                    <div className="  text-xs font-semibold bg-amber-400 p-1 px-2 rounded-3xl border-2 pointer-events-none border-black bg-opacity-50 max-sm:text-[50%]">
                      React
                    </div>
                    <div className="  text-xs font-semibold bg-emerald-700  p-1 px-2 rounded-3xl border-2 pointer-events-none border-black bg-opacity-50 max-sm:text-[50%]">
                      Taailwind css
                    </div>
                    <div className="  text-xs font-semibold bg-blue-700   p-1 px-2 rounded-3xl border-2 pointer-events-none border-black bg-opacity-50 max-sm:text-[50%]">
                      Material UI
                    </div>
                  </div>

                  <a
                    className="px-2 py-2 bg-[#f5cc99] rounded w-max hover:bg-[#ebb7b2] max-sm:text-[80%] "
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
