import React from "react";

const Header = ({ title, year }) => {
  return (
    <div className="relative h-48">
      {/* Background image */}
      <div className="absolute inset-0 bg-cover bg-center bg-skyline-header opacity-50"></div>
      
      {/* Content */}
      <div className="relative h-full flex flex-col justify-center items-center">
        <h1 className="text-yellow text-5xl font-bold">{title}</h1>
        <h2 className="text-white font-bold text-xl">{year}</h2>
      </div>
    </div>
  );
};

export default Header;
