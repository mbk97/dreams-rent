import { IoLogoInstagram } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import apple from "assets/svgs/applegpay.svg";
import master from "assets/svgs/master.svg";
import paypal from "assets/svgs/paypal.svg";
import visa from "assets/svgs/visa.svg";
import galleryImgOne from "assets/images/gallery-thumb-01.jpg";
import galleryImgTwo from "assets/images/gallery-thumb-02.jpg";
import galleryThree from "assets/images/gallery-thumb-03.jpg";
import galleryImgFour from "assets/images/gallery-thumb-04.jpg";
import spec1 from "assets/svgs/specification-icon-1.svg";
import spec2 from "assets/svgs/specification-icon-2.svg";
import spec3 from "assets/svgs/specification-icon-3.svg";
import spec4 from "assets/svgs/specification-icon-4.svg";
import spec5 from "assets/svgs/specification-icon-5.svg";
import spec6 from "assets/svgs/specification-icon-6.svg";
import spec7 from "assets/svgs/specification-icon-7.svg";
import spec8 from "assets/svgs/specification-icon-8.svg";
import spec9 from "assets/svgs/specification-icon-9.svg";
import spec10 from "assets/svgs/specification-icon-10.svg";
import spec11 from "assets/svgs/specification-icon-11.svg";
import spec12 from "assets/svgs/specification-icon-12.svg";
import carO4 from "assets/images/car-04.jpg";
import car01 from "assets/images/car-01.jpg";
import car03 from "assets/images/car-03.jpg";
import car05 from "assets/images/car-05.jpg";
import carO6 from "assets/images/car-06.jpg";
import user from "assets/images/user4.jpg";
import userTwo from "assets/images/userTwo.jpg";

export const navData = [
  {
    id: 1,
    title: "Home",
    options: [
      {
        optionId: 1,
        text: "Home 1",
      },
      {
        optionId: 2,
        text: "Home 2",
      },
      {
        optionId: 3,
        text: "Home 3",
      },
    ],
  },
  {
    id: 2,
    title: "Listings",
    options: [
      {
        optionId: 1,
        text: "Listing Grid",
      },
      {
        optionId: 2,
        text: "Listing List",
      },
      {
        optionId: 3,
        text: "Listing with Map",
      },
      {
        optionId: 4,
        text: "Listing with details",
      },
    ],
  },
  {
    id: 3,
    title: "User",
    options: [
      {
        optionId: 1,
        text: "Dashboard",
      },
      {
        optionId: 2,
        text: "My Bookings",
      },
      {
        optionId: 3,
        text: "Reviews",
      },
      {
        optionId: 4,
        text: "Wishlist",
      },
      {
        optionId: 5,
        text: "Messages",
      },
      {
        optionId: 6,
        text: "My Wallet",
      },
      {
        optionId: 7,
        text: "Payments",
      },
      {
        optionId: 8,
        text: "Settings",
      },
    ],
  },
  {
    id: 4,
    title: "Pages",
    options: [
      {
        optionId: 1,
        text: "About Us",
      },
      {
        optionId: 2,
        text: "Authentication",
      },
      {
        optionId: 3,
        text: "Booking",
      },
      {
        optionId: 4,
        text: "Error Page",
      },
      {
        optionId: 5,
        text: "Pricing",
      },
      {
        optionId: 6,
        text: "FAQ",
      },
      {
        optionId: 7,
        text: "Gallery",
      },
      {
        optionId: 8,
        text: "Our Team",
      },
      {
        optionId: 9,
        text: "Testimonials",
      },
      {
        optionId: 10,
        text: "Terms & Conditions",
      },
      {
        optionId: 11,
        text: "Privacy Policy",
      },
      {
        optionId: 12,
        text: "Maintenance",
      },
    ],
  },
  {
    id: 5,
    title: "Blogs",
    options: [
      {
        optionId: 1,
        text: "Blog Grid",
      },
      {
        optionId: 2,
        text: "Blog List",
      },
      {
        optionId: 3,
        text: "Blog details",
      },
    ],
  },
];

export const payData = [
  {
    id: 1,
    img: paypal,
  },
  {
    id: 2,
    img: visa,
  },
  {
    id: 3,
    img: master,
  },
  {
    id: 4,
    img: apple,
  },
];

export const footerData = [
  {
    title: "About Company",
    links: [
      "Our Company",
      "Shop Toyota",
      "Dreamsrentals USA",
      "Dreamsrentals Worldwide",
      "Dreamsrental Category",
    ],
  },
  {
    title: "Vehicles Type",
    links: ["All Vehicles", "SUVs", "Trucks", "Cars", "Crossovers"],
  },
  {
    title: "Quick links",
    links: [
      "My Account",
      "Champaigns",
      "Dreamsrental Dealers",
      "Deals and Incentive",
      "Financial Services",
    ],
  },
];

export const social_media_icons = [
  {
    id: 1,
    Icon: FaFacebook,
    bg: "#3080f8",
  },
  {
    id: 2,
    Icon: IoLogoInstagram,
    bg: "#ff2d20",
  },
  {
    id: 3,
    Icon: FaBehance,
    bg: "#0066ff",
  },
  {
    id: 4,
    Icon: FaTwitter,
    bg: "#35b6ff",
  },
  {
    id: 5,
    Icon: FaLinkedin,
    bg: "#0066ff",
  },
];

export const faqs = [
  {
    question: "How old do I need to be to rent a car?",
    answer:
      "We offer a diverse fleet of vehicles to suit every need, including compact cars, sedans, SUVs and luxury vehicles. You can browse our selection online or contact us for assistance in choosing the right vehicle for you",
  },
  {
    question: "What documents do I need to rent a car?",
    answer:
      "We offer a diverse fleet of vehicles to suit every need, including compact cars, sedans, SUVs and luxury vehicles. You can browse our selection online or contact us for assistance in choosing the right vehicle for you",
  },
  {
    question: "What types of vehicles are available for rent?",
    answer:
      "We offer a diverse fleet of vehicles to suit every need, including compact cars, sedans, SUVs and luxury vehicles. You can browse our selection online or contact us for assistance in choosing the right vehicle for you",
  },
  {
    question: "Can I rent a car with a debit card?",
    answer:
      "We offer a diverse fleet of vehicles to suit every need, including compact cars, sedans, SUVs and luxury vehicles. You can browse our selection online or contact us for assistance in choosing the right vehicle for you",
  },
];

export const galleryData = [
  {
    id: 1,
    image: galleryImgOne,
    bigImage: "",
  },
  {
    id: 2,
    image: galleryImgTwo,
    bigImage: "",
  },
  {
    id: 3,
    image: galleryThree,
    bigImage: "",
  },
  {
    id: 4,
    image: galleryImgFour,
    bigImage: "",
  },
];

export const carDetails = [
  { attribute: "Body", value: "Sedan", image: spec1 },
  { attribute: "Make", value: "Nissan", image: spec2 },
  { attribute: "Transmission", value: "Automatic", image: spec3 },
  { attribute: "Fuel Type", value: "Diesel", image: spec4 },
  { attribute: "Mileage", value: "16 Km", image: spec5 },
  { attribute: "Drivetrain", value: "Front Wheel", image: spec6 },
  { attribute: "Year", value: "2018", image: spec7 },
  { attribute: "AC", value: "Air Condition", image: spec8 },
  { attribute: "VIN", value: "45456444", image: spec9 },
  { attribute: "Door", value: "4 Doors", image: spec10 },
  { attribute: "Brake", value: "ABS", image: spec11 },
  { attribute: "Engine (Hp)", value: "3,000", image: spec12 },
];

export const vehicles = [
  {
    id: 1,
    name: "Ferrari 458 MM Speciale",
    imgSrc: carO4,
    featured: true,
    subName: "Ferrari",
    user: user,
    rating: 5.0,
    reviews: 160,
    distance: "3.2m",
    features: {
      gearbox: "Auto",
      speed: "10 KM",
      fuel: "Petrol",
      steering: "Power",
      modelYear: 2018,
      capacity: "4 Persons",
    },
    location: "New York, USA",
    pricePerDay: 45,
  },
  {
    id: 2,
    name: "Toyota Camry SE 350",
    subName: "",
    imgSrc: car01,
    featured: true,
    user: user,
    rating: 4.8,
    reviews: 120,
    distance: "2.5m",
    features: {
      gearbox: "Auto",
      speed: "15 KM",
      fuel: "Petrol",
      steering: "Power",
      modelYear: 2019,
      capacity: "2 Persons",
    },
    location: "Los Angeles, USA",
    pricePerDay: 55,
  },
  {
    id: 3,
    name: "Audi A3 2019 new",
    imgSrc: car03,
    user: userTwo,
    featured: false,
    subName: "Audi",
    rating: 4.9,
    reviews: 180,
    distance: "1.8m",
    features: {
      gearbox: "Auto",
      speed: "20 KM",
      fuel: "Petrol",
      steering: "Power",
      modelYear: 2020,
      capacity: "2 Persons",
    },
    location: "Miami, USA",
    pricePerDay: 60,
  },
  {
    id: 4,
    name: "Acura Sport Version",
    imgSrc: carO6,
    user: userTwo,
    featured: false,
    rating: 4.7,
    reviews: 150,
    distance: "4.0m",
    features: {
      gearbox: "Manual",
      speed: "12 KM",
      fuel: "Petrol",
      steering: "Power",
      modelYear: 2017,
      capacity: "2 Persons",
    },
    location: "Houston, USA",
    pricePerDay: 50,
  },
  {
    id: 5,
    name: "2018 Chevrolet Camaro",
    subName: "Chevrolet",
    imgSrc: car05,
    topRated: true,
    user: userTwo,
    rating: 4.6,
    reviews: 140,
    distance: "2.0m",
    features: {
      gearbox: "Auto",
      speed: "25 KM",
      fuel: "Petrol",
      steering: "Power",
      modelYear: 2021,
      capacity: "2 Persons",
    },
    location: "San Francisco, USA",
    pricePerDay: 70,
  },
];
