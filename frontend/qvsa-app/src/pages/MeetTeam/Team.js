import React from 'react';
//import memberProfile from './memberProfile.jpg';

import Duy from './Duy.jpg';
import Kate from './Kate.jpg';
import Moon from './Moon.jpg';
import Irina from './Irina.jpg';
import Alana from './Alana.jpg';
import Alice from './Alice.jpg';
import Annika from './Annika.jpg';
import Jaime from './Jaime.jpg';
import Ethan from './Ethan.jpg';
import Kevin from './Kevin.jpg';
import Samantha from './Samantha.jpg'

//import nav bar, top city photo component with 'Meet the Team' text, and the footer at bottom

// functional component for bordered img
const BorderedImage = ({ src, alt }) => (
  <div className="border-8 border-solid border-yellow bg-center bg-no-repeat" style={{ width: '250px', height: 'auto' }} >
    <img  img src={src} alt={alt} />
  </div>
);


// functional component for caption
const Caption = ({ name, role }) => (
  <div>
    <div className="text-white text-center text-2xl font-bold mt-2"> 
      <p> {name} </p>
    </div>
    <div className="text-white text-center text-2xl font-regular mt-2">
      <p> {role} </p>
    </div>
  </div>  
);


// functional component for position title ex/ president, design director, marketing director etc.
const Title = ({ title }) => (
  <div>
    <h1 className="text-white font-bold text-4xl text-center mb-10">
      {title}
    </h1>
    <div className="p-2"/>
  </div>
);


// functional component for TwoBin image row
// uses BorderedImage and Caption components 
const TwoBin = ({ memberProfile1, memberProfile2, name1, name2, role1, role2 }) => (
  <div className="flex justify-center">
    <div className="mr-20 mb-10" > {/* start div of first col with img and text */}
      <div className="flex flex-col items-center"> 
        <BorderedImage src={memberProfile1} alt={`${name1}, ${role1}`} />
        <div className="p-2"/>
        <Caption name={name1} role={role1} />
      </div>
    </div> 
    <div className="mb-10" > {/* start div of second col with img and text */}
      <div className="flex flex-col items-center"> 
        <BorderedImage src={memberProfile2} alt={`${name2}, ${role2}`} />
        <div className="p-2"/>
        <Caption name={name2} role={role2} />
      </div>
    </div> 
  </div>
);


// functional component for ThreeBin image row
// uses BorderedImage and Caption components
const ThreeBin = ({ memberProfile1, memberProfile2, memberProfile3, name1, name2, name3, role1, role2, role3 }) => (
  <div className="flex justify-center">
    <div className="mr-20 mb-10" > {/* start div of first col with img and text */}
      <div className="flex flex-col items-center"> 
        <BorderedImage src={memberProfile1} alt={`${name1}, ${role1}`} />
        <div className="p-2"/>
        <Caption name={name1} role={role1} />
      </div>
    </div>
    <div className="mr-20 mb-10" > {/* start div of first col with img and text */}
      <div className="flex flex-col items-center"> 
        <BorderedImage src={memberProfile2} alt={`${name2}, ${role2}`} />
        <div className="p-2"/>
        <Caption name={name2} role={role2} />
      </div>
    </div>
    <div className="mb-10" > {/* start div of second col with img and text */}
      <div className="flex flex-col items-center"> 
        <BorderedImage src={memberProfile3} alt={`${name3}, ${role3}`} />
        <div className="p-2"/>
        <Caption name={name3} role={role3} />
      </div>
    </div> 
  </div>
);


// build UI using components
const Team = () => {
  return(
    <div className="bg-black">

      <div className="p-14"/> {/* 14 padding for top and bottom */}
      <div>
        <Title title="Team Leads" />
        <TwoBin 
          memberProfile1={Duy} 
          memberProfile2={Kate}
          name1="Duy" 
          name2="Kate" 
          role1="President" 
          role2="Senior Advisor" 
        />
      </div>

      <div className="p-8"/> {/* 8 padding between bins */}
      <div>
        <Title title="Marketing" />
        <ThreeBin 
          memberProfile1={Irina} 
          memberProfile2={Moon}
          memberProfile3={Alana}
          name1="Irina" 
          name2="Moon"
          name3="Alana"
          role1="Marketing Director" 
          role2="Social Media Coordinator" 
          role3="Graphics Coordinator"
        />
      </div>

      <div className="p-8"/>
      <div>
        <Title title="Operations" />
        <ThreeBin 
          memberProfile1={Samantha} 
          memberProfile2={Kevin}
          memberProfile3={Ethan}
          name1="Samantha" 
          name2="Kevin"
          name3="Ethan"
          role1="Finance Director" 
          role2="Internal Coordinator" 
          role3="Outreach Coordinator"
        />
      </div>

      <div className="p-8"/>
      <div>
        <Title title="Events" />
        <ThreeBin 
          memberProfile1={Alice} 
          memberProfile2={Annika}
          memberProfile3={Jaime}
          name1="Alice" 
          name2="Annika"
          name3="Jaime"
          role1="Events Director" 
          role2="Events Coordinator" 
          role3="Events Coordinator"
        />
      </div>
      <div className="p-8"/> {/* 14 padding for top and bottom */}

    </div>
  )
}


export default Team;
