import React from 'react';
import { Link } from 'react-router-dom';
import qvsaLotusIcon from "../assets/qvsa_lotus_icon.png";
import emailLogo from "../assets/emailLogo.png";
import instaLogo from "../assets/instaLogo.png";
import arrow from "../assets/arrow.png";

const Footer = () => {
  return (


    <footer className="bg-[#2E2E30] text-white pt-14">

      <div className="flex pl-10 text-[#F2F2F2] ">
       <img src={qvsaLotusIcon} alt="Logo" className="mr-4 w-8 object-contain" />
        <h1 className="font-Inter text-xl md:mb-0 mb-6 lg:leading-normal font-bold"> Queen's Vietnamese Student Association</h1>
      </div>
      
      <div>
       <ul className="flex flex-col px-4">
       <li className="flex pb-4 justify-left">
          <img src={instaLogo} alt="Instagram Logo" className="pt-6 pl-8 w-14 object-contain"/>
          <a href="https://www.instagram.com/queensvsa/" className="pt-6 pl-4 pr-5 font-Inter text-base hover:text-[#FFB90B] underline">@queensvsa</a>
        </li>
        
        <div className="flex">
        <li className="flex w-1/2">
          <img src={emailLogo} alt="EmailLogo" className="pl-8 w-14 pt-3 object-contain"/>
          <a href="mailto:qvsa2022@gmail.com" className="pl-4 pr-5 pt-5 font-Inter text-base hover:text-[#FFB90B] underline">qvsa2022@gmail.com </a>
        </li>
        
        <li className='pt-8 pl-8 pr-10 w-1/2 text-right'>
          <Link to="/admin" className='font-Inter text-base hover:text-[#FFB90B] underline pb-8'>Login</Link>
        </li>
        </div>


      
        </ul>
      </div>


    </footer>
  )
}

export default Footer
