import React from 'react';
import memberProfile from './memberProfile.jpg';

//import nav bar, top city photo component with 'Meet the Team' text, and the footer at bottom

console.log(memberProfile)


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
const TwoBin = () => (
  <div className="flex justify-center">
    <div className="mr-20 mb-10" > {/* start div of first col with img and text */}
      <div className="flex flex-col items-center"> 
        <BorderedImage src={memberProfile} alt="Louis Smith, Director" />
        <div className="p-2"/>
        <Caption name="Louis Smith" role="Director" />
      </div>
    </div> 
    <div className="mb-10" > {/* start div of first col with img and text */}
      <div className="flex flex-col items-center"> 
        <BorderedImage src={memberProfile} alt="Louis Smith, Director" />
        <div className="p-2"/>
        <Caption name="Louis Smith" role="Director" />
      </div>
    </div> 
  </div>
);


// functional component for ThreeBin image row
// uses BorderedImage and Caption components
const ThreeBin = () => (
  <div className="flex justify-center">
    <div className="mr-20 mb-10" > {/* start div of first col with img and text */}
      <div className="flex flex-col items-center"> 
        <BorderedImage src={memberProfile} alt="Louis Smith, Director" />
        <div className="p-2"/>
        <Caption name="Louis Smith" role="Director" />
      </div>
    </div>
    <div className=" mr-20 mb-10" > {/* start div of first col with img and text */}
      <div className="flex flex-col items-center"> 
        <BorderedImage src={memberProfile} alt="Louis Smith, Director" />
        <div className="p-2"/>
        <Caption name="Louis Smith" role="Director" />
      </div>
    </div> 
    <div className="mb-10" > {/* start div of first col with img and text */}
      <div className="flex flex-col items-center"> 
        <BorderedImage src={memberProfile} alt="Louis Smith, Director" />
        <div className="p-2"/>
        <Caption name="Louis Smith" role="Director" />
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
        <Title title="Directors" />
        <TwoBin/>
      </div>

      <div className="p-8"/> {/* 8 padding between bins */}
      <div>
        <Title title="Designers" />
        <ThreeBin/>
      </div>

      <div className="p-8"/>
      <div>
        <Title title="Event Coordinators" />
        <ThreeBin/>
      </div>

      <div className="p-8"/>
      <div>
        <Title title="Marketing Coordinators" />
        <ThreeBin/>
      </div>
      <div className="p-8"/> {/* 14 padding for top and bottom */}

    </div>
  )
}


export default Team;
