import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { Parallax } from "react-parallax";
import city from "..//..//assets/cityView.jpg";

const AboutUs = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/about");
  };

  return (
    <Parallax bgImage={city} strength={400}>
      <div className="bg-yellow bg-opacity-80 lg:w-1/3 md:w-3/5 h-screen flex flex-col gap-2 justify-center items-center">
        <h1 className="text-black font-bold text-6xl">About Us</h1>
        <p className="text-black text-center px-14 py-5">
          Queen's Vietnamese Students' Association is an all inclusive student
          organization. Our goal is to unite former students and faculty members
          around Vietnamese tradition and culture.
        </p>
        <button
          className="bg-black text-off-white text-xl rounded-full px-7 py-2 flex flex-row items-center gap-2"
          onClick={handleClick}
        >
          <p>Learn More</p>
          <FaArrowRightLong />
        </button>
      </div>
    </Parallax>
  );
};

export default AboutUs;
