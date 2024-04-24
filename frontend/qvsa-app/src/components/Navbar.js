import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeMenu);
    return () => {
      document.removeEventListener("mousedown", closeMenu);
    };
  }, []);

  const isActive = (path) => {
    return location.pathname === path ? "text-[#FFB90B] border-b-4 border-[#FFB90B]" : "";
  };

  return (
    <>
      <nav className="bg-[#2E2E30] text-[#F2F2F2] w-full md:fixed top-0 z-10 overflow-scroll">
        {/* Hamburger Menu */}
        <div className="md:hidden flex justify-end px-4 py-2 fixed z-10">
          <button onClick={toggleMenu} className="transition duration-300 ease-in-out focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        {/* End Hamburger Menu */}
        {/* Dropdown Menu */}
        {showMenu && (
          <div className="fixed top-0 left-0 w-full h-screen bg-gray-900 bg-opacity-90 h-full z-20" ref={menuRef}>
            <div className="flex justify-end px-4 py-2">
              <button onClick={toggleMenu} className="transition duration-300 ease-in-out focus:outline-none">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <div className="flex flex-col items-center justify-center">
              <ul className="flex flex-col font-Inter text-base font-extrabold text-center list-none">
                <li className={`transition duration-300 text-2xl mb-4 ${isActive("/")}`}>
                  <Link to="/" className="block py-1 w-full justify-center hover:text-[#FFB90B] transition duration-200">Home</Link>
                </li>
                <li className={`transition duration-300 text-2xl mb-4 ${isActive("/about")}`}>
                  <Link to="/about" className="block py-1 w-full justify-center hover:text-[#FFB90B] transition duration-200">About Us</Link>
                </li>
                <li className={`transition duration-300 text-2xl mb-4 ${isActive("/events")}`}>
                  <Link to="/events" className="block py-1 w-full justify-center hover:text-[#FFB90B] transition duration-200">Events</Link>
                </li>
                <li className={`transition duration-300 text-2xl mb-4 ${isActive("/meet-the-team")}`}>
                  <Link to="/meet-the-team" className="block py-1 w-full justify-center hover:text-[#FFB90B] transition duration-200">Meet the Team</Link>
                </li>
              </ul>
            </div>
          </div>
        )}
        {/* End Dropdown Menu */}
        {/* Desktop Menu */}
        <ul className="hidden md:flex flex-row font-Inter text-base font-extrabold text-center list-none p-0 pt-2">
          <li className={`grow transition duration-300 ${isActive("/")}`}>
            <Link to="/" className="flex px-6 py-4 justify-center hover:text-[#FFB90B] transition duration-200">Home</Link>
          </li>
          <li className={`grow transition duration-300 ${isActive("/about")}`}>
            <Link to="/about" className="flex px-6 py-4 justify-center hover:text-[#FFB90B] transition duration-200">About Us</Link>
          </li>
          <li className={`grow transition duration-300 ${isActive("/events")}`}>
            <Link to="/events" className="flex px-6 py-4 justify-center hover:text-[#FFB90B] transition duration-200">Events</Link>
          </li>
          <li className={`grow transition duration-300 ${isActive("/meet-the-team")}`}>
            <Link to="/meet-the-team" className="flex px-6 py-4 justify-center hover:text-[#FFB90B] transition duration-200">Meet the Team</Link>
          </li>
        </ul>
        {/* End Desktop Menu */}
      </nav>
      <div className="pb-0 md:pb-16"></div>
    </>
  );
};

export default Navbar;
