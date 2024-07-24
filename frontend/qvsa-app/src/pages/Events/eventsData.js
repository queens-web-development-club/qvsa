// eventsData.js
import t1 from "..//..//assets/events/t1.png";
import t2 from "..//..//assets/events/t2.png";
import t3 from "..//..//assets/events/t3.png";
import t4 from "..//..//assets/events/t4.png";

import h1 from "..//..//assets/events/h1.png";
import h2 from "..//..//assets/events/h2.png";
import h3 from "..//..//assets/events/h3.png";
import h4 from "..//..//assets/events/h4.png";

export const allEventsData = [
  {
    title: "Tết, Vietnamese Lunar New Year",
    description:
      "To celebrate Tết, or Vietnamese Lunar New Year, we hosted eventful night of traditional games and Vietnamese cultural foods",
    images: [t1, t2, t3, t4],
    currentIndex: 0,
    thumbnails: [t1, t2, t3, t4],
    year: "2024",
    month: "January",
  },
  {
    title: "Halloween Party",
    description:
      "We hosted a chilling Halloween Party Night filled with delicious treats and various game stations, such as Murder Mystery and Mafia.",
    images: [h1, h2, h3, h4],
    currentIndex: 0,
    thumbnails: [h1, h2, h3, h4],
    year: "2023",
    month: "November",
  },
  // add more events as needed
];
