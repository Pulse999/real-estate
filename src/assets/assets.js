import logo from './logo.svg'
import logo_dark from './logo_dark.svg'
import cross_icon from './cross_icon.svg'
import menu_icon from './menu_icon.svg'
import star_icon from './star_icon.svg'
import left_arrow from './left_arrow.svg'
import right_arrow from './right_arrow.svg'
import header_img from './header_img.svg'
import brand_img from './brand_img.png'

import project_img_1 from './project_img_1.jpg'
import project_img_2 from './project_img_2.jpg'
import project_img_3 from './project_img_3.jpg'
import project_img_4 from './project_img_4.jpg'
import project_img_5 from './project_img_5.jpg'
import project_img_6 from './project_img_6.jpg'

import profile_img_1 from './profile_img_1.png'
import profile_img_2 from './profile_img_2.png'
import profile_img_3 from './profile_img_3.png'

// ✅ fallback
import placeholder from './placeholder.jpg';

export const assets = {
    logo,
    logo_dark,
    cross_icon,
    menu_icon,
    star_icon,
    header_img,
    brand_img,
    project_img_1,
    project_img_2,
    project_img_3,
    project_img_4,
    left_arrow,
    right_arrow,
    placeholder, // ✅ NEW
};

export const projectsData = [
  {
    id: 1,
    title: "Skyline Haven",
    price: "$250,000",
    location: "California",
    images: [
      project_img_1,
      project_img_2,
      project_img_3,
      project_img_4,
      project_img_5,
    ],
    type: "Apartment",
    bedrooms: 3,
    baths: 2,
    area: 1800,
    description:
      "Skyline Haven offers modern luxury living with stunning views of the city. This apartment features spacious interiors, a modern kitchen, and access to community amenities such as a gym and pool.",
    locationMap:
      "https://www.google.com/maps/embed?...",
  },
  {
    id: 2,
    title: "Vista Verde",
    price: "$270,000",
    location: "San Francisco",
    images: [
      project_img_2,
      project_img_3,
      project_img_4,
      project_img_5,
      project_img_1,
    ],
    type: "Condo",
    bedrooms: 2,
    baths: 2,
    area: 1600,
    description:
      "Vista Verde blends style and comfort...",
    locationMap:
      "https://www.google.com/maps/embed?...",
  },
  {
    id: 3,
    title: "Serenity Suites",
    price: "$300,000",
    location: "Chicago",
    images: [
      project_img_3,
      project_img_4,
      project_img_5,
      project_img_6,
      project_img_1,
    ],
    type: "Townhouse",
    bedrooms: 4,
    baths: 3,
    area: 2200,
    description:
      "Serenity Suites provides a peaceful escape...",
    locationMap:
      "https://www.google.com/maps/embed?...",
  },
  {
    id: 4,
    title: "Central Square",
    price: "$320,000",
    location: "Los Angeles",
    images: [
      project_img_4,
      project_img_5,
      project_img_6,
      project_img_1,
      project_img_2,
    ],
    type: "Villa",
    bedrooms: 5,
    baths: 4,
    area: 3500,
    description:
      "Central Square is a luxurious villa...",
    locationMap:
      "https://www.google.com/maps/embed?...",
  },
  {
    id: 5,
    title: "Oceanview Residence",
    price: "$280,000",
    location: "San Francisco",
    images: [
      project_img_5,
      project_img_1,
      project_img_2,
      project_img_3,
      project_img_4,
    ],
    type: "Penthouse",
    bedrooms: 3,
    baths: 2,
    area: 2000,
    description:
      "Oceanview Residence boasts floor-to-ceiling windows...",
    locationMap:
      "https://www.google.com/maps/embed?...",
  },
  {
    id: 6,
    title: "Garden Estate",
    price: "$350,000",
    location: "Chicago",
    images: [
      project_img_6,
      project_img_2,
      project_img_3,
      project_img_4,
      project_img_5,
    ],
    type: "House",
    bedrooms: 4,
    baths: 3,
    area: 2800,
    description:
      "Garden Estate offers suburban comfort...",
    locationMap:
      "https://www.google.com/maps/embed?...",
  },
];

export const testimonialsData = [
  {
    name: "Donald Jackman",
    title: "Marketing Manager",
    image: profile_img_1,
    alt: "Portrait of Donald Jackman",
    rating: 5,
    text: "From the very first meeting...",
  },
  {
    name: "Richard Nelson",
    title: "UI/UX Designer",
    image: profile_img_2,
    alt: "Portrait of Richard Nelson",
    rating: 4,
    text: "From the very first meeting...",
  },
  {
    name: "James Washington",
    title: "Co-Founder",
    image: profile_img_3,
    alt: "Portrait of James Washington",
    rating: 5,
    text: "From the very first meeting...",
  },
];
