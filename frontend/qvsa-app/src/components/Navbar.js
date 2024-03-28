import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return ( 
    <nav className="bg-[#2E2E30] text-[#F2F2F2] w-full md:fixed top-0 z-10 overflow-scroll">

      <ul className="flex flex-col md:flex-row font-Inter text-base font-extrabold text-center list-none w-full p-2 md:p-0">
        <li className="border-b-4 border-transparent grow hover:border-[#FFB90B] transition duration-300 w-full md:w-auto">
          <Link to="/" className="flex px-6 py-3 md:px-10 md:py-6 w-full h-full justify-center hover:text-[#FFB90B] transition duration-300">Home</Link>
        </li>

        <li className="border-b-4 border-transparent grow hover:border-[#FFB90B] transition duration-300 w-full md:w-auto">
          <Link to="/about"  className="flex px-6 py-3 md:px-10 md:py-6 w-full h-full justify-center hover:text-[#FFB90B] transition duration-300">About Us</Link>
        </li>

        <li className="border-b-4 border-transparent grow hover:border-[#FFB90B] transition duration-300 w-full md:w-auto">
          <Link to="/events"  className="flex px-6 py-3 md:px-10 md:py-6 w-full h-full justify-center hover:text-[#FFB90B] transition duration-300">Events</Link>
        </li>

        <li className="border-b-4 border-transparent grow hover:border-[#FFB90B] transition duration-300 w-full md:w-auto">
          <Link to="/admin"  className="flex px-6 py-3 md:px-10 md:py-6 w-full h-full justify-center hover:text-[#FFB90B] transition duration-300">Admin Panel</Link>
        </li>

        <li className="border-b-4 border-transparent grow hover:border-[#FFB90B] transition duration-300 w-full md:w-auto">
          <Link to="/meet-the-team"  className="flex px-6 py-3 md:px-10 md:py-6 w-full h-full justify-center hover:text-[#FFB90B] transition duration-300">Meet the Team</Link>
        </li>

        <li className="border-b-4 border-transparent grow hover:border-[#FFB90B] transition duration-300 w-full md:w-auto">
          <Link to="/contact-us"  className="flex px-6 py-3 md:px-10 md:py-6 w-full h-full justify-center hover:text-[#FFB90B] transition duration-300">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
