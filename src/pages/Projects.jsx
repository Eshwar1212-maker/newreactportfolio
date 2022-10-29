import React from "react";
import BBallFit from "../CodingPics/BBallFit.png";
import Famgram from "../CodingPics/Famgram.png";
import Breaking from "../CodingPics/breaking.jpg";

const Projects = () => {
  return (
    <div className="text-white py-[100px]" id="Projects">
      <p className="uppercase text-xl tracking-widest pb-11 text-[#8987af]">
        Projects
      </p>
      <div className="max-w-[950px] m-auto">
        <div
          className="
        m-auto p-6 flex justify-center gap-5"
        >
          <div>
            <img
              className="hidden md:block rounded-2xl"
              width={970}
              src={BBallFit}
            />
          </div>
          <div className="max-w-[400px]">
            <div className="flex justify-center gap-4 underline m-auto p-1">
              <a target="/blank" href="https://basketballfit-15b82.web.app/">
                <button className="underline">Live</button>
              </a>
              <a
                target="/blank"
                href="https://github.com/Eshwar1212-maker/Basketba-lFit"
              >
                <button className="underline">Github</button>
              </a>
            </div>
            <h1 className=" font-bold text-slate-400 text-xl font-13thfont">
              BasketballFit Sports Application
            </h1>
            <p className="text-sm md:text-sm lg:text-md">
              Built a web application in React that can help young and aspiring
              basketball players get better at their craft. Combining my love
              for basketball and coding, I included a forum/chat section where
              users that are logged in can talk to each other, messages are
              stored in firebase/firestore. Links to different PDFs for gym
              workouts and skill workouts are included! Fully mobile responsive.
            </p>
          </div>
        </div>
        <div
          className="

        m-auto p-6 flex justify-center gap-5"
        >
          <div>
            <img
              className="hidden md:block rounded-2xl"
              width={970}
              src={Famgram}
            />
          </div>
          <div className="max-w-[400px]">
            <div className="flex justify-center gap-4 underline m-auto p-5">
              <a target="/blank" href="https://fsgvfsgsgbgffa.web.app/">
                <button className="underline">Live</button>
              </a>
              <button>Live</button>
            </div>
            <h1 className=" font-bold text-slate-400 text-xl font-13thfont">
              FamilyGram Social Media Application
            </h1>
            <p className="text-sm md:text-sm lg:text-md">
              Created a full stack social media website I built with React JS,
              Tailwind CSS, and Firebase. I called this project FamilyGram. Used
              a lot of CRUD functionality in order to let different users be
              able to sign in and create a post. Users can sign in with Google
              to create an account, view each other’s post, delete their own
              posts, etc.
            </p>
          </div>
        </div>
        <div
          className="
   
        m-auto p-6 flex justify-center gap-5"
        >
          <div>
            <img
              className="hidden md:block rounded-2xl"
              width={970}
              src={Breaking}
            />
          </div>
          <div className="max-w-[400px]">
            <div className="flex justify-center gap-4 underline m-auto p-5">
              <a
                target="/blank"
                href="https://peppy-youtiao-774dc2.netlify.app/"
              >
                <button className="underline">Demo</button>
              </a>
              <a
                target="/blank"
                href="https://github.com/Eshwar1212-maker/BreakingBad-API"
              >
                <button className="underline">Code</button>
              </a>
            </div>
            <h1 className=" font-bold text-slate-400 text-xl font-13thfont">
              Breaking Bad Characters Search
            </h1>
            <p className="text-sm md:text-sm lg:text-md">
              Fetched data from an API in React and sorted that data using React
              components! You can search any character in the very popular show
              Breaking Bad, and it will filter out all respective characters.
              Fully mobile responsive.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
