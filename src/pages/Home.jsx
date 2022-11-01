import React from "react";
import avatar from "../CodingPics/avatar.webp";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
} from "react-icons/fa";

const Home = () => {
  return (
    <div
      id="home"
      className="text-white w-full h-screen text-center pt-[70px] m-6"
    >
      <br />
      <div className="max-w-[1240px] mx-auto px-9 flex flex-col items-center">
        <div>
          <h1 className="font-secondFont text-xl">
            Lets build something together
          </h1>
          <p className="text-3xl pt-2 font-firstFont">
            Hello! My name is{" "}
            <span className="text-red-900 font-tenthFont text-[40px] pt-6">
              Eshwar
            </span>
            <p className=" font-serif text-md">
              I am a full stack developer who loves building applications with a
              beautiful user interface with a sophisticated back end!
            </p>
          </p>
        </div>
        <div className="sm:w-[300px] pt-11 flex flex-row">
          <a
            target="/blank"
            href="https://www.linkedin.com/in/eshwar-tangirala-08973316b/"
          >
            <FaLinkedin size={30} />
          </a>

          <img className="rounded-full" src={avatar} width="230" />

          <a target="/blank" href="https://github.com/Eshwar1212-maker">
            <FaGithub size={30} />
          </a>
        </div>
        <div className="pt-9 flex flex-col justify-center items-center">
          <div>
            <p className=" font-13thfont">
              Take a quick peak at my projcts to get a better idea
            </p>
          </div>
          <div>
            <button
              className="text-white group border-2 px-6 py-3 my-2 w-fit
          flex items-center hover:bg-red-800 hover:border-red-800"
            >
              <Link to="Projects" smooth={true} duration={900}>
                Projects
              </Link>
              <HiArrowNarrowRight className="ml-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

/*
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,""

*/
