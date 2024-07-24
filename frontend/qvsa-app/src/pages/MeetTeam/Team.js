import React from "react";

// import profiles from './teamData';
import MemberProfile from "./MemberProfile";
import Title from "./title";
import Header from "../../components/Header";
import Duy from "..//..//assets/Duy.jpg";
import Kate from "..//..//assets/Kate.jpg";
import Moon from "..//..//assets/Moon.jpg";
import Irina from "..//..//assets/Irina.jpg";
import Alana from "..//..//assets/Alana.jpg";
import Alice from "..//..//assets/Alice.jpg";
import Annika from "..//..//assets/Annika.jpg";
import Jaime from "..//..//assets/Jaime.jpg";
import Ethan from "..//..//assets/Ethan.jpg";
import Kevin from "..//..//assets/Kevin.jpg";
import Samantha from "..//..//assets/Samantha.jpg";
const Team = () => {
  // Create an object to store profiles grouped by group type
  const groupedProfiles = {};
  const profiles = [
    {
      group: "Team Lead",
      src: { Duy },
      alt: "Duy, President",
      name: "Duy",
      role: "President",
    },
    {
      group: "Team Lead",
      src: { Kate },
      alt: "Kate, Senior Advisor",
      name: "Kate",
      role: "Senior Advisor",
    },
    {
      group: "Marketing",
      src: { Irina },
      alt: "Irina, Marketing Director",
      name: "Irina",
      role: "Marketing Director",
    },
    {
      group: "Marketing",
      src: { Moon },
      alt: "Moon, Social Media Coordinator",
      name: "Moon",
      role: "Social Media Coordinator",
    },
    {
      group: "Marketing",
      src: { Alana },
      alt: "Alana, Graphics Coordinator",
      name: "Alana",
      role: "Graphics Coordinator",
    },
    {
      group: "Operations",
      src: { Samantha },
      alt: "Samantha, Finance Director",
      name: "Samantha",
      role: "Finance Director",
    },
    {
      group: "Operations",
      src: { Ethan },
      alt: "Ethan, Outreach Coordinator",
      name: "Ethan",
      role: "Outreach Coordinator",
    },
    {
      group: "Operations",
      src: { Kevin },
      alt: "Kevin, Internal Coordinator",
      name: "Kevin",
      role: "Internal Coordinator",
    },
    {
      group: "Events",
      src: { Alice },
      alt: "Alice, Events Director",
      name: "Alice",
      role: "Events Director",
    },
    {
      group: "Events",
      src: { Annika },
      alt: "Annika, Events Coordinator",
      name: "Annika",
      role: "Events Coordinator",
    },
    {
      group: "Events",
      src: { Jaime },
      alt: "Jaime, Events Coordinator",
      name: "Jaime",
      role: "Events Coordinator",
    },
  ];

  for (let i = 0; i < profiles.length; i++) {
    const profile = profiles[i];
    if (!(profile.group in groupedProfiles)) {
      groupedProfiles[profile.group] = []; // if its a new group, make new arr
    }
    groupedProfiles[profile.group].push(profile);
  }
  return (
    <div className="mb-24">
      <Header title="Meet The Team" year="2024-2025" />
      {/* Loop through each group type */}
      {Object.keys(groupedProfiles).map((group) => (
        <div key={group}>
          <div className="p-10" />
          <Title group={group} />
          <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-10 md:gap-20">
            {" "}
            {/* mobile compatibility */}
            {/* Loop through profiles in the current group */}
            {groupedProfiles[group].map((profile) => (
              <div key={profile.name} className="flex flex-col items-center">
                {" "}
                {/* mobile compatibility */}
                {/* Render profile information */}
                <MemberProfile
                  src={Object.values(profile.src)[0]}
                  alt={profile.alt}
                  name={profile.name}
                  role={profile.role}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
export default Team;
