import React from "react";
import AboutUs from "./AboutUs";
import Events from "./Events";
import MeetTheTeam from "./MeetTheTeam";
import logo from "..//..//assets/logo.png";

const Home = () => {
  return (
    <>
      <div className="flex flex-col items-center h-screen bg-home-background bg-cover bg-center">
        <div className="flex flex-row items-center gap-6 mt-60">
          <img src={logo} alt="logo" className="h-20" />
          <h1 className="text-center text-white text-5xl font-inter font-bold">
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
