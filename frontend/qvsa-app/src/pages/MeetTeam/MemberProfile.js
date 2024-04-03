import React from 'react';

const MemberProfile = ({ src, alt, name, role }) => (
    <div>
        <div className="border-8 border-solid border-yellow bg-center bg-no-repeat" style={{ width: '250px', height: 'auto' }} >
            <img  img src={src} alt={alt} />
        </div>
        <div className="text-white text-center text-2xl font-bold mt-2"> 
            <p> {name} </p>
        </div>
        <div className="text-white text-center text-2xl font-regular mt-2">
            <p> {role} </p>
        </div>
    </div>
);

export default MemberProfile;s