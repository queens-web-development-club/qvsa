import React, { useState } from "react";

const EventCard = ({ data }) => {
  const { title, description, images, thumbnails, year, month } = data;

  const [currentIndex, setCurrentIndex] = useState(0);

  const showImage = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="flex flex-col md:flex-row border-t-2 border-white ml-2 md:ml-12 justify-center md:justify-end mb-6 w-auto">
      <div className="w-full md:w-4/12 p-4">
        <h1 className="font-Inter font-bold text-[#F2F2F2] text-4xl m-4 text-center md:text-right md:pl-3 md:break-words">
          <span className="text-[#FFB90B] md:hidden block md:hyphens-manual">
            {" "}
            {month}, {year}{" "}
          </span>{" "}
          {title}
        </h1>
        <p className="font-Inter text-[#F2F2F2] text-lg text-center md:text-right m-4 pb-12 border-b-2 border-white md:break-words md:pl-3">
          {description}
        </p>
      </div>

      <div className="mb-4 p-6 pb-16 w-full md:w-auto">
        <div className="w-full md:w-[50vw] h-[50vh] overflow-hidden mx-auto">
          <img
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
            className="w-full h-full object-cover border-4 border-[#FFB90B]"
          />
        </div>

        <div className="w-full md:w-auto mt-4 md:mt-0">
          <div className="flex mt-4 justify-center md:justify-start">
            {thumbnails.map((thumbnail, index) => (
              <a
                key={index}
                href={images[index]}
                className={`btn btn-xs ${
                  index === currentIndex
                    ? "btn-primary border-4 border-[#FFB90B] transition duration-300 opacity-100"
                    : "btn-secondary border-4 border-white opacity-50"
                } hover:border-[#FFB90B] transition duration-300 mr-4 sm:mr-6 mt-6`}
                onClick={(e) => {
                  e.preventDefault();
                  showImage(index);
                }}
              >
                <img
                  src={thumbnail}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-28 h-28 object-cover"
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full md:w-auto mt-4 md:mt-0 hidden md:block">
        <p className="border-2 border-white px-4 text-[#FFB90B] text-lg text-center font-bold">
          {year}
        </p>
        <p className="border-2 border-white p-8 text-[#FFB90B] text-4xl text-center font-bold">
          {month}
        </p>
      </div>
    </div>
  );
};

export default EventCard;
