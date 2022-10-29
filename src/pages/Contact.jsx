import React from "react";
import { AiOutlineCopy } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

function copy() {
  navigator.clipboard.writeText("eshwartangirala11@gmail.com");
}

const Contact = () => {
  return (
    <div
      className="py-[300px] w-full lg:h-screen p-2 m-auto text-white"
      id="contact"
    >
      <h1 className="text-[34px] font-12thfont text-gray-500 font-bold">
        I am very active on my
      </h1>
      <div className="pt-[170px] max-w-[1000px] m-auto flex justify-center gap-11">
        <div className="cursor-pointer">
          <a
            target="/blank"
            href="https://www.linkedin.com/in/eshwar-tangirala-08973316b/"
          >
            <FaLinkedin size={70} />
          </a>
        </div>
        <div className="flex flex-row pt-3">
          <p onClick={copy} className="text-xl font-thirdFont cursor-pointer">
            eshwartangirala11@gmail.com
          </p>
          <AiOutlineCopy onClick={copy} className="cursor-pointer" size={30} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
