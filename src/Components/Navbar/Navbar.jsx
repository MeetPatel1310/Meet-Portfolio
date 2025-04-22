import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
// import Home from "../Home/Home";
import "../../Components/Navbar/Navbar.css";

const Navbar = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  //we cannot use directly props value like hover:text-${props.navTheme} in tailwind css
  // const [navTheme, setNavTheme] = useState(props.navTheme);

  // useEffect(() => {
  //   setNavTheme(props.navTheme);
  //   console.log("Navbar ", props.navTheme);
  // }, [props.navTheme]);

  useEffect(() => {
    document.documentElement.style.setProperty('--nav-hover-color', props.navTheme);
  }, [props.navTheme]);

  //use ID to Scrolls or jumps to a specific section of the current page.
  // Link to mainly use to navigates between different pages or components in a React app.
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <nav className="flex justify-between items-center h-12 bg-slate-900 text-white px-10 fixed top-0 left-0 right-0  z-50" style={{ boxShadow: `0 0.5px 20px 0 ${props.navTheme}` }}>
        <div className="font-bold text-xl" style={{color:`${props.navTheme}`}}>Portfolio</div>
        <ul className="hidden md:flex justify-between items-center md:gap-12 pr-8 h-full ">
          <Link to="#" onClick={() => handleScroll("about")}>
            <li
              className={` nav-item cursor-pointer   hover:scale-105 duration-500 w-1/4 text-center`}
            >
              {/* style={{ color: props.navTheme }}  hover:text-${navTheme} */}
              About
            </li>
          </Link>
          <Link to="#" onClick={() => handleScroll("experiance")}>
            <li
              className="nav-item cursor-pointer  hover:scale-105 duration-500 w-1/4 text-center"
            >
              Experience
            </li>
          </Link>
          <Link to="#" onClick={() => handleScroll("projects")}>
            <li
              className="nav-item cursor-pointer  hover:scale-105 duration-500 w-1/4 text-center"
            >
              Projects
            </li>
          </Link>
          <Link to="#" onClick={() => handleScroll("contact")}>
            <li
              className="nav-item cursor-pointer hover:scale-105 duration-500 w-1/4 text-center"
            >
              Contact
            </li>
          </Link>
        </ul>
        <button
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
          className="menu-icon md:hidden absolute right-4 pr-1 hover:animate-none focus:animate-none "
        >
          <i class="bi bi-justify"></i>
        </button>
        <ul
          className={`nav-menu ${
            menuOpen ? "block" : "hidden"
          } w-full flex flex-col  absolute  md:hidden bg-slate-800 top-10  items-center gap-5 py-5 transition-transform sm:w-1/2 sm:left-1/4 left-0 `}
          style={{ transition: "transform 0.8s ease" }}
        >
          {/* Use ID Instead of Link to Scrolls or jumps to a specific section of the current page.
          Link to mainly use to navigates between different pages or components in a React app. */}
          <Link to="#" onClick={() => handleScroll("about")}>
            <li className="cursor-pointer hover:bg-slate-500 w-1/4 text-center">
              About
            </li>
          </Link>
          <Link to="#" onClick={() => handleScroll("experiance")}>
            <li className="cursor-pointer hover:bg-slate-500 w-1/4 text-center">
              Experience
            </li>
          </Link>
          <Link to="#" onClick={() => handleScroll("projects")}>
            <li className="cursor-pointer hover:bg-slate-500 w-1/4 text-center">
              Projects
            </li>
          </Link>
          <Link to="#" onClick={() => handleScroll("contact")}>
            <li className="cursor-pointer hover:bg-slate-500 w-1/4 text-center">
              Contact
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
