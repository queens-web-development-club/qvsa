import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? "text-[#FFB90B] border-b-4 border-[#FFB90B]" : "";
  };

  return ( 
    <nav className="bg-[#2E2E30] text-[#F2F2F2] w-full md:fixed top-0 z-10 overflow-scroll">
      <ul className="flex flex-col md:flex-row font-Inter text-base font-extrabold text-center list-none w-full p-2 md:p-0">
        <li className={`grow transition duration-300 w-full md:w-auto ${isActive("/")}`}>
          <Link to="/" className="flex px-6 py-3 md:px-10 md:py-6 w-full h-full justify-center hover:text-[#FFB90B] transition duration-200">Home</Link>
        </li>

        <li className={`grow transition duration-300 w-full md:w-auto ${isActive("/about")}`}>
          <Link to="/about" className="flex px-6 py-3 md:px-10 md:py-6 w-full h-full justify-center hover:text-[#FFB90B] transition duration-200">About Us</Link>
        </li>

        <li className={`grow transition duration-300 w-full md:w-auto ${isActive("/events")}`}>
          <Link to="/events" className="flex px-6 py-3 md:px-10 md:py-6 w-full h-full justify-center hover:text-[#FFB90B] transition duration-200">Events</Link>
        </li>

        <li className={`grow transition duration-300 w-full md:w-auto ${isActive("/meet-the-team")}`}>
          <Link to="/meet-the-team" className="flex px-6 py-3 md:px-10 md:py-6 w-full h-full justify-center hover:text-[#FFB90B] transition duration-200">Meet the Team</Link>
        </li>

        <li className={`grow transition duration-300 w-full md:w-auto ${isActive("/contact-us")}`}>
          <Link to="/contact-us" className="flex px-6 py-3 md:px-10 md:py-6 w-full h-full justify-center hover:text-[#FFB90B] transition duration-200">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
