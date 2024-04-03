import React from 'react';

import profiles from './teamData';
import MemberProfile from './MemberProfile';
import Title from './title'


const Team = () => {
  // Extracting unique group names from profiles
  const uniqueGroups = [...new Set(profiles.map(profile => profile.group))];

  return (
    <div className="bg-black">

      {uniqueGroups.map((group, index) => (
        <div key={index}>
          <Title group={uniqueGroups.group} />
          <div className="flex justify-center">
            {profiles.map((profile, index) => (
              profile.group === group && (
                <React.Fragment key={index}>
                  <MemberProfile src={profile.src} alt={profile.alt} name={profile.name} role={profile.role} />
                  {/* Check if the current profile is the last one in its group */}
                  {index < profiles.length - 1 && profile.group !== profiles[index + 1].group && <div style={{ marginBottom: '20px' }} />}
                </React.Fragment>
              )
            ))}
          </div>
        </div>
      ))}

    </div>
  );
}


export default Team;
