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
              Queen's Vietnamese Students' Association is an all inclusive
              student organization. Our goal is to unite former students and
              faculty members around Vietnamese tradition and culture. <br />
              <br /> QVSA operates as a nonprofit. All available funds will go
              toward improving our members' experiences all year long. Our funds
              are used to support a wide range of our activities and
              initiatives. Activities, materials, and advertising for events
              like Mid-Autumn Festival, Halloween Party, and Tet Celebration
              will all be improved. Future generations will benefit from these
              initiatives as they support and preserve Canada's unique
              Vietnamese culture.
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
            <h2 className=" text-3xl text-white font-bold text-center mt-4 mb-12">
              Our Mission Statement
            </h2>

            <div className="text-white text-center text-xl flex flex-col justify-center items-center gap-12">
              <p>
                It is our goal to foster an awareness and appreciation of the
                rich Vietnamese-Canadian culture through our community outreach,
                volunteer opportunities, and events. Furthermore, we hope that
                the Vietnamese-Canadian community that has grown around QVSA
                will support them as they explore their own identities and
                discover what it means to be Vietnamese. QVSA works to develop
                our cultural origins and maintain our Vietnamese social norms to
                strengthen our cultural roots.
              </p>
              <p>
                Additionally, QVSA works to cultivate its members into capable,
                compassionate, and strong leaders. Through volunteer work and
                the executive team, QVSA offers chances for community
                leadership. Members can pick up useful soft skills like cohesive
                teamwork, resource management, and event organizing through
                these possibilities.
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
