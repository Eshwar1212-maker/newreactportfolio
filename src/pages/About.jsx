import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="w-full sm:px-[60px] md:h-screen p-2 flex items-center py-16"
    >
      <div className="max-w-[940px] m-auto">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#8987af]">
            About
          </p>
          <h2 className="py-4 text-white">Who I Am</h2>
          <p className="py-2 text-gray-400">
            I specialize in building mobile responsive front-end UI applications
            that connect with API’s and other backend technologies. I’m
            passionate about learning new technologies and understand there is
            more than one way to accomplish a task. Though I am most proficient
            in building front-end applications using HTML, CSS, Javascript, and
            React, I am a quick learner and can pick up new tech stacks as
            needed. I believe that being a great developer is not using one
            specific language, but choosing the best tool for the job, and that
            any developer that is only skilled in one technology forever is
            possibly limiting their potential.
          </p>
          <p className="py-2 text-gray-400">
            I originally got into coding a few years ago, my dad and brother
            coded in alot of back end technologies, at the time, I did not find
            it fun, I was never sure what the end product was or the point of
            what they were doing. Thankfully I stumbled on to front end
            development through YouTube, I immediately found it cool how their
            is immediate feedback from your first text on a simple html page.
            Now, I find both front end and back end devlopment fascinating.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
