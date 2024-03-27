import React from "react";
import { useNavigate } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";
import { Parallax } from 'react-parallax';
import city from "..//..//assets/cityView.jpg";

const AboutUs = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/about')
  }
  
  return (
    <Parallax bgImage={city} strength={400}>
        <div className="bg-yellow bg-opacity-80 w-1/3 h-screen flex flex-col gap-2 justify-center items-center">
        <h1 className="text-black font-bold text-6xl">About Us</h1>
        <p className="text-black text-center px-14 py-5">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna "Lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna."
        </p>
        <button className="bg-black text-off-white text-xl rounded-full px-7 py-2 flex flex-row items-center gap-2" onClick={handleClick}>
          <p>Learn More</p>
          <FaArrowRightLong />
        </button>
      </div>
    </Parallax>
  );
};

export default AboutUs;
