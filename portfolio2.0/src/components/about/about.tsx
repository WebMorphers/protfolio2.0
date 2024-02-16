import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./about.css";
import Tech from "../technologies/techno";

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
      id="about"
    >
      <div className="flex flex-col px-24 max-sm:px-12 flex-wrap py-24 justify-center items-center gap-32  aboutus ">
        <div className="flex flex-col  gap-9 ">
        <h1 className="text-4xl max-md:text-3xl text-center">About Us</h1>
          <p id="tt" className="text-xl max-md:text-md  text-center ">
            Welcome to our company, the Best provider of
            <span className="keyword"> B2B web</span> and{" "}
            <span className="keyword"> mobile </span>
            solutions utilizing cutting-edge{" "}
            <span className="keyword"> technologies</span>. We understand how
            important it is for businesses to{" "}
            <span className="keyword"> stay ahead</span> of the curve in the
            rapidly evolving digital world of today. We are committed to
            assisting businesses in realizing the full potential.
            <br />
            <br />
            Our{" "}<span className="keyword">experienced developers</span> and{" "}
            <span className="keyword">designers </span> specialize in creating
            innovative solutions that are customized to meet the unique
            requirements of every <span className="keyword"> customer </span>.
            We pride ourselves on our ability to understand the unique
            challenges and opportunities presented and use that knowledge to
            deliver{" "}
            <span className="keyword">
              solutions that actually add value to businesses
            </span>
            <br />
            <br />
            <div className="hidden sm:block">
            Our <span className="keyword">staff </span> can assist you with
            streamlining internal procedures, generating new{" "}
            <span className="keyword"> revenue sources </span>, or simply stay
            ahead of the competition, We provide a wide range of
            <span className="keyword"> services </span>, such as continuous
            <span className="keyword">support</span>,{" "}
            <span className="keyword"> design</span>,{" "}
            <span className="keyword"> development</span>, and{" "}
            <span className="keyword">consulting </span>.
            <br />
            </div>
             If you're ready to
            take your business to the
            <span className="keyword"> next level</span> , we invite you to
            contact us to learn more about how we can help. .
            <span className="keyword"> </span>
            <br /> <br />
            <a href="#contact" className=" p-4 bg-slate-400 rounded-xl hover:bg-slate-500 shadow-xl hover:scale-125">Contact US</a>
          </p>
        </div>
        <div>
          <Tech />
        </div>
      </div>
    </motion.div>
  );
};

export default about;
