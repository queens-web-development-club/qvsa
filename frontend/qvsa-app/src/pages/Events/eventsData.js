// eventsData.js
import newYear1 from "../../assets/newYear1.png";
import newYear2 from "../../assets/newYear2.png";
import newYear3 from "../../assets/newYear3.png";
import newYear4 from "../../assets/newYear4.png";

const images = [newYear1, newYear2, newYear3, newYear4];

const thumbnails = [newYear1, newYear2, newYear3, newYear4];

export const allEventsData = [
  {
    title: "Tết, Vietnamese Lunar New Year",
    description:
      "To celebrate Tết, or Vietnamese Lunar New Year, we hosted eventful night of traditional games and Vietnamese cultural foods",
    images: [newYear1, newYear2, newYear3, newYear4],
    currentIndex: 0,
    thumbnails: [newYear1, newYear2, newYear3, newYear4],
    year: "2024",
    month: "January",
  },
  {
    title: "Halloween Party",
    description:
      "We hosted a chilling Halloween Party Night filled with delicious treats and various game stations, such as Murder Mystery and Mafia.",
    images: [newYear1, newYear2, newYear3, newYear4],
    currentIndex: 0,
    thumbnails: [newYear1, newYear2, newYear3, newYear4],
    year: "2023",
    month: "November",
  },
  // add more events as needed
];
