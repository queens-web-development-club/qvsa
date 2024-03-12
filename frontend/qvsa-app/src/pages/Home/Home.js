import React from "react";
import AboutUs from "./AboutUs";
import Events from "./Events";
import MeetTheTeam from "./MeetTheTeam";

const Home = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen overflow-hidden bg-home-background bg-center bg-clip-border">
        {/* <div><p className="text-white">Header</p></div> */}
        <div className="flex flex-row justify-center">
          <div>IMAGE</div>
          <h1 className=" text-center text-white text-6xl font-inter font-bold">
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
