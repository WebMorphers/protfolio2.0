import "./Navbar.css";
import logo from "../../assets/nobg_logo.png";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link, animateScroll as scroll } from "react-scroll";
import DW from "../dark/dark_white";

const Navbar = () => {
  const [nav, setnav] = useState(false);
  function chang() {
    setnav(!nav);
  }

  return (
    <div
      id="nav"
      className="flex w-full  top-0  justify-between items-center h-24 mx-auto px-4  navbarc"
    >
      <a href="/">
        <img className="h-20 w-23" src={logo} alt="" />
      </a>
      <ul className="hidden md:flex">
        <li className="p-4">
          <a
            className="no-underline mx-4 cursor-pointer font-normal hover:text-orange-600"
            onClick={(e: React.MouseEvent) => {
              e.preventDefault();
              const aboutSection = document.getElementById("about");
              aboutSection?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            ABOUT US
          </a>
        </li>

        <li className="p-4">
          <a
            className="no-underline mx-4 cursor-pointer font-normal hover:text-orange-600"
            onClick={(e: React.MouseEvent) => {
              e.preventDefault();
              const aboutSection = document.getElementById("projects");
              aboutSection?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            OUR PROJECTS
          </a>
        </li>
        <li className="p-4">
          <a
            className="no-underline mx-4 cursor-pointer font-normal hover:text-orange-600"
            onClick={(e: React.MouseEvent) => {
              e.preventDefault();
              const aboutSection = document.getElementById("contact");
              aboutSection?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            CONTACT US
          </a>
        </li>
        <li className="p-4">
          <DW />
        </li>
      </ul>

      <div onClick={chang} className="block md:hidden">
        <div className="flex flex-row gap-5 justify-center items-center">
          <div>
            <DW />
          </div>
          <div>
            {nav ? (
              <AiOutlineClose size={20} color={"black"} />
            ) : (
              <AiOutlineMenu size={20} color={"black"} />
            )}
          </div>
        </div>
      </div>
      <ul
        className={
          nav
            ? " fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-amber-700 ease-in-out duration-500 z-40"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <a href="/">
          <img className="h-20 w-23" src={logo} alt="" />
        </a>
        <li className="p-4">
          <a
            className="no-underline mx-4 cursor-pointer font-thin text-white hover:text-orange-600 "
            onClick={(e: React.MouseEvent) => {
              e.preventDefault();
              const aboutSection = document.getElementById("about");
              aboutSection?.scrollIntoView({ behavior: "smooth" });
              chang();
            }}
          >
            ABOUT US
          </a>
        </li>

        <li className="p-4">
          <a
            className="no-underline mx-4 cursor-pointer font-thin text-white hover:text-orange-600 "
            onClick={(e: React.MouseEvent) => {
              e.preventDefault();
              const aboutSection = document.getElementById("projects");
              aboutSection?.scrollIntoView({ behavior: "smooth" });
              chang();
            }}
          >
            OUR PROJECTS
          </a>
        </li>
        <li className="p-4">
          {" "}
          <a
            className="no-underline mx-4 cursor-pointer font-thin text-white hover:text-orange-600 "
            onClick={(e: React.MouseEvent) => {
              e.preventDefault();
              const aboutSection = document.getElementById("contact");
              aboutSection?.scrollIntoView({ behavior: "smooth" });
              chang();
            }}
          >
            CONTACT US
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
