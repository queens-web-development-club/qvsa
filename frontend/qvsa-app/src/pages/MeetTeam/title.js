import React from 'react';

// functional component for position title ex/ president, design director, marketing director etc.
const Title = ({ group }) => (
    <div>
      <h1 className="text-white font-bold text-3xl sm:text-4xl text-center mb-6 sm:mb-10">
        {group}
      </h1>
      <div className="p-2"/>
    </div>
);

export default Title;