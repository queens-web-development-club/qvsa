import React from 'react';

// import profiles from './teamData';
import MemberProfile from './MemberProfile';
import Title from './title';
import Header from "../../components/Header";


const Team = () => {

  const groupedProfiles = {};   // Create an object to store profiles grouped by group type

  // Get all the data and group them based on their group field
  fetch('http://localhost:8000/api/team')
  .then(res => res.json())
  .then(data => {    // Handle json received data
    console.log(data);

    // This loop groups profiles based on the data
    for (let i = 0; i < data.length; i++) {
      const profile = data[i];
      if (!(profile.group in groupedProfiles)) {
        groupedProfiles[profile.group] = [];
      }
      groupedProfiles[profile.group].push(profile);
    }
    renderTeam(groupedProfiles);   // Render component with groupedProfiles
  })

  .catch(error => {   // Handle errors 
    console.error('Error fetching team data:', error);
  });


  function renderTeam(groupedProfiles){
    return (
      <div className='mb-24'>
        <Header title="Meet The Team" year="2024-2025" />
          {/* Loop through each group type */}
          {Object.keys(groupedProfiles).map(group => ( // mapping through each group type
              <div key={group}>
                  <div className="p-10"/>
                  <Title group ={group}/>  {/* displaying group title */}
                  <div className='flex flex-row justify-center items-center gap-20'>

                    {/* Loop through profiles in the current group */}
                    {groupedProfiles[group].map(profile => (
                        <div key={profile.name} className='flex flex-row justify-center items-center'>
                            {/* Render profile information */}
                            <MemberProfile src={Object.values(profile.src)[0]} alt={profile.alt} name={profile.name} role={profile.role} />
                        </div>
                    ))}
                  </div>
            
              </div>
          ))}
      </div>
    );
  }
  
};


export default Team;
