import React from 'react';

const MemberProfile = ({ src, alt, name, role }) => (
    <div className="w-full sm:w-auto">
        <div className="border-8 border-solid border-yellow bg-center bg-no-repeat" style={{ width: '250px', height: 'auto' }} >
            <img  img src={src} alt={alt} className="w-full h-auto" />
        </div>
        <div className="text-white text-center text-xl sm:text-2xl font-bold mt-2"> 
            <p> {name} </p>
        </div>
        <div className="text-white text-center text-lg sm:text-2xl font-normal mt-2">
            <p> {role} </p>
        </div>
    </div>
);

export default MemberProfile;