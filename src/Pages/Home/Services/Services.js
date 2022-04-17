import React from "react";
import Service from "../Service/Service";
import "./Services.css";

import tire1 from '../../../images/memberships/bronze.jpg';
import tire2 from '../../../images/memberships/silver.jpg';
import tire3 from '../../../images/memberships/gold.jpg';
const memberShips = [
  {
    id: 1,
    img: tire1,
    title: "BRONZE",
    price: 49,
    date: "per month",
    advantage1:
      "Ideal for anyone looking to have a completely tailored fitness programme designed to suit individual needs and fitness goals.",
    advantage2: "FREE Initial Consultation",
    advantage3: "---",
    advantage4: "Smartphone App Access",
    advantage5: "Exercise Video Library",
    advantage6: "Tailored Workouts & Exercise Programmes",
    advantage7: "Weekly Check-ins",
    advantage8: "Macronutrient Guidance",
    advantage9: "---",
    advantage10: "---",
    advantage11: "---",
  },
  {
    id: 2,
    img: tire2,
    title: "SILVER",
    price: 110,
    date: "for 1st month then $99 per month",
    advantage1:
      "Fantastic opportunity to enhance fitness levels either within a gym or home setting.",
    advantage2: "FREE Initial Consultation",
    advantage3:
      "Includes real-time home training with trainer via video (upto 3 x 45 min sessions per week)",
    advantage4: "Smartphone App Access",
    advantage5: "Exercise Video Library",
    advantage6: "Tailored Workouts & Exercise Programmes",
    advantage7: "Fitness Goal Setting and Advice",
    advantage8: "Twice Weekly Phone or Video Check-ins",
    advantage9: "Nutritional Guidance and Advice For Meal Preparation ",
    advantage10: "---",
    advantage11: "---",
  },
  {
    id: 3,
    img: tire3,
    title: "GOLD",
    price: 169,
    date: "for 1st month then $149 per month",
    advantage1:
      "Really discover your full potential with a complete step-by-step guide helping take your fitness to the next level.",
    advantage2: "FREE Initial Consultation",
    advantage3:
      "Includes real-time home training with trainer via video (upto 5 x 45 min sessions per week)",
    advantage4: "Smartphone App Access",
    advantage5: "Exercise Video Library",
    advantage6: "Tailored Workouts & Exercise Programmes",
    advantage7: "Fitness Goal Setting and Advice",
    advantage8: "24-7 Support via Phone and Video",
    advantage9: "Roadmap to Achieve Fitness Journey",
    advantage10: "Fully Supported Nutrition Guidance Including Regular Reviews",
    advantage11: "FREE Macronutrient Guide E-Booklet Including Meal Examples",
  },
];

const Services = () => {
  return (
    <div className="services">
      {
      memberShips.map((service) => (
        <Service service={service} key={service.id}></Service>
      ))
      }
    </div>
  );
};

export default Services;
