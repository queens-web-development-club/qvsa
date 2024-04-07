import React from "react";
import { useNavigate } from "react-router-dom";
import { Parallax } from "react-parallax";
import { FaArrowRightLong } from "react-icons/fa6";
import newyear from "..//..//assets/newyear.jpg";

const Events = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/events");
  };
  return (
    <Parallax bgImage={newyear} strength={400}>
      <div className="min-h-screen flex flex-row-reverse items-center">
        <div className="bg-yellow bg-opacity-80 lg:w-1/3 md:w-3/5 flex flex-col gap-2 justify-center items-center h-screen">
          <h1 className="text-black font-bold text-6xl">Events</h1>
          <p className="text-black text-center px-14 py-5">
            Fostering an awareness and appreciation of the rich
            Vietnamese-Canadian culture through our events
          </p>
          <button
            className="bg-black text-off-white text-xl rounded-full px-7 py-2 flex flex-row items-center gap-2"
            onClick={handleClick}
          >
            <p>Explore Past Events</p>
            <FaArrowRightLong />
          </button>
        </div>
      </div>
    </Parallax>
  );
};

export default Events;
