import React from "react";
import AboutUs from "./AboutUs";
import Events from "./Events";
import MeetTheTeam from "./MeetTheTeam";

const Home = () => {
  return (
    <>
      <div className="flex flex-col items-center min-h-screen overflow-hidden bg-home-background bg-center bg-clip-border">
        <h1 className="text-center text-white text-6xl font-inter font-bold mt-32">
          Queen’s Vietnamese Student Association
        </h1>
      </div>
      <AboutUs />
      <Events />
      <MeetTheTeam />
    </>
  );
};

export default Home;
