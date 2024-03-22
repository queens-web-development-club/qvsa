import React from "react";
import Header from "../../components/Header";
import GroupPic from "..//..//assets/aboutus1.jpg";

const About = () => {
  return (
    <div>
      <Header title="About Us" year="2024-2025" />
      <div className=" flex flex-col justify-center items-center">
        <div className="w-4/6">
          <div className="flex flex-col justify-center items-center gap-9">
            <h2 className="text-3xl text-white font-bold text-center mt-16">
              Who Are We
            </h2>
            <p className="text-white text-center text-xl">
              The Vietnamese Student Association (VSA) is a close-knit community
              of students and enthusiasts dedicated to celebrating and sharing
              the beauty of Vietnamese culture. We organize vibrant cultural
              events, educational workshops, and social gatherings that not only
              showcase our rich traditions but also create a welcoming space for
              all. Our goal is to foster a sense of belonging and pride in our
              heritage while promoting cultural diversity and understanding on
              campus. Join us as we embark on a journey of discovery,
              friendship, and cultural exchange!
            </p>
            <img src={GroupPic} alt="Group Pic" className="size-3/6" />
          </div>

          <div>section 2</div>
        </div>
      </div>
    </div>
  );
};

export default About;
