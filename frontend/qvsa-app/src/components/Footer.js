import React from 'react'
import qvsaLotusIcon from "../assets/qvsa_lotus_icon.png";
import emailLogo from "../assets/emailLogo.png";
import instaLogo from "../assets/instaLogo.png";
import arrow from "../assets/arrow.png";

const Footer = () => {
  return (


    <footer className="bg-[#2E2E30] text-white py-7 border-t-2 border-white">

      <div className="flex pl-8 text-[#F2F2F2] ">
       <img src={qvsaLotusIcon} alt="Logo" className="mr-4 w-62 h-38 object-contain" />
        <h1 className="font-Inter text-2xl md:mb-0 mb-6 lg:leading-normal font-semibold"> Queen's Vietnamese Student Association</h1>
      </div>
      
      <div>
       <ul className="flex flex-col px-4">
        <li className="flex">
          <img src={emailLogo} alt="EmailLogo" className="pt-20 pl-6 w-47 h-33 object-contain"/>
          <a href="mailto:qvsa2022@gmail.com" className="pt-20 pl-7 pr-5 font-Inter text-base hover:text-[#FFB90B] font-semibold underline">qvsa2022@gmail.com </a>
        </li>

        <li className="flex pb-8 justify-left">
          <img src={instaLogo} alt="Instagram Logo" className="pt-8 pl-6 w-25 h-33 object-contain"/>
          <a href="https://www.instagram.com/queensvsa/" className="pt-10 pl-7 pr-5 font-Inter text-base hover:text-[#FFB90B] font-semibold underline">@queensvsa</a>
        </li>
      
        </ul>
      </div>


    </footer>
  )
}

export default Footer
