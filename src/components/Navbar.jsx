import React from "react";
import et from "../CodingPics/et.webp";
import avatar from "../CodingPics/avatar.webp";

import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#091424");

  const handleNav = () => {
    setNav(!nav);
  };
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}`, top: "0" }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between text-white p-3 pr-11">
        <div className="bg-white rounded-xl p-2">
          <img width={50} height={50} src={et} alt="/" />
        </div>
        <div className="hidden md:block">
          <ul className="flex flex-row gap-4 cursor-pointer">
            <li className="transition duration-300 hover:bg-slate-400 p-1">
              <Link to="home" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li className="transition duration-300 hover:bg-slate-400 p-1">
              <Link to="about" smooth={true} duration={500}>
                About
              </Link>
            </li>
            <li className="transition duration-300 hover:bg-slate-400 p-1">
              <Link to="skills" smooth={true} duration={500}>
                Skills
              </Link>
            </li>
            <li className="transition duration-300 hover:bg-slate-400 p-1">
              <Link to="Projects" smooth={true} duration={900}>
                Projects
              </Link>
            </li>
            <li className="transition duration-300 hover:bg-slate-400 p-1">
              <Link to="experience" smooth={true} duration={500}>
                Experience
              </Link>
            </li>
            <li className="transition duration-300 hover:bg-slate-400 p-1">
              <Link to="contact" smooth={true} duration={500}>
                Contact
              </Link>
            </li>
            <a
              target="/blank"
              href="https://docs.google.com/document/d/12nCPShwjyPb-if0HvsGb1KEA9vZgi8FrqrbNmt8ehSE/edit?usp=sharing"
            >
              <li className="transition duration-300 hover:bg-slate-400  p-1">
                Resume
              </li>
            </a>
          </ul>
        </div>
        <div onClick={handleNav} className="md:hidden cursor-pointer">
          <FaBars size={36} />
        </div>
      </div>
      <div className="fixed left-0 top-0 width-full h-screen bg-black/90 md:hidden">
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[55%] md:w-[45%] h-[200%] bg-[#ecf0f3] p-10 ease-in-out duration 500"
              : ""
          }
        >
          <div className={nav ? "flex flex-col" : "hidden"}>
            <div className="flex justify-between">
              <img className="rounded-full" src={et} width="70" />
              <AiOutlineClose
                onClick={handleNav}
                className="cursor-pointer"
                size={40}
              />
            </div>

            <div className="py-5 font-fifthFont text-xl cursor-pointer">
              <ul onClick={handleNav} className="py-8">
                <li onClick={handleNav} className="py-4 text-md">
                  <Link to="home" smooth={true} duration={900}>
                    <p onClick={handleNav}>Home</p>
                  </Link>
                </li>
                <br />
                <li onClick={handleNav} className="py-4 text-md">
                  <Link to="about" smooth={true} duration={900}>
                    <p onClick={handleNav}>About</p>
                  </Link>
                </li>
                <br />
                <li onClick={handleNav} className="py-4 text-md">
                  <Link to="skills" smooth={true} duration={900}>
                    <p onClick={handleNav}>Skills</p>
                  </Link>
                </li>
                <br />
                <li onClick={handleNav} className="py-4 text-md">
                  <Link to="Projects" smooth={true} duration={900}>
                    <p onClick={handleNav}>Projects</p>
                  </Link>
                </li>
                <li onClick={handleNav} className="py-8 text-md">
                  <Link to="experience" smooth={true} duration={900}>
                    <p onClick={handleNav}>Experience</p>
                  </Link>
                </li>
                <li onClick={handleNav} className="py-8 text-md">
                  <Link to="contact" smooth={true} duration={900}>
                    <p onClick={handleNav}>Contact</p>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="text-sm flex justify-center gap-2 mt-[-35px]">
              <a
                target="/blank"
                href="https://www.linkedin.com/in/eshwar-tangirala-08973316b/"
              >
                <FaLinkedin className=" rounded-xl" size={50} />
              </a>
              <p className=" font-ninthFont pt-4">
                eshwartangirala11@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
