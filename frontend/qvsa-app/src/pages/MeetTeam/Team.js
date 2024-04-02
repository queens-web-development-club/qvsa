import React from 'react';
import teamComponents from "./teamComponents";

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




// build UI using components, everything hard coded asfrn due to backend being incomplete
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
