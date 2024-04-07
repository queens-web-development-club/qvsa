import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import newYear1 from "../../assets/newYear1.png";
import newYear2 from "../../assets/newYear2.png";
import newYear3 from "../../assets/newYear3.png";
import newYear4 from "../../assets/newYear4.png";

const Events = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    newYear1,
    newYear2,
    newYear3,
    newYear4
  ];

  const thumbnails = [
    newYear1,
    newYear2,
    newYear3,
    newYear4
  ];

  const navigate = useNavigate();

  const showImage = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div>
      <div className="flex flex-col bg-cover bg-center bg-citySky bg-opacity-50 max-h-screen w-full font-bold font-Inter flex items-center">
        <h1 className="text-[#FFB90B] text-6xl text-center pt-20 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"> Events</h1>
        <p className="text-3xl text-center m-2 pb-10 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"> 2024 - 2025 </p>
      </div>

      <div className="flex w-full font-bold font-Inter justify-center">
        <p className="text-[#F2F2F2] text-3xl text-center p-16"> Past Events </p>
      </div>
      
      <div className="flex border-t-2 border-white mr-12 justify-end mb-6 pl-10">
        <div className="w-4/12 text-right p-4">
          <h1 className="font-Inter font-bold text-[#F2F2F2] text-4xl m-4">Tết, Vietnamese Lunar New Year</h1>
          <p className="font-Inter text-[#F2F2F2] text-lg m-4 pb-12 border-b-2 border-white">
            Tết, or Vietnamese Lunar New Year, is a vibrant and joyous celebration that 
            marks the arrival of spring and new beginnings. Families come together to 
            clean their homes and prepare special dishes, such as bánh chưng 
            (sticky rice cake) and bánh dày (round rice cake), to offer to 
            their ancestors. The streets are filled with colorful flowers, 
            especially peach blossoms and kumquat trees, symbolizing prosperity and 
            good fortune. People exchange gifts, visit friends and relatives, and 
            enjoy traditional performances like lion dances and firecrackers. 
          </p>
        </div>

        <div className="mb-4 p-6">
          <div className="w-[50vw] h-[50vh] overflow-hidden">
            <img 
              src={images[currentIndex]} 
              alt={`Image ${currentIndex + 1}`}
              className="w-full h-full object-cover border-2 border-[#FFB90B]"
            />
          </div>

          <div className="w-auto">
            <div className="flex mt-4 overflow-x-auto justify-center">
              {thumbnails.map((thumbnail, index) => (
                <a 
                  key={index} 
                  href={images[index]} 
                  className={`btn btn-xs ${index === currentIndex ? 'btn-primary border-4 border-[#FFB90B] transition duration-300 opacity-100' : 'btn-secondary border-4 border-white opacity-50'} hover:border-[#FFB90B] transition duration-300 mr-6 mt-6`}
                  onClick={(e) => { 
                    e.preventDefault();
                    showImage(index);
                  }}
                  
                >
                  
                  <img src={thumbnail} alt={`Thumbnail ${index + 1}`} className="w-28 h-28 object-cover" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="w-auto">
          <p className="border-2 border-white px-4 text-[#FFB90B] text-lg text-center font-bold"> 2023</p>
          <p className="border-2 border-white p-8 text-[#FFB90B] text-4xl text-center font-bold"> Feb </p>
        </div>
      </div>




      
      <div className="flex flex-row-reverse border-t-2 border-white ml-12 justify-end mb-6 pr-10">
        <div className="w-4/12 p-4">
          <h1 className="font-Inter font-bold text-[#F2F2F2] text-4xl m-4 text-left">Tết, Vietnamese Lunar New Year</h1>
          <p className="font-Inter text-[#F2F2F2] text-lg text-left m-4 pb-12 border-b-2 border-white">
            Tết, or Vietnamese Lunar New Year, is a vibrant and joyous celebration that 
            marks the arrival of spring and new beginnings. Families come together to 
            clean their homes and prepare special dishes, such as bánh chưng 
            (sticky rice cake) and bánh dày (round rice cake), to offer to 
            their ancestors. The streets are filled with colorful flowers, 
            especially peach blossoms and kumquat trees, symbolizing prosperity and 
            good fortune. People exchange gifts, visit friends and relatives, and 
            enjoy traditional performances like lion dances and firecrackers. 
          </p>
        </div>

        <div className="mb-4 p-6">
          <div className="w-[50vw] h-[50vh] overflow-hidden">
            <img 
              src={images[currentIndex]} 
              alt={`Image ${currentIndex + 1}`}
              className="w-full h-full object-cover border-4 border-[#FFB90B]"
            />
          </div>

          <div className="w-auto">
            <div className="flex mt-4 overflow-x-auto justify-center">
              {thumbnails.map((thumbnail, index) => (
                <a 
                  key={index} 
                  href={images[index]} 
                  className={`btn btn-xs ${index === currentIndex ? 'btn-primary border-4 border-[#FFB90B] transition duration-300 opacity-100' : 'btn-secondary border-4 border-white opacity-50'} hover:border-[#FFB90B] transition duration-300 mr-6 mt-6`}
                  onClick={(e) => { 
                    e.preventDefault();
                    showImage(index);
                  }}
                  
                >
                  
                  <img src={thumbnail} alt={`Thumbnail ${index + 1}`} className="w-28 h-28 object-cover" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="w-auto">
          <p className="border-2 border-white px-4 text-[#FFB90B] text-lg text-center font-bold"> 2023</p>
          <p className="border-2 border-white p-8 text-[#FFB90B] text-4xl text-center font-bold"> Feb </p>
        </div>
      </div>
      

 
    </div>
  );
};

export default s;
