import React from "react";
import AboutUs from "./AboutUs";
import Events from "./Events";
import MeetTheTeam from "./MeetTheTeam";
import logo from "..//..//assets/logo.png";

const Home = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-home-background bg-cover bg-center lg:pb-28 md:pb-48 pb-72 -mt-2">
        <div className="flex lg:flex-row flex-col items-center gap-6 md:gap-0">
          <img src={logo} alt="logo" className="h-20" />
          <h1 className="text-center text-white md:text-5xl text-3xl  p-0 font-inter font-bold">
            Queen’s Vietnamese Student Association
          </h1>
        </div>
      </div>
      <AboutUs />
      <Events />
      <MeetTheTeam />
    </>
  );
};

export default Home;
