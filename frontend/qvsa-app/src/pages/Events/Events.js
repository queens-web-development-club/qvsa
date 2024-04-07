import React from 'react';
import { allEventsData } from './eventsData';
import EventCard from './EventCard';
import AlternateEventCard from './AlternateEventCard';
import Header from '../../components/Header.js'

const Events = () => {
  return (
    <div>

      <Header title='Events' year='2024-2025' />

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
