import React from "react";

const Experience = () => {
  return (
    <div className="py-[150px]" id="experience">
      <div className="text-white max-w-[600px] m-auto">
        <div>
          <h1 className="text-2xl font-11thfont">
            Front End Engineering Tutor on{" "}
            <span className="text-red-900 text-3xl">Fiverr</span>
          </h1>
          <p className="p-10">
            Taught beginner to intermeidate level concepts related to software
            engineering. These included HTML, CSS, React, Tailwind CSS, and
            various git Practices. Most of my sessions so far have been related
            to Git and Tailwind CSS. Very fun experience for me, this helps me
            master important concepts while providing value.
          </p>
          <p className="text-gray-500 text-xl  font-ninthFont">
            From March - Present
          </p>
        </div>
        <div className="py-[50px]">
          <h1 className="text-2xl font-11thfont">
            Open Source{" "}
            <span className="text-red-900 text-3xl">Contributions</span>
          </h1>
          <p className="p-10"></p>
          <p className="text-gray-500 text-xl  font-ninthFont">
            From October - Present
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
