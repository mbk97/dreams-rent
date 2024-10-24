import { IoLogoInstagram } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import apple from "assets/svgs/applegpay.svg";
import master from "assets/svgs/master.svg";
import paypal from "assets/svgs/paypal.svg";
import visa from "assets/svgs/visa.svg";
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
