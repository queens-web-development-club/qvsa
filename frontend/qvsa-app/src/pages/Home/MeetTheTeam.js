import React from "react";
import { useNavigate } from "react-router-dom";

import { FaArrowRightLong } from "react-icons/fa6";

const MeetTheTeam = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/meet-the-team");
  };
  return (
    <div className="bg-cover bg-center bg-skyline min-h-screen flex items-center">
      <div className="bg-yellow bg-opacity-80 w-1/3 h-screen flex flex-col gap-2 justify-center items-center">
        <h1 className="text-black font-bold text-6xl">Meet The</h1>
        <h1 className="text-black font-bold text-6xl">Team</h1>
        <p className="text-black text-center px-14 py-5">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna "Lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna."
        </p>
        <button className="bg-black text-off-white text-xl rounded-full px-7 py-2 flex flex-row items-center gap-2" onClick={handleClick}>
          <p>Meet Us</p>
          <FaArrowRightLong />
        </button>
      </div>
    </div>
  );
};

export default MeetTheTeam;