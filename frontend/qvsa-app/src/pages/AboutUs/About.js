import React from "react";
import Header from "../../components/Header";
import GroupPic from "..//..//assets/aboutus1.jpg";
import Logo from "..//..//assets/logo.png";

const About = () => {
  return (
    <div>
      <Header title="About Us" year="2024-2025" />
      <div className=" flex flex-col justify-center items-center">
        <div className="w-4/6">
          <div className="flex flex-col justify-center items-center gap-12">
            <h2 className="text-3xl text-white font-bold text-center mt-24">
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
            <img
              src={GroupPic}
              alt="Group Pic"
              className="size-4/5 border-4 border-yellow "
            />
          </div>
        </div>

        <hr className="my-16 size-5/6 border-t-4 border-gray-300 mt-24" />

        <div className="flex flex-col justify-center items-center gap-12">
          <div className="w-4/6">
            <h2 className=" text-3xl text-white font-bold text-center mt-4">
              Our Mission Statement
            </h2>

            <div className="text-white text-center text-xl flex flex-col justify-center items-center gap-9">
              <p>
                The Vietnamese Student Association (VSA) serves as a cultural
                hub and support network for Vietnamese students studying abroad.
                It provides a sense of home away from home, offering a familiar
                environment where students can celebrate their heritage, share
                experiences, and build lifelong friendships. The VSA also plays
                a vital role in promoting cross-cultural understanding and
                appreciation, organizing events that showcase Vietnamese
                traditions, arts, and cuisine to the broader student body and
                local community.
              </p>
              <p>
                One of the key objectives of the VSA is to support its members
                academically and professionally. Through mentorship programs,
                career workshops, and networking events, the VSA helps students
                navigate the challenges of university life and prepare for their
                future careers. Additionally, the VSA often collaborates with
                other student organizations and community groups to create
                meaningful initiatives that address social issues and promote
                positive change.
              </p>
              <p>
                Overall, the Vietnamese Student Association is a dynamic and
                inclusive organization that enriches the university experience
                for its members and contributes to the cultural diversity of the
                campus community. Through its various activities and
                initiatives, the VSA continues to foster a sense of pride in
                Vietnamese heritage and a spirit of unity among students from
                diverse backgrounds.
              </p>
              <img src={Logo} alt="Logo" className="size-3/6 gap-y-1 mb-20" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
