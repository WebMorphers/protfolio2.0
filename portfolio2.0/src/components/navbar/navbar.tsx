import "./Navbar.css";
import logo from "../../assets/nobg_logo.png";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
 import DW from "../dark/dark_white";
  
 import { Drawer } from "vaul";

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
       
<Drawer.Root direction="right">
      <Drawer.Trigger asChild className="block md:hidden">
      <AiOutlineMenu size={20} color={"black"} /> 
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="bg-white flex flex-col rounded-t-[10px] rounded-b-[10px]  h-full w-[60%] mt-24 fixed bottom-0 right-0">
          <div className="p-4 bg-white flex-1 h-full">
            <ul className="text-center">
          <a href="/">
          <img className="h-20 w-23" src={logo} alt="" />
        </a>
        <li className="p-4">
          <a
            className="no-underline mx-4 cursor-pointer font-thin   hover:text-orange-600 "
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
            className="no-underline mx-4 cursor-pointer font-thin  hover:text-orange-600 w-full "
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
            className="no-underline mx-4 cursor-pointer font-thin   hover:text-orange-600 "
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
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
       
    </div>
  );
};

export default Navbar;
