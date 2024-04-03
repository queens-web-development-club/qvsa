// EventList.js
import React from 'react';
import { allEventsData } from './eventsData';
import EventCard from './EventCard';
import AlternateEventCard from './AlternateEventCard';

const Events = () => {
  return (
    <div>
      <div className="flex flex-col bg-cover bg-center bg-citySky bg-opacity-50 max-h-screen w-full font-bold font-Inter flex items-center">
        <h1 className="text-[#FFB90B] text-6xl text-center pt-20 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"> Events</h1>
        <p className="text-3xl text-center m-2 pb-10 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"> 2024 - 2025 </p>
      </div>

      <div className="flex w-full font-bold font-Inter justify-center">
        <p className="text-[#F2F2F2] text-3xl text-center p-16"> Past Events </p>
      </div>
      {allEventsData.map((event, index) => {
        if (index % 2 === 0) {
          return <EventCard key={index} data={event} />;
        } else {
          return <AlternateEventCard key={index} data={event} />;
        }
      })}
    </div>
  );
};

export default Events;
